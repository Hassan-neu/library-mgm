"use client";
import React from "react";
import Button from "./button";
import Link from "next/link";
import { BsPersonFillCheck } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import ToolTip from "./tooltip";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const path = usePathname();
    console.log(path);
    const changeBar = path.includes("books");
    return (
        <div className="flex items-center px-8 py-6 bg-dirtyWhite text-myGreen font-semibold gap-3">
            <div className="font-bold mr-auto ">
                <Link href="/" className=" flex  text-xl  items-end gap-2">
                    <HiOutlineBuildingLibrary size={30} />
                    <p>The Library</p>
                </Link>
            </div>
            <Button
                className={`relative ${
                    changeBar
                        ? "bg-myGreen text-dirtyWhite border-2 border-myGreen"
                        : "bg-myGreen text-myYellow"
                }   rounded-md btn flex justify-center items-center`}
            >
                <Link href={"/books/add"} className="py-2 px-8">
                    <BiBookAdd />
                </Link>
                <ToolTip>Add Book</ToolTip>
            </Button>

            <Button
                className={`relative ${
                    changeBar
                        ? "bg-dirtyWhite text-myGreen border-2 border-myGreen"
                        : "bg-myYellow  text-dirtyWhite"
                } rounded-md btn flex justify-center items-center`}
            >
                <Link href={"/check"} className="py-2 px-8">
                    <BsPersonFillCheck />
                </Link>
                <ToolTip>Check User</ToolTip>
            </Button>
            <Button
                className={`relative ${
                    changeBar
                        ? "bg-myGreen text-dirtyWhite border-2 border-myGreen"
                        : "bg-myOrange text-dirtyWhite"
                }  rounded-md btn flex justify-center items-center`}
            >
                <Link href={"/books/registerloan"} className="py-2 px-8">
                    <GiArchiveRegister />
                </Link>
                <ToolTip>Register Loan</ToolTip>
            </Button>
        </div>
    );
};

export default Navbar;
