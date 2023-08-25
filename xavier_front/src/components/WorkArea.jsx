import React, { useContext, useEffect, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { MyContext } from "./MyContext";
import Page3 from "./Page3";

function WorkArea() {
    console.log("--------------sss-----------------");
    const { apath,toggle } = useContext(MyContext);

    const switchCheck = () => {
        console.log("IN SWITCH");
        switch (apath) {
            case "page1":
                return <>{<Page1 />}</>;
                break;
            case "page2":
                return <>{<Page2 />}</>;
                break;
            case "page3":
                return <>{<Page3 />}</>;
                break;
            default:
                return <>ERROR</>;
        }
    };

    return (
        <div style={toggle ? {background: "red", width: "83%", float: "right"} : { background: "red", width: "100%", float: "right" }} >
            WorkArea
            {switchCheck()}
        </div>
    );
}

export default WorkArea;
