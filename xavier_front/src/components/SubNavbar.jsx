import React, { useEffect, useState } from "react";
import "../css/SubNavbar.css";
import { Link, useLocation } from "react-router-dom";




function SubNavbar() {
    const[logs,setlogs]=useState("")
    const [check, setCheck] = useState(false);
    const type = useLocation();
    // useEffect(() => {
    //     if (type.pathname.includes("/userindex") === true) {
    //         setCheck(true);
    //     } else {
    //         setCheck(false);
    //     }
    // });

    const logout = () => {
        setlogs(localStorage.clear())
      
    };

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#news">News</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                {localStorage.getItem('user') ? (
                    <>
                        <li>
                            <Link to="/login" onClick={logout}>
                                Log Out
                            </Link>
                        </li>
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
