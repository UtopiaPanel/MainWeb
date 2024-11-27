import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import React from 'react';
import '../style/Footer.css';  // Import the CSS for styling the footer

const Footer = () => {
  return (
      <footer className="footer">
        <div className="social-media">
          <h2>FOLLOW US</h2>
          <div>Instagram: <a href="https://www.instagram.com/uwutopia/" className={"link"}>@uwutopia</a></div>
          <div>微信: 华大乌托邦</div>
          <div>小红书: <a href="https://www.xiaohongshu.com/user/profile/631e2f02000000002303a351m" className={"link"}>华大乌托邦</a></div>
        </div>

        <div className="search">
          <h2>SEARCH IN THIS WEBSITE</h2>
          <div className="search-bar">
            <SearchOutlinedIcon/>
            <span style={{marginLeft: '10px'}}></span>
            <input type="text" placeholder="Search"/>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
