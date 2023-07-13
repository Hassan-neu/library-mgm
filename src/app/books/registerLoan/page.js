"use client";
import React, { useState } from "react";
import { BiSave } from "react-icons/bi";
const Page = () => {
    const [data, setData] = useState({
        name: "",
        author: "",
        studentID: "",
        dueDate: "",
    });
    return (
        <main className="min-h-screen px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold self-center text-xl">
                    Register Loan
                </div>
                <form className="flex flex-col gap-6 w-4/5 h-full self-center ">
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-myYellow ml-4 font-bold"
                        >
                            Book Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            placeholder="Book"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    name: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="author"
                            className="text-myYellow ml-4 font-bold"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={data.author}
                            placeholder="Author"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none  text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    author: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="author"
                            className="text-myYellow ml-4 font-bold"
                        >
                            Student ID
                        </label>
                        <input
                            type="text"
                            id="studentid"
                            name="studentid"
                            value={data.studentID}
                            placeholder="Student ID"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none  text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    studentID: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="author"
                            className="text-myYellow ml-4 font-bold"
                        >
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={data.dueDate}
                            className="py-2 px-4 
                            rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none  text-myGreen font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    dueDate: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 py-2 px-8 bg-myYellow self-end text-dirtyWhite rounded-md"
                    >
                        <BiSave />
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Page;
