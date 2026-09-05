<?php
// app/Http/Controllers/HomeController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Customization;
use App\Models\LinkButton;
use App\Models\SocialButton;

class HomeController extends Controller
{
    public function index()
    {
        // Retrieve the customization for the authenticated user
        $user = collect();$user = Auth::user();
        $customization = Customization::where('user_id', Auth::id())->first();
        // If customization exists, get the related social and link buttons
        if ($customization) {
            $socialButtons = SocialButton::where('customization_id', $customization->id)->get();
            $linkButtons = LinkButton::where('customization_id', $customization->id)->get();
        } else {
            // If no customization is found, initialize empty collections
            $socialButtons = collect();
            $linkButtons = collect();
        }

        return view('home', compact('customization', 'socialButtons', 'linkButtons','user'));
    }
}

