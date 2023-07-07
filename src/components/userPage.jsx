"use client";
import React, { useCallback, useEffect, useState } from "react";
import Profilecard from "./profilecard";
import TabBtn from "./tabbtn";
import Bookloan from "./bookloan";
import History from "./history";
import Button from "./button";
const UserPage = ({ session }) => {
    const [tab, setTab] = useState("Loan History");
    return (
        <main className="min-h-screen w-full px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold text-xl self-center">
                    STUDENT PROFILE
                </div>
                <Profilecard data={session} />
                <div className="flex gap-3 self-end">
                    <Button className="py-2 px-4 bg-myYellow text-myGreen rounded-md">
                        Check In
                    </Button>
                    <Button className="py-2 px-4 bg-myGreen text-myYellow rounded-md">
                        Check Out
                    </Button>
                </div>
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

export default UserPage;
