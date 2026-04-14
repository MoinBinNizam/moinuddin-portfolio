import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSkills } from '../utils/api';
import type { Skill } from '../types';
import { Code2, Server, Layout, Database, Terminal, Settings } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  ReactIcon: Layout,
  NodeIcon: Server,
  TSIcon: Code2,
  TailwindIcon: Layout,
  DBIcon: Database,
  ToolsIcon: Settings,
};

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    getSkills().then(res => setSkills(res.data)).catch(err => console.error(err));
  }, []);

  const services = [
    { title: 'Full-stack Development', description: 'Building scalable web applications from scratch.', icon: Terminal },
    { title: 'ERP Systems', description: 'Custom ERP & POS solutions for complex businesses.', icon: Database },
    { title: 'WordPress Customization', description: 'Deep custom themes and plugin development.', icon: Layout },
    { title: 'Consultation', description: 'Architecture design and technical feasibility studies.', icon: Settings },
  ];

  return (
    <section id="skills" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Services */}
          <div>
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Services</span>
            <h2 className="text-5xl font-black uppercase mt-4 tracking-tighter mb-12">Expertise <br /> <span className="text-gray-500">& Offerings.</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-8 border border-gray-800 bg-[#111] hover:border-accent transition-all group">
                  <service.icon className="text-gray-600 mb-6 group-hover:text-accent transition-colors" size={32} />
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Stack</span>
            <h2 className="text-5xl font-black uppercase mt-4 tracking-tighter mb-12">Tech <span className="text-gray-500">Skills.</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const Icon = iconMap[skill.iconName] || Code2;
                return (
                  <motion.div 
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 border border-gray-800 bg-[#111] hover:bg-gray-800 transition-colors"
                  >
                    <Icon className="text-accent mb-3" size={24} />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
