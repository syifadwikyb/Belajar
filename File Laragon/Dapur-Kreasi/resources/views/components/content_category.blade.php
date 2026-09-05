<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<div class="container mx-auto text-4xl text-black font-bold py-8 pl-16">
    Food Category
</div>
<div class="bg-white mb-8 flex items-center justify-around">
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-8 mx-16">
        <a href="/layout_category/category_dessert">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/dessert.jpeg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Dessert</h3>
                </div>
            </div>
        </a>    
        
        <a href="/layout_category/category_vegetarian">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/vegetarian.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Vegetarian</h3>
                </div>
            </div>
        </a>
        
        <a href="/layout_category/category_meat">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/meat.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Meat</h3>
                </div>
            </div>        
        </a>
        
        <a href="/layout_category/category_fish">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/fish.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Fish</h3>
                </div>
            </div>
        </a>
        
        <a href="/layout_category/category_chicken">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/chicken.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Chicken</h3>
                </div>
            </div>
        </a>
        
        <a href="/layout_category/category_soup">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/soup.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Soup</h3>
                </div>
            </div>
        </a>
        
        <a href="/layout_category/category_seafood">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/seafood.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Seafood</h3>
                </div>
            </div>
        </a>
        
        <a href="/layout_category/category_pasta">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/pasta.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Pasta</h3>
                </div>
            </div>
        </a>
        
        <a href="/layout_category/category_bread">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" class="flex items-center bg-white border border-purple-400 rounded-lg shadow-md relative">
                <div class="bg-white rounded-lg shadow-lg p-4 text-center">
                    <img src="{{ asset('asset/bread.jpg') }}" class="w-64 h-48 rounded-lg object-cover">    
                    <h3 class="text-lg font-semibold mt-2">Bread</h3>
                </div>
            </div>
        </a>        
    </div>
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>