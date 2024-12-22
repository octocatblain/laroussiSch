// src/lib/auth.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
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
        username: { label: "Email", type: "text", placeholder: "Your Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.warn(
            "Authorization failed: Email and Password are required!"
          );
          throw new Error("Email and Password are required!");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.username },
        });

        if (!user) {
          console.warn(
            `Authorization failed: No user found with email ${credentials.username}`
          );
          throw new Error("No user found with this email!");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword || ""
        );

        if (!isPasswordValid) {
          console.warn(
            `Authorization failed: Invalid password for email ${credentials.username}`
          );
          throw new Error("Invalid email or password!");
        }

        console.info(`User authenticated successfully: ${user.email}`);
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      console.info("Sign-in attempt:", { user, account, profile });
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name || "",
              email: user.email || "",
              image: user.image || "",
            },
          });
          console.info(`New user created via Google: ${user.email}`);
        } else {
          await prisma.user.update({
            where: { email: user.email },
            data: {
              name: user.name || existingUser.name,
              image: user.image || existingUser.image,
            },
          });
          console.info(`User updated via Google: ${user.email}`);
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        console.info(`JWT token created for user: ${user.id}`);
      }
      return token;
    },

    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        console.info(`Session updated for user: ${session.user.id}`);
      }
      return session;
    },
  },

  events: {
    async createUser({ user }) {
      console.info("New user created:", user);
    },
  },

  logger: {
    error: (message) => {
      console.error("Error:", message);
    },
    warn: (message) => {
      console.warn("Warning:", message);
    },
    info: (message: any) => {
      console.info("Info:", message);
    },
    debug: (message) => {
      console.debug("Debug:", message);
    },
  },
};
