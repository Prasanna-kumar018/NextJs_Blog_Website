import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
const handlers = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
export { handlers as GET, handlers as POST };
