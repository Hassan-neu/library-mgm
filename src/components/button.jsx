import React from "react";

const Button = ({ children, bg, color }) => {
    return (
        <button className={`py-2 px-8 bg-${bg} text-${color} rounded-md `}>
            {children}
        </button>
    );
};

export default Button;
