"use client";
import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { useSession } from "next-auth/react";
const Bookloan = ({ book }) => {
    const { data: session } = useSession();
    const [returned, setReturned] = useState(false);
    return (
        <div className="flex justify-between px-6 py-4 bg-dirtyWhite items-center rounded-md">
            <div className="grow-0 shrink-0 basis-1/5 flex text-myGreen font-semibold">
                {book.bookTitle}
            </div>
            <div className="grow-0 shrink-0 basis-1/5 flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Fetch</h4>
                <p className="text-myGreen font-semibold">
                    {new Date(book.dateCollected)
                        .toLocaleDateString()
                        .split("/")
                        .join("-")}
                </p>
            </div>
            <div className="grow-0 shrink-0 basis-1/5 flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Due</h4>
                <p className="text-myGreen font-semibold">
                    {new Date(book.dueDate)
                        .toLocaleDateString()
                        .split("/")
                        .join("-")}
                </p>
            </div>
            <div className="grow-0 shrink-0 basis-1/5 flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Time past</h4>
                <p className="text-myGreen font-semibold">23 days</p>
            </div>
            <div className="grow-0 shrink-0 basis-1/5 flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Status</h4>
                <button
                    disabled={session.user.role === "STUDENT"}
                    onClick={() => setReturned(!returned)}
                    className={` font-semibold ${
                        book.returnStatus ? "text-myGreen" : "text-myYellow"
                    } rounded-md px-2 py-1`}
                >
                    {book.returnStatus ? (
                        <IoCheckmarkCircleOutline size={20} />
                    ) : (
                        <MdOutlineCancel size={20} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Bookloan;
