import { pool } from '@/lib/db';
import { updateUser } from '@/app/actions';
import Link from 'next/link';

// 1. Ubah tipe params menjadi Promise
export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {

    // 2. Un-wrap (tunggu) params menggunakan await
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // MELIHAT DATA: Ambil data user dari MySQL berdasarkan ID yang sudah di-await
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    const users = rows as any[];
    const user = users[0];

    // Jika ID tidak ada di database
    if (!user) {
        return <div className="p-8">Data tidak ditemukan!</div>;
    }

    // MENGGANTI DATA: Tampilkan data di form menggunakan defaultValue
    return (
        <main className="max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Edit Data User</h1>

            <form action={updateUser} className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg">
                {/* Input tersembunyi untuk mengirimkan ID */}
                <input type="hidden" name="id" value={user.id} />

                <input
                    type="text"
                    name="name"
                    defaultValue={user.name}
                    required
                    className="border p-2 rounded text-black"
                />

                <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    required
                    className="border p-2 rounded text-black"
                />

                <div className="flex gap-2 mt-2">
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded flex-1">
                        Simpan Perubahan
                    </button>
                    <Link href="/" className="bg-gray-400 text-white px-4 py-2 rounded flex-1 text-center">
                        Batal
                    </Link>
                </div>
            </form>
        </main>
    );
}