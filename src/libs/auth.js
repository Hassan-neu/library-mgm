import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prismaClient";
export const AuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/",
    },
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.firtName = token.firstName;
                session.user.lastName = token.lastName;
                session.user.level = token.level;
                session.user.libId = token.libId;
                session.user.department = token.department;
                session.user.faculty = token.faculty;
                session.user.picture = token.picture;
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    libId: token.libId,
                },
            });
            if (!dbUser) {
                token.user !== user.id;
                return token;
            }

            return {
                id: token.id,
                firtName: token.firstName,
                lastName: token.lastName,
                level: token.level,
                libId: token.libId,
                department: token.department,
                faculty: token.faculty,
                picture: token.image,
                role: token.role,
            };
        },
    },
    providers: [
        CredentialsProvider({
            async authorize(req, credentials) {
                const { loginId, password } = credentials;
                const user = await prisma.user.findFirst({
                    where: {
                        libId: loginId,
                    },
                });
                if (!checkUser) throw new Error("User no found");
                const checkPassword = user.lastName === password;
                if (!checkPassword || !user)
                    throw new Error("Password or Login ID incorrect");
                return user;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
