import React from 'react';
import Footer from '../components/Footer'; // Import Footer component

const EventCalendar = () => {
  return (
    <div>
      <h1>未来活动</h1>
      <div>
        <h2>万圣节 - 猫抓老鼠</h2>
        <p>时间：2024年10月31日</p>
        <p>地点：华大校园内</p>
        <p>（描述）</p>
      </div>
      <div>
        <h2>活动2</h2>
        <p>时间：</p>
        <p>地点：</p>
        <p>（描述）</p>
      </div>

      <Footer />  {/* Add Footer component */}
    </div>
  );
};

export default EventCalendar;
