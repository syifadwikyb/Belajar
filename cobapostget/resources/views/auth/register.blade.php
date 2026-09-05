<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    @vite('resources/css/app.css')
</head>

<body class="h-screen bg-white dark:bg-slate-900 font-montserrat">
    <div class="sticky top-0 z-50 w-auto h-auto transition-all duration-300 bg-white header">
        <div class="container flex items-center justify-between p-8 mx-auto">
            <div>
                <img src="{{ asset('asset/link.png') }}" alt="" class="w-20 md:w-24 lg:w-28">
            </div>
            <div class="relative">
                <div class="hidden space-x-4 md:flex">
                    <a href="/login"><button
                            class="px-12 py-3 font-bold rounded-lg  dark:text-white hover:bg-purple-700 dark:hover:bg-orange-500 hover:shadow-xl hover:text-white">Login</button></a>
                    <a href="/register"><button
                            class="px-12 py-3 font-bold shadow-xl rounded-lg bg-purple-700 dark:bg-orange-500 text-white">Register</button></a>
                </div>
                <div class="flex md:hidden md:space-x-4">
                    <button id="bars-icon"
                        class="text-2xl fas fa-solid fa-bars  dark:text-white"></button>
                    <div id="dropdown-menu"
                        class="absolute right-0 hidden p-4 w-48 mt-10 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800">
                        <a href="/login"><button
                                class="mb-1 flex justify-center w-full py-2 font-bold rounded-lg  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">Login</button></a>
                        <a href="/register"><button
                                class="flex rounded-lg py-2 w-full justify-center font-bold text-white bg-purple-700 dark:bg-orange-500 dark:text-white">Register</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center min-h-screen" data-aos="flip-right"
        data-aos-duration="1000">
        <form class="lg:p-16 md:p-10 p-10 shadow-2xl bg-customgradient3 dark:bg-customgradient1 rounded-lg"
            method="POST" action="{{ route('register') }}">
            @csrf
            <h1 class="mb-8 text-4xl font-bold leading-6 text-center text-white lg:text-5xl dark:text-white">
                Register</h1>
            <div class="mb-2 sm:col-span-4">
                <label for="name" class="block text-base font-bold leading-6 text-white dark:text-white">Full
                    Name</label>
                <div class="mt-2">
                    <div class="flex shadow-sm">
                        <input type="text" name="name" id="name" value="{{ old('name') }}"
                            autocomplete="name"
                            class="flex-1 px-5 py-3 font-semibold rounded-lg bg-white text-black placeholder:text-abu focus:outline-none sm:text-base sm:leading-6 dark:bg-white dark:text-black"
                            placeholder="Masukkan nama lengkap">
                    </div>
                </div>
            </div>
            <div class="mb-2 sm:col-span-4">
                <label for="username"
                    class="block text-base font-bold leading-6 text-white lg:text-lg dark:text-white">Username</label>
                <div class="mt-2">
                    <div class="flex shadow-sm">
                        <input type="text" name="username" id="username" value="{{ old('username') }}"
                            class="flex-1 px-5 py-3 font-semibold form-control rounded-lg bg-white text-black placeholder:text-abu focus:outline-none sm:text-base sm:leading-6 dark:bg-white dark:text-black"
                            placeholder="Masukkan username">
                    </div>
                </div>
                @error('username')
                    <small class="text-red-500">{{ $message }}</small>
                @enderror
            </div>
            <div class="mb-2 sm:col-span-4">
                <label for="email"
                    class="block text-base font-bold leading-6 text-white lg:text-lg dark:text-white">Email</label>
                <div class="mt-2">
                    <div class="flex shadow-sm">
                        <input type="email" name="email" id="email" autocomplete="email"
                            value="{{ old('email') }}"
                            class="flex-1 px-5 py-3 font-semibold form-control rounded-lg bg-white text-black placeholder:text-abu focus:outline-none sm:text-base sm:leading-6 dark:bg-white dark:text-black"
                            placeholder="Masukkan email">
                    </div>
                </div>
                @error('email')
                    <small class="text-red-500">{{ $message }}</small>
                @enderror
            </div>

            <div class="mb-2 sm:col-span-4">
                <label for="password"
                    class="block text-base font-bold leading-6 text-white lg:text-lg dark:text-white">Password</label>
                <div class="mt-2">
                    <div class="flex shadow-sm">
                        <input id="password" type="password"
                            class="flex-1 px-5 py-3 font-semibold form-control rounded-l-xl bg-white text-black placeholder:text-abu focus:outline-none sm:text-base sm:leading-6 dark:bg-white dark:text-black"
                            name="password" required autocomplete="new-password" placeholder="Masukkan password">
                        <span
                            class="px-5 py-3 cursor-pointer icon-eye rounded-r-xl bg-white text-black dark:text-orange-500 dark:bg-white">
                            <i class="fas fa-eye"></i>
                        </span>
                    </div>
                    @error('password')
                        <small class="text-red-500">{{ $message }}</small>
                    @enderror
                </div>
            </div>
            <div class="mb-2 sm:col-span-4">
                <label for="password-confirm"
                    class="block text-base font-bold leading-6 text-white lg:text-lg dark:text-white">Confirm
                    Password</label>
                <div class="mt-2">
                    <div class="flex shadow-sm">
                        <input id="password-confirm" type="password"
                            class="flex-1 px-5 py-3 font-semibold form-control rounded-lg bg-white text-black placeholder:text-abu focus:outline-none sm:text-base sm:leading-6 dark:bg-white dark:text-black"
                            name="password_confirmation" required autocomplete="new-password"
                            placeholder="Confirm password">
                    </div>
                    @error('password')
                        <small class="text-red-500">{{ $message }}</small>
                    @enderror
                </div>
            </div>
            <button
                class="w-full px-5 py-3 mt-8 font-bold text-center text-white rounded-lg bg-purple-900 hover:bg-purple-700 dark:bg-orange-500 dark:hover:bg-orange-700">Register</button>
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
