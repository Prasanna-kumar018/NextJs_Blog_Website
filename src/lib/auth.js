import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectDb from "./Connection";
import { Users_Model } from "./Schema/User_Schema";
import bcrypt from "bcryptjs";
import { authConfig } from "@/lib/auth.config";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        await ConnectDb();
        try {
          let user = await Users_Model.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("Email Not found");
          }
          let isCorrect = bcrypt.compareSync(
            credentials.password,
            user.password
          );
          if (!isCorrect) {
            throw new Error("Incorrect Password");
          }
          console.log(user);
          return user;
        } catch (err) {
          console.log(err.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "git github") {
        let isUser = await Users_Model.findOne({ email: profile.email });
        let hash = await bcrypt.hash(
          profile.login + Math.random().toString(36).slice(-8),
          10
        );

        if (!isUser) {
          let newuser = await Users_Model.create({
            username: profile.login,
            password: hash,
            email: profile.email,
            img: profile.avatar_url,
          });
        }
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    ...authConfig.callbacks,
  },
});
