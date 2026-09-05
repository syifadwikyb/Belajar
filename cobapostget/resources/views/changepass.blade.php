<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Change Password</title>
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @vite('resources/css/app.css')
</head>

<body class="bg-white dark:bg-slate-900 font-montserrat">
    <div class="flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-black">
        <aside class="sticky top-0 z-50 w-full md:w-1/3 lg:w-1/4 p-8">
            <div class="flex items-center justify-end md:hidden">
                <button id="bars-icon" class="text-2xl focus:outline-none" onclick="toggleMenu()">
                    <i id="icon" class="fas fa-bars text-black dark:text-white"></i>
                </button>
            </div>
            <div id="dropdown-menu"
                class="flex-col hidden p-4 text-sm border-indigo-100 md:block md:sticky lg:flex top-20 absolute lg:ralative right-0 w-48 md:w-full lg:w-full bg-indigo-50 dark:bg-slate-800 md:bg-none lg:bg-none rounded-lg">
                <a href="{{ route('profile.show') }}"
                    class="mb-1 flex justify-center md:justify-start lg:justify-start rounded-lg p-2 w-full font-bold hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">
                    Profile
                </a>
                <a href="{{ route('changepass') }}"
                    class="mb-1 flex justify-center md:justify-start lg:justify-start rounded-lg p-2 w-full font-bold text-white bg-purple-700 dark:bg-orange-500 dark:text-white">
                    Change Password
                </a>
                <a href="{{ route('home') }}"
                    class="mb-1 flex justify-center md:justify-start lg:justify-start rounded-lg p-2 w-full font-bold hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">
                    Kembali
                </a>
            </div>
        </aside>
        <div class="min-h-screen py-1 md:w-2/3 lg:w-3/4">
            <div class="p-2 md:p-4">
                <div class="px-6 pb-8 mt-8 sm:rounded-lg">
                    <h2 class="text-black dark:text-white pl-6 text-2xl font-bold sm:text-xl">Change Password</h2>
                    <form class="mt-8" action="{{ route('changepass-proses') }}" method="post">
                        @csrf
                        <div class="mb-2 sm:col-span-4">
                            <label for="oldpassword"
                                class="block mb-2 text-sm font-semibold text-black dark:text-white">Old
                                Password</label>
                            <div class="mt-2">
                                <div class="flex shadow-sm">
                                    <input type="password" name="oldpassword" id="oldpassword"
                                        autocomplete="oldpassword"
                                        class="bg-indigo-50 dark:bg-slate-900 border border-indigo-300 dark:border-orange-300 border-r-0 text-black dark:text-white font-semibold text-sm rounded-l-lg block w-full p-2.5 focus:ring-0 focus:outline-none"
                                        placeholder="Masukkan password">
                                    <span
                                        class="icon-eye cursor-pointer bg-indigo-50 dark:bg-slate-900 text-black dark:text-orange-500 text-sm rounded-r-lg border border-indigo-300 dark:border-orange-300 border-l-0 outline-none block p-2.5"
                                        onclick="togglePasswordVisibility('oldpassword')">
                                        <i class="fas fa-eye"></i>
                                    </span>
                                </div>
                                @error('oldpassword')
                                    <small class="text-red-500">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="mb-2 sm:col-span-4">
                            <label for="newpassword"
                                class="block mb-2 text-sm font-semibold text-black dark:text-white">New
                                Password</label>
                            <div class="mt-2">
                                <div class="flex shadow-sm">
                                    <input type="password" name="newpassword" id="newpassword"
                                        autocomplete="newpassword"
                                        class="bg-indigo-50 dark:bg-slate-900 border border-indigo-300 dark:border-orange-300 border-r-0 text-black dark:text-white font-semibold text-sm rounded-l-lg block w-full p-2.5 focus:ring-0 focus:outline-none"
                                        placeholder="Masukkan password">
                                    <span
                                        class="icon-eye cursor-pointer bg-indigo-50 dark:bg-slate-900 text-black dark:text-orange-500 text-sm rounded-r-lg border border-indigo-300 dark:border-orange-300 border-l-0 outline-none block p-2.5"
                                        onclick="togglePasswordVisibility('newpassword')">
                                        <i class="fas fa-eye"></i>
                                    </span>
                                </div>
                                @error('newpassword')
                                    <small class="text-red-500">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="mb-2 sm:col-span-4">
                            <label for="confirmpassword"
                                class="block mb-2 text-sm font-semibold text-black dark:text-white">Confirm
                                Password</label>
                            <div class="mt-2">
                                <div class="flex shadow-sm">
                                    <input type="password" name="confirmpassword" id="confirmpassword"
                                        autocomplete="confirmpassword"
                                        class="bg-indigo-50 dark:bg-slate-900 border border-indigo-300 dark:border-orange-300 border-r-0 text-black dark:text-white font-semibold text-sm rounded-l-lg block w-full p-2.5 focus:ring-0 focus:outline-none"
                                        placeholder="Masukkan password">
                                    <span
                                        class="icon-eye cursor-pointer bg-indigo-50 dark:bg-slate-900 text-black dark:text-orange-500 text-sm rounded-r-lg border border-indigo-300 dark:border-orange-300 border-l-0 outline-none block p-2.5"
                                        onclick="togglePasswordVisibility('confirmpassword')">
                                        <i class="fas fa-eye"></i>
                                    </span>
                                </div>
                                @error('confirmpassword')
                                    <small class="text-red-500">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button
                                class="mt-5 text-white bg-green-600 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-800 focus:outline-none font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Change
                                Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
<x-darkmode></x-darkmode>
<x-footer></x-footer>
@vite('resources/js/dropdown.js')
<script>
    function togglePasswordVisibility(inputId) {
        const passwordInput = document.getElementById(inputId);
        const icon = passwordInput.nextElementSibling.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }

    function toggleMenu() {
        const menu = document.getElementById('dropdown-menu');
        const icon = document.getElementById('icon');
        
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        console.log("Toggle Menu Clicked");
        menu.toggle('hidden');
    }
</script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

@if ($message = Session::get('success'))
    <script>
        Swal.fire({
            title: "Berhasil!",
            text: "{{ $message }}",
            icon: "success",
            background: '#f0f0f0',
            confirmButtonColor: '#3085d6',
            customClass: {
                popup: 'colored-alert'
            }
        });
    </script>
@endif
@if ($message = Session::get('failed'))
    <script>
        Swal.fire({
            title: "Gagal!",
            text: "{{ $message }}",
            icon: "error", // 
            background: '#f0f0f0',            
            confirmButtonColor: '#d33',
            customClass: {
                popup: 'colored-alert'
            }
        });
    </script>
@endif


</html>
