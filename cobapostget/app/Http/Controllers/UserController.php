<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    // Show the profile form
    public function show()
{
    $user = Auth::user();
    return view('profile', compact('user'));
}

    // Update profile information
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone_number' => 'nullable|string|max:15',
        ]);

        if ($validator->fails()) {
            return redirect()->route('profile.show')
                ->withErrors($validator)
                ->withInput();
        }

        $user = Auth::user();
        $user->name = $request->input('name');
        $user->phone_number = $request->input('phone_number');
        $user->save();

        return redirect()->route('profile.show')->with('success', 'Profil berhasil di update');
    }

    // Change profile picture
    public function changePicture(Request $request)
    {
        $request->validate([
            'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = Auth::user();
        if ($request->hasFile('profile_picture')) {
            $image = $request->file('profile_picture');
            $imagePath = $image->store('profile_pictures', 'public');
            if ($user->profile_picture) {
                Storage::disk('public')->delete($user->profile_picture);
            }

            $user->profile_picture = $imagePath;
            $user->save();
        }

        return redirect()->route('profile.show')->with('success', 'Profile picture updated successfully.');
    }

    // Delete profile picture
    public function deletePicture()
    {
        $user = Auth::user();
        if ($user->profile_picture) {
            Storage::disk('public')->delete($user->profile_picture);
            $user->profile_picture = null;
            $user->save();
        }

        return redirect()->route('profile.show')->with('success', 'Profile picture deleted successfully.');
    }
}
