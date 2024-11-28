import React from 'react';
import '../style/Home.css'; // Import the CSS for the home page styling
import logo2 from '../assets/logo2.png'
import background from '../assets/西雅图新生会Staff.jpg'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="hero-text">
            <h1>Welcome to Utopia</h1>
            <p>Your gateway to a vibrant community at UW.</p>
        </div>
      </section>


      {/* Club Introduction Section */}
      <section className="introduction">
        <img src={logo2} alt="Logo" className={"logo2"}/>
        <h2>社团简介</h2>
        <p>我们是一个致力于组织文化活动、提供社交平台、推动社区互动的团体。加入我们，享受丰富的校园活动和资源。</p>
      </section>

      {/* Highlighted Events Section */}
      <section className="highlighted-events">
        <h2>Highlighted Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <div className="event-image">
              <img src="path-to-image1.jpg" alt="猫抓老鼠" />
            </div>
            <div className="event-text">
              <h3>猫抓老鼠</h3>
              <p>活动详情...</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">
              <img src={background} alt="西雅图新生会" className={"home-background"}/>
            </div>
            <div className="event-text">
              <h3>西雅图新生会</h3>
              <p>活动详情...</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">
              <img src="path-to-image3.jpg" alt="北京新生会" />
            </div>
            <div className="event-text">
              <h3>北京新生会</h3>
              <p>活动详情...</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
