<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<div class="h-full">
    <div data-aos="zoom-in" class="mx-full h-screen flex items-center justify-center relative">
        <div class="text-center">
            <h1 class="mb-3 font-bold text-2xl md:text-3xl text-white">
                Practical and Delicious Daily Cooking Inspiration,<br> Find Your Favorite Recipes Here
            </h1>
            <p class="mb-8 font-normal text-xl md:text-2xl text-white">
                Cooking Made Easier with Simple and Delicious Recipe Guides
            </p>
        </div>

        <div class="absolute bottom-0 right-0">
            <img src="{{ asset('asset/hero.svg') }}" alt="Hero Image" class="w-40 md:w-72 lg:w-96">
        </div>
    </div>
</div>

<div class="bg-white pb-8">
    <div class="mx-auto flex max-w-7xl items-center gap-6 p-6 lg:px-8">
        <p id="recomendation"></p>
        <div class="flex lg:flex-1">
            <a href="#" class="text-2xl font-semibold text-gray-900">Today's Recommended Menu</a>
        </div>

        <div class="flex gap-6">
            <a href="/layout_category/category_dessert"
                class="text-lg font-semibold bg-white text-orange-600 rounded-full py-1 px-4 hover:bg-orange-600 hover:text-white">Desert</a>
            <a href="/layout_category/category_vegetarian"
                class="text-lg font-semibold bg-white text-orange-600 rounded-full py-1 px-4 hover:bg-orange-600 hover:text-white">Vegetarian</a>
            <a href="/layout_category/category_meat"
                class="text-lg font-semibold bg-white text-orange-600 rounded-full py-1 px-4 hover:bg-orange-600 hover:text-white">Meat</a>
            <a href="/layout_category/category_fish"
                class="text-lg font-semibold bg-white text-orange-600 rounded-full py-1 px-4 hover:bg-orange-600 hover:text-white">Fish</a>
            <a href="/category"
                class="text-lg font-semibold bg-white text-orange-600 rounded-full py-1 px-4 hover:bg-orange-600 hover:text-white">Other</a>
        </div>

        <div onclick="window.location.reload()"
            class="fa fa-arrow-right text-white flex items-center justify-center bg-orange-600 rounded-full p-3"></a>
        </div>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        @foreach ($dataRecipes as $recipe)
            <x-item :recipe="$recipe"></x-item>
        @endforeach
    </div>
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>
@vite('resources/js/dropdown.js')
@vite('resources/js/slider.js')
