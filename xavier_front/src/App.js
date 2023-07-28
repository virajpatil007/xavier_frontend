import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Home from "./components/Home";

import { useEffect, useState } from "react";
import Userindex from "./components/Userindex";
import WorkArea from "./components/WorkArea";
import { MyContext } from "./components/MyContext";

function App() {
    
    const [apath,asetPath] = useState('')

    return (
        <MyContext.Provider value={{apath,asetPath}}>
        <div className="App">
            <Navbar />
            <SubNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/userindex" element={<Userindex />}>
                    <Route path="workarea" element={<WorkArea />} />
                </Route>
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
        </MyContext.Provider>
    );
}

export default App;
