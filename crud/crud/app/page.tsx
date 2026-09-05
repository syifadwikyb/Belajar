import { pool } from '@/lib/db';
import { addUser, deleteUser, updateUser } from './actions';
import Link from 'next/link';

// Mendefinisikan tipe data TypeScript
type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Home() {
  // Mengambil data dari MySQL (Read)
  const [rows] = await pool.query('SELECT * FROM users ORDER BY id desc');
  const users = rows as User[];

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Coba CRUD</h1>

      {/* Form Create */}
      <form action={addUser} className="flex gap-4 mb-8 bg-gray-100 p-4 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          required
          className="border p-2 rounded flex-1 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border p-2 rounded flex-1 text-black"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </form>

      {/* Tabel Read & Delete */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">ID</th>
            <th className="py-2">Nama</th>
            <th className="py-2">Email</th>
            <th className="py-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2">{user.id}</td>
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>

              <td className="py-2 flex gap-4">
                <Link href={`/edit/${user.id}`} className="text-blue-500 font-bold hover:underline">
                  Edit
                </Link>
                <form action={deleteUser.bind(null, user.id)}>
                  <button type="submit" className="text-red-500 font-bold hover:underline">
                    Hapus
                  </button>
                </form>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}