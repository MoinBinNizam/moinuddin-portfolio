import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { getExperience } from '../utils/api';
import { Experience } from '../types';

const Journey: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    getExperience().then(res => setExperiences(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <section id="experience" className="section-padding bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent uppercase tracking-widest text-xs font-bold">Timeline</span>
          <h2 className="text-5xl font-black uppercase mt-4 tracking-tighter">My <span className="text-gray-500">Journey.</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent origin-top hidden md:block"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Node */}
                <div className="absolute left-[-5px] md:left-1/2 md:ml-[-5px] top-0 w-3 h-3 bg-accent rounded-none border-4 border-black z-10 hidden md:block" />

                <div className={`w-full md:w-[45%] p-8 border border-gray-800 bg-[#111] hover:border-accent transition-colors duration-500`}>
                  <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2 block">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-1">{exp.role}</h3>
                  <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-6">{exp.companyName}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    {exp.contributions}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
