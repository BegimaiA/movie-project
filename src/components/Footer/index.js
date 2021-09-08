import React from 'react';

const Footer = () => {


    return (
      <footer className="footer">
              <div className="footer-row">
                  <div className="">
                      <h5>TMDB</h5>
                      <ul>
                          <li>About</li>
                          <li>System Status</li>
                          <li>Support Forums</li>
                      </ul>
                  </div>
                  <div className="">
                      <h5>Contacts</h5>
                      <ul>
                          <li>USA, California</li>
                          <li>200 North District</li>
                          <li>email:tmdb@google.com</li>
                      </ul>
                  </div>
                  <div className="">
                      <h5>Legal</h5>
                      <ul>
                          <li>Terms of use</li>
                          <li>Privacy policy</li>
                          <li>API terms of use</li>
                      </ul>
                  </div>
              </div>
              <hr/>
              <p className="text-center">
                  &copy; {new Date().getFullYear() } TMDB | All rights reserved
              </p>
      </footer>
    );
};

export default Footer;