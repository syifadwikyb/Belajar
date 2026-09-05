<?php

use App\Http\Controllers\RecipeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/news', function () {
    return view('layouts.news');
});

Route::get('/category', function () {
    return view('layouts.category');
});

Route::get('/favorite', function () {
    return view('layouts.favorite');
});

Route::get('/detail', function () {
    return view('layouts.detail');
});

Route::get('login', function () {
    return view('layouts.auth.login');
});

Route::get('register', function () {
    return view('layouts.auth.register');
});


Route::get('/', [RecipeController::class, 'getRandomRecipes']);

// Start Category
Route::get('/layout_category/category_dessert', function () {
    return app()->call([RecipeController::class, 'getDessertCategory'], ['category' => 'dessert']);
});
Route::get('/layout_category/category_vegetarian', function () {
    return app()->call([RecipeController::class, 'getvegetarianCategory'], ['category' => 'vegetarian']);
});
Route::get('/layout_category/category_meat', function () {
    return app()->call([RecipeController::class, 'getMeatCategory'], ['category' => 'meat']);
});
Route::get('/layout_category/category_fish', function () {
    return app()->call([RecipeController::class, 'getFishCategory'], ['category' => 'fish']);
});
Route::get('/layout_category/category_chicken', function () {
    return app()->call([RecipeController::class, 'getChickenCategory'], ['category' => 'chicken']);
});
Route::get('/layout_category/category_soup', function () {
    return app()->call([RecipeController::class, 'getSoupCategory'], ['category' => 'soup']);
});
Route::get('/layout_category/category_seafood', function () {
    return app()->call([RecipeController::class, 'getSeafoodCategory'], ['category' => 'seafood']);
});
Route::get('/layout_category/category_pasta', function () {
    return app()->call([RecipeController::class, 'getPastaCategory'], ['category' => 'pasta']);
});
Route::get('/layout_category/category_bread', function () {
    return app()->call([RecipeController::class, 'getBreadCategory'], ['category' => 'bread']);
});
// End Category

Route::get('/detail/{id}', [RecipeController::class, 'getDetailRecipes'])->name('recipe.show');

Route::post('/layouts/auth/register', [UserController::class, 'store'])->name('user.store');
