import React from "react";
import { useNavigate } from "react-router-dom";

const OrderData = (props) => {
    const navigate = useNavigate();

    const gotoReport = () => {
        navigate(`/reports/${props.index}`)
    }


    return (
        <>
            {props.status === 'pending' ? (<><div className=" d-grid grid-six-column mx-auto text-center orderBox mt-2 bg-light-green" onClick={gotoReport} id="orderBox" >
                <p className="h-70px d-flex justify-content-center align-items-center d-none d-md-flex">{props.index}</p>
                <p className="h-70px d-flex justify-content-center align-items-center">{props.time}</p>
                <p className="h-70px d-flex justify-content-center align-items-center text-capitalize">{props.fuelN}</p>
                <p className="h-70px d-flex justify-content-center align-items-center">{props.litre} /ltr</p>
                <p className="h-70px d-flex justify-content-center align-items-center">{props.Price} Rs</p>
                <p className="h-70px d-flex justify-content-center align-items-center d-none d-md-flex text-capitalize">{props.location}</p>
            </div></>) : (<><div className=" d-grid grid-six-column mx-auto text-center orderBox mt-2 bg-light-red" onClick={gotoReport} id="orderBox" >
                <p className="h-70px d-flex justify-content-center align-items-center d-none d-md-flex">{props.index}</p>
                <p className="h-70px d-flex justify-content-center align-items-center">{props.time}</p>
                <p className="h-70px d-flex justify-content-center align-items-center text-capitalize">{props.fuelN}</p>
                <p className="h-70px d-flex justify-content-center align-items-center">{props.litre} /ltr</p>
                <p className="h-70px d-flex justify-content-center align-items-center">{props.Price} Rs</p>
                <p className="h-70px d-flex justify-content-center align-items-center d-none d-md-flex text-capitalize">{props.location}</p>
            </div></>)}

        </>
    )
}

export default OrderData;