import React from 'react';
import Footer from '../components/Footer'; // Import Footer component

const Home = () => {
  return (
    <div>
      <h1>UW Utopia</h1>

      <h2>社团简介</h2>
      <p>（简介）</p>

      <div>
        <h2>社团活动</h2>
        <ul>
          <li>活动1</li>
          <li>活动2</li>
          <li>活动3</li>
        </ul>
      </div>

      <Footer />  {/* Add Footer component */}
    </div>
  );
};

export default Home;
