'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Files', {
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
        onUpdate: 'CASCADE', // Jika ID folder diperbarui
        onDelete: 'CASCADE', // Jika folder dihapus, file ini juga akan dihapus
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Menambahkan default value
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Menambahkan default value
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Files');
  }
};
