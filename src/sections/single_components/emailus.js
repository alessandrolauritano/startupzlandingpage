import React from 'react'

function Emailus() {
  return (
    <div className="emailus-container pb-5" id="emailbox">
    <form className='d-flex flex-column align-items-center'>
      
      <div className="form-group higlightEmailus">
        <input type="name" className="form-control highlightEmailus" id="inputName" aria-describedby="emailHelp" placeholder="Name*" required/>
      </div>

      <div className="form-group">
        <input type="email" className="form-control" id="inputEmail" placeholder="Email*" required/>
      </div>
      
        <div className="form-group">
        <textarea type="message" wrap="on" className="form-control" id="inputMessage" placeholder="Message*" required/>
      </div>
        
      <button type="submit" className="btn-sendmessage btn btn-primary">Shoot us a message</button>
    </form>
    </div>
  )
}

export default Emailus