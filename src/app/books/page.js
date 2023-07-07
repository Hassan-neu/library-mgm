import React from "react";
import Book from "@/components/book";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/libs/auth";
const Page = async () => {
    const session = await getServerSession(AuthOptions);
    return (
        <main className="min-h-screen px-8 py-4">
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] grid-rows-[auto] gap-4">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </main>
    );
};

export default Page;
