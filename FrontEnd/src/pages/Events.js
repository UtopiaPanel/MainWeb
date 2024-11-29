import React from 'react';
import '../style/Events.css'; // Import the CSS for the events page styling
import background from '../assets/西雅图新生会Staff.jpg'

// Sample event data (you can replace this with actual event data or fetch it from an API)
const events = [
  {
    date: "2023-09-01",
    title: "活动1",
    description: "Event 1 description goes here."
  },
  {
    date: "2023-09-10",
    title: "活动2",
    description: "Event 2 description goes here."
  },
  {
    date: "2023-09-20",
    title: "活动3",
    description: "Event 3 description goes here."
  }
];

const Events = () => {
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
            <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="event-image">
                <img src={background} alt={event.title} /> {/* Replace with specific event image */}
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
