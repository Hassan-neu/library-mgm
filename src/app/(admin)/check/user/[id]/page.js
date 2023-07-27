"use client";
import React, { useCallback, useEffect, useState } from "react";
import Profilecard from "@/components/profilecard";
import TabBtn from "@/components/tabbtn";
import Bookloan from "@/components/bookloan";
import History from "@/components/history";
import Button from "@/components/button";
import { BiHomeCircle } from "react-icons/bi";
import Link from "next/link";
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
                <div className="flex items-center ">
                    <Button className="text-myOrange  ml-0 text-sm gap-2">
                        <Link href="/" className="flex items-center">
                            <BiHomeCircle size={25} />
                        </Link>
                    </Button>

                    <div className="text-myGreen font-bold text-xl ml-96">
                        STUDENT PROFILE
                    </div>
                </div>
                <Profilecard data={data} />
                <div className="flex gap-3 self-end">
                    <Button className="py-1 px-4 bg-myOrange text-dirtyWhite rounded-md font-semibold active:scale-95">
                        Check In
                    </Button>
                    <Button className="py-1 px-4 text-myOrange border border-myOrange rounded-md font-semibold active:scale-95">
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
                                {data.loan?.map((book) => (
                                    <Bookloan key={book.id} book={book} />
                                ))}
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
