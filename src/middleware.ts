// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Protect specific paths
  pages: {
    signIn: "/auth/login", // Redirect here if not authenticated
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/api/auth/:path*"], // Include NextAuth routes
};
