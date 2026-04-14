import Project from './Project.js';
import Experience from './Experience.js';
import Skill from './Skill.js';
import Testimonial from './Testimonial.js';
import User from './User.js';

// Associations
Project.hasMany(Testimonial, { foreignKey: 'projectId', as: 'testimonials' });
Testimonial.belongsTo(Project, { foreignKey: 'projectId', as: 'project' });

export { Project, Experience, Skill, Testimonial, User };
