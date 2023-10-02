import React from 'react';
import { addBuzz } from '../Animations';



const Nav = () =>{

  const handleBuzz = () => {
    addBuzz("#contactinfo");
  };
  
    return (
    <div className='header mx-5'>
       <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
  <a href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
    <img className="navbar-brand" src="./imgs/logo.png"/>
  </a>

  <ul className="nav nav-pills align-items-center">
    <li className="nav-item px-0 py-2 mx-1"><a className="nav-item nav-link" href="#works">Startups</a></li>
    <li className="nav-item px-0 py-2 mx-1" id="linktocontact"><a className="nav-item nav-link" href="#footer" onClick={handleBuzz}>Contact</a></li>
    <li className="nav-item px-0 py-2 mx-1"><a className="btn workwithusbtn" href="http://www.linkedin.com/company/startupz.com/jobs/" target="_blank" >Work with us!</a></li>
  </ul>
  
</header>
</div>

    );
  }
  
  export default Nav