<?php
// app/Models/SocialButton.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialButton extends Model
{
    use HasFactory;

    protected $fillable = ['customization_id', 'url', 'icon'];

    public function customization()
    {
        return $this->belongsTo(Customization::class);
    }
}
