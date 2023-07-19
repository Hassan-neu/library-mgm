import React from "react";
import Button from "./button";
import Link from "next/link";
import { BsPersonFillCheck } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import ToolTip from "./tooltip";
const Navbar = () => {
    return (
        <div className="flex items-center px-8 py-6 bg-dirtyWhite text-myGreen font-semibold gap-3">
            <div className="font-bold text-2xl mr-auto">
                <Link href="/">University&apos;s Library</Link>
            </div>
            <Button className="relative  bg-myGreen text-myYellow rounded-md btn flex justify-center items-center">
                <Link href={"/books/add"} className="py-2 px-8">
                    <BiBookAdd />
                </Link>
                <ToolTip>Add Book</ToolTip>
            </Button>

            <Button className="relative bg-myYellow text-dirtyWhite rounded-md btn flex justify-center items-center">
                <Link href={"/check"} className="py-2 px-8">
                    <BsPersonFillCheck />
                </Link>
                <ToolTip>Check User</ToolTip>
            </Button>
            <Button className="relative  bg-myOrange text-dirtyWhite rounded-md btn flex justify-center items-center">
                <Link href={"/books/registerloan"} className="py-2 px-8">
                    <GiArchiveRegister />
                </Link>
                <ToolTip>Register Loan</ToolTip>
            </Button>
        </div>
    );
};

export default Navbar;
