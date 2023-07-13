import React from "react";

const ToolTip = ({ children }) => {
    return (
        <div className="hidden absolute top-full translate-y-3 left-1/2 -translate-x-1/2 bg-gray-300 text-white text-[10px] w-20 rounded-md tooltip">
            <div className="relative px-1 py-1">
                <span className="w-full block">{children}</span>
                <span className="block w-3 h-3 -z-20 bg-gray-300 rotate-45 absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"></span>
            </div>
        </div>
    );
};

export default ToolTip;
