"use client";
import React from "react";
import Book from "./book";
import { signOut } from "next-auth/react";

const BooksPage = () => {
    return (
        <>
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
                <button
                    onClick={() => signOut()}
                    className="border-2 fixed right-5 bottom-6 bg-red-500"
                >
                    Sign Out
                </button>
            </main>
        </>
    );
};

export default BooksPage;
