import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Home from "./components/Home";
import { useEffect } from "react";
import Userindex from "./components/Userindex";
import Mainarea from "./components/Mainarea";

function App() {
  useEffect(() => {
    localStorage.clear();
},[])
    return (
        <div className="App">
          
            <Navbar />
            <SubNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/userindex"
                    element={<Userindex />}
                >
                    <Route
                        path="mainarea"
                        element={<Mainarea />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
