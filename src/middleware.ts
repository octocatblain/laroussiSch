import { withClerkMiddleware } from "@clerk/nextjs";

export default withClerkMiddleware();

export const config = {
  matcher: [
    // Apply middleware to all routes except for Next.js internals and static files
    // "/((?!_next/static|_next/image|favicon.ico|.*\\.(html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always apply middleware to API and tRPC routes
    // "/(api|trpc)(.*)",
  ],
};
