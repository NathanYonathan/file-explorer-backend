'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Subfolders', [
          { name: 'Subfolder 1', folderId: 1, createdAt: new Date(), updatedAt: new Date() },
          { name: 'Subfolder 2', folderId: 1, createdAt: new Date(), updatedAt: new Date() },
          { name: 'Subfolder 1.1', folderId: 2, createdAt: new Date(), updatedAt: new Date() },
          { name: 'Subfolder 2.1', folderId: 3, createdAt: new Date(), updatedAt: new Date() },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Subfolders', null, {});
  },
};
