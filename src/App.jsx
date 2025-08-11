import './Navbar.jsx'
// import './LogActivity.jsx'
import './App.css'
import Navbar from "./Navbar.jsx";
import Authorities from "./Authorities.jsx";
import Diseases from "./Diseases.jsx";
import Users from "./Users.jsx";

import LogActivity from "./LogActivity.jsx";
import Reports from "./Reports.jsx";


function App() {


  return (
    <>
        <div className="App">

            <Navbar/>
            {/*<Diseases/>*/}
            {/*<LogActivity/>*/}
            <Users/>
            {/*<Reports/>*/}
            {/*<Authorities/>*/}
        </div>

    </>
  )
}

export default App
