"use client";
import React, { useState } from "react";
const Page = () => {
    const [data, setData] = useState({});
    return (
        <main className="min-h-screen px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold self-center text-xl">
                    Add New Book
                </div>
                <form className="flex flex-col gap-6 w-full h-full ">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Book"
                        className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                        onChange={(e) =>
                            setData((prevData) => ({
                                ...prevData,
                                name: e.target.value,
                            }))
                        }
                    />
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={data.author}
                        placeholder="Author"
                        className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none"
                        onChange={(e) =>
                            setData((prevData) => ({
                                ...prevData,
                                author: e.target.value,
                            }))
                        }
                    />
                    <fieldset className="border-2 border-dirtyWhite px-4 py-2 flex flex-col gap-2 self-start rounded-lg">
                        <legend>Select Field</legend>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="science"
                                name="field"
                                className="checked:border-4 checked:border-myGreen border-2  appearance-none w-4 h-4 rounded-full"
                                onChange={(e) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        field: e.target.value,
                                    }))
                                }
                            />
                            <label htmlFor="science" className="text-myGreen">
                                Science
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="art"
                                name="field"
                                defaultValue={"Science"}
                                value={data.field}
                                className="checked:border-4 checked:border-myGreen border-2  appearance-none w-4 h-4 rounded-full"
                                onChange={(e) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        field: e.target.value,
                                    }))
                                }
                            />
                            <label htmlFor="art" className="text-myGreen">
                                Art
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="humanities"
                                name="field"
                                defaultValue={"Science"}
                                value={data.field}
                                className="checked:border-4 checked:border-myGreen border-2  appearance-none w-4 h-4 rounded-full"
                                onChange={(e) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        field: e.target.value,
                                    }))
                                }
                            />
                            <label
                                htmlFor="humanities"
                                className="text-myGreen"
                            >
                                Humanities
                            </label>
                        </div>
                    </fieldset>
                    <input
                        type="file"
                        id="bookImage"
                        value={data.image}
                        name="bookImage"
                        capture="user"
                        className="appearance-none"
                        onChange={(e) =>
                            setData((prevData) => ({
                                ...prevData,
                                image: e.target.value,
                            }))
                        }
                    />
                    <button
                        type="submit"
                        className="mt-4 py-2 px-14 self-end bg-myOrange rounded-md text-dirtyWhite"
                    >
                        Add
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Page;
