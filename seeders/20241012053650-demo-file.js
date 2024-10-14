'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Files', [
      {
        name: 'File 1.txt',
        folderId: 1, // Mengacu pada Root Folder
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'File 2.txt',
        folderId: 2, // Mengacu pada Sub Folder 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'File 3.txt',
        folderId: 2, // Mengacu pada Sub Folder 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'File 4.txt',
        folderId: 3, // Mengacu pada Sub Folder 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Files', null, {});
  }
};
