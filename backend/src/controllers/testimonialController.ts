import type { Request, Response } from 'express';
import { Testimonial } from '../models/index.js';

export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.json(testimonials);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });
    await testimonial.destroy();
    res.json({ message: 'Testimonial deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
