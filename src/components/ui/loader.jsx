import React from "react";
import { CgSpinner } from "react-icons/cg";
const Loader = ({ children, size, className }) => {
    return (
        <div className={className}>
            <CgSpinner size={size} className="animate-spin" />
            {children}
        </div>
    );
};

export default Loader;
