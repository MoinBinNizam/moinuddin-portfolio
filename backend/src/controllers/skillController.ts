import type { Request, Response } from 'express';
import { Skill } from '../models/index.js';

export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.findAll();
    res.json(skills);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    await skill.update(req.body);
    res.json(skill);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    await skill.destroy();
    res.json({ message: 'Skill deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
