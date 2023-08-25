import React, { useContext, useEffect, useState } from "react";
import "../css/SubNavbar.css";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "./MyContext";
import { list } from "../constant/Constant";

function SubNavbar() {
    const [logs, setlogs] = useState("");
    const [check, setCheck] = useState(false);
    const {toggle,setToggle} = useContext(MyContext)
    const type = useLocation();
    // useEffect(() => {
    //     if (type.pathname.includes("/userindex") === true) {
    //         setCheck(true);
    //     } else {
    //         setCheck(false);
    //     }
    // });

    const logout = () => {
        setlogs(localStorage.clear());
    };

    return (
        <div>
            <ul>
                {localStorage.getItem("user") ? (
                    <>
                        <li>
                            <button onClick={() => {setToggle(!toggle)}}><img src={list}></img></button>
                        </li>
                    </>
                ) : (
                    ""
                )}
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#news">News</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                {localStorage.getItem("user") ? (
                    <>
                        {/* <li> */}
                        <Link
                            to="/login"
                            style={{
                                color: "white",
                                textAlign: "center",
                                marginTop: 2,
                                float: "right",
                                marginRight: 20,
                                textDecoration: "none",
                            }}
                            onClick={logout}
                        >
                            Log out
                        </Link>
                        <p
                            style={{
                                color: "white",
                                textAlign: "center",
                                marginTop: 2,
                                float: "right",
                                marginRight: 20,
                            }}
                        >
                            {localStorage.getItem("user")}
                        </p>
                        {/* <li> */}

                        {/* </li>    */}
                        {/* </li> */}
                    </>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default SubNavbar;
