import React from "react";
import { NavLink } from "react-router-dom";

const Boxes = (props) => {
    return (
        <>
            <div className="col-8 col-md-5 mx-1 bg-Dark-gray box">
                <div className="d-flex h-100 flex-column justify-content-center align-items-center">
                    <div className=" info d-flex flex-column justify-content-around align-items-center">
                        <p className="fs-4 text-dark">{props.tit}</p>
                        <p className="fs-2 text-dark my-1 my-md-2">{props.num}</p>
                        {props.tit === 'Total Orders' ? (<>
                            <NavLink to={props.goto} className="text-dark "> <p className="fs-6">View details</p></NavLink>
                            </>) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boxes;