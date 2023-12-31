"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
    const [libId, setLibId] = useState("");
    const router = useRouter();
    async function onSubmit(e) {
        e.preventDefault();
        router.push(`/check/user/${libId}`);
    }
    return (
        <main className="flex min-h-screen">
            <div className="w-screen h-screen bg-[url('/background/reading.jpg')] bg-gray-700 bg-blend-soft-light bg-center bg-cover flex items-center justify-center">
                <div className="min-w-[300px] w-1/4 flex flex-col items-start justify-center gap-3">
                    <div className="text-dirtyWhite text-2xl">
                        <h3>Check User</h3>
                    </div>
                    <form
                        className="flex flex-col gap-6 w-full h-full text-dirtyWhite"
                        onSubmit={(e) => onSubmit(e)}
                    >
                        <input
                            type="text"
                            id="libId"
                            name="libId"
                            placeholder="Library ID"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            onChange={(e) => setLibId(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="mt-4 py-1 px-4 self-end bg-myOrange rounded-md text-dirtyWhite"
                        >
                            Check
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Page;
