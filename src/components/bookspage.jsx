"use client";
import React from "react";
import Book from "./book";
import { signOut } from "next-auth/react";
import Navbar from "./navbar";
import { VscSignOut } from "react-icons/vsc";

const BooksPage = ({ books }) => {
    return (
        <>
            <header className="fixed top-0 w-full">
                <Navbar />
            </header>
            <main className="min-h-screen w-full px-8 py-4">
                <span className="h-24 w-full block"> </span>
                <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] grid-rows-[auto] gap-4">
                    {books.map((bk) => (
                        <Book key={bk.id} book={bk} />
                    ))}
                </div>
                <button
                    onClick={() => signOut()}
                    className="fixed right-5 bottom-6 text-myYellow rounded-lg p-3 font-bold bg-myGreen shadow-[0px_0px_0px_2px_#fdb62b]"
                >
                    <VscSignOut size={20} />
                </button>
            </main>
        </>
    );
};

export default BooksPage;
