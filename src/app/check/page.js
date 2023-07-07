import React from "react";

const page = () => {
    return (
        <main className="flex min-h-screen">
            <div className="w-screen h-screen bg-[url('/background/reading.jpg')] bg-center bg-cover flex items-center justify-center">
                <div className="w-1/4 flex flex-col items-start justify-center gap-3">
                    <div className="text-dirtyWhite text-2xl">
                        <h3>Check User</h3>
                    </div>
                    <form className="flex flex-col gap-6 w-full h-full text-dirtyWhite">
                        <input
                            type="text"
                            id="staffId"
                            placeholder="Login ID"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                        />
                        <input
                            type="text"
                            id="name"
                            placeholder="Last name"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="mt-4 py-2 px-14 self-end bg-myOrange rounded-md text-dirtyWhite"
                        >
                            Check
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default page;