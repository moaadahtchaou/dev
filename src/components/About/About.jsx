import React , {useEffect} from 'react';
import "./about.css";
import aboutimg from "../../assets/img/about.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css';
const About = () => {
  useEffect(()=>{

    Aos.init({duration:2000})
  },[])
    return (
<section id="four" class="about">
      <div class="container">
        <div class="row">
          <div data-aos="zoom-out" data-aos-duration="500" class="title">
            <h6>about</h6>
            <p>Less is more work</p>
          </div>
        </div>
        <div class="row">
          <div data-aos="fade-left"

     data-aos-offset="200"
     data-aos-duration="1500" class="col-md-6 col-sm-6 col-xs-12 about-img">
            <img src={aboutimg} alt=""/>
            <div class="shape shape-about"></div>
            <div class="shape shape-l"></div>
            <div class="shape shape-l shape-l-hor"></div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 about-text">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore<br/>magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>exercitation ullamco laboris nisi ut aliqui</h4>
          <div class="separator"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>exercitation ullamco laboris nisi ut aliqu</p>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;
