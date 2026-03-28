import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Chronova Elite Account",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "client@chronova.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock authentication for the demo
        if (credentials?.email === "client@chronova.com" && credentials?.password === "luxury123") {
          return {
            id: "vip-88291",
            name: "Julian Vance",
            email: "client@chronova.com",
            image: "https://api.dicebear.com/7.x/notionists/svg?seed=Julian&backgroundColor=f1f5f9"
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "chronova-super-secret-key-2026",
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
