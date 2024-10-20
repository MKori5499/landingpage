

import React from 'react';
import './CallToAction.css'; 

const CallToAction = () => {
  return (
    <div className="cta-container">
      <h1 className="cta-heading">Your work, everywhere you are</h1>
      <p className="cta-description">
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
      </p>
      <button className="cta-button">Try Taskey →</button>
    </div>
  );
};

export default CallToAction;
