import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#0a0a0a] border-t border-gray-800 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-10 md:mb-0">
          <a href="/" className="text-2xl font-black uppercase tracking-tighter">
            Moin <span className="text-accent">.</span>
          </a>
          <p className="text-gray-500 text-xs mt-4 uppercase tracking-[0.2em] font-bold">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-8">
          <a href="#" className="p-4 border border-gray-800 hover:border-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-4 border border-gray-800 hover:border-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-4 border border-gray-800 hover:border-accent transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
