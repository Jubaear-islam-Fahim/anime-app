import React, { useState, useEffect } from "react";  
import {Link} from 'react-scroll';
import logo from '../../../assets/img/logo.png'
import wallet from '../../../assets/img/wallet.png'
import bar from '../../../assets/img/bar.png'
// import LuckyEight from '../../../assets/img/LuckyEight-logo.svg'
import { GrClose } from "react-icons/gr"; 
import './NavBar.scss';
const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) 
    const closeMenu = () => setClick(false)
    
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []); 

    return (
        <nav className={scroll ? "navbar navBarTop navScroll" : "navbar navBarTop"}>
            <div className="container"> 
                <div className="nav-content">
                    <button class="navbar-toggler d-flex border-0 d-lg-none" type="button" onClick={handleClick}>
                        <img src={bar} alt="" />
                    </button> 
                    <div className="logo-nav">
                        <Link className="navbar-brand nav-link" to="home"> 
                            <img src={logo} alt="" height={45} />
                        </Link>
                    </div>
                    <div className={click ? "nav-offcanvas active" : "nav-offcanvas"}> 
                        <div className="d-lg-none navClose">
                            <Link onClick={closeMenu}>
                                <GrClose/>
                            </Link>
                        </div>
                        <ul className="navbar-nav justify-content-center"> 
                            <li className="nav-item">
                                <Link to="home" className="nav-link" spy={true} offset={-100} onClick={closeMenu}>
                                    Whitepaper
                                </Link>
                            </li> 
                            <li className="nav-item"> 
                                <Link to="tokenomics" className="nav-link" spy={true} offset={-100} onClick={closeMenu}>
                                    Tokenomics
                                </Link>
                            </li>  
                        </ul> 
                    </div>
                    <div className="ms-auto align-self-center">
                        <Link href='/' className="btn-lg wallet-btn">
                            connect wallet
                        </Link>  
                        <Link href='/' className="wallet-icon d-lg-none">
                            <img src={wallet} alt="" />
                        </Link>  
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar