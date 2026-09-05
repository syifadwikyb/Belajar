<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class RecipeController extends Controller
{
    private static function apiGetMethod($endpoint, $params = [])
    {
        $params['apiKey'] = env('API_KEY');
        $response = Http::get(env('API_BASE_URL') . $endpoint, $params);
        return $response->json();
    }

    public function getRandomRecipes()
    {
        $params = [
            'number' => 12
        ];

        try {
            $response = self::apiGetMethod('random', $params);
            $data = $response['recipes'];
            return view('layouts.home', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.home', ['error' => $e->getMessage()]);
        }
    }

    public static function getDessertCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];

        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];
            return view('layouts.layout_category.category_dessert', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_dessert', ['error' => $e->getMessage()]);
        }
    }

    public static function getVegetarianCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];
        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_vegetarian', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_vegetarian', ['error' => $e->getMessage()]);
        }
    }

    public static function getMeatCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];

        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_meat', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_meat', ['error' => $e->getMessage()]);
        }
    }

    public static function getFishCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];

        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_fish', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_fish', ['error' => $e->getMessage()]);
        }
    }

    public static function getChickenCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];
        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_chicken', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_chicken', ['error' => $e->getMessage()]);
        }
    }

    public static function getSoupCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];

        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_soup', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_soup', ['error' => $e->getMessage()]);
        }
    }

    public static function getSeafoodCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];

        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_seafood', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_seafood', ['error' => $e->getMessage()]);
        }
    }

    public static function getPastaCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];

        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_pasta', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_pasta', ['error' => $e->getMessage()]);
        }
    }

    public static function getBreadCategory($category)
    {
        $params = [
            'number' => 40,
            'query' => $category
        ];

        try {
            $response = self::apiGetMethod('complexSearch', $params);
            $data = $response['results'];

            return view('layouts.layout_category.category_bread', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.layout_category.category_bread', ['error' => $e->getMessage()]);
        }
    }

    public function getDetailRecipes($id)
    {
        try {
            $data = self::apiGetMethod("{$id}/information");
            return view('layouts.detail', compact('data'));
        } catch (\Exception $e) {
            return view('layouts.detail', ['error' => $e->getMessage()]);
        }
    }
}
