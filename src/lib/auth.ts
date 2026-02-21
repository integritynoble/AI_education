import { apiPost } from "./api";

const ACCESS_TOKEN_KEY = "edu_access_token";
const USER_PROFILE_KEY = "edu_user_profile";

const SSO_URL =
  "https://comparegpt.io/sso-redirect?redirect=https://edu.platformai.org/sso/callback";
const LOGOUT_REDIRECT = "https://edu.platformai.org";

export interface UserInfo {
  user_id: number;
  user_name: string;
  role: string;
}

export interface UserBalance {
  credit: number;
  token: number;
}

export interface User {
  user_info: UserInfo;
  balance: UserBalance;
  api_key?: string;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
  requireReauth?: boolean;
}

export function initiateLogin(): void {
  window.location.href = SSO_URL;
}

export async function handleOAuthCallback(ssoToken: string): Promise<AuthResult> {
  try {
    const response = await apiPost<{
      success: boolean;
      access_token: string;
      user: User;
    }>("/user/validate", { sso_token: ssoToken });

    if (!response.success || !response.access_token || !response.user) {
      throw new Error("SSO token exchange failed");
    }

    setAccessToken(response.access_token);
    setCachedUserProfile(response.user);

    return { success: true, user: response.user };
  } catch (error: unknown) {
    const err = error as { status?: number; detail?: { require_reauth?: boolean; message?: string } };
    if (err.status === 401 && err.detail?.require_reauth) {
      return { success: false, error: err.detail.message || "Auth failed", requireReauth: true };
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Authentication failed",
    };
  }
}

export async function validateToken(): Promise<{ valid: boolean; user?: User }> {
  const token = getAccessToken();
  if (!token) return { valid: false };

  try {
    const response = await apiPost<{
      success: boolean;
      valid: boolean;
      user: User;
    }>("/user/validate", {});

    if (response.success && response.valid) {
      setCachedUserProfile(response.user);
      return { valid: true, user: response.user };
    }
    return { valid: false };
  } catch {
    return { valid: false };
  }
}

export async function logout(): Promise<void> {
  const token = getAccessToken();
  if (token) {
    try {
      await apiPost("/user/logout", {});
    } catch {
      // ignore
    }
  }
  clearAccessToken();
  clearCachedUserProfile();
}

export function setAccessToken(token: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function clearAccessToken(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return !!getAccessToken();
}

export function setCachedUserProfile(user: User): void {
  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(user));
}

export function getCachedUserProfile(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_PROFILE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearCachedUserProfile(): void {
  localStorage.removeItem(USER_PROFILE_KEY);
}

export const LOGOUT_URL = LOGOUT_REDIRECT;
