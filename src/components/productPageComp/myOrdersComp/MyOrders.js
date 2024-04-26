import React, { useState } from "react";
import OrderData from "./OrderData";
import { useGlobalBuyFuel } from "../../../context/BuyFuelContex";

const MyOrder = () => {
    const { orderRequest } = useGlobalBuyFuel();
    const [searchdata, setSearData] = useState(orderRequest);

    

    const getSearch = (e) => {

        const query = e.target.value;
        if (query === "") {
            setSearData(orderRequest);
        }
        else {
            
            const gettingData = orderRequest.filter((val, index) => {
                return (val.date === query || val.fuel === query || val.location === query || val.price === query || val.quantity === query || val.status === query)
            })
            setSearData(gettingData);
        }

    }

    const dontSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <>
            <div className="container myorders">
                <div className="row h-100">
                    <div className="col-12 mx-auto h-100 ">
                        <div className="row pt-5 my-5">
                            <form className="col-10 col-md-5 mx-auto py-xxl-5">
                                <input type="text" name="search" id="search" className="w-100 h-40px px-3" placeholder="Search order" onChange={getSearch} onSubmit={dontSubmit}/>
                            </form>
                            <div className="col-11 mx-auto h-70 my-5 pb-5 p-0 ">
                                <div className=" d-grid grid-six-column mx-auto text-center">
                                    <p className="h-40 d-flex justify-content-center align-items-center d-none d-md-block">Sr no.</p>
                                    <p className="h-40 d-flex justify-content-center align-items-center">Date</p>
                                    <p className="h-40 d-flex justify-content-center align-items-center">Fuel</p>
                                    <p className="h-40 d-flex justify-content-center align-items-center">Quantity</p>
                                    <p className="h-40 d-flex justify-content-center align-items-center">Price</p>
                                    <p className="h-40 d-flex justify-content-center align-items-center d-none d-md-block">Delivery Location</p>

                                </div>
                                <hr />

                                {
                                    searchdata.map((val, key) => {
                                        return (
                                            <OrderData
                                                key={key}
                                                index={val.orderid}
                                                location={val.location}
                                                time={val.date}
                                                fuelN={val.fuel}
                                                litre={val.quantity}
                                                Price={val.price}
                                                status={val.status}
                                            />
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOrder;