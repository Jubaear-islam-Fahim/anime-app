import React from 'react'
import './Ready.scss'
const Ready = () => {
    return (
        <div className="ready-area">
            <div className="ready-shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ready-content">
                            <div className="h2 section-title" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">Ready to get started?</div>
                            <p className='py-5' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1400"> 
                                <a href="/" className="btn-lg">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready