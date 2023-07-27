import React from "react";
import Navbar from "@/components/navbar";
const Layout = ({ children }) => {
    return (
        <>
            <header className="sticky top-0 shadow-[0_.5px_0px_2px_var(--primaryGreen)]">
                <Navbar />
            </header>
            {children}
        </>
    );
};

export default Layout;
