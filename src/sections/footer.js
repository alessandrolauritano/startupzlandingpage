import React from 'react'
import { addBuzz } from '../Animations';
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

function Footer() {
  const handleBuzz = () => {
      addBuzz("#emailbox");
    };

  return (

    <div className='footer-container container-fluid' id="footer">
        <footer className="footer row">
        <div className="footer-col col-md-4 d-flex flex-column justify-content-between align-items-start">
        <img className="" src="./imgs/logo.png" alt="Logo" />
      <p className="footer-text mb-3">© 2023 Startupz<br></br>All rights reserved.</p>
    </div>

    
    <div className="footer-col col-sm-1 col-md-2">
      <h5 className='footer-title mt-3 mb-4'>Companies</h5>
      <div className="flex-column">
        <p className="footer-link mb-2"><a href="https://tolq.com/" className="nav-link" target="_blank">Tolq</a></p>
        <p className="footer-link mb-2"><a href="https://legalsite.co/" className="nav-link" target="_blank">LegalSite</a></p>
        <p className="footer-link mb-2"><a href="https://codekeeper.co/" className="nav-link" target="_blank">Codekeeper</a></p>
        <p className="footer-link mb-2"><a href="https://feedbacklabs.org/" className="nav-link" target="_blank">Feeback Labs</a></p>
      </div>
    </div>

    <div className="footer-col col-sm-1 col-md-4" id='contactinfo'>
    <h5 className='footer-title mt-3 mb-4'>Contact</h5>
      <div className="flex-column">
        <p className="footer-text mb-2">World Trade Center - The Hague<br></br>Prinses Margrietplantsoen 33<br></br>2595 AM The Hague <br></br>The Netherlands</p>
        <p className="footer-link"><a href="#getintouch" className="nav-link p-0" onClick={handleBuzz}>Send us an email</a></p>      
      </div>
    </div>
    
    <div className="col-sm-1 col-md-2">
      <h5 className='footer-title mt-3 mb-4'>Follow us</h5>
      <div className="nav flex-column">
      <li className="nav-item mb-2"><a href="https://twitter.com/startupzcom" className="nav-link p-0" target="_blank"><FaTwitter className="footer-icon" size={23}/></a></li>
        <li className="nav-item mb-2"><a href="https://www.linkedin.com/company/startupz.com/" className="nav-link p-0" target="_blank"><FaLinkedin className="footer-icon" size={23}/></a></li>
        <li className="nav-item mb-2"><a href="https://www.instagram.com/startupzcom/?hl=it" className="nav-link p-0" target="_blank"><FaInstagram className="footer-icon" size={23}/></a></li>
        </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer