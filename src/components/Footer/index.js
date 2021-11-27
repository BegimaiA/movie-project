import React from 'react';

const Footer = () => {
    return (
      <footer className="footer">
              <div className="footer-row">
                  <div className="">
                      <h5>TMDB</h5>
                      <ul>
                          <li>About us</li>
                          <li>Support Forums</li>
                      </ul>
                  </div>
                  <div className="">
                      <h5>Contacts</h5>
                      <ul>
                          <li>USA, California, Berkley</li>
                          <li>204 North District</li>
                      </ul>
                  </div>
                  <div className="">
                      <h5>Legal</h5>
                      <ul>
                          <li>Terms of use</li>
                          <li>Privacy terms</li>
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