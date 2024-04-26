import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalSignUpContext } from "../../../context/SignUpContext";
import { useGlobalBuyFuel } from "../../../context/BuyFuelContex";
import { useGlobalLoginData } from "../../../context/LoginContex";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";


const BuyFuel = () => {
    const { account } = useGlobalSignUpContext();
    const { isLogin, loginUser } = useGlobalLoginData();
    const { takeOrder, orderRequest } = useGlobalBuyFuel();
    const [qValue, showMSG] = useState("");

    const navigate = useNavigate();

    const [orderReq, setOrderReq] = useState({
        orderid: 1,
        fuel: "petrol",
        quantity: "1",
        location: "",
        date: "",
        price: "106.90",
        status: "",
    });

    const changeBox = (e) => {
        const boxes = document.querySelectorAll('.fuelbox');
        const box = e.target;
        boxes.forEach(element => {
            element.classList.remove("changefuelbox");
        });
        box.classList.toggle("changefuelbox");
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        

        setOrderReq((preValue) => {
            
            return {
                ...preValue,
                [name]: value
            }

        })
    }


    useEffect(() => {
        let p;

        if (orderReq.fuel === "petrol") {
            p = (orderReq.quantity * 106.90).toFixed(2);
        }
        else if (orderReq.fuel === "diesel") {
            p = (orderReq.quantity * 93.55).toFixed(2);
        }
        else {
            p = (orderReq.quantity * 64.42).toFixed(2);
        }
        // console.log(p);
        setOrderReq((preValue) => {
            return {
                ...preValue,
                price: p,
            }
        })
        
    }, [orderReq.quantity, orderReq.fuel]);


    const handleSubmit = (event) => {
        event.preventDefault();
        if(orderReq.quantity <=0) {
            let msg = "Please Enter minimum 1 ltr";
            showMSG(msg);
        }else{
            takeOrder(orderReq);
            alert("Order Placed ");
            navigate('/myorders')
        }
    }

    return (
        <>
            <div className="container h-100vh buyfuel">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-11 col-md-6 col-sm-6 col-lg-5 col-xxl-4">
                        <div className="buyBox h-500px d-flex flex-column justify-content-evenly align-content-center">
                            <form action="" method="GER" className="h-100 mx-2 mx-md-4 d-flex flex-column justify-content-evenly align-content-center" onSubmit={handleSubmit}>
                                <div className="buy-h">
                                    <p className="fs-3 text-orange fw-bold">SpeedyFuel</p>
                                </div>
                                <div className="boxes d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <label className="fuelbox text-center changefuelbox" htmlFor="petrol" onClick={changeBox}>Petrol</label>
                                        <input type="radio"
                                            id="petrol"
                                            name="fuel"
                                            value="petrol"
                                            onChange={handleChange}
                                            hidden />
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <label className="fuelbox text-center" htmlFor="diesel" onClick={changeBox}>Diesel</label>
                                        <input type="radio"
                                            id="diesel"
                                            name="fuel"
                                            value="diesel"
                                            onChange={handleChange}
                                            hidden />
                                    </div>

                                    <div className="">
                                        <label className="fuelbox text-center" htmlFor="gas" onClick={changeBox}>CNG</label>
                                        <input type="radio"
                                            id="gas"
                                            name="fuel"
                                            value="cng"
                                            onChange={handleChange}
                                            hidden />
                                    </div>

                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="quantity">
                                        <input type="number" placeholder="Enter Quantity" className="h-40px bg-gray px-2"
                                            id=""
                                            name="quantity"
                                            value={orderReq.quantity}
                                            onChange={handleChange}
                                            required />
                                            <p>{qValue}</p>
                                    </div>

                                    <input type="button" value="Schedule" className="btn btn-outline-dark" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="location">
                                        <p className="fs-5">Delivered To:</p>
                                    </div>

                                    <input type="button" value="Use Current Location" className="btn btn-dark" />
                                </div>
                                <div className="location w-100">
                                    <input type="text" placeholder="Enter Your Location" className="w-100 h-40px px-2" required
                                        id="location"
                                        name="location"
                                        value={orderReq.location}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="price text-center">
                                    <p className="fs-2">{orderReq.price} Rs.</p>
                                </div>
                                <input type="submit" value="Buy" className="h-40px bg-orange border-0 text-light" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BuyFuel;