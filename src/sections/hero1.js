import React from 'react';
import Chatassistant from './single_components/chatassistant';


function Hero1(props) {

  
  return (
    
    <section className="hero1 d-flex position-relative justify-content-between align-items-center text-center">
      <div className="col d-flex justify-content-end">
        <img
          className="thumbup thumbupleft img-fluid" 
          src='./startupzlandingpage/imgs/thumbup.png' 
          alt='thumb up' 
        />
      </div>
      <div className="title-container mx-5 col-md-auto">
        <h1 className= "hero1-title d-inline-block">
          {props.title}
        </h1>
      </div>
      <div className="col d-flex justify-content-start">
        <img
          className="thumbup thumbupright img-fluid" 
          src='./startupzlandingpage/imgs/thumbup.png' 
          alt='thumb up'/>
      </div>
      {/* In this way it's possible to choose to show or not Chatassistant  */}
      {props.showChatAssistant && <Chatassistant />} 
    </section>
  );
}

export default Hero1;
