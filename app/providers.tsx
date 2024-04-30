"use client";
import { SessionProvider } from "next-auth/react";
import { WalletProviderComponent } from "./components/solana/provider";

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
  return (
    <SessionProvider session={session}>
      <WalletProviderComponent>{children}</WalletProviderComponent>
    </SessionProvider>
  );
}
