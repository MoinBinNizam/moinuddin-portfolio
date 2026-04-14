import sequelize from './src/config/database.js';
import { Project, Experience, Skill, Testimonial } from './src/models/index.js';
const seed = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database cleared!');
        // Projects
        await Project.create({
            title: 'Jewelry ERP & POS',
            category: 'ERP',
            description: 'A comprehensive Enterprise Resource Planning system for jewelry businesses, featuring real-time inventory tracking, sales management, and customer relations.',
            techStack: ['React', 'Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
            imageUrl: '/assets/hero.png', // Placeholder
        });
        await Project.create({
            title: 'LPG Management System',
            category: 'ERP',
            description: 'Streamlined logistics and distribution management for LPG suppliers, optimizing delivery routes and inventory monitoring.',
            techStack: ['React', 'Node.js', 'PostgreSQL', 'Framer Motion'],
            imageUrl: '/assets/hero.png', // Placeholder
        });
        // Experience
        await Experience.create({
            companyName: 'TechVelly',
            role: 'Full-Stack Software Engineer',
            startDate: '2022-01-01',
            contributions: 'Developed and maintained complex ERP systems for jewelry and LPG industries. Led the transition to a modern React-based frontend.',
        });
        // Skills
        const skills = [
            { name: 'React', category: 'Frontend', iconName: 'ReactIcon' },
            { name: 'Node.js', category: 'Backend', iconName: 'NodeIcon' },
            { name: 'TypeScript', category: 'Frontend', iconName: 'TSIcon' },
            { name: 'Tailwind CSS', category: 'Frontend', iconName: 'TailwindIcon' },
            { name: 'SQLite', category: 'Backend', iconName: 'DBIcon' },
        ];
        for (const skill of skills) {
            await Skill.create(skill);
        }
        console.log('Seeding completed!');
        process.exit(0);
    }
    catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};
seed();
//# sourceMappingURL=seed.js.map