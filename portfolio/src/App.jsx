import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Idols from './pages/Idols';
import './index.css';

const readCollapsed = () => {
  try {
    return localStorage.getItem('sidebarCollapsed') === 'true';
  } catch {
    return false;
  }
};

function App() {
  const [collapsed, setCollapsed] = useState(readCollapsed);

  // Remember the choice between visits
  useEffect(() => {
    try {
      localStorage.setItem('sidebarCollapsed', collapsed);
    } catch {
      // storage unavailable (private mode etc.) — ignore
    }
  }, [collapsed]);

  return (
    <div className="min-h-screen bg-night">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <main className={`transition-all duration-300 ${collapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        <section id="home"><Landing /></section>
        <section id="idols"><Idols /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
