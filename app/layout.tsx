import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const projectName = "Flushies";

export const metadata: Metadata = {
  title: `${projectName} - Wallet Submitter`,
  description:
    "Wallet submiter, submit your solana wallet here, check if you can submit it by login with discord!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
