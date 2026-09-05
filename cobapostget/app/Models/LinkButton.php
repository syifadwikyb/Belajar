<?php

// app/Models/LinkButton.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LinkButton extends Model
{
    use HasFactory;

    protected $fillable = ['customization_id', 'text', 'url'];

    public function customization()
    {
        return $this->belongsTo(Customization::class);
    }
}
