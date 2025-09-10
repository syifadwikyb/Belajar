import { DataTypes } from 'sequelize';
import sequelize from "../config/db.js";

const Halte = sequelize.define('Halte', {
    id_halte: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama_halte: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false,
    }
}, {
    tableName: 'halte',
    timestamps: true, // Menggunakan timestamps created_at dan updated_at
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Halte;
