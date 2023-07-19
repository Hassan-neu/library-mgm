"use client";
import React, { useCallback, useEffect, useState } from "react";
import Profilecard from "./profilecard";
import TabBtn from "./tabbtn";
import Bookloan from "./bookloan";
import History from "./history";
import Button from "./button";
import { signOut } from "next-auth/react";
import { VscSignOut } from "react-icons/vsc";
const UserPage = ({ session }) => {
    const [tab, setTab] = useState("Loan History");
    return (
        <main className="min-h-screen w-full px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold text-xl self-center">
                    STUDENT PROFILE
                </div>
                <Profilecard session={session} />
                {session.user.role === "ADMIN" && (
                    <div className="flex gap-3 self-end">
                        <Button className="py-2 px-4 bg-myYellow text-myGreen rounded-md">
                            Check In
                        </Button>
                        <Button className="py-2 px-4 bg-myGreen text-myYellow rounded-md">
                            Check Out
                        </Button>
                    </div>
                )}

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
                                <Bookloan session={session} />
                                <Bookloan session={session} />
                                <Bookloan session={session} />
                                <Bookloan session={session} />
                                <Bookloan session={session} />
                                <Bookloan session={session} />
                                <Bookloan session={session} />
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
            <button
                onClick={() => signOut()}
                className="fixed right-5 bottom-6 text-myGreen rounded-lg p-3 font-bold bg-myOrange shadow-[0px_0px_0px_2px_#1b4f4a]"
            >
                <VscSignOut size={20} />
            </button>
        </main>
    );
};

export default UserPage;
