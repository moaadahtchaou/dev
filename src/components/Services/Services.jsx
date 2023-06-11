import React , {useEffect} from 'react';
import "./services.css"
import service from '../../assets/img/service.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css';
const Services = () => {
  useEffect(()=>{

    Aos.init({duration:500})
  },[])



    return (
<section id="two" class="servies">
      <div class="container">
        <div class="row">
          <div data-aos="zoom-out" class="title">
            <h6>services</h6>
            <p>Don't be busy, be productive</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div data-aos="flip-down" class="service-text">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <h4>Graphic Design</h4>
              <p>Graphic design is the process of visual communication and problem-solving using one or more of typography,photography and illustration.</p>
            </div>
            <div data-aos="flip-down" data-aos-duration="2500" class="service-text">
              <i class="fa fa-link" aria-hidden="true"></i>
              <h4>Web Design</h4>
              <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div data-aos="flip-down" data-aos-duration="1500" class="service-text">
              <i class="fa fa-sliders" aria-hidden="true"></i>
              <h4>UI & UX</h4>
              <p>Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction.</p>
            </div>
            <div data-aos="flip-down" data-aos-duration="3000" class="service-text">
              <i class="fa fa-laptop" aria-hidden="true"></i>
              <h4>Web Development</h4>
              <p>Web development is a broad term for the work involved in developing a web site for the Internet or an intranet.</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="service-img">
              <img src={service} alt=""/>
              <div class="shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Services;
