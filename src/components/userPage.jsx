"use client";
import React, { useCallback, useEffect, useState } from "react";
import Profilecard from "./profilecard";
import TabBtn from "./tabbtn";
import Bookloan from "./bookloan";
import History from "./history";
import Button from "./button";
import { signOut } from "next-auth/react";
import { VscSignOut } from "react-icons/vsc";
import Loader from "./ui/loader";
const UserPage = ({ session }) => {
    const {
        user: { libId },
    } = session;
    const [data, setData] = useState({});
    const [tab, setTab] = useState("Loan History");
    const getData = useCallback(async () => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(
            `http://localhost:3000/api/users?loginId=${libId}`,
            options
        );
        const user = await res.json();
        setData(user);
    }, [libId]);

    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <main className="min-h-screen w-full px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold text-xl self-center">
                    USER PROFILE
                </div>

                <Profilecard data={data} />
                <div className="flex flex-col gap-4 grow">
                    <div className="flex gap-4">
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
                    <div className="flex flex-col gap-2 grow">
                        {tab === "Loan History" && (
                            <>
                                {data.loans ? (
                                    data.loans?.map((book) => (
                                        <Bookloan key={book.id} book={book} />
                                    ))
                                ) : (
                                    <Loader
                                        className="flex flex-col items-center gap-2 m-auto text-myOrange"
                                        size={50}
                                    >
                                        <p>Loading...</p>
                                    </Loader>
                                )}
                            </>
                        )}
                        {tab === "Library Log" && (
                            <>
                                {data.visits ? (
                                    data.visits.map((visit) => (
                                        <History key={visit.id} visit={visit} />
                                    ))
                                ) : (
                                    <Loader
                                        className="flex flex-col items-center gap-2 m-auto text-myOrange"
                                        size={50}
                                    >
                                        <p>Loading...</p>
                                    </Loader>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={() => signOut()}
                className="fixed right-5 bottom-6 text-myGreen rounded-lg p-3 font-bold bg-myOrange shadow-[0px_0px_0px_2px_var(--primaryGreen)]"
            >
                <VscSignOut size={20} />
            </button>
        </main>
    );
};

export default UserPage;
