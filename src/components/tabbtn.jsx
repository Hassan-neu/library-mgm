import React, { useEffect } from "react";

const TabBtn = ({ children, onClick, isActive }) => {
    return (
        <button
            className={`p-1 text-myGreen font-semibold border-b-2${
                isActive ? " border-myGreen" : ""
            }`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export default TabBtn;
