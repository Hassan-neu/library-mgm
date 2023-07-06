import React from "react";

const History = () => {
    return (
        <div className="flex justify-evenly px-6 py-4 bg-dirtyWhite items-center rounded-md">
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Entry</h4>
                <p className="text-myGreen font-semibold flex gap-4">
                    <span>12/2/23</span>
                    <span>10:34PM</span>
                </p>
            </div>
            {/* <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Entry</h4>
                <p className="text-myGreen font-semibold">11:30pm</p>
            </div> */}
            <div className="flex flex-col items-center text-sm">
                <h4 className="text-myOrange font-semibold">Exit</h4>
                <p className="text-myGreen font-semibold flex gap-4">
                    <span>12/2/23</span>
                    <span>10:34PM</span>
                </p>
            </div>
        </div>
    );
};

export default History;
