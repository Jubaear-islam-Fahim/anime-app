import React from 'react'
import logo from '../../../assets/img/logo.png'
import send from '../../../assets/img/send.png'
import Send2 from '../../../assets/img/Send2.png'
import discord from '../../../assets/img/discord.png'
import twitter from '../../../assets/img/twitter.png'
import arrowTop from '../../../assets/img/arrow-top.png'
import {Link} from 'react-scroll';
import './Footer.scss'
const Footer = () => {
    return (
        <div className='position-relative'>
        <div className="top-up">
            <Link to="home" className="nav-link" spy={true} offset={-100} href="/"><img src={arrowTop} alt="" /></Link>
        </div>
        <div className="footer-area"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 align-self-center">
                        <div className="footer-logo">
                            <a href="/"><img src={logo} alt="" height={60} /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="footer-widget">
                            <ul className='d-flex footer-lists'> 
                                <li><a href="/">KYC</a></li>
                                <li><a href="/">Smart Contract Audit</a></li>
                            </ul>
                            <ul className='d-flex social'>
                                <li><a href="/"><img src={send} alt="" /></a></li>
                                <li><a href="/"><img src={discord} alt="" /></a></li>
                                <li><a href="/"><img src={twitter} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 align-self-center">
                        <div className="footer-form">
                            <div className="h5 fw-bold mb-4">Contact Us</div>
                            <div className="from">
                                <input type="email" name='email' placeholder='Enter E-mail' />
                                <button type="submit"><img src={Send2} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Footer