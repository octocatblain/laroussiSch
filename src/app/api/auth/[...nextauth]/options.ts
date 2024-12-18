import type { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
// import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Your Username" },
                password: { label: "Password", type: "password", placeholder: "Your Password" }
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: 1, username: 'admin', password: 'admin' }

                if (credentials?.username === user?.username && credentials?.password === user?.password) {
                    return user;
                } else {
                return null; // If you return null or false then the credentials will be rejected
                }
            }
        }),
        // ...add more providers here
    ],
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
   
    secret: process.env.NEXTAUTH_SECRET, // Add a secret to encrypt cookies
    logger: {
        error: console.error,
        warn: console.warn,
        info: console.info,
        debug: console.debug
    }

};