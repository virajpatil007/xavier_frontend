import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Component }) {
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("user");
        if (!login) {
            navigate("/login");
        }
    });
    return (
        <div>
            <Component />
        </div>
    );
}

export default Protected;
