import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactMessage } from '../utils/api';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await sendContactMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Inquiry</span>
            <h2 className="text-5xl font-black uppercase mt-4 tracking-tighter mb-12">Let's <span className="text-gray-500">Collaborate.</span></h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="p-4 border border-gray-800 bg-[#111] text-accent"><Mail size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Email</h4>
                  <p className="text-lg font-bold">moin@techvelly.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 border border-gray-800 bg-[#111] text-accent"><Phone size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Phone</h4>
                  <p className="text-lg font-bold">+880 1234 567 890</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 border border-gray-800 bg-[#111] text-accent"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Location</h4>
                  <p className="text-lg font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-12 border border-gray-800 bg-[#111] space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Full Name</label>
                <input 
                  type="text" required 
                  className="w-full bg-[#0a0a0a] border border-gray-800 p-4 focus:border-accent outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Email Address</label>
                <input 
                  type="email" required 
                  className="w-full bg-[#0a0a0a] border border-gray-800 p-4 focus:border-accent outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Subject</label>
              <input 
                type="text" required 
                className="w-full bg-[#0a0a0a] border border-gray-800 p-4 focus:border-accent outline-none transition-colors"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Message</label>
              <textarea 
                rows={6} required 
                className="w-full bg-[#0a0a0a] border border-gray-800 p-4 focus:border-accent outline-none transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center space-x-4 hover:bg-accent hover:text-white transition-all"
            >
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
              <Send size={16} />
            </button>
            {status === 'success' && <p className="text-green-500 text-xs font-bold uppercase tracking-widest">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">Failed to send message. Please try again.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
