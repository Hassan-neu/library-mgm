"use client";
import React, { useCallback, useEffect, useState } from "react";
import Profilecard from "@/components/profilecard";
import TabBtn from "@/components/tabbtn";
import Bookloan from "@/components/bookloan";
import History from "@/components/history";
import Button from "@/components/button";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineLocalLibrary } from "react-icons/md";
import Link from "next/link";
import Loader from "@/components/ui/loader";
const Page = ({ params: { id } }) => {
    const [data, setData] = useState({});
    const [checkIn, setCheckIn] = useState({ entry: "", libId: id });
    const [checkOut, setCheckOut] = useState({ exit: "", libId: id });
    const [tab, setTab] = useState("Loan History");
    async function check() {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(checkIn),
        };
        const res = await fetch(`http://localhost:3000/api/visit`, options);
        const checkedIn = await res.json();
        console.log(checkedIn);
    }

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
        console.log("checked");
    }, [id]);

    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <main className="min-h-screen px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="flex items-center  justify-between">
                    <Button className="text-myOrange text-sm">
                        <Link href="/" className="flex items-center">
                            <HiOutlineBuildingLibrary size={25} />
                        </Link>
                    </Button>

                    <div className="text-myGreen font-bold text-xl">
                        USER PROFILE
                    </div>
                    <div className="text-myOrange text-sm">
                        <MdOutlineLocalLibrary size={25} />
                    </div>
                </div>
                <Profilecard data={data} />
                <div className="flex gap-3 self-end">
                    <Button
                        className="py-1 px-4 bg-myOrange text-dirtyWhite rounded-md font-semibold active:scale-95"
                        onClick={() =>
                            setCheckIn((prevCheck) => ({
                                ...prevCheck,
                                entry: Date.now(),
                            }))
                        }
                    >
                        Check In
                    </Button>
                    <Button
                        className="py-1 px-4 text-myOrange border border-myOrange rounded-md font-semibold active:scale-95"
                        onClick={() =>
                            setCheckIn((prevCheck) => ({
                                ...prevCheck,
                                exit: Date.now(),
                            }))
                        }
                    >
                        Check Out
                    </Button>
                </div>
                <div className="flex flex-col gap-4 grow">
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
        </main>
    );
};

export default Page;
