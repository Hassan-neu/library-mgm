import React from "react";

const TabBtn = ({ children, onClick, isActive }) => {
    return (
        <button
            className={`p-1 text-myGreen font-semibold ${
                isActive ? "border-b-2 border-myGreen" : ""
            }`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export default TabBtn;
