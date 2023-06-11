import React , {useEffect}  from 'react';
import "./contact.css";
import Aos from 'aos'
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(()=>{

    Aos.init({duration:2000})
  },[])
    return (
<section id="five" class="contact">
      <div class="container">
        <div class="row">
          <div data-aos="zoom-out" data-aos-duration="500"   class="title">
            <h6>contact</h6>
            <p>I was born to create</p>
          </div>
        </div>
        <div class="row">
          <div class="contact-info">
            <h1>Feel free to drop us a line at:</h1>
            <h1>mouadahtchao@gmail.com</h1>
            <p>Find us on social networks:</p>
            <ul>
              <li><a href="#five"><i class="fa-brands fa-dribbble"></i></a></li>
              <li><a href="#five"><i class="fa-brands fa-behance"></i></a></li>
              <li><a href="#five"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Contact;
