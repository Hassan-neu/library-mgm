import React from "react";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import BooksPage from "@/components/bookspage";
import SignIn from "@/components/signIn";
import UserPage from "@/components/userPage";
import Navbar from "@/components/navbar";
export default async function Home() {
    const session = await getServerSession(AuthOptions);
    const getbooks = await fetch("http://localhost:3000/api/book", {
        method: "GET",
        header: {
            "Content-Type": "application/json",
        },
    });
    const books = await getbooks.json();
    if (!session) {
        return <SignIn />;
    }
    return (
        <main className="flex min-h-screen">
            {session.user.role === "ADMIN" ? (
                <BooksPage books={books} />
            ) : (
                <UserPage session={session} />
            )}
        </main>
    );
}
