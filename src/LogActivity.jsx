import React, { useEffect, useState } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import PFP from "./assets/PFP.png";

const LogActivity = () => {
    const [activityData] = useState([
        { name: "Bahr Adam", activity: "Deleted a report", date: "2025-08-06", profilepicture: PFP },
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP },
        { name: "Bahr Adam", activity: "Deleted a report", date: "2025-08-06", profilepicture: PFP },
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP },
        { name: "Bahr Adam", activity: "Deleted a report", date: "2025-08-06", profilepicture: PFP },
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP },
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP },
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [checkedRows, setCheckedRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // placeholder for fetching data
        };
        fetchData();
    }, []);

    const filteredData = activityData.filter((entry) =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCheckboxChange = (index) => {
        if (checkedRows.includes(index)) {
            setCheckedRows(checkedRows.filter((i) => i !== index));
        } else {
            setCheckedRows([...checkedRows, index]);
        }
    };

    const handleSelectAll = () => {
        if (checkedRows.length === filteredData.length) {
            setCheckedRows([]);
        } else {
            setCheckedRows(filteredData.map((_, idx) => idx));
        }
    };

    return (
        <div className="p-[8px]">
            {/* Header */}
            <div className="flex flex-row items-center justify-end gap-[7px] p-5 mb-[10px] mx-[55px]">
                {/* Search Bar */}
                <div className="bg-[#F8F8F8] text-[#1D194C] shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] rounded-[90px] p-[10px] flex flex-row items-center w-[250px] h-[20px]">
                    <CiSearch className="text-[#1D194C]" />
                    <input
                        type="text"
                        placeholder="Search by patient name or serial number"
                        className="bg-[#F8F8F8] border-none text-[#1D194C] text-[11px] outline-none w-full pl-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Export Button */}
                <button className="bg-[#F8F8F8] text-[#1D194C] shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] border-none px-4 py-2 rounded-[90px] cursor-pointer ml-3 w-[90px] h-[40px] text-[#707070] flex items-center justify-center gap-1">
                    Export
                    <CiExport className="text-[#1D194C]" />
                </button>
            </div>

            {/* Table Container */}
            <div className="p-2 pb-2 w-full max-w-[1400px] mx-auto rounded-lg">
                <div className="overflow-x-auto rounded-[20px] scrollbar-thin scrollbar-thumb-[#1D194C] scrollbar-track-[#1D194C] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]">
                    <div className="min-w-[800px] rounded-[20px] overflow-hidden bg-white">
                        {/* Table Header */}
                        <div className="sticky top-0 z-10 grid grid-cols-[60px_2fr_3fr_2fr_60px] items-center p-[30px] border-b border-[#e2e2e2] bg-[#f5f5f5] font-normal text-[14px] text-[#333] rounded-t-[20px]">
                            <div>
                                <input
                                    type="checkbox"
                                    className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C]"
                                    onChange={handleSelectAll}
                                    checked={
                                        filteredData.length > 0 &&
                                        checkedRows.length === filteredData.length
                                    }
                                />
                            </div>
                            <div>Name</div>
                            <div>Activity</div>
                            <div>Date</div>
                            <div>Action</div>
                        </div>

                        {/* Table Body */}
                        <div className="overflow-hidden rounded-b-[20px] max-h-[450px] overflow-y-auto">
                            {filteredData.length > 0 ? (
                                filteredData.map((entry, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[60px_2fr_3fr_2fr_60px] items-center p-[20px] border-b border-[#f0f0f0] hover:bg-[#dddddd] transition-colors md:text-sm"
                                    >
                                        <div>
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C] ml-[15px]"
                                                checked={checkedRows.includes(index)}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        </div>
                                        <div className="flex items-center gap-[10px] text-[#1D194C]">
                                            <img
                                                src={entry.profilepicture}
                                                alt={entry.name}
                                                className="w-[32px] h-[32px] rounded-full object-cover"
                                            />
                                            <span>{entry.name}</span>
                                        </div>
                                        <div>{entry.activity}</div>
                                        <div>{entry.date}</div>
                                        <div>
                                            <button className="w-[20px] h-[20px] bg-[#3A3574] rounded-full flex justify-center items-center cursor-pointer">
                                                <BsThreeDotsVertical className="text-white" color="white" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="grid grid-cols-1 justify-center bg-[#fafafa] text-[14px] text-[#999] p-[9px]">
                                    <div className="text-center">No activity found.</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogActivity;
