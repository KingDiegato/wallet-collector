"use client";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
  pageProps: {
    session: any;
  };
}

export function Provider({
  children,
  pageProps: { session, ...pageProps },
}: ProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
