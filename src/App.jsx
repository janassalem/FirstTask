import './Navbar.jsx'
import './App.css'
import Navbar from "./Navbar.jsx";
import Authorities from "./Authorities.jsx";
import Diseases from "./Diseases.jsx";
import Users from "./Users.jsx";
import LogActivity from "./LogActivity.jsx";
import Reports from "./Reports.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/authorities" element={<Authorities />} />
                    <Route path="/diseases" element={<Diseases />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/log-activity" element={<LogActivity />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/overview" element={<overview />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;