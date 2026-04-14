import type { Request, Response } from 'express';
import { Experience } from '../models/index.js';

export const getAllExperience = async (req: Request, res: Response) => {
  try {
    const experiences = await Experience.findAll({
      order: [['startDate', 'DESC']],
    });
    res.json(experiences);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createExperience = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (typeof id !== 'string') return res.status(400).json({ message: 'Invalid ID' });
    const experience = await Experience.findByPk(id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    await experience.update(req.body);
    res.json(experience);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (typeof id !== 'string') return res.status(400).json({ message: 'Invalid ID' });
    const experience = await Experience.findByPk(id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    await experience.destroy();
    res.json({ message: 'Experience deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
