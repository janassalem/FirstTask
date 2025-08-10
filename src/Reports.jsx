import React, { useEffect, useState } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Reports = () => {
    const [reportData, setReportData] = useState([
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
    ]);


    const [searchTerm, setSearchTerm] = useState("");
    const [checkedRows, setCheckedRows] = useState([]);

    useEffect(() => {
        setReportData(reportData);
    }, []);

    const filteredData = reportData.filter((entry) =>
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
        <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] bg-[#FDFDFD] rounded-[20px]">
            {/* Header */}
            <div className="flex flex-row items-center justify-end gap-[7px] p-5 mb-[10px] ">
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

            {/* Table Scroll Wrapper */}
            <div className="p-5 pb-2 overflow-x-auto overflow-y-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-[#3A3575] scrollbar-track-[#D1D1D1] items-center">
                {/* Table */}
                <div className=" ">
                    <div className="min-w-[1400px] flex flex-col border border-[#ddd] rounded-[20px] max-h-[450px] overflow-auto bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] m-[30px]">
                        {/* Table Header */}
                        <div className="grid grid-cols-[60px_1.5fr_2fr_1.5fr_1fr_1fr_1fr_60px] items-center p-[30px] border-b border-[#e2e2e2] bg-[#f5f5f5] font-normal text-[14px] text-[#333] sticky top-0 overflow-auto">
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

                        {/* Table Rows */}
                        {filteredData.length > 0 ? (
                            filteredData.map((entry, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[60px_1.5fr_2fr_1.5fr_1fr_1fr_1fr_60px] items-center p-[20px] border-b border-[#f0f0f0] hover:bg-[#dddddd] transition-colors"
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
                                        <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#3A3574] text-white font-bold">
                                            R
                                        </div>
                                        <span>{entry.name}</span>
                                    </div>
                                    <div>{entry.patientName}</div>
                                    <div>{entry.serialNumber}</div>
                                    <div>{entry.compatibilityRate}</div>
                                    <div>{entry.geneticVariant}</div>
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

export default Reports;