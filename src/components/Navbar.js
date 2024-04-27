import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalLoginData } from "../context/LoginContex";
import profileImg from '../imges/profile.png';

const Navbar = () => {
    const { loginUser} = useGlobalLoginData();
    const { logOut } = useGlobalLoginData();

    window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);
        const navbar = document.getElementById("fixed-nav");

        if (window.scrollY >= 300) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg navcss w-100 shadow py-3 py-md-0" id="fixed-nav">
                <div className="container">
                    <NavLink className="navbar-brand d-flex" href="#">
                        <p className="text-orange fw-bold fs-m-2">SpeedyFuel</p>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-400px py-3 py-md-0 flex-grow-0 nav-mobile" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-between align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-dark" aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link activeNav dropdown-toggle text-dark" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Product
                                </NavLink>
                                <ul className="dropdown-menu position-relative top-50 bg-black px-4 text-center text-md-start" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/dashboard">Dashboard</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/buyfuel">Buy Fuel</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/myorders">My Orders</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link activeNav text-dark" aria-current="page" to="/contactus" >Contact us</NavLink>
                            </li>
                            {loginUser.length === 1 ? <li className="nav-item position-relative">
                                <NavLink className="nav-link activeNav dropdown-toggle text-dark" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <img src={profileImg} alt="" className="img-fluid profileImg" />
                                </NavLink>
                                <ul className="dropdown-menu profile bg-black px-4 text-center " aria-labelledby="navbarDropdown">
                                    <li><button className="dropdown-item text-light" onClick={() => {
                                        logOut();
                                    }}>Log Out</button></li>

                                </ul>

                            </li> : <li className="nav-item">
                                <NavLink className="nav-link activeNav text-dark" to="/login" >Login</NavLink>
                            </li>}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;