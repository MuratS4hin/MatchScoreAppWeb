import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div className="platform-container">

            {/* Background Image */}
            <div className="bg-image" aria-hidden="true"></div>

            {/* Gradient Overlay */}
            <div className="bg-overlay" aria-hidden="true"></div>

            {/* Content */}
            <div className="content-wrapper">

                <div className='logo'>
                    <img src="/assets/matchscore.png" alt="MatchScore Logo" />
                </div>

                <div className="header-section">
                    <h1>Uygulamayı Keşfet</h1>
                    <p>Antrenmanlarına başlamak için platformunu seç.</p>
                </div>

<div className="button-group">
  {/* Apple Button */}
  <a
    href="https://apps.apple.com/us/app/match-scores/id6752309800"
    target="_blank"
    rel="noopener noreferrer"
    className="store-btn"
  >
    <img src="/assets/applelogo.png" alt="Apple Logo" className="store-icon" />
    <span>App Store</span>
  </a>

  {/* Android Button */}
  <a
    href="https://play.google.com/store/apps/details?id=com.mur4t_s4hin.MatchScore"
    target="_blank"
    rel="noopener noreferrer"
    className="store-btn"
  >
    <img src="/assets/androidlogo.png" alt="Android Logo" className="store-icon" />
    <span>Google Play</span>
  </a>
</div>


                {/* 
                <div className="footer-links">
                    <a className="footer-link" href="#">Gizlilik Politikası</a>
                    <a className="footer-link" href="#">Kullanım Koşulları</a>
                </div> */}

            </div>
        </div>
    );
};

export default HomePage;