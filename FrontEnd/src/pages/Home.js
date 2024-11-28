import React from 'react';
import '../style/Home.css'; // Import the CSS for the home page styling

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Utopia</h1>
          <p>Your gateway to a vibrant community at UW.</p>
        </div>
      </section>

      {/* Club Introduction Section */}
      <section className="introduction">
        <h2>社团简介</h2>
        <p>我们是一个致力于组织文化活动、提供社交平台、推动社区互动的团体。加入我们，享受丰富的校园活动和资源。</p>
      </section>

      {/* Highlighted Events Section */}
      <section className="highlighted-events">
        <h2>Highlighted Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <div className="event-image">
              <img src="path-to-image1.jpg" alt="活动1" />
            </div>
            <div className="event-text">
              <h3>活动1</h3>
              <p>活动详情...</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">
              <img src="path-to-image2.jpg" alt="活动2" />
            </div>
            <div className="event-text">
              <h3>活动2</h3>
              <p>活动详情...</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">
              <img src="path-to-image3.jpg" alt="活动3" />
            </div>
            <div className="event-text">
              <h3>活动3</h3>
              <p>活动详情...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <button className="cta-button">Join Us</button>
      </section>
    </div>
  );
};

export default Home;
