import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2>whitepace</h2>
          <p>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        <div className="footer-section product">
          <h3>Product</h3>
          <ul>
            <li><a href="/">Overview</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Customer stories</a></li>
          </ul>
        </div>

        <div className="footer-section resources">
          <h3>Resources</h3>
          <ul>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Guides & tutorials</a></li>
            <li><a href="/">Help center</a></li>
          </ul>
        </div>

        <div className="footer-section company">
          <h3>Company</h3>
          <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Media kit</a></li>
          </ul>
        </div>

        <div className="footer-section cta">
          <h3>Try It Today</h3>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <button className="cta-button">Start today →</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/">Terms & privacy</a>
          <a href="/">Security</a>
          <a href="/">Status</a>
          
        </div>
        <p>©2021 Whitepace LLC.</p>
        <div className="social-icons">
          <a href="/"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="/"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="/"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
