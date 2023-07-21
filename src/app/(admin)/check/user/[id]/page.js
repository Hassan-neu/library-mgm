"use client";
import React, { useCallback, useEffect, useState } from "react";
import Profilecard from "@/components/profilecard";
import TabBtn from "@/components/tabbtn";
import Bookloan from "@/components/bookloan";
import History from "@/components/history";
const Page = ({ params: { id } }) => {
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
            `http://localhost:3000/api/users?loginId=${id}`,
            options
        );
        const user = await res.json();
        setData(user);
    }, [id]);

    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <main className="min-h-screen px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold text-xl self-center">
                    STUDENT PROFILE
                </div>
                <Profilecard data={data} />
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
                    {/* <div className="flex flex-col gap-2">
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
                    </div> */}
                </div>
            </div>
        </main>
    );
};

export default Page;
