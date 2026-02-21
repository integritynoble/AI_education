"use client";
import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import {
  User,
  AuthResult,
  isAuthenticated as checkAuth,
  validateToken,
  handleOAuthCallback as exchangeToken,
  initiateLogin,
  logout as doLogout,
  getCachedUserProfile,
  clearAccessToken,
  clearCachedUserProfile,
  LOGOUT_URL,
} from "@/lib/auth";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: () => void;
  logout: () => Promise<void>;
  handleOAuthCallback: (ssoToken: string) => Promise<AuthResult>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  login: () => {},
  logout: async () => {},
  handleOAuthCallback: async () => ({ success: false }),
  clearError: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize: check token on mount
  useEffect(() => {
    async function init() {
      setIsLoading(true);
      try {
        if (!checkAuth()) {
          setUser(null);
          setIsAuth(false);
          return;
        }

        const result = await validateToken();
        if (result.valid && result.user) {
          setUser(result.user);
          setIsAuth(true);
        } else {
          clearAccessToken();
          clearCachedUserProfile();
          setUser(null);
          setIsAuth(false);
        }
      } catch {
        clearAccessToken();
        clearCachedUserProfile();
        setUser(null);
        setIsAuth(false);
      } finally {
        setIsLoading(false);
      }
    }

    // Try cached profile first for instant UI
    const cached = getCachedUserProfile();
    if (cached && checkAuth()) {
      setUser(cached);
      setIsAuth(true);
    }

    init();
  }, []);

  const login = useCallback(() => {
    initiateLogin();
  }, []);

  const logout = useCallback(async () => {
    await doLogout();
    setUser(null);
    setIsAuth(false);
    window.location.href = LOGOUT_URL;
  }, []);

  const handleOAuthCallback = useCallback(async (ssoToken: string): Promise<AuthResult> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await exchangeToken(ssoToken);
      if (result.success && result.user) {
        setUser(result.user);
        setIsAuth(true);
        return { success: true };
      }

      if (result.requireReauth) {
        setError(result.error || "Login expired, please login again");
        setTimeout(() => initiateLogin(), 2000);
        return { success: false, error: result.error, requireReauth: true };
      }

      setError(result.error || "OAuth callback failed");
      return { success: false, error: result.error };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(msg);
      return { success: false, error: msg };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: isAuth,
        isLoading,
        error,
        login,
        logout,
        handleOAuthCallback,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
