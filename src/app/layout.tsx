import '@/styles/global.css';

import type { Metadata } from "next";
import React, { Suspense } from "react";

import { options } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Header from "@/components/Header/Header";
import Footer from "@/shared/Footer/Footer";

// Import your SessionProvider from your context
import { SessionProvider } from "@/contexts/SessionContext";
import Loading from "./loading";

export const metadata: Metadata = {
  title: 'LaRoucci Mining SCH',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
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

  console.log(session); // You can keep or remove this depending on your debug process

  return (
      <html lang="en">
        <body>
          {/* Pass session to Header component */}
          <Header session={session} />

          {/* Wrap children with SessionProvider */}
          <SessionProvider session={session}>
            {/* Suspense for lazy loading children with a loading fallback */}
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </SessionProvider>

          {/* Footer remains the same */}
          <Footer />
        </body>
      </html>
  );
}

// Enable edge runtime, but you are required to disable the migrate function in src/libs/DB.ts
// export const runtime = 'edge';
