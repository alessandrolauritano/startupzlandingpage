import React from 'react';
import $ from 'jquery';
import { slideUp, slideRight, slideLeft } from '../Animations';


$(window).on('load', function() {
  slideUp(".hero-btn-works");
  slideRight(".herostart-lead");
  slideLeft(".background-herostart");
});


function Herostart() {

  return (
    <section className="herostart position-relative mx-0 pt-5">
      <div className="herotext-section col-sm-2 col-md-8 d-flex flex-column">
        <h1 className="rotate-in herostart-title display-5 fw-bold text-body-emphasis pt-4 mb-2">
          We Create<br></br>Startups.
        </h1>
        <p className="slide-right herostart-lead mb-3">
          We are a startup studio that develops and launches new companies.
        </p>
        <div className="slide-up hero-btn-works d-grid d-md-flex justify-content-md-start">
          <button type="button" href="#works" className="herostart-button btn px-4 me-md-2 fw-bold">
            <a className="nav-item nav-link" href="#works">See our works</a>
          </button>
        </div>
      </div>
      <div className="slide-left background-herostart p-3 position-absolute end-0 bottom-0">
        <img
          className="d-block img-fluid"
          src="./imgs/herostart.png"
          alt="headerimg"
          width="100%"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Herostart;
