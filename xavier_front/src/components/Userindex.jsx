import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserindexHeader from "./UserindexHeader";
import Userindexname from "./Userindexname";
import { MyContext } from "./MyContext";
import Offcanvas from "react-bootstrap/Offcanvas";

function Userindex() {
    const navigate = useNavigate();
    const { toggle } = useContext(MyContext);
    const fun = () => {
        console.log("navigate...");
        navigate("/userindex/workarea");
    };
    const [log, setLog] = useState("");

    useEffect(() => {
        setLog(localStorage.getItem("user"));
        console.log("log ", log);
        console.log("TOGGLE ", toggle);
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
                        <Userindexname name="Page 1" path="page1" />
                        <Userindexname name="Create term" path="page2" />
                        <Userindexname name="page3" path="page3" />
                        <Userindexname name="Page 1" path="page1" />
                        <Userindexname name="Create term" path="page2" />
                        <Userindexname name="page3" path="page3" />
                        <Userindexname name="Page 1" path="page1" />
                        <Userindexname name="Create term" path="page2" />
                        <Userindexname name="page3" path="page3" />
                        <Userindexname name="Page 1" path="page1" />
                        <Userindexname name="Create term" path="page2" />
                        <Userindexname name="page3" path="page3" />
                        <Userindexname name="Page 1" path="page1" />
                        <Userindexname name="Create term" path="page2" />
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
                    </>
                );
                break;
        }
    };
    return (
        <>
            <Outlet />

            <Offcanvas
                show={toggle}
                scroll={true}
                backdrop={false}
                style={{ marginTop: 150,
                width: "17%",
                background: "white",
                borderRight: "none",
                height: 607,
                maxHeight: "100%",
                backgroundColor: "blue", }}
            >
                <Offcanvas.Header>
                    <Offcanvas.Title>USERINDEX</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{check()}</Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Userindex;
