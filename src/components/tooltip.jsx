import React from "react";

const ToolTip = ({ children }) => {
    return (
        <div className="hidden absolute top-full translate-y-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] w-20 rounded-md tooltip">
            <div className="relative px-1 py-1">
                <span className="w-full block">{children}</span>
                <span className="block w-2 h-2 -z-20 bg-slate-800 rotate-45 absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"></span>
            </div>
        </div>
    );
};

export default ToolTip;
