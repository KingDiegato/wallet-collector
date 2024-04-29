import NextAuth, { type NextAuthOptions } from "next-auth";
import { AuthOptions } from "@/app/lib/authOptions";

const handler = NextAuth(AuthOptions); // {handler as GET, handler as POST}

export { handler as GET, handler as POST };
