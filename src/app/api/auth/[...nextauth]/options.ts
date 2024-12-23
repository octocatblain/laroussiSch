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

        const user = await prisma.user.findUnique({
          where: { email: credentials.username },
        });

        if (!user) {
          throw new Error("No user found with this email!");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword || ""
        );

        if (!isPasswordValid) {
          throw new Error("Invalid email or password!");
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (account.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // Create new user if one does not exist
          const newUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: profile?.picture || "",
              username: user.email.split("@")[0],
            },
          });
          console.log("New user created with Google login:", newUser);
          user = { ...user, id: newUser.id, image: newUser.image }; // Add the new user's ID and image to the user object
        } else {
          console.log("User already exists with email:", user.email);
          user = { ...user, id: existingUser.id, image: existingUser.image };
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.token = token;
      }
      return session;
    },

    async redirect({ url, baseUrl }: any) {
      // Redirect to dashboard after successful sign-in
      if (url === baseUrl) {
        return "/";
      }
      return url;
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
