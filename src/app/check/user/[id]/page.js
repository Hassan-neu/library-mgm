import Image from "next/image";
import React from "react";
import Bookloan from "@/components/bookloan";
const Page = ({ params: { id } }) => {
    return (
        <main className="min-h-screen px-8 py-4">
            <div className="flex min-h-screen flex-col gap-8">
                <div className="text-myGreen font-bold text-xl self-center">
                    STUDENT PROFILE
                </div>
                <div className="px-8 py-4  w-full h-1/3 flex justify-between items-center bg-myOrange rounded-md">
                    <div className="flex flex-col gap-2">
                        <div className="text-myGreen font-semibold flex gap-2">
                            <h4 className="uppercase">Name:</h4>

                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="text-myGreen font-semibold flex gap-2">
                            <h4 className="uppercase">Level:</h4>
                            <p>100</p>
                        </div>
                        <div className="text-myGreen font-semibold flex gap-2">
                            <h4 className="uppercase">Uid:</h4>
                            <p>{id}</p>
                        </div>
                        <div className="text-myGreen font-semibold flex gap-2">
                            <h4 className="uppercase">Faculty:</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="text-myGreen font-semibold flex gap-2">
                            <h4 className="uppercase">Department:</h4>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <Image
                        src="/librarylight.jpg"
                        width={200}
                        height={200}
                        alt="image"
                        className="h-full rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4  uppercase text-myGreen text-base font-semibold">
                        <div>Loan History</div>
                        <div>Library Log</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Bookloan />
                        <Bookloan />
                        <Bookloan />
                        <Bookloan />
                        <Bookloan />
                        <Bookloan />
                        <Bookloan />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
