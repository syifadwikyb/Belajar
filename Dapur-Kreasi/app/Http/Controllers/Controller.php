<?php

namespace App\Http\Controllers;

abstract class Controller
{
    abstract protected function getRandomRecipes();
    abstract protected static function getDessertCategory($category);
    abstract protected static function getVegetarianCategory($category);
    abstract protected static function getMeatCategory($category);
    abstract protected static function getFishCategory($category);
    abstract protected static function getChickenCategory($category);
    abstract protected static function getSoupCategory($category);
    abstract protected static function getSeafoodCategory($category);
    abstract protected static function getPastaCategory($category);
    abstract protected static function getBreadCategory($category);
    abstract protected function getDetailRecipes($id);
}
