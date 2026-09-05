'use server'

import { pool } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Fungsi untuk menambah data (Create)
export async function addUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  
  // Refresh halaman agar data terbaru langsung muncul
  revalidatePath('/'); 
}

// Fungsi untuk menghapus data (Delete)
export async function deleteUser(id: number) {
  await pool.query('DELETE FROM users WHERE id = ?', [id]);
  revalidatePath('/');
}

// Fungsi untuk mengubah data (Update)
export async function updateUser(formData: FormData) {
  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // Query UPDATE ke MySQL
  await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  
  revalidatePath('/'); // Refresh cache halaman utama
  redirect('/');       // Kembali ke halaman utama
}