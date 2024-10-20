import React from 'react';
import './PlanCard.css';
const PlanCard = ({ title, price, features, buttonLabel, highlighted, onClick }) => {
  return (
    <div className={`plan-card ${highlighted ? 'highlighted' : ''}`} onClick={onClick}>
      <h3>{title}</h3>
      <h1>{price}</h1>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="get-started-btn">{buttonLabel}</button>
    </div>
  );
};


export default PlanCard;
