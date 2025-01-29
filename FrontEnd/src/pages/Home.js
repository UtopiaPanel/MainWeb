import React from 'react';
import '../style/Home.css';
import logo2 from '../assets/logo2.png';
import background from '../assets/background.jpg';
import { eventList } from '../EventList';

const Home = () => {
    // 选取最新的 3 个活动
    const events = eventList.slice(0, 3);

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
                <img src={logo2} alt="Logo" className="logo2" />
                <h2>社团简介</h2>
                <p>我们是一个致力于组织文化活动、提供社交平台、推动社区互动的团体。加入我们，享受丰富的校园活动和资源。</p>
            </section>

            {/* Highlighted Events Section */}
            <section className="highlighted-events">
                <h2>Highlighted Events</h2>
                <div className="event-cards">
                    {events.map((event, index) => (
                        <EventCard key={index} image={event.image} title={event.title} description={event.description} />
                    ))}
                </div>
            </section>
        </div>
    );
};

// 事件卡片组件
const EventCard = ({ image, title, description }) => {
    return (
        <div className="event-card">
            <div className="event-image">
                <img src={image} alt={title} />
            </div>
            <div className="event-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Home;