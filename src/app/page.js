import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen">
            <div className="w-screen h-screen bg-[url('/background/library.jpg')] bg-center bg-cover flex items-center justify-center">
                <div className=" h-full w-1/2 flex items-center ml-auto px-16">
                    <div className="w-4/5 flex flex-col items-start justify-center gap-3">
                        <div className="text-dirtyWhite text-2xl">
                            <h3>LOGIN</h3>
                        </div>
                        <div className="text-white">
                            <p>Welcome Librarian</p>
                        </div>
                        <form className="flex flex-col gap-6 w-full h-full text-dirtyWhite">
                            <input
                                type="text"
                                id="staffId"
                                placeholder="Login ID"
                                className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            />
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="mt-8 py-2 px-14 self-center bg-myOrange rounded-md text-dirtyWhite"
                            >
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
