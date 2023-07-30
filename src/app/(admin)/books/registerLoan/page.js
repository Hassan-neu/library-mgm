"use client";
import React, { useState } from "react";
import { BiSave } from "react-icons/bi";
const Page = () => {
    const [msg, setMsg] = useState("");
    const [data, setData] = useState({
        bookTitle: "",
        bookAuthor: "",
        studentId: "",
        dueDate: "",
    });
    async function onSubmit() {
        const register = await fetch("http://localhost:3000/api/bookloan", {
            method: "POST",
            body: JSON.stringify(data),
        }).then((res) => res.json());
        register.error && alert(register.message);
        setData({
            bookTitle: "",
            bookAuthor: "",
            studentId: "",
            dueDate: "",
        });
        console.log(register);
    }
    return (
        <main className="min-h-screen px-8 py-4 bg-dirtyWhite bg-opacity-80">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold self-center text-xl">
                    Register Loan
                </div>
                <form className="flex flex-col gap-6 min-w-[350px] w-2/5  h-full self-center ">
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-myGreen ml-4 font-bold"
                        >
                            Book Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.bookTitle}
                            placeholder="Book"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-myGreen focus:outline-none text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    bookTitle: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="author"
                            className="text-myGreen ml-4 font-bold"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={data.bookAuthor}
                            placeholder="Author"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-myGreen focus:outline-none  text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    bookAuthor: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="author"
                            className="text-myGreen ml-4 font-bold"
                        >
                            Student ID
                        </label>
                        <input
                            type="text"
                            id="studentid"
                            name="studentid"
                            value={data.studentId}
                            placeholder="Student ID"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-myGreen focus:outline-none  text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    studentId: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="author"
                            className="text-myGreen ml-4 font-bold"
                        >
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={data.dueDate}
                            className="py-2 px-4 
                            rounded-lg bg-transparent border-2 border-myGreen focus:outline-none  text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    dueDate: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                        className="mt-4 py-2 px-5 bg-myGreen self-end text-dirtyWhite rounded-md"
                    >
                        <BiSave />
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Page;
