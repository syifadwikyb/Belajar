<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    @vite('resources/css/app.css')
</head>

<body class="bg-white dark:bg-slate-900 font-montserrat">
    <div class="sticky top-0 z-50 w-auto transition-all duration-300 bg-white header">
        <div class="container flex items-center justify-between p-8 mx-auto">
            <div>
                <img src="{{ asset('asset/link.png') }}" alt="" class="w-20 md:w-24 lg:w-28">
            </div>
            <div class="relative">
                <div class="hidden space-x-4 md:flex">
                    <a href="/login"><button
                            class="px-12 py-3 font-bold text-white bg-purple-700 rounded-lg shadow-xl dark:bg-orange-500">Login</button></a>
                    <a href="/register"><button
                            class="px-12 py-3 font-bold text-black rounded-lg hover:shadow-xl hover:text-white hover:bg-purple-700 dark:text-white dark:hover:bg-orange-500">Register</button></a>
                </div>
                <div class="flex md:hidden md:space-x-4">
                    <button id="bars-icon"
                        class="text-2xl fas fa-solid fa-bars dark:text-white"></button>
                    <div id="dropdown-menu"
                        class="absolute right-0 hidden w-48 p-4 mt-10 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-700">
                        <a href="/login"><button
                                class="flex justify-center w-full py-2 mb-1 font-bold text-white bg-purple-700 rounded-lg dark:bg-orange-500 dark:text-white">Login</button></a>
                        <a href="/register"><button
                                class="flex justify-center w-full py-2 font-bold rounded-lg hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">Register</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center min-h-screen" data-aos="flip-right"
        data-aos-duration="1000">
        <form class="p-10 rounded-lg shadow-2xl lg:p-16 md:p-10 bg-customgradient3 dark:bg-customgradient1"
      method="POST" action="{{ route('login') }}">
    @csrf
    <h1 class="mb-5 text-4xl font-bold leading-6 text-center text-white lg:text-5xl font-montserrat">Login</h1>
    <p class="mb-5 text-base font-bold leading-6 text-center text-white lg:text-2xl md:text-xl sm:text-lg">
        Login Your Account</p>
    <div class="mb-2 sm:col-span-4">
        <label for="email" class="block text-base font-bold leading-6 text-white lg:text-lg">Email</label>
        <div class="mt-2">
            <div class="flex shadow-sm">
                <input type="email" name="email" id="email" autocomplete="email"
                       class="flex-1 px-5 py-3 font-semibold text-black bg-white rounded-lg placeholder:text-abu focus:outline-none sm:text-base sm:leading-6"
                       value="{{ old('email') }}"
                       placeholder="Masukkan email">
            </div>
        </div>
        @error('email')
            <small class="text-rose-500">{{ $message }}</small>
        @enderror
    </div>
    <div class="sm:col-span-4">
        <label for="password" class="block text-base font-bold leading-6 text-white lg:text-lg">Password</label>
        <div class="mt-2">
            <div class="flex shadow-sm">
                <input type="password" name="password" id="password" autocomplete="current-password"
                       class="flex-1 px-5 py-3 font-semibold text-black bg-white rounded-l-xl placeholder:text-abu focus:outline-none sm:text-base sm:leading-6"
                       placeholder="Masukkan password">
                <span class="px-5 py-3 text-black bg-white cursor-pointer icon-eye rounded-r-xl dark:text-orange-500"
                      onclick="togglePasswordVisibility()">
                    <i class="fas fa-eye"></i>
                </span>
            </div>
        </div>
        @error('password')
            <small class="text-rose-500">{{ $message }}</small>
        @enderror
    </div>
    <button
        class="w-full px-5 py-3 mt-10 font-bold text-center text-white bg-purple-900 rounded-lg hover:bg-purple-700 dark:bg-orange-500 dark:hover:bg-orange-700">
        Login
    </button>
</form>

    </div>
</body>

<x-darkmode></x-darkmode>
@vite('resources/js/dropdown.js')
@vite('resources/js/eye.js')
@vite('resources/js/header.js')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>
</html>
