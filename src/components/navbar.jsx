import React from "react";
import Button from "./button";
const Navbar = () => {
    return (
        <div className="flex items-center px-8 py-6 bg-dirtyWhite text-myGreen font-semibold gap-3">
            <div className="font-bold text-2xl mr-auto">
                University&apos;s Library
            </div>
            <Button bg="myGreen" color="myYellow">
                Add Book
            </Button>
            <Button bg="myOrange" color="dirtyWhite">
                Check User
            </Button>
        </div>
    );
};

export default Navbar;
