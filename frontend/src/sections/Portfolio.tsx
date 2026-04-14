import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../utils/api';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-20">Loading Projects...</div>;

  return (
    <section id="projects" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Showcase</span>
            <h2 className="text-5xl font-black uppercase mt-4 tracking-tighter">Selected <span className="text-gray-500">Works.</span></h2>
          </div>
          <div className="text-gray-500 uppercase text-xs tracking-[0.2em] font-bold mt-8 md:mt-0">
            {projects.length} Projects Total
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden border border-gray-800 bg-[#111] aspect-video mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6">
                  {project.liveLink && <a href={project.liveLink} target="_blank" className="p-3 bg-white text-black"><ExternalLink size={20} /></a>}
                  {project.githubLink && <a href={project.githubLink} target="_blank" className="p-3 bg-gray-900 text-white border border-gray-700"><Github size={20} /></a>}
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent px-2 py-1 border border-accent/30 bg-accent/5">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[9px] uppercase font-bold tracking-widest text-gray-500 border border-gray-800 px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
