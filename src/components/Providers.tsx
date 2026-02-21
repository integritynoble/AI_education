"use client";
import { AuthProvider } from "@/context/AuthContext";
import { Suspense } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <AuthProvider>{children}</AuthProvider>
    </Suspense>
  );
}
