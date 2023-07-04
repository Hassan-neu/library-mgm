import React from "react";

const Button = ({ children }) => {
    return (
        <button className="py-2 px-8 bg-myOrange rounded-md ">
            {children}
        </button>
    );
};

export default Button;
