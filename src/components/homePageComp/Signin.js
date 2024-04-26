import React from "react";
import { NavLink } from "react-router-dom";
const Signin = () => {
    return (
        <>
            <div className="container-fluid h-70vh bg-dark signin">
                <div className="sec-c h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="sub-h text-light">
                        <p className=" fw-semibold fs-5">SIMPLYFY</p>
                    </div>
                    <div className="sect-h py-3">
                        <h2 className="text-orange fw-bold">SIGN IN REQUIRED</h2>
                    </div>
                    <div className="sect-para w-50">
                        <p className=" fw-semibold fs-5 text-light text-center">Sign in today to unlock a seamless and personalized experience. With a secure account, you can easily place fuel orders, track your delivery status, access exclusive offers, and manage your preferences all in one place. Sign in now to enjoy the convenience and benefits that SpeedyFuel has to offer. Don't have an account? Sign up today and join our community of satisfied customers</p></div>
                    <div className="btns mt-4 w-50 d-flex justify-content-center">
                        <div className="btns d-flex w-50 justify-content-evenly align-items-center">
                            <NavLink to="/signup" className="btn btn-hw d-flex justify-content-center align-items-center btn-dark border-radius-0 text-center text-center">Sign in</NavLink>
                            <NavLink to="/login" className="btn btn-hw d-flex justify-content-center align-items-center btn-dark border-radius-0 ">Log in</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;
