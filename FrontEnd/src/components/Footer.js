// Footer.js

import React from 'react';
import './Footer.css';  // Import the CSS for styling the footer

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

      {/* Footer bottom navigation bar */}
      <div className="footer-bottom-nav">
        <div className="bottom-nav">
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/about_us">About Us</a></li>
              <li><a href="/forum">Forum</a></li>
              <li><a href="/links">Links</a></li>
              <li><a href="/chinese">简体中文</a></li>
              <li><a href="/pop_events">Pop Events</a></li>
            </ul>
          </nav>
          <p>© Copyright Utopia@UW 2019-2025</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
