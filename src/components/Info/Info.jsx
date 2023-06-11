import React , {useEffect} from 'react';

import './info.css'






import Aos from 'aos'
import 'aos/dist/aos.css';

const Info = () => {


  useEffect(()=>{

    Aos.init({duration:1500})
  },[])

    return (

<section class="container-fluid info-squares">
      <div class="row no-gutter">
        <div data-aos="zoom-out-right"  class="col-lg-4 col-sm-4 col-xs-12">
            <div  class="square">
                <i class="fa fa-magic" aria-hidden="true"></i>
                <h4>Tell Us Your Idea</h4>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut lab </p>
            </div>
        </div>
        <div data-aos="zoom-out-down" class="col-lg-4 col-sm-4 col-xs-12">
          <div class="square">
            <i class="fa fa-diamond" aria-hidden="true"></i>
            <h4>We Will Do All The Work</h4>
            <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut lab</p>
          </div>
        </div>
        <div data-aos="zoom-out-left" class="col-lg-4 col-sm-4 col-xs-12">
          <div class="square">
            <i class="fa fa-globe" aria-hidden="true"></i>
            <h4>Your Product is Worldwide</h4>
            <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut lab</p>
          </div>
        </div>
      </div>
</section>


    );
}

export default Info;
