import { Project, Testimonial } from '../models/index.js';
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: [{ model: Testimonial, as: 'testimonials' }],
        });
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== 'string')
            return res.status(400).json({ message: 'Invalid ID' });
        const project = await Project.findByPk(id, {
            include: [{ model: Testimonial, as: 'testimonials' }],
        });
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== 'string')
            return res.status(400).json({ message: 'Invalid ID' });
        const project = await Project.findByPk(id);
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
        await project.update(req.body);
        res.json(project);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== 'string')
            return res.status(400).json({ message: 'Invalid ID' });
        const project = await Project.findByPk(id);
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
        await project.destroy();
        res.json({ message: 'Project deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//# sourceMappingURL=projectController.js.map