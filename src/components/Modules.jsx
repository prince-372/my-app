import React from 'react'
import manageimg1 from '../assets/images/mobile-men.png'

const Modules = () => {
    return (
        <div className='mt-md-191 mt-30 py-50'>
            <div className="container">
                <div className=" d-flex items-center justify-content flex-column">
                    <div className='d-flex items-center gap-12'>
                        <span className='fs-base  text-orange-gradient'>Modules</span>
                        <hr className='line  ' />
                    </div>
                    <h2 className='fs-lg fw-bold ff-work pt-14 pb-50'>What is <span className='text-orange-gradient'>Maître D?</span></h2>

                </div>
                <div className="slick-card1 mx-auto p-md-5 p-2  position-relative">
                    <div className="row items-center justify-content">
                        <div className="col-lg-6 col-12 ">
                            <img className='w-100' src={manageimg1} alt="" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-between">
                                    <h2 className=" fw-bold ff-work text-black fs-medium text-center">Manage your <span
                                        className="text-orange-gradient ">Customer Queues
                                    </span>
                                    </h2>
                                    <svg className="svg-cross position-absolute" xmlns="http://www.w3.org/2000/svg"
                                        width="27" height="29" viewBox="0 0 27 29" fill="none">
                                        <path d="M8.51074 1L18.124 28.4384" stroke="#F6A915" stroke-miterlimit="10" />
                                        <path d="M1 20.5908L26 10.1648" stroke="#F6A915" stroke-miterlimit="10" />
                                    </svg>
                                </div>
                                <p className="fs-base fw-normal ff-work text-lightblack pt-16">The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.
                                </p>
                                <p className='fs-base fw-normal ff-work text-lightblack mt-21' >As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                                <div className="pt-16"><button className='btn-buy fs-md fw-bold ff-work text-white'>Buy
                                    Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modules