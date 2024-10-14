const express = require('express');
const SubFolder = require('../models/subfolder');

const router = express.Router();

// Mendapatkan semua folder
router.get('/folders/subfolders', async (req, res) => {
  try {
    const subFolder = await SubFolder.findAll();
    res.json(subFolder);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Failed to retrieve sub folders' });
  }
});

// Mendapatkan semua folder berdasarkan folder Id
router.get('/folders/:folderId/subfolders', async (req, res) => {
    const { folderId } = req.params; // Ambil folderId dari parameter URL
    try {
      const subFolder = await SubFolder.findAll({
        where: {
          folderId: folderId // Filter berdasarkan parentId
        }
      });
      res.json(subFolder);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Failed to retrieve sub folders' });
    }
  });

// Menambahkan folder baru
router.post('/folders/subfolders', async (req, res) => {
  const { name, parentId } = req.body;
  try {
    const newSubFolder = await SubFolder.create({ name, parentId });
    res.status(201).json(newSubFolder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create sub folder' });
  }
});

module.exports = router;
