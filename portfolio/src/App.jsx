import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darkPurple">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/goals" element={<ComingSoon title="Goals" />} />
          <Route path="/idols" element={<ComingSoon title="My Idols" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<ComingSoon title="About" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

