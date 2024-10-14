const express = require('express');
const File = require('../models/file');

const router = express.Router();

// Mendapatkan semua file
router.get('/files', async (req, res) => {
    try {
        const files = await File.findAll();
        res.json(files);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Failed to retrieve files' });
    }
});

// Mendapatkan semua folder berdasarkan folder Id
router.get('/folders/:folderId/files', async (req, res) => {
    const { folderId } = req.params;
    try {
      const files = await File.findAll({
        where: {
          folderId: folderId 
        }
      });
      res.json(files);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Failed to retrieve sub folders' });
    }
});

// Menambahkan file baru
router.post('/files', async (req, res) => {
    const { name, folderId } = req.body;
    try {
        const newFolder = await Folder.create({ name, folderId });
        res.status(201).json(newFolder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create files' });
    }
});

module.exports = router;
