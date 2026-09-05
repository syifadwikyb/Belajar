<div data-aos="fade-up" data-aos-duration="1000" onclick="window.location='{{ route('recipe.show', ['id' => $recipe['id'] ?? 0]) }}'" class="flex w-[400px] items-center bg-white border border-purple-400 rounded-lg p-4 shadow-md relative cursor-pointer">
    <img src="{{ $recipe['image'] ?? asset('asset/default_image.svg')}}" class="w-32 h-24 rounded">
    <div class="ml-4">
        <h3 class="text-lg font-bold w-44">{{ $recipe['title'] ?? 'No Title' }}</h3>    
        <p class="text-sm text-gray-700 mt-1">
            {{ \Illuminate\Support\Str::limit(strip_tags($recipe['summary'] ?? 'No Summary'), 120) }}  
        </p>              
    </div>
    <div
        class="absolute top-2 right-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded flex items-center">
        <span>{{ number_format($recipe['spoonacularScore'], 2) }}%</span>
    </div>
</div>
