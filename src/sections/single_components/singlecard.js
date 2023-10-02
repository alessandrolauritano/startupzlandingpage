import React from 'react';
import $ from 'jquery';


function Singlecard(props) {

  console.log(props.imgPath)
//creating a variable for the text color of a single title
//so when reusing this card component, it's possible to choose 
//easily which color to apply

const titleStyle = {
  color: props.titleColor
};

  return (
    <div className={` ${props.slide} card py-1 text-center d-flex flex-column align-items-center justify-content-center`} id={props.id}>
      <div className="card-content col-8 py-5">
    <div className="card-text-section">
    <h2 className="client-name" style={titleStyle}>{props.clientName}</h2>
    <p className="client-text mt-4">{props.clientDescription}</p>
    </div>
    <img className='client-img img-fluid pt-4 pb-4' src={`./startupzlandingpage${props.imgPath}`} alt='workimg'></img> 
    <a className="btn more-btn mt-3" href={`${props.url}`} target="_blank">More</a>
  </div>
</div>
  )
}

export default Singlecard