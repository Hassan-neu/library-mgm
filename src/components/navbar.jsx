import React from "react";
import Button from "./button";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="flex items-center px-8 py-6 bg-dirtyWhite text-myGreen font-semibold gap-3">
            <div className="font-bold text-2xl mr-auto">
                University&apos;s Library
            </div>
            <Button bg="myGreen" color="myYellow">
                <Link href={"/books/add"}>Add Book</Link>
            </Button>
            <Button bg="myOrange" color="dirtyWhite">
                <Link href={"/check"}>Check User</Link>
            </Button>
        </div>
    );
};

export default Navbar;
