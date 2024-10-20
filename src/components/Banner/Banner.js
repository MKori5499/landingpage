import React from 'react';
import './Banner.css';
import analyticsImage from '../../assets/analytics-image.png'; 

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h2>Get More Done with whitepace</h2>
          <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.</p>
          <button className="cta-button">Try Whitespace Free</button>
        </div>
        <div className="banner-image">
          <img src={analyticsImage} alt="Analytics Overview" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
