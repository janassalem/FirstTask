import React, { useState } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import PFP from "./assets/PFP.png";

const Reports = () => {
    const reportData = [
        {
            name: "Report One",
            patientName: "Bahr Adam",
            serialNumber: "1542154511",
            compatibilityRate: "90%",
            geneticVariant: "Gerix",
            date: "01/02/2025",
        },
        {
            name: "Report 0212",
            patientName: "Bahr Adam",
            serialNumber: "1542154511",
            compatibilityRate: "90%",
            geneticVariant: "Gerix",
            date: "01/02/2025",
        },
        {
            name: "Report 0212",
            patientName: "Bahr Adam",
            serialNumber: "1542154511",
            compatibilityRate: "90%",
            geneticVariant: "Gerix",
            date: "01/02/2025",
        },
        {
            name: "Report 0212",
            patientName: "Bahr Adam",
            serialNumber: "1542154511",
            compatibilityRate: "90%",
            geneticVariant: "Gerix",
            date: "01/02/2025",
        },
        {
            name: "Report 0212",
            patientName: "Bahr Adam",
            serialNumber: "1542154511",
            compatibilityRate: "90%",
            geneticVariant: "Gerix",
            date: "01/02/2025",
        },

    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [checkedRows, setCheckedRows] = useState([]);

    const filteredData = reportData.filter(
        (entry) =>
            entry.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="flex flex-col md:flex-row items-center justify-end gap-3 p-4 md:p-5 mb-4 mx-auto md:mx-[55px]">
                {/* Search Bar */}
                <div className="bg-[#F8F8F8] text-[#1D194C] shadow-md rounded-[90px] p-2 flex items-center w-full max-w-[300px] h-10">
                    <CiSearch className="text-[#1D194C] text-lg" />
                    <input
                        type="text"
                        placeholder="Search by patient name or serial number"
                        className="bg-[#F8F8F8] border-none text-[#1D194C] text-xs md:text-sm outline-none w-full pl-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Export Button */}
                <button className="bg-[#F8F8F8] text-[#707070] shadow-md border-none px-4 py-2 rounded-[90px] cursor-pointer w-full md:w-[120px] h-10 flex items-center justify-center gap-2 text-sm">
                    Export
                    <CiExport className="text-[#1D194C] text-lg" />
                </button>
            </div>

            {/* Table Container */}
            <div className="p-5 pb-2 w-full max-w-[1400px] mx-auto rounded-lg">
                {/* Scroll Wrapper */}
                <div className="overflow-x-auto md:overflow-auto  rounded-[20px] scrollbar-thin scrollbar-thumb-[#1D194C] scrollbar-track-[#1D194C] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]">
                    {/* Table Wrapper */}
                    <div className="min-w-[1400px] md:min-w-[1400px] rounded-[20px] overflow-hidden bg-white">
                        {/* Table Header */}
                        <div className="sticky top-0 z-10 grid grid-cols-[60px_1.5fr_2fr_1.5fr_1fr_1fr_1fr_60px] items-center p-[30px] md:p-[30px] border-b border-[#e2e2e2] bg-[#f5f5f5] font-normal text-[14px] text-[#333] rounded-t-[20px]">
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
                            <div>Patient Name</div>
                            <div>Serial Number</div>
                            <div>Compatibility Rate</div>
                            <div>Genetic Variant</div>
                            <div>Date</div>
                            <div>Action</div>
                        </div>

                        {/* Table Body */}
                        <div className="overflow-hidden rounded-b-[20px] max-h-[450px] overflow-y-auto">
                            {filteredData.length > 0 ? (
                                filteredData.map((entry, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[60px_1.5fr_2fr_1.5fr_1fr_1fr_1fr_60px] items-center p-[20px] md:p-[20px] border-b border-[#f0f0f0] hover:bg-[#dddddd] transition-colors md:text-sm"
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
                                        <div>{entry.patientName}</div>
                                        <div>{entry.serialNumber}</div>
                                        <div>{entry.compatibilityRate}</div>
                                        <div>{entry.geneticVariant}</div>
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

export default Reports;
