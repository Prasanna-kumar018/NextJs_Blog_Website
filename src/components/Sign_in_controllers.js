import { useSession, signIn, signOut } from "next-auth/react";

async function GithubSignIn() {

  try {
    await signIn("github", { redirect: false });
  } catch (err) {
    console.log("github error" + err.message);
  }
}

export { GithubSignIn };
