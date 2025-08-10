import './Navbar.jsx'
import './LogActivity.jsx'
import './App.css'
import Navbar from "./Navbar.jsx";
import Diseases from "./Diseases.jsx";
// import LogActivity from "./LogActivity.jsx";


function App() {


  return (
    <>
        <div className="App">

            <Navbar/>
            {/*<LogActivity/>*/}
            <Diseases/>
        </div>

    </>
  )
}

export default App
