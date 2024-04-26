import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-footer">

                <div className="container h-70vh d-flex flex-column justify-content-evenly ">
                    <div className="logo">

                    </div>
                    <div className="row w-100 text-uppercase d-flex justify-content-between align-items-center">
                        <div className="col-12 col-md-3">
                            <div className="row">
                                <div className="col-12">
                                    <div className="address">
                                        <div className="adlogo">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="fs-6 text-orange">Address :</div>
                                        <div className="adres text-light fs-6" id="ad">
                                            ABC Apartment, Amalner
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <div className="email">
                                            <div className="emaillogo">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="fs-6 text-orange">Email :</div>
                                            <div className="adres text-light fs-6" id="em">
                                                speedyfuel@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <div className="mobile">
                                            <div className="mblogo">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="fs-6 text-orange">Mobile No. :</div>
                                            <div className="adres text-light fs-6" id="mb">
                                                5415654856
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 h-100  d-flex flex-column justify-content-evenly mt-3 mt-md-0">
                            {/* <NavLink to="/">Home</NavLink> */}
                            <a href="/" className="fs-6 text-light">Home</a>
                            <a href="/dashboard" className="fs-6 text-light">Buy Fuel</a>
                            <a href="/login" className="fs-6 text-light">Log in</a>
                            <a href="/contactus" className="fs-6 text-light">Contact us</a>
                        </div>

                        <div className="col-12 col-md-4 h-100 d-flex flex-column justify-content-center ">
                            <div className="h text-light d-flex justify-content-end">
                                <p>Our Newsletter</p>
                            </div>
                            <div className="inp py-3">
                                <input type="text" className="bg-transparent w-100 fs-5 text-light sub_border" />
                            </div>
                            <div className="subc d-flex justify-content-end">
                                <input type="button" value="Subscribe" className="btn btn-hw btn-dark" />
                            </div>
                        </div>
                    </div>

                    <div className="copy pt-5 mt-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6">
                                <p className="fs-6 fs-md-5 text-light">@ 2024 speedyfuel, all right reserved, Design and Developed by Avinash</p>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <a href="#home" className="btn btn-hw d-flex justify-content-center align-items-center btn-dark border-radius-0 ">Top</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;