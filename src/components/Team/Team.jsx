import React, { useEffect,useRef } from "react";
import Slider from "react-slick";
import team from '../../assets/img/team.png'
import teamPhone from '../../assets/img/team-phone.png'
import team1 from '../../assets/img/t1.png'
import team2 from '../../assets/img/t2.png'
import team3 from '../../assets/img/t3.png'
import team4 from '../../assets/img/t4.png'
import team5 from '../../assets/img/t5.png'
import team6 from '../../assets/img/t6.png'
import team7 from '../../assets/img/t7.png' 
import './Team.scss'
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";

const teamData = [
    {image: team1, name: 'Lorem ipsum'},
    {image: team2, name: 'Lorem ipsum'},
    {image: team3, name: 'Lorem ipsum'},
    {image: team4, name: 'Lorem ipsum'},
    {image: team5, name: 'Lorem ipsum'},
    {image: team6, name: 'Lorem ipsum'},
    {image: team7, name: 'Lorem ipsum'},
]
const Team = () => {
    const sliderRef = useRef(null);
    useEffect(()=>{
        console.log(sliderRef.current);
    }, []);
    const teamSetting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5, 
                }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3, 
                }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 2, 
                }
            }
        ]
    };
    return (
        <div className="team-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="h2 section-title">
                            our team
                        </div>
                    </div>
                </div>
                <div className="row team-row row-gap">
                    <div className="col-lg-7" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <div className="team-image d-none d-lg-block">
                            <img src={team} alt="" />
                        </div>
                        <div className="team-image d-lg-none">
                            <img src={teamPhone} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1300">
                        <div className="team-text ms-lg-4">
                            <div className="h6">Lorem ipsum dolor</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-4">
                    <div className="col-lg-12">
                        <div className="team-contents" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1600"> 
                            <Slider ref={sliderRef} {...teamSetting}>
                                {teamData.map((item)=>(
                                    <div className="team-item">
                                        <img src={item.image} alt="" />
                                        <div className="h6 name">{item.name}</div>
                                    </div>
                                ))} 
                            </Slider>
                            <div className="team-arrow d-lg-none">
                                <button className="nextButton text-white" 
                                    onClick={()=>sliderRef.current.slickPrev()}
                                >
                                        <FaChevronLeft/>
                                </button>
                                <button className="nextButton text-white" 
                                    onClick={()=>sliderRef.current.slickNext()}
                                >
                                        <FaChevronRight/> 
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team