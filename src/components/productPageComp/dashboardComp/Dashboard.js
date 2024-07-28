import React from "react";
import Boxes from "./Boxes";
import { useGlobalBuyFuel } from "../../../context/BuyFuelContex";


const Dashboard = () => {

    const { orderRequest } = useGlobalBuyFuel();

    // console.log(orderRequest);
    const pending = orderRequest.filter((value, index, orderRequest) => {
        return value.status === "pending";
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
                <div className="container h-100vh dash" >
                    <div className="row gap-md-5 gap-0 gap-md-5 h-100 boxjusti align-content-center align-content-start mx-0 mx-lg-5">
                        <div className="dashbo mb-3 mb-md-0">
                            <h3>Dashboard :</h3>
                        </div>
                        {/* <div className="col-11 d-flex flex-md-row flex-column justify-content-between  align-content-center"> */}

                            <Boxes
                                tit="Total Orders"
                                num={orderRequest.length}
                                goto={'/myorders'}
                            />

                            <Boxes
                                tit="Pending"
                                num={pending.length}
                            />

                            <Boxes
                                tit="Cancelled"
                                num={cancelled.length}
                            />
                        {/* </div> */}


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