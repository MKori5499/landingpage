

import React from 'react';
import './SponsorsSection.css'; 

import applelogo from "../../assets/apple.png"
import microsoftlogo from "../../assets/microsoft.png"
import slacklogo from "../../assets/slack.png"
import googlrlogo from "../../assets/google.png"

const sponsors = [
  { name: 'Apple', logo: applelogo },
  { name: 'Microsoft', logo: microsoftlogo },
  { name: 'Slack', logo: slacklogo },
  { name: 'Google', logo: googlrlogo }
];

const SponsorsSection = () => {
  return (
    <div className="sponsors-container">
      <h2 className="sponsors-heading">Our Sponsors</h2>
      <div className="sponsors-logos">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-logo">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
