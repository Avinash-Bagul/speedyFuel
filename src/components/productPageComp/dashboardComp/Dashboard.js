import React from "react";
import Boxes from "./Boxes";
import { useGlobalLoginData } from "../../../context/LoginContex";
import { useNavigate } from "react-router-dom";
import { useGlobalSignUpContext } from "../../../context/SignUpContext";
import { useGlobalBuyFuel } from "../../../context/BuyFuelContex";


const Dashboard = () => {
    const navigation = useNavigate();
    const { account } = useGlobalSignUpContext();
    const { isLogin } = useGlobalLoginData();
    const { orderRequest } = useGlobalBuyFuel();

    console.log(orderRequest);
    const confirmed = orderRequest.filter((value, index, orderRequest) => {
        return value.status === "confirmed";
    })

    const delivered = orderRequest.filter((value, index, orderRequest) => {
        return value.status === "delivered";
    })

    const cancelled = orderRequest.filter((value, index, orderRequest) => {
        return value.status === "cancelled";
    })

    return (
        <>
            <div className="dashbord py-0 py-md-5 my-md-0">
                <div className="container h-100vh" >
                    <div className="row gap-3 gap-md-5 h-100 justify-content-center align-content-center">
                        <Boxes
                            tit="Total Orders"
                            num={orderRequest.length}
                            goto={'/myorders'}
                        />
                        <Boxes
                            tit="Confirmed"
                            num={confirmed.length}
                        />

                        <Boxes
                            tit="Cancelled"
                            num={cancelled.length}
                        />

                        <Boxes
                            tit="Delivered"
                            num={delivered.length}
                        />

                    </div>


                </div>
            </div>
        </>
    )
}


export default Dashboard;