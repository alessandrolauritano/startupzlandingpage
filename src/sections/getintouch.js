import React from 'react';
import Emailus from './single_components/emailus';

function Getintouch() {
  return (
    <section className="getintouch-section py-0 position-relative" id="getintouch">
      <div className="getintouch-content mx-0">
          <div className="col-lg-8">
            <h2 className="getintouch-title mb-4">Are you ready <br />to board this rocket ship?</h2>
            <p className="getintouch-text mb-4">Share your excitement with us.</p>
            <div className="row">
            <Emailus/> {/*EmailUs Component*/}
            </div>
          </div>
      </div>
      <div className="img-fluid rocket position-absolute start-50 bottom-0">
        <img
          className="img-fluid"
          src="./startupzlandingpage/imgs/rocket.png"
          alt="Rocket"
          width="90%"
        />
      </div>
    </section>
  );
}

export default Getintouch;
