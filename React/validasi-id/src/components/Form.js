import React, { useState } from 'react';
import { validateId, submitData } from '../api/spreadsheet';

export default function Form() {
  const [id, setId] = useState('');
  const [bb, setBb] = useState('');
  const [tb, setTb] = useState('');
  const [valid, setValid] = useState(null);
  const [msg, setMsg] = useState('');

  const handleValidate = async () => {
    const result = await validateId(id);
    if (result.found) {
      setValid(true);
      setMsg(`Halo ${result.nama}, silakan isi berat dan tinggi badan.`);
    } else {
      setValid(false);
      setMsg('ID tidak ditemukan dalam database.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitData(id, bb, tb);
    setMsg(result);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow bg-white space-y-4">
      <h1 className="text-xl font-bold">Form Pengisian Data</h1>

      <input
        type="text"
        placeholder="Masukkan ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button
        onClick={handleValidate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Cek ID
      </button>

      {valid && (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="number"
            placeholder="Berat Badan (kg)"
            value={bb}
            onChange={(e) => setBb(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Tinggi Badan (cm)"
            value={tb}
            onChange={(e) => setTb(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      )}

      <p className="text-sm text-red-600">{msg}</p>
    </div>
  );
}
