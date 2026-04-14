import type { Request, Response } from 'express';
import { Project, Testimonial } from '../models/index.js';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.findAll({
      include: [{ model: Testimonial, as: 'testimonials' }],
    });
    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByPk(req.params.id, {
      include: [{ model: Testimonial, as: 'testimonials' }],
    });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await project.update(req.body);
    res.json(project);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await project.destroy();
    res.json({ message: 'Project deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
