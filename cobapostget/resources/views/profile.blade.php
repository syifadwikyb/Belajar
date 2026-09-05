<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @vite('resources/css/app.css')
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <title>Profile</title>
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet">

    <style>
        /* Custom CSS to hide the spinner */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type="number"] {
            -moz-appearance: textfield;
            appearance: textfield;
        }
    </style>
</head>

<body class="bg-white dark:bg-slate-900 font-montserrat">
    <div class="flex flex-col gap-5 px-3 text-black md:px-16 lg:px-28 md:flex-row">
        <aside class="sticky top-0 z-50 w-full p-8 md:w-1/3 lg:w-1/4">
            <div class="flex items-center justify-end md:hidden">
                <button id="bars-icon" class="text-2xl focus:outline-none" onclick="toggleMenu()">
                    <i id="icon" class="text-black fas fa-bars dark:text-white"></i>
                </button>
            </div>
            <div id="dropdown-menu"
                class="absolute right-0 flex-col hidden w-48 p-4 text-sm border-indigo-100 rounded-lg md:block md:sticky lg:flex top-20 lg:ralative md:w-full lg:w-full bg-indigo-50 dark:bg-slate-800 md:bg-none lg:bg-none">
                <a href="{{ route('profile.show') }}"
                    class="flex justify-center md:justify-start lg:justify-start w-full p-2 mb-1 font-bold text-white bg-purple-700 rounded-lg dark:bg-orange-500 dark:text-white">
                    Profile
                </a>
                <a href="{{ route('changepass') }}"
                    class="flex justify-center md:justify-start lg:justify-start w-full p-2 mb-1 font-bold rounded-lg hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">
                    Change Password
                </a>
                <a href="{{ route('home') }}"
                    class="flex justify-center md:justify-start lg:justify-start w-full p-2 mb-1 font-bold rounded-lg hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">
                    Kembali
                </a>
            </div>
        </aside>
        <main class="min-h-screen py-1 md:w-2/3 lg:w-3/4">
            <div class="p-2 md:p-4">
                <div class="px-6 pb-8 mt-8 sm:rounded-lg">
                    <h2 class="pl-6 text-2xl font-bold text-black dark:text-white sm:text-xl">Public Profile</h2>
                    <div class="grid mx-auto mt-8">
                        <div class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                            <img id="profileImage" class="object-cover w-40 h-40 p-1 rounded-full"
                                src="{{ $user->profile_picture ? asset('storage/' . $user->profile_picture) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}"
                                alt="Profile">

                            <div class="flex flex-col space-y-5 sm:ml-8">
                                <form id="changePictureForm" action="{{ route('profile.change-picture') }}"
                                    method="POST" enctype="multipart/form-data">
                                    @csrf
                                    <label for="profile_picture"
                                        class="py-3.5 w-full px-7 text-base font-semibold text-white focus:outline-none bg-green-600 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-800 rounded-lg cursor-pointer">
                                        Change Picture
                                    </label>
                                    <input type="file" name="profile_picture" id="profile_picture" class="hidden"
                                        accept="image/*" onchange="previewAndSubmit()">
                                </form>
                                <form action="{{ route('profile.delete-picture') }}" method="POST">
                                    @csrf
                                    <button type="submit"
                                        class="py-3.5 w-full px-7 text-base font-semibold text-white focus:outline-none border-none bg-red-600 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-800 rounded-lg border cursor-pointer">
                                        Delete picture
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="items-center mt-8 text-black sm:mt-14">
                            <form action="{{ route('profile.update') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div
                                    class="flex flex-col items-center mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div class="w-full">
                                        <label for="first_name"
                                            class="block mb-2 text-sm font-semibold text-black dark:text-white">Your
                                            Full Name</label>
                                        <input type="text" id="first_name" name="name"
                                            value="{{ old('name', Auth::user()->name) }}"
                                            class="bg-indigo-50 dark:bg-slate-900 border border-indigo-300 dark:border-orange-300 focus:border-orange-300 text-black dark:text-white font-semibold text-sm rounded-lg block w-full p-2.5"
                                            placeholder="Your full name" required>
                                    </div>
                                </div>

                                <div class="mb-2 sm:mb-6">
                                    <label for="email"
                                        class="block mb-2 text-sm font-semibold text-black dark:text-white">Your
                                        email</label>
                                    <input type="email" id="email" value="{{ Auth::user()->email }}"
                                        class="bg-indigo-50 dark:bg-slate-900 border border-indigo-300 dark:border-orange-300 text-black dark:text-white font-semibold text-sm rounded-lg block w-full p-2.5"
                                        placeholder="your.email@mail.com" disabled>
                                </div>

                                <div class="mb-2 sm:mb-6">
                                    <label for="phone_number"
                                        class="block mb-2 text-sm font-semibold text-black dark:text-white">
                                        Phone Number
                                    </label>
                                    <input type="number" id="phone_number" name="phone_number"
                                        value="{{ old('phone_number', Auth::user()->phone_number) }}"
                                        class="bg-indigo-50 dark:bg-slate-900 border border-indigo-300 dark:border-orange-300 focus:border-orange-300 text-black dark:text-white font-semibold text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Your phone number"
                                        oninput="this.value = this.value.slice(0, 15);">

                                </div>
                                <div class="flex justify-end">
                                    <button type="submit"
                                        class="remove-arrow mt-5 text-white bg-green-600 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-800 focus:outline-none font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <x-darkmode></x-darkmode>
    <script>
        function previewAndSubmit() {
            var input = document.getElementById('profile_picture');
            var form = document.getElementById('changePictureForm');
            var reader = new FileReader();

            reader.onload = function(e) {
                var imgElement = document.getElementById('profileImage');
                imgElement.src = e.target.result;
            }

            reader.readAsDataURL(input.files[0]);

            // Submit the form automatically after image selection
            form.submit();
        }

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
        document.getElementById('bars-icon').addEventListener('click', function(event) {
            event.stopPropagation();
            var dropdown = document.getElementById('dropdown-menu');
            dropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', function(event) {
            var dropdown = document.getElementById('dropdown-menu');
        });
    </script>
</body>
<x-footer></x-footer>
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

</html>
