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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data =
    //         setActivityData(data);
    //     };
    //
    //     fetchData();
    // }, []);

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



            <div className="LogActivity-body">

                <div className="table-container">
                    <table className="activity-table">
                        {/*<table className="table">*/}
                            <thead>
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        onChange={handleSelectAll}
                                        checked={filteredData.length > 0 && checkedRows.length === filteredData.length}
                                    />
                                </th>
                                <th>Name</th>
                                <th>Activity</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody className="Bodyborder">
                            {filteredData.length > 0 ? (
                                filteredData.map((entry, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={checkedRows.includes(index)}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        </td>
                                        <td className="name-cell">
                                            <img src={entry.profilepicture} alt={entry.name} />
                                            <span>
                                        {entry.name}
                                    </span>
                                        </td>
                                        <td>{entry.activity}</td>
                                        <td>{entry.date}</td>
                                        <td>
                                            <button className="info-btn">
                                                <BsThreeDotsVertical  className="iconinfo"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '1rem' }}>
                                        No activity found.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        {/*</table>*/}
                    </table>
                </div>


            </div>
        </div>
    );
};

export default LogActivity;
