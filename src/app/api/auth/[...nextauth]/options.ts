// src\app\api\auth\[...nextauth]\options.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
  providers: [
    // Google OAuth Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    // Custom Email/Password Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Email and Password are required!");
        }

        // Fetch user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.username },
        });

        if (!user) {
          throw new Error("No user found with this email!");
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword || "" // Ensure this field is hashed during registration
        );

        if (!isPasswordValid) {
          throw new Error("Invalid email or password!");
        }

        // Return essential user data for the session
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     if (account?.provider === "google") {
  //       const existingUser = await prisma.user.findUnique({
  //         where: { email: user.email },
  //       });

  //       if (!existingUser) {
  //         // Create user if not found
  //         await prisma.user.create({
  //           data: {
  //             name: user.name || "",
  //             email: user.email || "",
  //             image: user.image || "",
  //           },
  //         });
  //       } else {
  //         // Optional: Update user data if necessary
  //         await prisma.user.update({
  //           where: { email: user.email },
  //           data: {
  //             name: user.name || existingUser.name,
  //             image: user.image || existingUser.image,
  //           },
  //         });
  //       }
  //     }
  //     return true;
  //   },

  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },

  //   async session({ session, token }: any) {
  //     if (token) {
  //       session.user.id = token.id;
  //       session.token = token; // Include the entire token in the session
  //     }
  //     return session;
  //   },
  // },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.token = token; // Decoded payload
        session.jwt = JSON.stringify(token); // Include the encoded JWT as a string
      }
      return session;
    },
  },

  events: {
    async createUser({ user }) {
      console.log("New user created:", user);
    },
  },

  logger: {
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug,
  },
};
