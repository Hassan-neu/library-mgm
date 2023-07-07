import React from "react";
import Book from "./book";

const BooksPage = () => {
    return (
        <main className="min-h-screen w-full px-8 py-4">
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

export default BooksPage;
