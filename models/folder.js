const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Pastikan ini mengarah ke file yang benar

// Definisi model Folder
const Folder = sequelize.define('Folder', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'Folders',
    timestamps: true, // Untuk createdAt dan updatedAt
});

module.exports = Folder;