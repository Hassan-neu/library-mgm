"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { RiFolderUploadFill } from "react-icons/ri";
const Page = () => {
    const field = useRef();
    const [data, setData] = useState({
        title: "",
        author: "",
        genre: [],
        image: "",
        copies: 0,
    });

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("author", data.author);
        formData.append("genre", data.genre);
        formData.append("image", data.image);
        formData.append("copies", data.copies);
        const addBook = await fetch("http://localhost:3000/api/book", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        addBook.error && alert(addBook.message);
        console.log(addBook);
        setData({
            title: "",
            author: "",
            genre: [],
            image: "",
            copies: 0,
        });
        Array.from(field.current.elements).map((input) => {
            if (input.checked) {
                input.checked = false;
            }
        });
    }
    return (
        <main className="min-h-screen px-8 py-4 bg-myGreen">
            <div className="flex  min-h-screen flex-col gap-8">
                <div className="text-myYellow font-bold self-center text-xl">
                    Add New Book
                </div>
                <form className="flex min-w-[350px] w-2/5 flex-col gap-6 h-full self-center ">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="title"
                            className="text-myYellow  font-bold"
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
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="author"
                            className="text-myYellow  font-bold"
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

                    <fieldset
                        className="border-2 border-dirtyWhite px-4 py-2 flex flex-col gap-2 rounded-lg self-start"
                        ref={field}
                    >
                        <legend className="text-myYellow font-bold">
                            Genre
                        </legend>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="fiction"
                                name="genre"
                                value="Fiction"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full checker"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: [
                                                ...data.genre,
                                                e.target.value,
                                            ],
                                        }));
                                    } else {
                                        const newGenre = data.genre.filter(
                                            (gnr) => gnr != e.target.value
                                        );
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: newGenre,
                                        }));
                                    }
                                }}
                            />
                            <label
                                htmlFor="fiction"
                                className="text-dirtyWhite"
                            >
                                Fiction
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="non-fiction"
                                name="genre"
                                value="Non-Fiction"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full checker"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: [
                                                ...data.genre,
                                                e.target.value,
                                            ],
                                        }));
                                    } else {
                                        const newGenre = data.genre.filter(
                                            (gnr) => gnr != e.target.value
                                        );
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: newGenre,
                                        }));
                                    }
                                }}
                            />
                            <label
                                htmlFor="non-fiction"
                                className="text-dirtyWhite"
                            >
                                Non-Fiction
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="poetry"
                                name="genre"
                                value="Poetry"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full checker"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: [
                                                ...data.genre,
                                                e.target.value,
                                            ],
                                        }));
                                    } else {
                                        const newGenre = data.genre.filter(
                                            (gnr) => gnr != e.target.value
                                        );
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: newGenre,
                                        }));
                                    }
                                }}
                            />
                            <label htmlFor="poetry" className="text-dirtyWhite">
                                Poetry
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="drama-play"
                                name="genre"
                                value="Drama/Play"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full checker"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: [
                                                ...data.genre,
                                                e.target.value,
                                            ],
                                        }));
                                    } else {
                                        const newGenre = data.genre.filter(
                                            (gnr) => gnr != e.target.value
                                        );
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: newGenre,
                                        }));
                                    }
                                }}
                            />
                            <label
                                htmlFor="drama-play"
                                className="text-dirtyWhite"
                            >
                                Drama / Play
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="science"
                                name="genre"
                                value="science"
                                className="checked:border-4 checked:border-myYellow border-2  appearance-none w-4 h-4 rounded-full checker"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: [
                                                ...data.genre,
                                                e.target.value,
                                            ],
                                        }));
                                    } else {
                                        const newGenre = data.genre.filter(
                                            (gnr) => gnr != e.target.value
                                        );
                                        return setData((prevData) => ({
                                            ...prevData,
                                            genre: newGenre,
                                        }));
                                    }
                                }}
                            />
                            <label
                                htmlFor="science"
                                className="text-dirtyWhite"
                            >
                                Science
                            </label>
                        </div>
                    </fieldset>

                    <div className="flex flex-col gap-2 self-start ">
                        <label
                            htmlFor="copies"
                            className="text-myYellow  font-bold"
                        >
                            Book Copies
                        </label>
                        <input
                            type="number"
                            min={1}
                            id="copies"
                            name="copies"
                            value={data.copies}
                            placeholder="Copies"
                            className="py-2 px-4 rounded-lg bg-transparent border-2 border-dirtyWhite focus:outline-none  text-dirtyWhite font-semibold "
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    copies: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="image"
                            className="text-myYellow  font-bold"
                        >
                            Add Book Cover
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className=" text-dirtyWhite font-semibold"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    image: e.target.files[0],
                                }))
                            }
                        />
                    </div>

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
