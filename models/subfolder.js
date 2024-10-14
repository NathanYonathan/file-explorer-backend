const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Pastikan ini mengarah ke file yang benar
const Folder = require('./folder'); // Mengimpor model Folder

// Definisi model Subfolder
const Subfolder = sequelize.define('Subfolder', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    folderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Folder,
            key: 'id',
        },
    },
}, {
    tableName: 'Subfolders',
    timestamps: true, // Untuk createdAt dan updatedAt
});

// Menetapkan relasi
Subfolder.belongsTo(Folder, { foreignKey: 'folderId' });

module.exports = Subfolder;