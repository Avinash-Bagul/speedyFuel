import React from "react";

const Contact = () => {
    return (
        <>
            <div className="container h-100vh contact h-mobile-100" id="contact">
                <div className="row h-100 justify-content-center align-items-center py-4">
                    <div className="col-12 col-md-6">
                        <div className=" ">

                            <div className="sub-h">
                                <p className=" fw-semibold fs-5"></p>
                            </div>
                            <div className="sect-h py-2">
                                <h2 className="text-orange fw-bold">CONTACT US</h2>
                            </div>
                            <div className="sect-para text-justify">
                                <p className=" fw-semibold fs-5">Need assistance? Our dedicated customer support team is here to help. Whether you have questions, feedback, or need assistance with an order, our friendly team is ready to assist you. Reach out to us today and experience exceptional customer service at SpeedyFuel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 cont-form d-flex justify-content-center align-items-center">
                        <form action="/" className="d-flex flex-column justify-content-center align-items-center w-75 w-mobile-80">
                            <label htmlFor="YName" className="py-2 labeltext fs-5 w-100">Your Name</label>
                            <input type="text" placeholder="Enter Your Name" className="py-2 w-100 border-0 px-2 bg-gray" id="YName" required />

                            <label htmlFor="Yemail" className="py-2 labeltext fs-5 w-100">Email Id</label>
                            <input type="email" placeholder="Enter Email id" className="py-2 w-100 border-0 px-2 bg-gray" id="Yemail" required />

                            <label htmlFor="YMobile" className="py-2 labeltext fs-5 w-100">Mobile No.</label>
                            <input type="number" placeholder="Enter Mobile number" className="py-2 w-100 border-0 px-2 bg-gray" id="YMobile" required />

                            <label htmlFor="Ymsg" className="py-2 labeltext fs-5 w-100">Massage</label>
                            <textarea name="" id="Ymsg" cols="10" rows="8" className="w-100 bg-gray border-0 px-2" required>

                            </textarea>
                            <div className="py-3 btns w-100">
                                <input type="submit" name="" id="" className="btn btn-hw px-2" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;