import React from 'react'
import './Works.scss'
const Works = () => {
    return (
        <div className="works-area py-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="h2 section-title">how it works</div>
                    </div>
                </div>
                <div className="row pt-5 row-gap">
                    <div className="col-lg-4">
                        <div className="work-item" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            <div className="number">01</div>
                            <div className="h5">Lorem ipsum dolor</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="work-item" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                            <div className="number">02</div>
                            <div className="h5">Lorem ipsum dolor</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="work-item" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1400">
                            <div className="number">03</div>
                            <div className="h5">Lorem ipsum dolor</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1600">
                        <div className="mt-5 text-center">
                            <a href="/" className='btn-lg'>Buy it now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Works