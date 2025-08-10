import React, { useEffect, useState } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import PFP from "./assets/PFP.png";

const Diseases = () => {
    const [activityData, setActivityData] = useState([
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
    ]);


    const [searchTerm, setSearchTerm] = useState("");
    const [checkedRows, setCheckedRows] = useState([]);

    useEffect(() => {
        setActivityData(activityData);
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
        <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] ">
            {/* Header */}
            <div className="flex flex-row items-center justify-end gap-[7px] p-5 mb-[10px] ">
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

            {/* Table Scroll Wrapper */}
            <div className="p-5 pb-2 overflow-x-auto overflow-y-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-[#3A3575] scrollbar-track-[#D1D1D1] items-center">
                {/* Table */}
                <div className=" ">
                    <div className="min-w-[1400px] flex flex-col border border-[#ddd] rounded-[20px] max-h-[450px] overflow-auto bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] m-[30px]">
                        {/* Table Header */}
                        <div className="grid grid-cols-[60px_1.5fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_60px] items-center p-[30px] border-b border-[#e2e2e2] bg-[#f5f5f5] font-normal text-[14px] text-[#333] sticky top-0 overflow-auto">
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

                        {/* Table Rows */}
                        {filteredData.length > 0 ? (
                            filteredData.map((entry, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[40px_1.5fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_60px] items-center p-[20px] border-b border-[#f0f0f0] hover:bg-[#dddddd] transition-colors"
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
                                            <BsThreeDotsVertical className="text-white" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="grid grid-cols-9 justify-center bg-[#fafafa] text-[14px] text-[#999]">
                                <div className="col-span-9 text-center p-[9px]">No data found.</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diseases;
