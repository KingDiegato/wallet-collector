import { signIn } from "next-auth/react";

export function MainSection() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <h1>
          Hellow Guys, Here you can submit your wallet if you are ellegible!
        </h1>
        <h2>You may signin with Discord</h2>
      </section>

      <div className="flex flex-col items-center justify-center gap-4">
        <button
          className="rounded-lg bg-blue-500 px-6 py-4"
          onClick={() =>
            signIn("discord", {
              callbackUrl: "http://localhost:3000/api/auth/signin/discord",
            })
          }
        >
          <span className="text-white text-2xl">Sign in with Discord</span>
        </button>
      </div>
    </>
  );
}
