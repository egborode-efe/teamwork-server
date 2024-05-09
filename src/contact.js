// Import necessary modules
import { Router } from 'express';
const router = Router();

import Contact from '../models/contactModel.js'

// Endpoint to handle POST requests for creating a new contact
router.post('/contact', async (req, res) => {
  const { name, email, contact, msg } = req.body;

  try {
    if (!name || !email || !contact || !msg) {
      return res
        .status(400)
        .json({ msg: 'name, email and messages are required' });
    }
    // Create a new contact using the Contact model
    const newContact = new Contact({
      name,
      email,
      contact,
      msg,
    });

    // Save the new contact to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact created successfully!' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating contact', error: error.message });
  }
});

export default router;