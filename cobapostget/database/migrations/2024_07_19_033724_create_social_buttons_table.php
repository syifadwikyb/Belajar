<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  
public function up()
{
    Schema::create('social_buttons', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('customization_id');
        $table->string('url');
        $table->string('icon');
        $table->timestamps();

        $table->foreign('customization_id')->references('id')->on('customizations')->onDelete('cascade');
    });
}

public function down()
{
    Schema::dropIfExists('social_buttons');
}

};   
