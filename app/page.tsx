"use client";

import { useSession } from "next-auth/react";
import { Footer } from "./components/footer";
import { HomePage } from "./components/body";
import { HomeHeader } from "./components/header";

export default function Home() {
  const { data, status, update } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeHeader />
      <HomePage />
      <Footer />
    </main>
  );
}
