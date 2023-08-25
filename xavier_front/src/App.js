import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Home from "./components/Home";

import { useState } from "react";
import Userindex from "./components/Userindex";
import WorkArea from "./components/WorkArea";
import { MyContext } from "./components/MyContext";
import Protected from "./components/Protected";

function App() {
    const [apath, asetPath] = useState("");
    const [toggle, setToggle] = useState(true);

    return (
        <MyContext.Provider value={{ apath, asetPath,toggle,setToggle }}>
                <Navbar />
                <SubNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/userindex"
                        element={<Protected Component={Userindex} />}
                    >
                        <Route path="workarea" element={<WorkArea />} />
                    </Route>
                    <Route path="/*" element={<Home />} />
                </Routes>
           
        </MyContext.Provider>
    );
}

export default App;
