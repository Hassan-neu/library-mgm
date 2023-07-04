import React from "react";
import Button from "./button";
const Navbar = () => {
    return (
        <div className="flex items-center px-8 py-6 bg-dirtyWhite text-myGreen font-semibold ">
            <div className="font-bold text-2xl mr-auto">
                University&apos;s Library
            </div>
            <Button>Check User</Button>
        </div>
    );
};

export default Navbar;
