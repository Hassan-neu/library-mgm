import React from "react";

const History = () => {
    return (
        <div className="flex justify-between px-6 py-4 bg-dirtyWhite items-center rounded-md">
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Date</h4>
                <p className="text-myGreen font-semibold">1/3/2023</p>
            </div>
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Entry</h4>
                <p className="text-myGreen font-semibold">11:30pm</p>
            </div>
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Exit</h4>
                <p className="text-myGreen font-semibold">12:30am</p>
            </div>
        </div>
    );
};

export default History;
