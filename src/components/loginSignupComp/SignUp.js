import React, { useState } from "react";
import { NavLink, json, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/signupYup";
import { useGlobalSignUpContext } from "../../context/SignUpContext";


const signupValues = {
    userName: "",
    userMobile: "",
    userEmail: "",
    userLocation: "",
    userPassword: "",
    confirmedPass: ""
}

const SignUp = () => {

    const { CreateAccount, account } = useGlobalSignUpContext();
    const navigate = useNavigate();

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: signupValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            // setAccountDetails(values);
            CreateAccount(values);
            alert("Account created ");

            navigate('/login');
        }
    })

    const viewpass = (e) => {
        const inputpass = document.getElementById("userPassword");
        const inputConfirmed = document.getElementById("confirmedPass")
        if (inputpass.type === "password") {
            inputpass.type = "text";
            inputConfirmed.type = "text";
        }
        else {
            inputpass.type = "password";
            inputConfirmed.type = "password";
        }
    }

    return (
        <>
            <div className="container">
                <div className="row h-100vh justify-content-center align-items-center">
                    <div className="col-10 col-md-6 col-sm-6 col-lg-5 col-xxl-4">
                        <div className="login border border-3 ">
                            <form action="" className="my-3 mx-2 mx-md-5 h-100 d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
                                <div className="log-h text-center">
                                    <p className="fs-2 fw-bold">Sign up</p>
                                </div>
                                <div className="fields w-100">
                                    <div className="mt-4">
                                        <div className="w-100">
                                            <input type="text" placeholder="Enter User Name" className="w-100 h-40px px-2 "
                                                id="userName"
                                                name="userName"
                                                value={values.userName}
                                                onChange={handleChange}
                                                required
                                                autoComplete="off" />
                                            <p className="errors mt-1">{errors.userName}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="w-100">
                                            <input type="email" placeholder="Email" className="w-100 h-40px px-2 "
                                                id="userEmail"
                                                name="userEmail"
                                                value={values.userEmail}
                                                onChange={handleChange}
                                                required
                                                autoComplete="off" />
                                            <p className="errors mt-1">{errors.userEmail}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="w-100">
                                            <input type="password" placeholder="Password" className="w-100 h-40px px-2 "
                                                autoComplete="new password"
                                                id="userPassword"
                                                name="userPassword"
                                                value={values.userPassword}
                                                onChange={handleChange}
                                                required />
                                            <p className="errors mt-1">{errors.userPassword}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="w-100">
                                            <input type="password" placeholder="Confirmed Password" className="w-100 h-40px px-2 "
                                                autoComplete="confirmed password"
                                                id="confirmedPass"
                                                name="confirmedPass"
                                                value={values.confirmedPass}
                                                onChange={handleChange}
                                                required />

                                            <p className="errors mt-1">{errors.confirmedPass}</p>
                                            <div className="mt-3">
                                                <input type="checkbox" name="showpass" id="showpass" className="" onClick={viewpass} />
                                                <label htmlFor="showpass" className="ms-2">Show password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <input type="submit" value="Sign up" className="border border-0 btn btn-orange w-100 h-40px text-light" />
                                        <div className="d-flex justify-content-center align-items-center">
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3">
                                    <p>Already have an account?</p>
                                    <NavLink to="/login">Login</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default SignUp;