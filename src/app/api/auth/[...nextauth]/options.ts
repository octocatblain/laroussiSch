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

  callbacks: {
    // Add Google login handler
    async signIn({ user, account, profile }: any) {
      if (account.provider === "google") {
        // Check if user already exists in the database
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // If the user doesn't exist, create them
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: profile?.picture || "",
              username: user.email.split("@")[0], // Set username based on email (or other logic)
              // Add any additional fields as necessary
            },
          });
          console.log("New user created with Google login:", user);
        } else {
          // User already exists, log or take any other necessary action
          console.log("User already exists with email:", user.email);
        }
      }
      return true;
    },

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
    // This can be used to log any event during the lifecycle
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
