"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiFolderUploadFill } from "react-icons/ri";
const Page = () => {
    const [data, setData] = useState({
        title: "",
        author: "",
        field: "",
        image: "",
    });
    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("author", data.author);
        formData.append("field", data.field);
        formData.append("image", data.image);
        const bookPost = await fetch("http://localhost:3000/api/book", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        console.log(bookPost);
    }
    return (
        <main className="min-h-screen px-8 py-4 bg-myGreen">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myYellow font-bold self-center text-xl">
                    Add New Book
                </div>
                <form className="flex flex-col gap-6 w-4/5 h-full self-center ">
                    <div className="flex flex-col">
                        <label
                            htmlFor="title"
                            className="text-myYellow ml-4 font-bold"
                        >
                            Book Name
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            placeholder="Book"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none text-dirtyWhite font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    title: e.target.value,
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
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none  text-dirtyWhite font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    author: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <fieldset className="border-2 border-dirtyWhite px-4 py-2 flex flex-col gap-2 self-start rounded-lg">
                        <legend className="text-myYellow font-bold">
                            Which Field Best Describes it
                        </legend>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="science"
                                name="field"
                                value="Science"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full"
                                onChange={(e) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        field: e.target.value,
                                    }))
                                }
                            />
                            <label
                                htmlFor="science"
                                className="text-dirtyWhite"
                            >
                                Science
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="art"
                                name="field"
                                value="Art"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full"
                                onChange={(e) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        field: e.target.value,
                                    }))
                                }
                            />
                            <label htmlFor="art" className="text-dirtyWhite">
                                Art
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="humanities"
                                name="field"
                                value="humanities"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full"
                                onChange={(e) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        field: e.target.value,
                                    }))
                                }
                            />
                            <label
                                htmlFor="humanities"
                                className="text-dirtyWhite"
                            >
                                Humanities
                            </label>
                        </div>
                    </fieldset>
                    <input
                        type="file"
                        id="bookImage"
                        name="bookImage"
                        className="text-dirtyWhite"
                        onChange={(e) =>
                            setData((prevData) => ({
                                ...prevData,
                                image: e.target.files[0],
                            }))
                        }
                    />

                    <button
                        type="submit"
                        onClick={(e) => {
                            onSubmit(e);
                        }}
                        className="mt-4 py-2 px-8 bg-myYellow self-end text-dirtyWhite rounded-md"
                    >
                        <RiFolderUploadFill />
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Page;
