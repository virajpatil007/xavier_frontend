import React, { useContext, useEffect, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { MyContext } from "./MyContext";

function WorkArea() {
    console.log("--------------sss-----------------");
    const {apath} = useContext(MyContext);

    const switchCheck = () => {
        console.log("IN SWITCH");
        switch (apath) {
            case "page1":
                return <>{<Page1 />}</>;
                break;
            case "page2":
                return <>{<Page2 />}</>;
                break;
            default:
                return <>ERROR</>;
        }
    };

    return (
        <div>
            WorkArea
            {switchCheck()}
        </div>
    );
}

export default WorkArea;
