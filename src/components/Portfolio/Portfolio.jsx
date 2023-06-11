import React , {useEffect} from 'react';
import "./Portfolio.css"
import portfolio1 from "../../assets/img/portfolio1.jpg"
import portfolio2 from "../../assets/img/portfolio2.jpg"
import portfolio3 from "../../assets/img/portfolio3.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css';
const Portfolio = () => {
  useEffect(()=>{

    Aos.init({duration:2000})
  },[])

    return (
        <section id="three" class="portfolio">
        <div class="container">
          <div class="row">
            <div data-aos="zoom-out" data-aos-duration="500" class="title">
              <h6>portfolio</h6>
              <p>If you do it right, it will last forever</p>
            </div>
          </div>
          <div class="row">
            <div data-aos="zoom-in-up" class="col-md-4 col-sm-6 portfolio-item">
              <a class="hover01" href="#three">
                <figure><img class="img-fluid" src={portfolio1} alt=""/></figure>
              </a>
              <div class="portfolio-caption">
                <h4>New Project</h4>
                <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
              </div>
            </div>
            <div data-aos="zoom-in-up" class="col-md-4 col-sm-6 portfolio-item">
              <a class="hover01" href="#three">
                <figure><img class="img-fluid" src={portfolio2} alt=""/></figure>
              </a>
              <div class="portfolio-caption">
                <h4>New Project</h4>
                <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
              </div>
            </div>
            <div data-aos="zoom-in-up" class="col-md-4 col-sm-6 portfolio-item">
              <a class="hover01" href="#three">
                <figure><img class="img-fluid" src={portfolio3} alt=""/></figure>
              </a>
              <div class="portfolio-caption">
                <h4>New Project</h4>
                <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio;
