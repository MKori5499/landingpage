import React, { useState } from 'react';
import PlanCard from './PlanCard';
import './PricingSection.css';

const PricingSection = () => {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications'
      ],
      buttonLabel: 'Get Started',
      id: 'free'
    },
    {
      title: 'Personal',
      price: '$11.99',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications'
      ],
      buttonLabel: 'Get Started',
      id: 'personal' 
    },
    {
      title: 'Organization',
      price: '$49.99',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications'
      ],
      buttonLabel: 'Get Started',
      id: 'organization'
    }
  ];

  const [activePlan, setActivePlan] = useState('personal'); 

  const handlePlanClick = (id) => {
    setActivePlan(id);
  };

  return (
    <section className="pricing-section">
      <h2>Choose Your Plan</h2>
      <p>
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Whitespace has the right plan for you.
      </p>
      <div className="pricing-cards">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonLabel={plan.buttonLabel}
            highlighted={activePlan === plan.id} 
            onClick={() => handlePlanClick(plan.id)} 
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
