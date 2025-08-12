import React, { useState } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import PFP from "./assets/PFP.png";

const Diseases = () => {
    const activityData = [
        {
            name: "Disease X",
            clinical: "Enter Data",
            ct: "Enter Data",
            mri: "Enter Data",
            ultrasound: "Enter Data",
            nuclear: "Enter Data",
            laboratoryTests: "Enter Data",
            xRay: "Enter Data",
            X1: "Data X1",
            employee: "John Doe",
            date: "2025-08-10",
        },
        {
            name: "Disease Y",
            clinical: "Enter Data",
            ct: "Enter Data",
            mri: "Enter Data",
            ultrasound: "Enter Data",
            nuclear: "Enter Data",
            laboratoryTests: "Enter Data",
            xRay: "Enter Data",
            X1: "Data X1",
            employee: "Jane Smith",
            date: "2025-08-11",
        },
        {
            name: "Disease Y",
            clinical: "Enter Data",
            ct: "Enter Data",
            mri: "Enter Data",
            ultrasound: "Enter Data",
            nuclear: "Enter Data",
            laboratoryTests: "Enter Data",
            xRay: "Enter Data",
            X1: "Data X1",
            employee: "Jane Smith",
            date: "2025-08-11",
        },
        {
            name: "Disease Y",
            clinical: "Enter Data",
            ct: "Enter Data",
            mri: "Enter Data",
            ultrasound: "Enter Data",
            nuclear: "Enter Data",
            laboratoryTests: "Enter Data",
            xRay: "Enter Data",
            X1: "Data X1",
            employee: "Jane Smith",
            date: "2025-08-11",
        },
        {
            name: "Disease Y",
            clinical: "Enter Data",
            ct: "Enter Data",
            mri: "Enter Data",
            ultrasound: "Enter Data",
            nuclear: "Enter Data",
            laboratoryTests: "Enter Data",
            xRay: "Enter Data",
            X1: "Data X1",
            employee: "Jane Smith",
            date: "2025-08-11",
        },
        {
            name: "Disease Y",
            clinical: "Enter Data",
            ct: "Enter Data",
            mri: "Enter Data",
            ultrasound: "Enter Data",
            nuclear: "Enter Data",
            laboratoryTests: "Enter Data",
            xRay: "Enter Data",
            X1: "Data X1",
            employee: "Jane Smith",
            date: "2025-08-11",
        },
        {
            name: "Disease Y",
            clinical: "Enter Data",
            ct: "Enter Data",
            mri: "Enter Data",
            ultrasound: "Enter Data",
            nuclear: "Enter Data",
            laboratoryTests: "Enter Data",
            xRay: "Enter Data",
            X1: "Data X1",
            employee: "Jane Smith",
            date: "2025-08-11",
        },
        // ... more data entries
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [checkedRows, setCheckedRows] = useState([]);

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
        <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] p-[8px]">
            {/* Header */}
            <div className="flex flex-row items-center justify-end gap-[7px] p-5 mb-[10px]">
                {/* Search Bar */}
                <div className="bg-[#F8F8F8] text-[#1D194C] shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] rounded-[90px] p-[10px] flex flex-row items-center w-[250px] h-[20px]">
                    <CiSearch className="text-[#1D194C]" />
                    <input
                        type="text"
                        placeholder="Search by disease name or serial number"
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

            {/* Table Container - fixed width in order to horizontal scroll */}
            <div className="p-5 pb-2 w-full max-w-[1200px] mx-auto rounded-lg">
                {/* Horizontal and vertical scroll wrapper */}
                <div className="overflow-x-auto md:overflow-auto max-h-[500px] rounded-[20px] scrollbar-thin scrollbar-thumb-[#1D194C] scrollbar-track-[#1D194C] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]">
                    {/* Table Wrapper - min width bigger than container with rounded corners & overflow hidden */}
                    <div className="min-w-[1400px] md:min-w-[1400px] rounded-[20px] overflow-hidden bg-white">
                        {/* Table Header  */}
                        <div className="sticky top-0 z-10 grid grid-cols-[60px_1.5fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_60px] items-center p-[30px] md:p-[30px] border-b border-[#e2e2e2] bg-[#f5f5f5] font-normal text-[14px] text-[#333] rounded-t-[20px]">
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
                            <div>Disease Name</div>
                            <div>Clinical Diagnoses</div>
                            <div>CT Imaging Terms</div>
                            <div>MRI Imaging Terms</div>
                            <div>Ultrasound Imaging Terms</div>
                            <div>Nuclear Medicine</div>
                            <div>Laboratory Tests</div>
                            <div>X-Ray</div>
                            <div>X1</div>
                            <div>Employee</div>
                            <div>Date</div>
                            <div>Action</div>
                        </div>

                        {/* Table Body with vertical scroll */}
                        <div className="overflow-hidden rounded-b-[20px] max-h-[450px] overflow-y-auto">
                            {filteredData.length > 0 ? (
                                filteredData.map((entry, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[60px_1.5fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_60px] items-center p-[20px] md:p-[20px] border-b border-[#f0f0f0] hover:bg-[#dddddd] transition-colors md:text-sm"
                                    >
                                        <div>
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-[13px] h-[13px] border border-[#1D194C] rounded-[4px] bg-white cursor-pointer checked:bg-[#1D194C] ml-[15px] md:ml-[15px]"
                                                checked={checkedRows.includes(index)}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        </div>
                                        <div className="flex items-center gap-[10px] md:gap-[10px] text-[#1D194C]">
                                            <img
                                                src={PFP}
                                                alt={entry.name}
                                                className="w-[32px] h-[32px] md:w-[32px] md:h-[32px] rounded-full object-cover border-0.5"
                                            />
                                            <span>{entry.name}</span>
                                        </div>
                                        <div>{entry.clinical}</div>
                                        <div>{entry.ct}</div>
                                        <div>{entry.mri}</div>
                                        <div>{entry.ultrasound}</div>
                                        <div>{entry.nuclear}</div>
                                        <div>{entry.laboratoryTests}</div>
                                        <div>{entry.xRay}</div>
                                        <div>{entry.X1}</div>
                                        <div>{entry.employee}</div>
                                        <div>{entry.date}</div>
                                        <div>
                                            <button className="w-[20px] h-[20px] bg-[#3A3574] rounded-full border-none flex justify-center items-center cursor-pointer p-0 fill-white">
                                                <BsThreeDotsVertical className="text-white" color="white" />
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

export default Diseases;
