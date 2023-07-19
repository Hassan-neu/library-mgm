"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiFolderUploadFill } from "react-icons/ri";
const Page = () => {
    const [data, setData] = useState({
        name: "",
        author: "",
        field: "",
        image: "",
    });
    const handleChange = async (e) => {
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(
            ({ name }) => name === "bookImage"
        );
        const file = fileInput.files[0];
        setData((prevData) => ({ ...prevData, image: file }));
    };
    return (
        <main className="min-h-screen px-8 py-4 bg-myGreen">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold self-center text-xl">
                    Add New Book
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
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none text-dirtyWhite font-semibold"
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
                        // value={data.image}
                        name="bookImage"
                        className="text-dirtyWhite"
                        onChange={
                            (e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    image: e.target.files[0],
                                }))

                            // console.log(e.target.files[0])
                        }
                    />
                    {/* <Image
                        src={data.image}
                        width={300}
                        height={300}
                        alt={data.name}
                    /> */}
                    <button
                        type="submit"
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
