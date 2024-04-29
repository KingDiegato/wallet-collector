import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1>
          Hellow Guys, Here you can submit your wallet if you are ellegible!
        </h1>
        <h2>You may signin with Discord</h2>
      </section>

      <section className="flex flex-col items-center justify-center gap-4">
        <button className="rounded-lg bg-blue-500 px-6 py-4 ">
          <Link className="text-white text-2xl" href="#">
            Sign in with Discord
          </Link>
        </button>
      </section>

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
      </footer>
    </main>
  );
}
