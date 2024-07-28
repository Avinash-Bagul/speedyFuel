import React from "react";
import { NavLink } from "react-router-dom";

const Section2 = (props) => {
    return (
        <>
            <div className="container h-100vh sec2 py-5 py-md-0 h-mobile-100" id={props.id}>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12 col-md-6" style={{ order:` ${props.sect_order}`}}>
                        <div className=" ">

                            <div className="sub-h">
                                <p className=" fw-semibold fs-5">{props.sub_h} </p>
                            </div>
                            <div className="sect-h py-2">
                                <h2 className="text-orange fw-bold">{props.sect_h}</h2>
                            </div>
                            <div className="sect-para text-justify">
                                <p className=" fw-semibold fs-5">{props.sect_para}</p>
                            </div>
                        </div>
                        <div className="btns mt-3 ">
                            <div className="w-50">
                                <div className="btns d-flex justify-content-between align-items-center">

                                    <NavLink to={props.btn1_to} className="btn btn-hw d-flex justify-content-center align-items-center btn-dark border-radius-0 text-center">{props.btn1}</NavLink>
                                    <NavLink to={props.btn12_to} className="btn btn-hw d-flex justify-content-center align-items-center btn-dark border-radius-0 ">{props.btn2}</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-md-6">
                        <div className="img">
                            <img src={props.img} alt="" className=" img-fluid"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2;