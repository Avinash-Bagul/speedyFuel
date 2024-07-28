import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalBuyFuel } from "../../../context/BuyFuelContex";

const Reports = () => {
    const { orderRequest, cancelOrder } = useGlobalBuyFuel();
    const { id } = useParams();

    const singleData = orderRequest.filter((val, ind) => {
        return val.orderid == id;
    })


    return (
        <>
            <div className="bg-report pt-0 pt-md-5">

                <div className="container h-100vh py-5 py-md-0">
                    <div className="row h-100 d-flex justify-content-center align-items-center">
                        <div className="col-10 mx-auto h-75 d-flex flex-column justify-content-between">
                            <div className="mb-1 mb-md-4">
                                <h5>Order id: {id}</h5>
                            </div>

                            <div className="row details reportBox d-flex justify-content-b ">
                                <div className="px-2 py-3 px-md-5">

                                    <div className=" w-100 d-flex justify-content-start">
                                        <div><p>Order Status</p></div>
                                    </div>
                                    <div className="row d-flex justify-content-end">
                                        <div className=" col-12 col-lg-6 d-flex w-100 justify-content-end ">
                                            {singleData[0].status === 'pending' ? (<><p className="me-3"></p> <span className="text-capitalize text-success">{singleData[0].status}</span></>) : (<><p className="me-3"></p> <span className="text-capitalize text-danger">{singleData[0].status}</span></>)}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className=" date w-100 d-flex justify-content-start">
                                        <div><p>Order D & T</p></div>
                                    </div>
                                    <div className="row  d-flex justify-content-end">
                                        <div className="col-8 col-lg-6 d-flex justify-content-between dt">
                                            <div className="d-flex justify-content-between">
                                                <p className="me-1 me-md-3">Order Date : </p> <span>{singleData[0].date}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="me-1 me-md-3">Order Time : </p> <span>{singleData[0].time}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className=" date w-100 d-flex justify-content-start">
                                        <div><p>Fuel details</p></div>
                                    </div>
                                    <div className="row  d-flex justify-content-end">
                                        <div className="col-8 col-lg-3 d-flex flex-column justify-content-between text-end h-100px">
                                            <div className="d-flex justify-content-between">
                                                <p className="me-3">Type :</p> <span className="text-capitalize">{singleData[0].fuel}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="me-3">Quantity : </p> <span>{singleData[0].quantity} /ltr</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="me-3">Price : </p> <span>{singleData[0].price} Rs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className=" date w-100 d-flex justify-content-start">
                                        <div><p>Delivery Location</p></div>
                                    </div>
                                    <div className="row d-flex justify-content-end">
                                        <div className="col-8 col-lg-6 d-flex w-100 justify-content-end">
                                            <p className="me-3">Delivery Location:</p> <span className="text-capitalize">{singleData[0].location}</span>
                                        </div>
                                    </div>
                                    <hr />

                                    {singleData[0].status === 'cancelled' ? (<>
                                        <div className=" date w-100 d-flex justify-content-start">
                                            <div><p>Order Cancellation D & T</p></div>
                                        </div>
                                        <div className="row  d-flex justify-content-end">
                                            <div className="col-8 col-lg-6 d-flex justify-content-between dt">
                                                <div className="d-flex justify-content-between">
                                                    <p className="me-1 me-md-3">Cancel Date : </p> <span>{singleData[0].cancelDate}</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="me-1 me-md-3">Cancel Time : </p> <span>{singleData[0].cancelTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr /></>) : null}

                                </div>
                            </div>
                            <div className="row my-3 d-flex justify-content-end px-3">
                                <div className="col-10 col-md-4 d-flex justify-content-end p-0">
                                    <div className="goback">
                                        <NavLink to="/myorders" className="btn btn-outline-primary">Go Back</NavLink>
                                    </div>
                                    <div className="cancel">
                                        {singleData[0].status === 'pending' ? <div className="btn btn-outline-danger ms-2" onClick={() => {
                                            cancelOrder(id)
                                        }}>Cancel Order</div> : null}

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

export default Reports;