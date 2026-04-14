import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent uppercase tracking-widest text-xs font-bold">Full-Stack Software Engineer</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight mt-6 tracking-tighter">
            Building <br /> Modern <br /> <span className="text-gray-500">Systems.</span>
          </h1>
          <p className="text-gray-400 mt-8 text-lg max-w-md leading-relaxed">
            Specializing in Jewelry ERP & LPG Systems. Delivering high-performance, minimalist software solutions for complex business needs.
          </p>
          <div className="mt-12 flex space-x-6">
            <a href="#projects" className="px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest transition-transform hover:scale-105">
              View Work
            </a>
            <a href="#contact" className="px-10 py-4 border border-gray-800 font-bold uppercase text-xs tracking-widest transition-all hover:bg-gray-800">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="border-8 border-gray-800 p-4 grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src={heroImg} 
              alt="Moin" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
