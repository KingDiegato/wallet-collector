import { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      name: "Discord",
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.avatar,
        };
      },
      authorization: {
        params: {
          scope: "identify email connections guilds guilds.members.read",
          userinfo: "true",
        },
      },
      userinfo: "https://discord.com/api/users/@me",
      accessTokenUrl: "https://discord.com/api/oauth2/token",
      token: "https://discord.com/api/oauth2/token",
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
