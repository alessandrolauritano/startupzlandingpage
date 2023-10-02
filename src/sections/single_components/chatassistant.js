import React from 'react';
import $ from 'jquery';



$("#closechat").on("click", () => {
  $("#chatassistant").addClass("animate__animated animate__slow animate__backOutRight")
})
function Chatassistant() {
  return (
    <div className='chat-assistant' id="chatassistant">
      <div className='d-flex'>
        <div className='chat-text-container text-start'>
          <p className='m-0'>Hi! I am Ben, your virtual assistant.<br />How can I make your day better?</p>
        </div>
        <div  id="closechat">
          <p className='chat-close'>X</p>
        </div>
      </div>
      <div className='d-flex justify-content-end align-items-end'>
      <div className='chat-avatar text-center'>
        <img className="chat-img" src="./startupzlandingpage/imgs/chatbot.png" alt="Chatbot Avatar" />
      </div>
    </div>
    </div>
  );
}

export default Chatassistant;
