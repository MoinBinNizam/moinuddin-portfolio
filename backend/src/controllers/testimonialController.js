import { Testimonial } from '../models/index.js';
export const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll();
        res.json(testimonials);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.create(req.body);
        res.status(201).json(testimonial);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== 'string')
            return res.status(400).json({ message: 'Invalid ID' });
        const testimonial = await Testimonial.findByPk(id);
        if (!testimonial)
            return res.status(404).json({ message: 'Testimonial not found' });
        await testimonial.destroy();
        res.json({ message: 'Testimonial deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//# sourceMappingURL=testimonialController.js.map