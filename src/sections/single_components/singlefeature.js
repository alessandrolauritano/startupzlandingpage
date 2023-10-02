import React from 'react'
import $ from 'jquery'
import { slideDown } from '../../Animations'

$(window).on('scroll', function() {
  slideDown(".singlefeature");
});

function Singlefeature(props) {
  return (
    <div className="slide-down singlefeature" id="singlefeature">
        <div className="d-flex flex-column align-items-left justify-content-left">
          <h5 className='featurenumber mb-3'>{props.number}</h5>
          <div className="line mb-3"></div>
          <p className='featuretext col-10'>{props.text}</p>
        </div>
      </div>
      
  )
}

export default Singlefeature