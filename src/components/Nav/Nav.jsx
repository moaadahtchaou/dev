import React , {useEffect} from 'react';
import "./Nav.css";
import x from "../../assets/img/x.svg";
import logo from "../../assets/img/logo.svg";
import menu from "../../assets/img/menu.svg";

import Aos from 'aos'
import 'aos/dist/aos.css';

const Nav = () => {

  useEffect(()=>{

    Aos.init({duration:1500})
  },[])



    return (
<header id="one">
      <nav>
        <div  class="menu-toggle inner-btn float-left">
          <img src={x} alt="Menu"/>
        </div>
        <ul>
          <h3>Menu</h3>
          <li><a href="#one">Home</a></li>
          <li><a href="#two">Services</a></li>
          <li><a href="#three">Portfolio</a></li>
          <li><a href="#four">About</a></li>
        </ul>
        <ul class="lower-menu">
          <h3>Get in Touch</h3>
          <li><a href="#five">Contact Me</a></li>
        </ul>
        <ul class="lower-menu">
          <h3>Get Social</h3>
          <li><a href="#one">Behance</a></li>
          <li><a href="#one">Dribble</a></li>
          <li><a href="#one">Twitter</a></li>
        </ul>
        <h5>© Leon 2019</h5>
      </nav>
      <div class="container">
        <div id="MagicMenu" class="nav-header">
          <div class="container">
            <div data-aos="fade-right" class="logo float-left">
              <a href="#one">
                <img src={logo} alt=""/>

                </a>
            </div>
            <div data-aos="fade-left" class="menu-toggle float-right">
              <img src={menu} alt="Menu"/>
            </div>
          </div>
        </div>
      </div>
      <div  class="hero">
        <h1 data-aos="fade-up" data-aos-duration="2000">Hello There!</h1>
        <h2 data-aos="fade-up" data-aos-duration="3000">We are Leon - Super Creative & Minimal<br/>Agency  Web Template.</h2>
      </div>
    </header>
    );
}

export default Nav;
