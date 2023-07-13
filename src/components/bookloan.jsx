"use client";
import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
const Bookloan = ({ session }) => {
    const [returned, setReturned] = useState(false);

    return (
        <div className="flex justify-between px-6 py-4 bg-dirtyWhite items-center rounded-md">
            <div className="text-myGreen font-semibold">Book name</div>
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Fetch</h4>
                <p className="text-myGreen font-semibold">1/3/2024</p>
            </div>
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Due</h4>
                <p className="text-myGreen font-semibold">2/6/25</p>
            </div>
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Time past</h4>
                <p className="text-myGreen font-semibold">23 days</p>
            </div>
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Status</h4>
                <button
                    disabled={session.user.role === "STUDENT"}
                    onClick={() => setReturned(!returned)}
                    className={` font-semibold ${
                        returned ? "text-myGreen" : "text-myYellow"
                    } rounded-md px-2 py-1`}
                >
                    {returned ? (
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
