import React from 'react';
import '../style/JoinUs.css'; // Import CSS for styling
import StaffImage from '../assets/Staff.jpg'; // Example team picture
import LogoImage from '../assets/logo2.png'; // Logo image

const JoinUs = () => {
  return (
    <div className="join-us-page">
      {/* Header Section */}
      <header className="header">
        <div className="background-image">
          <h1>About Utopia</h1>
        </div>
      </header>

      {/* Our Team Section */}
      <section className="our-team">
        <div className="content-section">
          {/* Left Column */}
          <div className="left-column">
            <div className="team-header">
              <h2>Our Team</h2>
            </div>
            <div className="logo-image">
              <img src={LogoImage} alt="Logo" />
            </div>
            <div className="text-section">
              <p>
                Welcome to our club! Our team is dedicated to creating engaging
                events and building a supportive community at UW.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="image-section">
            <img src={StaffImage} alt="Team" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>联系方式</h2>
        <ul>
          <li>Website: cssauw.org</li>
          <li>WeChat: Utopia_UW</li>
          <li>小红书: 华大乌托邦</li>
          <li>Instagram: utopiaatuw</li>
          <li>Email: utopiauw@uw.edu</li>
        </ul>
      </section>
    </div>
  );
};

export default JoinUs;
