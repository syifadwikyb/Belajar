import { DataTypes } from 'sequelize';
import sequelize from "../config/db.js";

const Bus = sequelize.define('Bus', {
    id_bus: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    plat_nomor: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    jenis_bus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status_operasi: {
        type: DataTypes.ENUM('aktif', 'tidak aktif', 'dalam perbaikan'),
        allowNull: false,
    }
}, {
    tableName: 'bus',
    timestamps: false,
});

export default Bus;
