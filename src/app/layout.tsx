import "@/styles/global.css";

import type { Metadata } from "next";
import React, { Suspense } from "react";


import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import Header from "@/components/Header/Header";
import Footer from "@/shared/Footer/Footer";

// import { SessionProvider } from "next-auth/react";
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
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body>
        <Header session={session} />

        <SessionProvider session={session}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </SessionProvider>

        <Footer />
      </body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the migrate function in src/libs/DB.ts
// Unfortunately, this also means it will disable the automatic migration of the database
// And you will have to manually migrate it with drizzle-kit push
// export const runtime = 'edge';