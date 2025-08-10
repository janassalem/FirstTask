import React, { useState } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { FaVirus } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import PFP from "./assets/PFP.png";

const Authorities = () => {
    const authorityData = [
        {
            name: "Manage Reports",
            icon: <AiOutlineFileText className="text-white" />,
            admin: true,
            editor: true,
            viewer: true,
            moderator: false,
        },
        {
            name: "Manage Diseases",
            icon: <FaVirus className="text-white" />,
            admin: false,
            editor: false,
            viewer: true,
            moderator: true,
        },
        {
            name: "Manage User Management",
            icon: <AiOutlineUser className="text-white" />,
            admin: true,
            editor: true,
            viewer: false,
            moderator: false,
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [checkedRows, setCheckedRows] = useState([]);

    const filteredData = authorityData.filter((entry) =>
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
        <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] p-[8px]">
            {/* Header */}
            <div className="flex flex-row items-center justify-end gap-[7px] p-5 mb-[10px]">
                {/* Search Bar */}
                <div className="bg-[#F8F8F8] text-[#1D194C] shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] rounded-[90px] p-[10px] flex flex-row items-center w-[250px] h-[20px]">
                    <CiSearch className="text-[#1D194C]" />
                    <input
                        type="text"
                        placeholder="Search authority name..."
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

                {/*  Remeber to the Add Authority Button */}
                <button className="bg-[#F8F8F8] text-[#1D194C] shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] border-none px-4 py-2 rounded-[90px] cursor-pointer ml-3 w-[120px] h-[40px] text-[#707070] flex items-center justify-center gap-1">
                    Add Authority

                </button>
            </div>

            {/* Table Container - fixed width to cause horizontal scroll */}
            <div className="p-5 pb-2 w-[1000px] mx-auto rounded-lg">
                {/* Horizontal and vertical scroll wrapper */}
                <div className="overflow-auto max-h-[500px] rounded-[20px]">
                    {/* Table Wrapper */}
                    <div className="min-w-[1400px] rounded-[20px] overflow-hidden bg-white">
                        {/* Table Header  */}
                        <div className="grid grid-cols-[60px_4fr_1fr_1fr_1fr_1fr_60px] items-center p-[30px] border-b border-[#e2e2e2] bg-[#f5f5f5] font-normal text-[14px] text-[#333] sticky top-0 z-10 rounded-t-[20px]">
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
                            <div>Admin</div>
                            <div>Editor</div>
                            <div>Viewer</div>
                            <div>Moderator</div>
                            <div>Action</div>
                        </div>

                        {/* Table Body with vertical scroll  */}
                        <div className="overflow-hidden rounded-b-[20px] max-h-[450px] overflow-y-auto">
                            {filteredData.length > 0 ? (
                                filteredData.map((entry, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[60px_3.3fr_1fr_1fr_1fr_1fr_70px] items-center p-[20px] border-b border-[#f0f0f0] hover:bg-[#dddddd] transition-colors"
                                    >
                                        <div>
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C]"
                                                checked={checkedRows.includes(index)}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        </div>
                                        <div className="flex items-center gap-[10px] text-[#1D194C]">
                                            <img
                                                src={PFP}
                                                alt={entry.name}
                                                className="w-[32px] h-[32px] rounded-full object-cover border-0.5"
                                            />
                                            <span>{entry.name}</span>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C]"
                                                checked={entry.admin}
                                                onChange={() => {}}
                                            />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C]"
                                                checked={entry.editor}
                                                onChange={() => {}}
                                            />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C]"
                                                checked={entry.viewer}
                                                onChange={() => {}}
                                            />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C]"
                                                checked={entry.moderator}
                                                onChange={() => {}}
                                            />
                                        </div>
                                        <div>
                                            <button className="w-[20px] h-[20px] bg-[#3A3574] rounded-full border-none flex justify-center items-center cursor-pointer p-0 fill-white">
                                                <BsThreeDotsVertical className="text-white" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="grid grid-cols-1 justify-center bg-[#fafafa] text-[14px] text-[#999] p-[9px]">
                                    <div className="text-center">No data found.</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorities;
