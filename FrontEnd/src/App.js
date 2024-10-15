import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventCalendar from './pages/EventCalendar';
import JoinUs from './pages/JoinUs';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/UtopiaWeb" element={<Home />} />
                <Route path="/events" element={<EventCalendar />} />
                <Route path="/join_us" element={<JoinUs />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    );
}

export default App;