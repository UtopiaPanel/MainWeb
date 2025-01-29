import React from 'react';
import '../style/Events.css';
import background from '../assets/background.jpg';
import { eventList } from '../EventList';

const Events = () => {
    // 选取最新的 5 个活动
    const events = eventList.slice(0, 5);

    return (
        <div className="events-page">
            <section className="hero" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-text">
                    <h1>Upcoming Events</h1>
                </div>
            </section>
            <div className="timeline">
                {events.map((event, index) => (
                    <div className="timeline-item" key={index}>
                        <div
                            className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}
                            onClick={() => window.open(event.link, '_blank')}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                            </div>
                            <div className="event-details">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                        <div className={`timeline-date ${index % 2 === 0 ? 'right' : 'left'}`}>
                            <span>{event.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;