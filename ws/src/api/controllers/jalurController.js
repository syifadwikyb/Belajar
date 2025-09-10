import Jalur from '../models/Jalur.js';
import Halte from '../models/Halte.js';


// Tidak lagi memanggil Google Maps API.
export const createJalur = async (req, res) => {
    // Backend sekarang mengharapkan 'rute_polyline' dikirim langsung dari frontend
    const { nama_jalur, kode_jalur, rute_polyline } = req.body;

    if (!nama_jalur || !rute_polyline) {
        return res.status(400).json({ message: 'Nama jalur dan rute_polyline (koordinat) dibutuhkan' });
    }

    try {
        // Langsung simpan data yang diterima ke database
        const jalur = await Jalur.create({
            nama_jalur,
            kode_jalur,
            rute_polyline // Simpan string koordinat dari frontend
        });

        res.status(201).json(jalur);
    } catch (error) {
        console.error("Error saat membuat jalur:", error);
        res.status(500).json({ message: 'Error pada server', error: error.message });
    }
};


// --- FUNGSI CRUD LAINNYA (TIDAK BERUBAH BANYAK) ---

export const getAllJalur = async (req, res) => {
    try {
        const jalur = await Jalur.findAll({
            attributes: ['id_jalur', 'nama_jalur', 'kode_jalur']
        });
        res.json(jalur);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getJalurById = async (req, res) => {
    try {
        const jalur = await Jalur.findByPk(req.params.id, {
            include: [{
                model: Halte,
                as: 'halte',
                through: { attributes: ['urutan'] }
            }]
        });
        if (!jalur) return res.status(404).json({ message: 'Jalur tidak ditemukan' });

        if (jalur.halte && jalur.halte.length > 0) {
            jalur.halte.sort((a, b) => a.JalurHalte.urutan - b.JalurHalte.urutan);
        }

        res.json(jalur);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Fungsi update bisa dimodifikasi untuk menerima rute_polyline baru juga
export const updateJalur = async (req, res) => {
    try {
        const jalur = await Jalur.findByPk(req.params.id);
        if (!jalur) {
            return res.status(404).json({ message: 'Jalur tidak ditemukan' });
        }

        await jalur.update(req.body);
        res.json(jalur);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteJalur = async (req, res) => {
    try {
        const jalur = await Jalur.findByPk(req.params.id);
        if (!jalur) {
            return res.status(404).json({ message: 'Jalur tidak ditemukan' });
        }

        await jalur.destroy();
        res.json({ message: 'Jalur berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// --- FUNGSI UNTUK HALTE (TIDAK BERUBAH) ---
export const addHalteToJalur = async (req, res) => {
    try {
        const { id_jalur } = req.params;
        const { halte_id, urutan } = req.body;

        const jalur = await Jalur.findByPk(id_jalur);
        const halte = await Halte.findByPk(halte_id);

        if (!jalur || !halte) {
            return res.status(404).json({ message: 'Jalur atau Halte tidak ditemukan' });
        }

        await jalur.addHalte(halte, { through: { urutan: urutan } });
        res.status(201).json({ message: 'Halte berhasil ditambahkan ke jalur' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

