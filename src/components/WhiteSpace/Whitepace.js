import React from 'react';
import './Whitepace.css'; 
import apple from "../../assets/white apple.png"
import windows from "../../assets/white android.png"
import android from "../../assets/white windows.png"
const Whitepace = () => {
  return (
    <div className="whitepace-container">
      <h1>Try Whitepace today</h1>
      <p>Get started for free.<br />Add your whole team as your needs grow.</p>
      <button className="cta-button">Try Taskey free →</button>
      <p>On a big team? Contact sales</p>
      <div className="platform-icons">
        <img src={apple} alt="Apple" />
        <img src={windows} alt="Windows" />
        <img src={android} alt="Android" />
      </div>
    </div>
  );
};

export default Whitepace;
