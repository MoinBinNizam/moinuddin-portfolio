import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <a href="/" className="text-xl font-bold tracking-tighter uppercase">
          Moin <span className="text-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 uppercase text-xs font-semibold tracking-widest text-gray-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 w-full bg-[#0a0a0a] border-b border-gray-800 p-8 flex flex-col space-y-6 uppercase text-sm tracking-widest">
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
