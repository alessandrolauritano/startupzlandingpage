import React from 'react';

function Hero2() {
  return (
    <section className="hero2-section d-flex justify-content-between align-items-center text-center">
      <div className="col-md-2 d-flex justify-content-start">
        <img
          className="img-fluid"
          src='./imgs/hero2-left.png'
          alt='hero2-left'
        />
      </div>
      <div className="col-md-5 text-center">
        <h1 className="title-hero2 fw-bold pb-3">We are hiring!</h1>
        <p className="text-hero2 mb-4">We're always looking for talented people to join and help build our startups. Check out our current openings</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a className="button-hero2 btn px-4" href="http://www.linkedin.com/company/startupz.com/jobs/" target="_blank">See current openings</a>
        </div>
      </div>
      <div className="col-md-2 d-flex justify-content-end">
        <img
          className="img-fluid"
          src='./imgs/hero2-right.png'
          alt='hero2-right'
        />
      </div>
    </section>
  );
}

export default Hero2;
