import Image from "next/image";
import React from "react";

const Profilecard = ({ session }) => {
    const { user } = session;
    return (
        <div className="py-4 px-5  w-full h-52 flex justify-between items-center bg-myOrange rounded-md">
            <div className="flex flex-col gap-2">
                <div className="text-myGreen font-semibold flex gap-2">
                    <h4 className="uppercase">Name:</h4>
                    <p>
                        {user.firstName} , {user.lastName}
                    </p>
                </div>
                <div className="text-myGreen font-semibold flex gap-2">
                    <h4 className="uppercase">Level:</h4>
                    <p>{user.level}</p>
                </div>
                <div className="text-myGreen font-semibold flex gap-2">
                    <h4 className="uppercase">Uid:</h4>
                    <p>{user.libId}</p>
                </div>
                <div className="text-myGreen font-semibold flex gap-2">
                    <h4 className="uppercase">Faculty:</h4>
                    <p>{user.faculty}</p>
                </div>
                <div className="text-myGreen font-semibold flex gap-2">
                    <h4 className="uppercase">Department:</h4>
                    <p>{user.department}</p>
                </div>
            </div>
            <Image
                src="/librarylight.jpg"
                width={200}
                height={180}
                alt="image"
                className="h-full rounded-md object-cover"
            />
        </div>
    );
};

export default Profilecard;
