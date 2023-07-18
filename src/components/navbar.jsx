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
                University&apos;s Library
            </div>
            <Button className="relative py-2 px-8 bg-myGreen text-myYellow rounded-md btn">
                <Link href={"/books/add"}>
                    <BiBookAdd />
                </Link>
                <ToolTip>Add Book</ToolTip>
            </Button>

            <Button className="relative py-2 px-8 bg-myYellow text-dirtyWhite rounded-md btn">
                <Link href={"/check"}>
                    <BsPersonFillCheck />
                </Link>
                <ToolTip>Check User</ToolTip>
            </Button>
            <Button className="relative py-2 px-8 bg-myOrange text-dirtyWhite rounded-md btn">
                <Link href={"/books/registerloan"}>
                    <GiArchiveRegister />
                </Link>
                <ToolTip>Register Loan</ToolTip>
            </Button>
        </div>
    );
};

export default Navbar;
