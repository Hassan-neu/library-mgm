import React from "react";
import Button from "./button";
import Link from "next/link";
import { BsPersonFillCheck } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
const Navbar = () => {
    return (
        <div className="flex items-center px-8 py-6 bg-dirtyWhite text-myGreen font-semibold gap-3">
            <div className="font-bold text-2xl mr-auto">
                University&apos;s Library
            </div>
            <Button className="py-2 px-8 bg-myGreen text-myYellow rounded-md">
                <Link href={"/books/add"}>
                    <BiBookAdd />
                </Link>
            </Button>
            <Button className="py-2 px-8 bg-myYellow text-dirtyWhite rounded-md">
                <Link href={"/check"}>
                    <BsPersonFillCheck />
                </Link>
            </Button>
            <Button className="py-2 px-8 bg-myOrange text-dirtyWhite rounded-md">
                <Link href={"/books/registerLoan"}>
                    <GiArchiveRegister />
                </Link>
            </Button>
        </div>
    );
};

export default Navbar;
