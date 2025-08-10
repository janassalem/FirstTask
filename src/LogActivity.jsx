import React, { useEffect, useState } from 'react';
import './LogActivity.css';
import { CiSearch, CiExport } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import PFP from "./assets/PFP.png";


const LogActivity = () => {
    const [activityData, setActivityData] = useState([
        { name: "Bahr Adam", activity: "Deleted a report", date: "2025-08-06", profilepicture: PFP},
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP  },
        { name: "Bahr Adam", activity: "Deleted a report", date: "2025-08-06", profilepicture: PFP},
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP  },
        { name: "Bahr Adam", activity: "Deleted a report", date: "2025-08-06", profilepicture: PFP},
        { name: "Salim Khan", activity: "Updated database", date: "2025-08-05", profilepicture: PFP  },
    ])
    const [searchTerm, setSearchTerm] = useState('');
    const [checkedRows, setCheckedRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data =
                setActivityData(data);
        };

        fetchData();
    }, []);

    const filteredData = activityData.filter(entry =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCheckboxChange = (index) => {
        if (checkedRows.includes(index)) {
            setCheckedRows(checkedRows.filter(i => i !== index));
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
        <div className="LogActivity">
            <div className="LogActivity-header">



                <div className="searchbar">
                    <CiSearch className="iconlog" />
                    <input
                        type="text"
                        placeholder="Search by patient name or serial number"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <button className="export">
                    Export
                    <CiExport className="iconlog" />
                </button>
            </div>



            {/*<div className="LogActivity-body">*/}

            <div className="scroll-wrapper">


                <div className="grid-table">
                    <div className="table-content">
                        <div className="grid-header">
                            <div className="grid-cell">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={handleSelectAll}
                                    checked={filteredData.length > 0 && checkedRows.length === filteredData.length}
                                />
                            </div>
                            <div className="grid-cell">Name</div>
                            <div className="grid-cell">Activity</div>
                            <div className="grid-cell">Date</div>
                            <div className="grid-cell">Action</div>
                        </div>

                        {filteredData.length > 0 ? (
                            filteredData.map((entry, index) => (
                                <div className="grid-row" key={index}>
                                    <div className="grid-cell">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={checkedRows.includes(index)}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    </div>
                                    <div className="grid-cell name-cell">
                                        <img src={entry.profilepicture} alt={entry.name} />
                                        <span>{entry.name}</span>
                                    </div>
                                    <div className="grid-cell">{entry.activity}</div>
                                    <div className="grid-cell">{entry.date}</div>
                                    <div className="grid-cell">
                                        <button className="info-btn">
                                            <BsThreeDotsVertical className="iconinfo" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="grid-row empty-row">
                                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '1rem' }}>
                                    No activity found.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>




            {/*</div>*/}
        </div>
    );
};

export default LogActivity;