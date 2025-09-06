import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    usia: ''
  });
  const [pesan, setPesan] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams();
    for (let key in formData) {
      formBody.append(key, formData[key]);
    }

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbyzRS9K7zlJRyCCdXIA83U3l6ADozI6IE41-lk6jh0JeqSel-bCgPbNbsIPoaq3j_Sg/exec', {
        method: 'POST',
        body: formBody,
      });
      const text = await res.text();
      setPesan(text);
      setFormData({ nama: '', email: '', usia: '' });
    } catch (err) {
      setPesan('Terjadi kesalahan saat mengirim data');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Form Data</h1>

        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={formData.nama}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          type="number"
          name="usia"
          placeholder="Usia"
          value={formData.usia}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Kirim
        </button>

        {pesan && <p className="text-sm text-green-600">{pesan}</p>}
      </form>
    </div>
  );
}

export default App;
