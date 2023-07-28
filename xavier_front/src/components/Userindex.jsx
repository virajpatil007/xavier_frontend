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
                    marginTop: "9.8%",
                    width: 255,
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
