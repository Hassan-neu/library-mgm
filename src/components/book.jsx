import React from "react";
import Image from "next/image";
const Book = ({ book }) => {
    const { title, author, genre, image } = book;
    return (
        <div className="flex flex-col rounded-lg overflow-hidden h-full">
            <div className="h-[150px] w-full relative">
                <Image
                    src={image}
                    fill={true}
                    alt="book"
                    placeholder="blur"
                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
            </div>

            {/* check how the lower box reacts to changes later on since the h-full has been removed */}
            <div className="flex flex-col bg-myGreen h-max">
                <h3 className="flex flex-col text-myGreen px-4 bg-dirtyWhite rounded-bl-lg">
                    <span
                        className={`relative font-semibold ${
                            title.length > 30 ? "titlehover" : ""
                        }`}
                    >
                        {title.length > 30 ? `${title.slice(0, 26)}...` : title}
                        {title.length > 30 && (
                            <p className="absolute hidden text-xs -top-2 bg-white">
                                {title.slice(-title.length + 26)}
                            </p>
                        )}
                    </span>
                    <span className="text-xs self-end font-semibold">
                        {author}
                    </span>
                </h3>
                <div className="flex justify-between items-center h-full">
                    <span className="h-full bg-myOrange">
                        <span className="px-2 py-1 h-full rounded-tr-lg flex items-center bg-myGreen">
                            <span className="w-3 h-3 rounded-full bg-myYellow">
                                {" "}
                            </span>
                        </span>
                    </span>

                    <span className=" w-full h-full flex items-center  bg-myOrange rounded-bl-lg px-2 py-1 text-dirtyWhite capitalize text-right">
                        {genre.length > 2
                            ? genre.slice(0, 2).join(", ")
                            : genre.join()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Book;
