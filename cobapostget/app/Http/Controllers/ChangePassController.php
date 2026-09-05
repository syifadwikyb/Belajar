<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class ChangePassController extends Controller
{
    public function changepass()
    {
        return view('changepass');
    }

    public function changepass_proses(Request $request)
    {
        // Validasi input dengan pesan kustom
        $request->validate([
            'oldpassword' => 'required',
            'newpassword' => 'required|min:8',
            'confirmpassword' => 'required|same:newpassword|min:8',
        ], [
            'oldpassword.required' => 'Password lama harus terisi',
            'newpassword.required' => 'Password baru harus terisi',
            'newpassword.min' => 'Password baru harus memiliki minimal 8 karakter',
            'confirmpassword.required' => 'Konfirmasi password harus terisi',
            'confirmpassword.same' => 'Konfirmasi password harus sama dengan password baru',
            'confirmpassword.min' => 'Konfirmasi password harus memiliki minimal 8 karakter',
        ]);

        $oldpassword = $request->oldpassword;
        $newpassword = $request->newpassword;

        $id = Auth::id(); // Mengambil ID pengguna yang sedang login
        $user = User::findOrFail($id);

        if (Hash::check($oldpassword, $user->password)) {
            $user->password = bcrypt($newpassword);
            try {
                $user->save();                
                return redirect()->route('changepass')->with('success', 'Selamat anda berhasil ubah password');
            } catch (\Exception $e) {
                return redirect()->route('changepass')->with('failed', 'Anda gagal mengubah password');
            }
        } else {
            return redirect()->route('changepass')->with('failed', 'Anda salah memasukkan password lama');
        }        
    }
}
