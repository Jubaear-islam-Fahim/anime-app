import React from 'react'
import bsc from '../../assets/img/bsc.png'
import charts from '../../assets/img/charts.png'
import './TokenStatistics.scss'
const TokenStatistics = () => {
  return (
    <div className="token-area" id='tokenomics'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="h2 section-title">Token statistics</div>
                </div>
            </div>
            <div className="token-row row row-gap">
                <div className="col-lg-6">
                    <div className="token-chart token-box" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <div className="d-flex token-header-title">
                            <div className="d-flex gap-2">
                                <img src={bsc} alt="" width={30} height={30} /> 
                                <span className='fw-bold fs-5'>Lucky8</span>
                            </div>
                            <div className="apr-item ms-auto token-height">
                                <div className="h5">27.0% <sub>APR</sub></div> 
                            </div>
                        </div>
                        <div className="chart-img">
                            <img src={charts} alt="" />
                        </div>
                        <div className="apr-content d-grid">
                            <div className="apr-item">
                                <div className="h5 mb-0">
                                    $3777B 
                                    <br />
                                    <span>Total Market Cap</span>
                                </div>
                            </div>
                            <div className="apr-item">
                                <div className="h5 mb-0">
                                    $3777B
                                    <br />
                                    <span>Circulating Market Cap</span>
                                </div>
                            </div>
                            <div className="apr-item">
                                <div className="h5 mb-0">
                                    $3777B
                                    <br />
                                    <span>Staking Pool</span>
                                </div>
                            </div>
                            <div className="apr-item d-md-none">
                                <div className="h5 mb-0">
                                    27.0%
                                    <br />
                                    <span>APR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="token-availability token-box" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1300">
                        <div className="token-header-title">
                            <span className='fw-bold fs-5'>Availability in <br className='d-lg-none' /> staking pool</span>
                        </div>
                        <div className="token-availability-content">
                            <div className="token-availability-item">
                                <a href="/" className="btn-lg">Tier 1</a> 
                                <div className="apr-item ms-auto order-lg-1">
                                    <div className="h5 fw-regular">146% <sub>APR</sub></div>  
                                </div>
                                <div className="h5 token-number">
                                    888,888,888,888.00
                                    <br />
                                    <span>Staked amount</span>
                                </div>
                            </div>
                            <div className="token-availability-item">
                                <a href="/" className="btn-lg">Tier 2</a>
                                <div className="apr-item ms-auto order-lg-1">
                                    <div className="h5">73% <sub>APR</sub></div>  
                                </div>
                                <div className="h5 token-number">
                                    657,544,893,342.00
                                    <br />
                                    <span>Staked amount</span>
                                </div>
                                
                            </div>
                            <div className="token-availability-item">
                                <a href="/" className="btn-lg">Tier 3</a>
                                <div className="apr-item ms-auto order-lg-1">
                                    <div className="h5">36.5% <sub>APR</sub></div>  
                                </div>
                                <div className="h5 token-number">
                                    0
                                    <br />
                                    <span>Staked amount</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TokenStatistics