import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
