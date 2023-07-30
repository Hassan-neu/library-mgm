"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "./button";
const SignIn = () => {
    const [msg, setMsg] = useState("");
    const [user, setUser] = useState({
        loginId: "",
        password: "",
    });
    const router = useRouter();
    async function onSubmit(e) {
        e.preventDefault();
        const data = await signIn("credentials", {
            redirect: false,
            loginId: user.loginId,
            password: user.password,
            callbackUrl: "/",
        });
        data.ok && router.push(data.url);
        setMsg(data.error);
    }
    return (
        <div className="w-screen h-screen bg-[url('/background/library.jpg')] bg-gray-700 bg-blend-soft-light bg-center bg-cover flex items-center justify-center">
            <div className=" h-full w-1/4 flex items-center my-0 mx-auto">
                <div className="w-full flex flex-col items-start justify-center gap-3">
                    <div className="text-dirtyWhite text-3xl font-extrabold">
                        <h3>LOGIN</h3>
                    </div>
                    <div className="text-white text-lg">
                        <p>Welcome to the Library</p>
                    </div>
                    {msg && (
                        <p className="text-red-500 bg-white p-[0.5em] rounded-md w-full text-sm">
                            {msg}
                        </p>
                    )}

                    <form
                        className="flex flex-col gap-6 w-full h-full text-dirtyWhite"
                        onSubmit={(e) => onSubmit(e)}
                    >
                        <input
                            type="text"
                            name="loginId"
                            id="loginId"
                            placeholder="Login ID"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            onChange={(e) =>
                                setUser((prevUser) => ({
                                    ...prevUser,
                                    loginId: e.target.value,
                                }))
                            }
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            onChange={(e) =>
                                setUser((prevUser) => ({
                                    ...prevUser,
                                    password: e.target.value,
                                }))
                            }
                        />
                        <Button className="py-1 px-4 self-end bg-myOrange rounded-md text-dirtyWhite transition-transform active:scale-90">
                            Log in
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
