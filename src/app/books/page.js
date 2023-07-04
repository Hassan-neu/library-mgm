import React from "react";
import Book from "@/components/book";
const Page = () => {
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
