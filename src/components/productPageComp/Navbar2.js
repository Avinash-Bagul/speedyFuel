import React from "react";

const Navbar2 = () => {

    const changeActive = (e) => {
        const nav_item = document.querySelectorAll(".nav-item");
        const currentLi = e.target;
        nav_item.forEach(element => {
            element.classList.remove("nav2-active");
        });
        currentLi.classList.toggle("nav2-active");
    }
    return (
        <>
            <div className="nav navbar2 col-11 position-absolute bottom-0 w-100">
                <div className="container bg-dark h-80px">
                    <ul type="none" className="d-flex h-100 justify-content-evenly align-items-center">
                        <li><a href="/dashboard" className="nav2-active nav-item"  onClick={changeActive}>DASHBORD</a></li>
                        <li><a href="/buyfuel" className="nav-item"  onClick={changeActive}>BUY FUEL</a></li>
                        <li><a href="/myorder" className="nav-item"  onClick={changeActive}>MY ORDERS</a></li>
                        <li><a href="/report" className="nav-item"  onClick={changeActive}>REPORTS</a></li>
                        <li><a href="/dashborad" className="nav-item" onClick={changeActive}><img src="" alt="profile img" /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar2;