import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import React from 'react';
import '../style/Footer.css';  // Import the CSS for styling the footer

const Footer = () => {
  return (
      <footer className="footer">
        <div className="social-media">
          <h2>FOLLOW US</h2>
          <div>email: <a href="mailto:utopiauw@uw.edu">utopiauw@uw.edu</a></div>
          <div>Instagram: <a href="https://www.instagram.com/utopiaatuw/" target="_blank" rel="noopener noreferrer">@utopiaatuw</a></div>
          <div>微信: Utopia_UW</div>
          <div>小红书: <a href="https://www.xiaohongshu.com/user/profile/631e2f02000000002303a351" target="_blank" rel="noopener noreferrer">华大乌托邦</a></div>
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
