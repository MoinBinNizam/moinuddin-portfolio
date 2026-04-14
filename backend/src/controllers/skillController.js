import { Skill } from '../models/index.js';
export const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.findAll();
        res.json(skills);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createSkill = async (req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.status(201).json(skill);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== 'string')
            return res.status(400).json({ message: 'Invalid ID' });
        const skill = await Skill.findByPk(id);
        if (!skill)
            return res.status(404).json({ message: 'Skill not found' });
        await skill.update(req.body);
        res.json(skill);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== 'string')
            return res.status(400).json({ message: 'Invalid ID' });
        const skill = await Skill.findByPk(id);
        if (!skill)
            return res.status(404).json({ message: 'Skill not found' });
        await skill.destroy();
        res.json({ message: 'Skill deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//# sourceMappingURL=skillController.js.map