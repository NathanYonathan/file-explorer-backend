'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Folders', [
          { name: 'Root Folder', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Folder 1', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Folder 2', createdAt: new Date(), updatedAt: new Date() },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Folders', null, {});
  },
};