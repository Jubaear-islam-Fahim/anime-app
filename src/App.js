import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import 'aos/dist/aos.css';   
import './App.scss';
import Banner from './components/Banner/Banner';
import Footer from './components/Global/Footer/Footer';
import NavBar from './components/Global/NavBar/NavBar';
import Ready from './components/Ready/Ready';
import Stake from './components/Stake/Stake';
import Team from './components/Team/Team';
import TokenStatistics from './components/TokenStatistics/TokenStatistics';
import Works from './components/Works/Works';
function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    }); 
  },[]);
  return (
    <>
      <NavBar/>
      <Banner/>
      <TokenStatistics/>
      <Works/>
      <Team/>
      <Stake/>
      <Ready/>
      <Footer/>
    </>
  );
}

export default App;
