import React from "react";

const Bookloan = () => {
    return (
        <div className="flex justify-between px-6 py-4 bg-dirtyWhite items-center rounded-md">
            <div className="text-myGreen font-semibold">Book name</div>
            <div className="flex flex-col items-center">
                <h4 className="text-myOrange font-semibold">Fetch</h4>
                <p className="text-myGreen font-semibold">1-3-2024</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-myOrange font-semibold">Due</h4>
                <p className="text-myGreen font-semibold">2-6-25</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-myOrange font-semibold">Time past</h4>
                <p className="text-myGreen font-semibold">23 days</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-myOrange font-semibold">Status</h4>
                <p className="text-myGreen font-semibold">Returned</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-myOrange font-semibold">Fine</h4>
                <p className="text-myGreen font-semibold">#900</p>
            </div>
        </div>
    );
};

export default Bookloan;
