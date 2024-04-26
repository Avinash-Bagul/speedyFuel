import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalLoginData } from "./context/LoginContex";


const Protecting = (prop) => {
    const navigate = useNavigate();
    const {loginUser} = useGlobalLoginData();
    const {Component} = prop;
    
    let islogin = false;
    if(loginUser.length ===  1){
        islogin = true;
    }
    else{
        islogin = false;
    }

    useEffect(()=>{
        if(!islogin){
            navigate("/login");
        }
    }, [islogin])
    return(
        <>
            <Component/>
        </>
    )

}
export default Protecting;