const express = require('express');
const Folder = require('../models/folder');

const router = express.Router();

// Mendapatkan semua folder
router.get('/folders', async (req, res) => {
  try {
    const folders = await Folder.findAll();
    res.json(folders);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Failed to retrieve folders' });
  }
});

// Menambahkan folder baru
router.post('/folders', async (req, res) => {
  const { name } = req.body;
  try {
    const newFolder = await Folder.create({ name });
    res.status(201).json(newFolder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create folder' });
  }
});

module.exports = router;
