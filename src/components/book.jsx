import React from "react";
import Image from "next/image";
const Book = ({ book }) => {
    const { title, author, genre, image } = book;
    return (
        <div className="flex flex-col rounded-md overflow-hidden">
            <Image
                src={image}
                width={200}
                height={100}
                alt="book"
                className="h-[180px] w-full object-cover"
            />

            <div className="flex flex-col bg-myGreen">
                <h3 className="flex flex-col text-myGreen font-semibold px-4 bg-dirtyWhite rounded-bl-lg">
                    <span>{title}</span>
                    <span>{author}</span>
                </h3>
                <div className="flex justify-between items-center">
                    <span className="h-full bg-myOrange">
                        <span className="px-2 py-1 h-full rounded-tr-lg flex items-center bg-myGreen">
                            <span className="w-4 h-4 rounded-full bg-myYellow">
                                {" "}
                            </span>
                        </span>
                    </span>

                    <span className=" w-full bg-myOrange rounded-bl-lg px-2 py-1 text-dirtyWhite">
                        Science
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Book;
