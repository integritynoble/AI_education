"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SSOCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const auth = useAuth();
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(true);
  const processed = useRef(false);

  useEffect(() => {
    if (processed.current) return;
    processed.current = true;

    const safetyTimeout = setTimeout(() => {
      if (isProcessing) {
        setError("Authentication timed out. Please check your network connection.");
        setIsProcessing(false);
      }
    }, 15000);

    const token = searchParams.get("token") || searchParams.get("access_token");
    const errorParam = searchParams.get("error");

    if (errorParam) {
      clearTimeout(safetyTimeout);
      setError(searchParams.get("error_description") || "Authentication service returned an error.");
      setIsProcessing(false);
      return;
    }

    if (!token) {
      clearTimeout(safetyTimeout);
      setError("No authentication token received.");
      setIsProcessing(false);
      return;
    }

    auth.handleOAuthCallback(token).then((result) => {
      clearTimeout(safetyTimeout);
      if (result.success) {
        router.push("/");
      } else {
        setError(result.error || "Login failed.");
        setIsProcessing(false);
      }
    });

    return () => clearTimeout(safetyTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-sm p-8 bg-white rounded-2xl shadow-lg border border-border">
        {isProcessing ? (
          <>
            <div className="w-10 h-10 border-4 border-border border-t-accent rounded-full animate-spin mx-auto mb-6" />
            <h2 className="font-sans font-bold text-heading text-xl mb-2">Authenticating...</h2>
            <p className="font-sans text-sm text-muted">Please wait while we log you in.</p>
          </>
        ) : error ? (
          <>
            <div className="text-4xl mb-4">&#9888;&#65039;</div>
            <h2 className="font-sans font-bold text-heading text-xl mb-2">Authentication Failed</h2>
            <p className="font-sans text-sm text-muted mb-6">{error}</p>
            <button
              onClick={() => auth.login()}
              className="font-sans px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Try Again
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
