import React from "react";
import Navbar from "@/components/navbar";
const Layout = ({ children }) => {
    return (
        <>
            <header className="sticky top-0">
                <Navbar />
            </header>
            {children}
        </>
    );
};

export default Layout;
