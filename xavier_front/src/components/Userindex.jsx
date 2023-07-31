import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserindexHeader from "./UserindexHeader";
import Userindexname from "./Userindexname";

function Userindex() {
    const navigate = useNavigate();
    const fun = () => {
        console.log("navigate...");
        navigate("/userindex/workarea");
    };
    const [log, setLog] = useState("");

    useEffect(() => {
        setLog(localStorage.getItem("user"));
        console.log("log ", log);
    });

    const check = () => {
        switch (log) {
            case "sanket":
                return (
                    <>
                        <UserindexHeader header="Examination" />
                        <Userindexname name="Page 1" path="page1" />
                        <Userindexname name="Create term" path="page2" />
                        <Userindexname name="page3" path="page3" />
                        <Userindexname name="page3" path="page3" />
                        
                    </>
                    
                );
                break;
                case "virajpatil007":
                    return (
                        <>
                            <UserindexHeader header="Examination" />
                            <Userindexname name="Page 1" path="page1" />
                            <Userindexname name="Create term" path="page2" />
                            <Userindexname name="page3" path="page3" />
                            <Userindexname name="page3" path="page3" />
                            
                        </>
                        
                    );
                    break;
        }
    };
    return (
        <>
            <Outlet />
            <div
                style={{
                    marginTop: "0.1%",
                    width: '17%',
                    background: "white",
                    borderRight: "none",
                    height: "90%",
                    maxHeight: "100%",
                    backgroundColor: "blue",
                }}
            >
                <h1>USERINDEX</h1>
                {check()}
            </div>
        </>
    );
}

export default Userindex;
