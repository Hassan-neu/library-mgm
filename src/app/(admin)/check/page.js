"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
const Page = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            loginId: "",
        },
        onSubmit,
    });
    async function onSubmit(values) {
        router.push(`/check/user/${values.loginId}`);
    }
    return (
        <main className="flex min-h-screen">
            <div className="w-screen h-screen bg-[url('/background/reading.jpg')] bg-center bg-cover flex items-center justify-center">
                <div className="min-w-[250px] w-1/5 flex flex-col items-start justify-center gap-3">
                    <div className="text-dirtyWhite text-2xl">
                        <h3>Check User</h3>
                    </div>
                    <form
                        className="flex flex-col gap-6 w-full h-full text-dirtyWhite"
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            type="text"
                            id="loginId"
                            name="loginId"
                            placeholder="Login ID"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                            {...formik.getFieldProps("loginId")}
                        />

                        <button
                            type="submit"
                            className="mt-4 py-2 px-5 self-end bg-myOrange rounded-md text-dirtyWhite"
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
