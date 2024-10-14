'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Subfolders', {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          folderId: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: 'Folders', 
                  key: 'id',
              },
          },
          createdAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Subfolders');
  },
};