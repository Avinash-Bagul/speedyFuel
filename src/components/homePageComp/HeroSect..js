import React from "react";
import heroBg from '../../imges/heroBg3.jpg';
import { NavLink } from "react-router-dom";

const HeroSect = () => {
    return (
        <>
            <div className="container-fluid p-0 h-100vh hero bg-hero-mobile bg-light-dark h-mobile-100" id="home">
                <div className="row mx-2 mx-md-0 ">
                    <div className="p-0">
                        <div className="img d-none d-md-block">
                            <img src={heroBg} alt="" className="w-100" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} />
                        </div>

                        <div className="container mt-2 mx-auto h-100vh d-flex justify-content-between align-items-center ">
                            <div className="row">

                                <div className="col-12 col-md-7 col-xxl-6 mb-5 mb-md-0">
                                    <div className="h-c">
                                        <div className="sub-h">
                                            <p className="fs-5 text-uppercase fw-semibold text-mobile-light">fuel is over, Dont worry we are here</p>
                                        </div>
                                        <div className="h my-3 my-md-0">
                                            <h1 className="text-orange fw-bold">SPEEDYFUEL</h1>
                                        </div>
                                        <div className="para fw-semibold fs-5 text-justify text-mobile-light">
                                            <p>Get fuel delivered to your doorstep with ease. SpeedyFuel is your go-to online platform for purchasing fuel whenever you need it. - simply browse our selection, select your preferred fuel type, and have it conveniently delivered to your location. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5 my-3 my-md-0 col-xxl-6 d-flex justify-content-center justify-content-md-end align-items-center">
                                    <div className="w-50 d-flex justify-content-end ">

                                        <div className="w-100 btns d-flex flex-md-row justify-content-between align-items-center">
                                            <NavLink to="/" className="btn btn-hw d-flex justify-content-center align-items-center btn-orange text-light me-4 ">More Info</NavLink>
                                            <NavLink to="/" className="btn btn-hw d-flex justify-content-center align-items-center btn-dark">----</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSect;