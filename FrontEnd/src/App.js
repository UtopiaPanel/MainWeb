import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JoinUs from './pages/JoinUs';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import UpcomingEvent from './pages/UpcomingEvent';
import PastEvent from './pages/PastEvent';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events/upcoming" element={<UpcomingEvent />} />
                <Route path="/events/past" element={<PastEvent />} />
                <Route path="/join" element={<JoinUs />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    );
};

export default App;
