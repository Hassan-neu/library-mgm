"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
const SignIn = () => {
    const [msg, setMsg] = useState("");
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            loginId: "",
            password: "",
        },
        onSubmit,
    });
    async function onSubmit(values) {
        const data = await signIn("credentials", {
            redirect: false,
            loginId: values.loginId,
            password: values.password,
            callbackUrl: "/",
        });
        data.ok && router.push(data.url);
        setMsg(data.error);
    }
    return (
        <div className="w-screen h-screen bg-[url('/background/library.jpg')] bg-center bg-cover flex items-center justify-center">
            <div className=" h-full w-1/2 flex items-center ml-auto">
                <div className="w-4/5 flex flex-col items-start justify-center gap-3">
                    <div className="text-dirtyWhite text-3xl font-extrabold">
                        <h3>LOGIN</h3>
                    </div>
                    <div className="text-white text-lg">
                        <p>Welcome to the Library</p>
                    </div>
                    <p>{msg}</p>
                    <form
                        className="flex flex-col gap-6 w-full h-full text-dirtyWhite"
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            type="text"
                            name="loginId"
                            id="loginId"
                            placeholder="Login ID"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            {...formik.getFieldProps("loginId")}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            {...formik.getFieldProps("password")}
                        />
                        <button
                            type="submit"
                            className="mt-8 py-2 px-4 self-end bg-myOrange rounded-md text-dirtyWhite transition-transform active:scale-90"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
