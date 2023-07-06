"use client";
import React, { useState } from "react";
import Profilecard from "@/components/profilecard";
import TabBtn from "@/components/tabbtn";
import Bookloan from "@/components/bookloan";
import History from "@/components/history";
const Page = ({ params: { id } }) => {
    const [tab, setTab] = useState("Loan History");
    return (
        <main className="min-h-screen px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold text-xl self-center">
                    STUDENT PROFILE
                </div>
                <Profilecard id={id} />
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4  uppercase">
                        <TabBtn
                            isActive={tab === "Loan History"}
                            onClick={() => setTab("Loan History")}
                        >
                            Loan History
                        </TabBtn>
                        <TabBtn
                            isActive={tab === "Library Log"}
                            onClick={() => setTab("Library Log")}
                        >
                            Library Log
                        </TabBtn>
                    </div>
                    <div className="flex flex-col gap-2">
                        {tab === "Loan History" && (
                            <>
                                <Bookloan />
                                <Bookloan />
                                <Bookloan />
                                <Bookloan />
                                <Bookloan />
                                <Bookloan />
                                <Bookloan />
                            </>
                        )}
                        {tab === "Library Log" && (
                            <>
                                <History />
                                <History />
                                <History />
                                <History />
                                <History />
                                <History />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
