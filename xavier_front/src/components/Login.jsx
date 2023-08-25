import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//try
function Login() {
    let [user, setuser] = useState([]);
    const navigate = useNavigate();
    let initialvalue = {
        email: "",
        password: "",
    };

    let [data, setdata] = useState({
        ...initialvalue,
    });

    let saveUser = async (event) => {
        event.preventDefault();
        // console.log("save user");
        // setuser([...user,{...data}])

        let result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });
        result = await result.json();
        console.log(result.username);
        if (result.username !== "password dont match") {
            localStorage.setItem("user", result.username);
            console.log("true l" ,result.username );
            navigate("/userindex");
        } else {
            console.log("false");
            localStorage.clear();
        }
        setdata({
            ...initialvalue,
        });
    };

    let inputChange = (event) => {
        let name = event.target.name;
        setdata({ ...data, [name]: event.target.value });
    };

    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{ borderRadius: "1rem" }}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">
                                            Login
                                        </h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and
                                            password!
                                        </p>
                                        <form onSubmit={saveUser}>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    onChange={inputChange}
                                                    id="email"
                                                    className="form-control form-control-lg"
                                                    value={data.email}
                                                />
                                                <label
                                                    className="form-label"
                                                    for="email"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    onChange={inputChange}
                                                    name="password"
                                                    id="password"
                                                    value={data.password}
                                                    className="form-control form-control-lg"
                                                />
                                                <label
                                                    className="form-label"
                                                    for="password"
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            <p className="small mb-5 pb-lg-2">
                                                <a
                                                    className="text-white-50"
                                                    href="#!"
                                                >
                                                    Forgot password?
                                                </a>
                                            </p>

                                            <button
                                                className="btn btn-outline-light btn-lg px-5"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </form>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-facebook-f fa-lg"></i>
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-google fa-lg"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <a
                                                href="#!"
                                                className="text-white-50 fw-bold"
                                            >
                                                Sign Up
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
