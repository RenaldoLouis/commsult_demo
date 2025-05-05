import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authHandler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const { email, password } = credentials;

                    if (email === "demo@example.com" && password === "password") {
                        return { id: 1, name: "Demo User", email: "demo@example.com" };
                    }
                }
                catch (e) {
                    throw new Error(e);
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt",
        maxAge: 5,
        updateAge: 0,
    },
    jwt: {
        maxAge: 300,
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { authHandler as GET, authHandler as POST };

