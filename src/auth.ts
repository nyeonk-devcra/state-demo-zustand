import Credentials from "next-auth/providers/credentials";
import NextAuth, { CredentialsSignin, User } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { getUser } from "@/models/user";
import { saltAndHashPassword } from "@/utils/auth";
import { defaultAuth } from "@/lib/auth";

declare module "next-auth" {
  interface UserAuth extends User {
    role: "admin" | "user";
    name: string | null;
  }
}

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,
  ...defaultAuth,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/signin",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" },
      },

      async authorize(credentials) {
        console.log("authorize", credentials);
        if (!credentials?.email || !credentials?.password) {
          throw new CredentialsSignin("Invalid credentials");
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        try {
          const user = await getUser({
            where: {
              email,
            },
          });

          if (user && (await saltAndHashPassword(password, user.password))) {
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              role: user.role as "admin" | "user",
            };
          }

          throw new CredentialsSignin("Invalid credentials");
        } catch (error) {
          console.error(error);
          if (error instanceof CredentialsSignin) {
            throw error;
          }

          throw new Error("Something went wrong");
        }
      },
    }),
  ],
});
