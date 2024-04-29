"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";

export function Footer() {
  const { data, status } = useSession();

  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{" "}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          unoptimized
          width={100}
          height={24}
          priority
        />
      </a>
      {/* To see the session in the footer while development */}
      {process.env.NODE_ENV === "development" ? (
        <div className="text-white bg-black bg-opacity-60 p-10 rounded-3xl m-10 fixed bottom-0 left-0 text-xl">
          <pre>{JSON.stringify({ data, status }, null, 2)}</pre>
        </div>
      ) : null}
    </footer>
  );
}
