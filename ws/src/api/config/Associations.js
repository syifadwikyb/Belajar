import Jalur from '../models/Jalur.js';
import Halte from '../models/Halte.js';
import JalurHalte from '../models/Jalur-Halte.js';

function setupAssociations() {
    // Hubungan Many-to-Many: Satu Jalur punya banyak Halte, dan satu Halte bisa ada di banyak Jalur
    Jalur.belongsToMany(Halte, {
        through: JalurHalte,
        foreignKey: 'jalur_id',
        otherKey: 'halte_id',
        as: 'halte' // Alias untuk relasi
    });

    Halte.belongsToMany(Jalur, {
        through: JalurHalte,
        foreignKey: 'halte_id',
        otherKey: 'jalur_id',
        as: 'jalur'
    });
}

export default setupAssociations;
