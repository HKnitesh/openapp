
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Username:',
                    type: "text",
                    placeholder: 'your-cool-username'
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: 'your-cool-password'
                }
            },
            async authorize(credentials) {
                const user = { id: '125', name: "Krishna", password: "haribol" }

                if (credentials?.username === user.name && Credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
secret: process.env.NEXTAUTH_SECRET,


})


export { handler as GET, handler as POST }
export const dynamic = "force-static";



// using lib folder

// import { authOptions } from "@/lib/auth";
// import NextAuth from "next-auth";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
// export const dynamic = "force-static";

// end of lib folder

// import { NextAuth } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// const options = {
//     providers: [
//         GoogleProvider({
//             clientId: '781902831168-7cbscmjv8c4imfpf2t1soe86tiiv984j.apps.googleusercontent.com',
//             clientSecret: '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',
//         }),
//     ],
// };

// export default (req, res) => NextAuth(req, res, options);






