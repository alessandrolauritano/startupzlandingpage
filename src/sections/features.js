import React from 'react';
import Singlefeature from './single_components/singlefeature';

function Features(props) {
  //destructuring to improve syntax
  const {columnClass, featuresData} = props;
  const {title, description, imgname, features} = featuresData;

  

  return (
    <div className="feature-section" id="featured-3">
      <div className='headingsection row'>
      <div className='col-md-10 d-flex flex-column align-items-start'>
        
        <h2 className="featuretitle mb-3 fs-1 ">{title}</h2>
      <h3 className="featuredescription fs-5 pb-2">{description}</h3>
      
      </div>
      <div className="col p-0">
      <img className="slide-right featureimg" src={`./startupzlandingpage/${imgname}`} alt='featureimg'></img>
      </div>
      </div>
        {/* {The following code maps the set in the app.js to adapt autmatically
        to it and generate as many feature as there are in the set*/}
      <div className={`row features-container ${columnClass}`}> {/* column className allows to choose into app.js allows to choose how many columns to display */}        
      {features.map((feature) => (
          <Singlefeature  number={feature.number} text={feature.text} />
        ))}
      </div>
    </div>
  );
}

export default Features;
