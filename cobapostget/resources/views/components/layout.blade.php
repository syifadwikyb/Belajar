<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<div class="container mx-auto h-full">
    <div class="">
        <div data-aos="zoom-in"
            class="sm:px-3 md:px-5 lg:px-0 relative rounded-lg lg:rounded-3xl bg-customgradient2 dark:bg-customgradient1 ">
            <div class="hero pl-0 flex flex-col items-center justify-between lg:pl-10 lg:flex-row-reverse ">
                <div class="flex justify-center items-center mx-auto lg:mx-0 z-10 mb-6 w-full lg:w-auto lg:mb-0 lg:ml-6">
                    <img src="{{ asset('asset/boy.png') }}" alt=""
                        class="w-[300px] md:w-[450px] lg:w-[600px] object-cover">
                </div>
                <div class="w-full px-3 lg:w-1/2 text-center lg:text-left">
                    <h1 class="mb-3 font-bold text-xl md:text-3xl lg:text-5xl leading-normal text-black dark:text-white">
                        Ekspresikan Kreativitasmu dalam <span class="text-purple-700 dark:text-orange-500">Website</span>
                        yang Memukau!</h1>
                    <p class="mb-8 text-sm md:text-base lg:text-lg text-black dark:text-white">Temukan template keren
                        yang bisa kamu sesuaikan dengan mudah. Hadirkan website profesional dan menarik sesuai
                        kreativitasmu. Mulai sekarang dan ciptakan pengalaman tak terlupakan bagi pengunjung websitemu!
                    </p>
                    <div class="md:pb-5 lg:pb-0 pb-5">
                        <a href="/register"><button
                                class="text-sm md:text-base lg:text-lg rounded-lg lg:rounded-xl px-4 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-white font-bold bg-purple-700 hover:bg-purple-900 dark:bg-orange-500 dark:hover:bg-orange-700">Mulai
                                Sekarang</button></a>
                    </div>
                </div>
            </div>
        </div>
        <p class="pt-16" id="aboutme"></p>
        <div data-aos="zoom-in"
            class="tentang mt-10 flex dark:bg-slate-800 bg-white items-center rounded-lg lg:rounded-none">
            <img src="{{ asset('asset/tentang.svg') }}" class="hidden lg:h-full md:w-1/2 lg:w-1/2 lg:flex"
                alt="">
            <div class="text-black p-5 text-center lg:-ml-36 lg:mt-0 lg:text-left">
                <h1 class="font-bold pb-4 text-2xl md:text-3xl lg:text-4xl dark:text-orange-500">About me</h1>
                <p class="text-sm md:text-base lg:text-base dark:text-white text-justify">Selamat datang di Huaha! Kami
                    adalah platform inovatif yang memudahkan Anda dalam membuat website dengan cepat dan mudah. Di
                    Huaha, kami menyediakan berbagai alat dan fitur yang dirancang untuk membantu Anda menciptakan
                    website yang menarik dan fungsional tanpa memerlukan keterampilan teknis yang mendalam. Wujudkan
                    website impian Anda hari ini!</p>
            </div>
            <p id="keunggulan"></p>
        </div>

        <div data-aos="zoom-in" class="text-center mt-10 items-center rounded-lg lg:rounded-none">
            <h1 class="font-bold pb-4 text-2xl md:text-3xl lg:text-4xl dark:text-orange-500">Feature</h1>
            <p class="text-sm md:text-base lg:text-base dark:text-white">Fitur Unggulan yang Dirancang Khusus untuk
                Kebutuhan Anda</p>
            <div class="flex justify-center mx-5 mt-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-24">
                    <div data-aos="zoom-in" data-aos-delay="0"
                        class="bg-slate-100 dark:bg-slate-800 dark:text-white p-3 md:p-4 lg:p-5 w-60 md:-70 lg:w-80 rounded-lg flex flex-col items-center shadow-xl">                        
                        <i class="fa-solid fa-eye w-6 md:w-7 lg:w-8 mb-4  dark:text-orange-500" style="transform: scale(1.5);"></i>
                        <p class="font-bold text-sm md:text-base lg:text-base text-center  dark:text-orange-500">Preview Langsung<br>
                            <span class="font-normal text-black dark:text-white">
                                Melihat hasil input gambar dan teks secara langsung tanpa perlu menyimpan terlebih dahulu.
                            </span>
                        </p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200"
                        class="bg-slate-100 dark:bg-slate-800 dark:text-white p-3 md:p-4 lg:p-5 w-60 md:-70 lg:w-80 rounded-lg flex flex-col items-center shadow-xl">                                               
                        <i class="fa-solid fa-hashtag w-6 md:w-7 lg:w-8 mb-4  dark:text-orange-500" style="transform: scale(1.5);"></i>
                        <p class="font-bold text-sm md:text-base lg:text-base text-center  dark:text-orange-500">Integrasi Media Sosial<br>
                            <span class="font-normal text-black dark:text-white">
                                Menyediakan fitur untuk menghubungkan dan menampilkan akun media sosial langsung di halaman Anda.
                            </span>
                        </p>
                    </div>
                    <div class="md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:col-start-3">
                        <div data-aos="zoom-in" data-aos-delay="400"
                            class="bg-slate-100 dark:bg-slate-800 dark:text-white p-3 md:p-4 lg:p-5 w-60 md:-70 lg:w-80 rounded-lg flex flex-col items-center shadow-xl">
                            <i class="fa-solid fa-gear w-6 md:w-7 lg:w-8 mb-4  dark:text-orange-500" style="transform: scale(1.5);"></i>
                            <p class="font-bold text-sm md:text-base lg:text-base text-center  dark:text-orange-500">Kustomisasi Link<br>
                                <span class="font-normal text-black dark:text-white">
                                    Membuat dan mengelola tautan dinamis dengan mudah sesuai kebutuhan pengguna.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p class="pt-16" id="template"></p>
        <div data-aos="zoom-in" class="text-center pb-5">
            <h1 class="font-bold mt-10 pb-4 text-2xl md:text-3xl lg:text-4xl dark:text-orange-500">Template
            </h1>
            <p class="text-sm md:text-base lg:text-base dark:text-white">Jelajahi berbagai tata letak kami dan mulai
                buat website impian Anda sekarang!</p>
        </div>
        {{-- Slider --}}
        <div data-aos="zoom-in" class="flex justify-center max-h-screen mb-10">
            <div class="relative w-full sm:w-4/5 max-w-7xl overflow-hidden">
                <div class="flex transition-transform duration-500 ease-linear" id="slider-track">
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center cursor-pointer">
                        <img src="{{ asset('asset/template1.png') }}" alt="Image1" class="w-28 md:w-1/2 lg:w-3/4">
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center cursor-pointer">
                        <img src="{{ asset('asset/template2.png') }}" alt="Image2" class="w-28 md:w-1/2 lg:w-3/4">
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center cursor-pointer">
                        <img src="{{ asset('asset/template3.png') }}" alt="Image3" class="w-28 md:w-1/2 lg:w-3/4">
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center cursor-pointer">
                        <img src="{{ asset('asset/template4.png') }}" alt="Image4" class="w-28 md:w-1/2 lg:w-3/4">
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center cursor-pointer">
                        <img src="{{ asset('asset/template5.png') }}" alt="Image5" class="w-28 md:w-1/2 lg:w-3/4">
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center cursor-pointer">
                        <img src="{{ asset('asset/template6.png') }}" alt="Image6" class="w-28 md:w-1/2 lg:w-3/4">
                    </div>                
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>
@vite('resources/js/dropdown.js')
@vite('resources/js/slider.js')
