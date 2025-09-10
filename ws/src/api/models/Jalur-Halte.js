import { DataTypes } from 'sequelize';
import sequelize from "../config/db.js";
import Jalur from './Jalur.js';
import Halte from './Halte.js';

const JalurHalte = sequelize.define('JalurHalte', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    jalur_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Jalur,
            key: 'id_jalur'
        }
    },
    halte_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Halte,
            key: 'id_halte'
        }
    },
    urutan: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'jalur_halte',
    timestamps: false
});

export default JalurHalte;
