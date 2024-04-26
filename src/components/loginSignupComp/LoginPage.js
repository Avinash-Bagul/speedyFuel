import React, { useDebugValue, useState } from "react";
import { NavLink, Navigate, redirect, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginYupSchema, signUpSchema } from "../../schemas/loginyup";
import { useGlobalSignUpContext } from "../../context/SignUpContext";
import { useGlobalLoginData } from "../../context/LoginContex";

const loginValues = {
    email: "",
    password: "",
}


const LoginPage = () => {
    const { account } = useGlobalSignUpContext();
    const { setLogintrue, loginUser } = useGlobalLoginData();

    const navigate = useNavigate();
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: loginValues,
        validationSchema: loginYupSchema,
        onSubmit: (values) => {
            if (account.length == 0) {
                alert("create account first");
            }
            else {
                var i = 0;
                for (i; i < account.length; i++) {
                    if (account[i].userEmail === values.email && account[i].userPassword === values.password) {
                        alert("welcome " + account[i].userName);
                        setLogintrue(account[i]);
                        navigate('/dashboard');
                        i = -50;
                    }
                }
                console.log(i);
                if (i = account.length) {
                    alert("account not found");
                }
            }
        }
    })


    const viewpass = (e) => {
        const inputpass = document.getElementById("pass");
        if (inputpass.type === "password") {
            inputpass.type = "text";
        }
        else {
            inputpass.type = "password";
        }
    }

    if (account.length === 0) {
        return (
            <>
                <div className="container h-100vh d-flex justify-content-center align-items-center">
                    <div className="msg d-flex flex-column justify-content-center align-items-center">
                        <h2 className=" text-danger text-center">You don't have any account, please Create Account first </h2>
                        <NavLink to='/signup' className="btn btn-orange mt-2">Create Account</NavLink>
                    </div>
                </div>
            </>
        )
    }
    else if (loginUser.length === 1) {
        return (
            <>
                <div className="container h-100vh d-flex justify-content-center align-items-center">
                    <div className="msg d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-success text-center">You are already Logged in, Click botton to go to dashboard</h2>
                        <NavLink to='/dashboard' className="btn btn-orange mt-2">Go to Dashboard</NavLink>
                    </div>
                </div>
            </>
        )
    }
    else {

        return (
            <>
                <div className="container" id="home">
                    <div className="row h-100vh justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-sm-6 col-lg-5 col-xxl-4 ">

                            <div className="login border border-3 h-400px py-3 py-md-0">
                                <form action="" className="mx-2 mx-md-5 h-100 d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
                                    <div className="log-h text-center">
                                        <p className="fs-2 fw-bold">Login</p>
                                    </div>
                                    <div className="fields w-100">
                                        <div className="mt-4">
                                            <div className="w-100">
                                                <input type="email" placeholder="Email" className="w-100 h-40px px-2 "
                                                    id="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} required />
                                                <p className="errors mt-1">{errors.email}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="w-100">
                                                <input type="password" placeholder="Password" className="w-100 h-40px px-2 "
                                                    id="pass"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange} autoComplete="new password"
                                                    onBlur={handleBlur} required />
                                                <p className="errors mt-1">{errors.password}</p>
                                                <div className="mt-3">
                                                    <input type="checkbox" name="showpass" id="showpass" className="" onClick={viewpass} />
                                                    <label htmlFor="showpass" className="ms-2">Show password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <input type="submit" value="Login" className="border border-0 btn btn-orange w-100 h-40px text-light" />
                                            <div className="d-flex justify-content-center align-items-center">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <p>Don't have an account?</p>
                                        <NavLink to="/signup">Sign up</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </>
        )
    }
}

export default LoginPage;