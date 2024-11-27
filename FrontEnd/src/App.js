import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JoinUs from './pages/JoinUs';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/UtopiaWeb" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/join" element={<JoinUs />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
