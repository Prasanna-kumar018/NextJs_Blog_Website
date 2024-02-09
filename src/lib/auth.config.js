export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      let user = auth?.user;
      const isAdminPage = request.nextUrl?.pathname.startsWith("/admin");
      const isBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isAdminPage && !user?.isAdmin) {
        return false;
      }

      if (isBlogPage && !user) {
        return false;
      }

      if (isLoginPage && user) {
        return Response.redirect(new URL("/",request.nextUrl));
      }
    },
  },
};
