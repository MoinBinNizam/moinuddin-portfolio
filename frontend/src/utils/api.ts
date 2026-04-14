import axios from 'axios';
import { Project, Experience, Skill, Testimonial } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getProjects = () => api.get<Project[]>('/projects');
export const getExperience = () => api.get<Experience[]>('/experience');
export const getSkills = () => api.get<Skill[]>('/skills');
export const getTestimonials = () => api.get<Testimonial[]>('/testimonials');

export const sendContactMessage = (data: { name: string; email: string; subject: string; message: string }) => 
  api.post('/contact', data);

export default api;
