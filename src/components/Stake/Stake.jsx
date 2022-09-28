import React from 'react'
import stake from '../../assets/img/stake.png'
import './Stake.scss'
const Stake = () => {
    return (
        <div className="stake-area"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="stake-text">
                            <div className="h2 section-title">Stake</div>
                            <div className="pt-5 pb-5">
                                <p data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">Staking is an easy way to earn rewards on your crypto whilst putting your digital assets to good use to help stabilize the network. The blockchain will use your crypto to ensure all transactions are verified and secured, called ‘Proof of Stake’, and you will receive more crypto for doing so.</p>
                                <ul className='pt-4 check-list' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                                    <li>Which will allow people to stake their tokens</li> 
                                    <li>Which will allow people to stake their tokens</li> 
                                    <li>Which will allow people to stake their tokens</li> 
                                </ul>
                            </div>
                            <div className='text-center text-lg-start' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1400">
                                <a href="/" className="btn-lg">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stake-img">
                <img src={stake} alt="" />
            </div>
        </div>
    )
}

export default Stake