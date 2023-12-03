import React from 'react'
import contactImg from '../assets/images/men-laptop.png'
const Contact = () => {
  return (
    <div>
    <div className="container">
        <div className="row items-center justify-center">
            <div className="col-lg-6 col-12 mt-md-191 pt-60">
                <div className='d-flex align-items-center gap-12'>
                    <p className='fs-base text-semibold ff-work text-orange-gradient '>Contact US</p>
                    <a href="#" className='d-flex items-center'><svg width="44" height="1" viewBox="0 0 44 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="44" y2="0.5" stroke="black" />
                        <line y1="0.5" x2="44" y2="0.5" stroke="url(#paint0_linear_19268_2038)" />
                        <defs>
                            <linearGradient id="paint0_linear_19268_2038" x1="6.67021" y1="1" x2="7.99292" y2="7.77879" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD9B2B" />
                                <stop offset="1" stop-color="#F14F09" />
                            </linearGradient>
                        </defs>
                    </svg>
                    </a>
                </div>
                <p className='ff-work text-center fs-lg text-bold text-black pb-60 pt-10'>Get in touch!</p>
                <div className='d-flex items-center gap-30 mb-30'>
                    <input type="text" placeholder='Full Name' className='border-outline-none pb-15 ff-work' />
                    <input type="text" placeholder='Email address' className='border-outline-none pb-15 ff-work' />
                </div>
                <input className='w-100 border-outline-none pb-15 mb-30 ff-work' type="text" placeholder='Company Name ' />
                <textarea className='w-100 border-outline-none pb-15 resize-none ff-work' name="id" placeholder="Message"></textarea>
                <div className='pt-60'><button className='primary-btn text-white fs-md ff-work text-semibold bg-orange-gradient'>Submit</button></div>
            </div>
            <div className="col-lg-6 col-12">
                <img className='w-100' src={contactImg} alt="img" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact