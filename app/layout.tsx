import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

const projectName = "Flushies";

export const metadata: Metadata = {
  title: `${projectName} - Wallet Submitter`,
  description:
    "Wallet submiter, submit your solana wallet here, check if you can submit it by login with discord!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider pageProps={{ session }}>{children}</Provider>
      </body>
    </html>
  );
}
