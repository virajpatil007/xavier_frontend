import React from "react";

function UserindexHeader({ header }) {
    return (
        <div
            style={{
                minHeight: 35,
                background: "skyblue",
                boxShadow: "none",
                padding: 5,
                // display: "flex",
                // justifyContent: "center",
            }}
        >
            {" "}
            {header}
        </div>
    );
}

export default UserindexHeader;
