import React from "react";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import BooksPage from "@/components/books";
import SignIn from "@/components/signIn";
import UserPage from "@/components/userPage";
export default async function Home() {
    const session = await getServerSession(AuthOptions);
    if (!session) {
        return <SignIn />;
    }
    return (
        <main className="flex min-h-screen">
            {session.user.role === "ADMIN" ? (
                <BooksPage />
            ) : (
                <UserPage session={session} />
            )}
        </main>
    );
}
