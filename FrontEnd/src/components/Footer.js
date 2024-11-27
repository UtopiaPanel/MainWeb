// Footer.js

import React from 'react';
import '../style/Footer.css';  // Import the CSS for styling the footer

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social-media">
          <h2>FOLLOW US</h2>
          <div className="icons">
            <a href="https://example.com" className="icon-link"><img src="/assets/facebook-icon.png" alt="Facebook" /></a>
            <a href="https://example.com" className="icon-link"><img src="/assets/instagram-icon.png" alt="Instagram" /></a>
            <a href="https://example.com" className="icon-link"><img src="/assets/youtube-icon.png" alt="YouTube" /></a>
            <a href="https://example.com" className="icon-link"><img src="/assets/email-icon.png" alt="Email" /></a>
            <a href="https://example.com" className="icon-link"><img src="/assets/weibo-icon.png" alt="Weibo" /></a>
            <a href="https://example.com" className="icon-link"><img src="/assets/wechat-icon.png" alt="WeChat" /></a>
          </div>
        </div>

        <div className="search">
          <h2>SEARCH IN THIS WEBSITE</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button><img src="/assets/search-icon.png" alt="Search Icon" /></button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
