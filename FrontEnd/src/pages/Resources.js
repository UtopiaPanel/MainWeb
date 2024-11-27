import React from 'react';
import Footer from '../components/Footer'; // Import Footer component

const Resources = () => {
  return (
    <div>
      <h1>最新推文</h1>
      <ul>
        <li><a href="https://mp.weixin.qq.com/s/UsHBRynm1NzoPvo6yrLMzw" target="_blank" rel="noopener noreferrer">戏剧社新生招募</a></li>
        <li><a href="https://mp.weixin.qq.com/s/vi5wlGKu9mEmgUBqZI5GzQ" target="_blank" rel="noopener noreferrer">华大乌托邦西雅图迎新会</a></li>
        <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">推文3</a></li>
      </ul>

      <Footer />  {/* Add Footer component */}
    </div>
  );
};

export default Resources;
