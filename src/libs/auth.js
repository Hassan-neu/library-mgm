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
        error: "/",
    },
    providers: [
        CredentialsProvider({
            async authorize(req, credentials) {
                const { loginId, password } = credentials.body;
                const user = await prisma.user.findUnique({
                    where: {
                        libId: loginId,
                    },
                });
                if (!user) {
                    throw new Error("User not found");
                }
                const checkPassword = user.lastName === password;
                if (!checkPassword || !user) {
                    throw new Error("Incorrect Password or Login ID");
                }
                return user;
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.firstName = token.firstName;
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
            if (user) {
                token.id = user.id;
            }
            const dbUser = await prisma.user.findUnique({
                where: {
                    id: token.id,
                },
            });
            return {
                id: dbUser.id,
                firstName: dbUser.firstName,
                lastName: dbUser.lastName,
                level: dbUser.level,
                libId: dbUser.libId,
                department: dbUser.department,
                faculty: dbUser.faculty,
                picture: dbUser.image,
                role: dbUser.role,
            };
        },
    },
    secret: "GDyVVUEYzvcbnOUfGAi4asoHHzl05dQ/9wNWHzZJcxQ=",
};
