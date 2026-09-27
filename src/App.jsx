import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
