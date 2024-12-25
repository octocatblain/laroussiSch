import "@/styles/global.css";

import type { Metadata } from "next";
import React, { Suspense } from "react";

import { options } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Header from "@/components/Header/Header";
import Footer from "@/shared/Footer/Footer";
import { CartProvider } from "@/contexts/cartContext";
import { SessionProvider } from "@/contexts/SessionContext";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "LaRoucci Mining SCH",
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch session data from next-auth
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SessionProvider session={session}>
            {/* Header has access to session */}
            <Header session={session} />
            {/* Main content wrapped with Suspense for lazy-loading */}
            <main>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            {/* Footer at the bottom */}
            <Footer />
          </SessionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
