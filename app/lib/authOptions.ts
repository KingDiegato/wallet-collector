import { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
      authorization: {
        params: {
          scope: "identify email connections guilds guilds.members.read",
        },
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, account, profile, session, trigger }) {
      return token;
    },
    async session({ session, token, user, trigger }) {
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};
