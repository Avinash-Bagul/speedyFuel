import React from "react";
import sect1 from "../../imges/sect1.png"
import sec2img from "../../imges/sect2.png";
import HeroSect from "./HeroSect.";
import Section2 from "./Section2";
import Signin from "./Signin";
import Contact from "./Contact";
const Home = () => {

    return (
        <>
            <HeroSect />
            <Section2
                id="#sec1"
                sect_order="0"
                sub_h="SIMPLIFY"
                sect_h="FAST DELIVERY"
                sect_para="Experience lightning-fast fuel delivery with SpeedyFuel. Our dedicated team ensures that your fuel order reaches you promptly. With our efficient logistics system and strategic partnerships, we guarantee quick and reliable delivery of fuel right to your doorstep."
                btn1="More"
                btn2="Log in"
                btn2_to='/login'
                btn1_to="#sec2"
                img={sect1}
            />

            <Section2
                id="#sec2"
                sect_order="1"
                sub_h=""
                sect_h="RELIABLE SELLERS"
                sect_para="Trust only the best. SpeedyFuel partners with industry-leading fuel providers to ensure that you receive high-quality and reliable fuel every time. Our vast network of sellers undergoes rigorous screening and quality checks. Experience worry-free fueling with SpeedyFuel - your go-to platform for reputable fuel sellers."
                btn1="Buy Fuel"
                btn2="More"
                btn1_to="/buyfuel"
                btn2_to="/"
                img={sec2img}
            />


            <Signin />

            <Contact />
        </>
    )
}

export default Home;