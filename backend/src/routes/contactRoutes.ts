import express from 'express';
import { sendContactEmail } from '../services/mailerService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await sendContactEmail(name, email, subject, message);
    res.json({ message: 'Email sent successfully!' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
