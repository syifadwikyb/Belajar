<div class="sticky top-0 z-50 w-auto h-auto transition-all duration-300 bg-white header">
    <div class="container flex items-center justify-between p-8 mx-auto dark:text-white">
        <div>
            <img src="{{ asset('asset/link.png') }}" alt="" class="w-20 md:w-24 lg:w-28">
        </div>
        <div class="flex items-center justify-between gap-5">
            <div class="flex md:hidden">
                <button id="bars-icon" class="text-2xl fas fa-bars focus:outline-none"></button>
            </div>
            <div class="hidden md:flex gap-5 w-full items-center">
                <a href="{{ route('home') }}"
                    class="flex justify-center items-center py-3 px-8 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500">Home</a>
                <a href="{{ route('tutorial') }}"
                    class="flex justify-center items-center py-3 px-8 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500">Tutorial</a>
                <div class="flex">
                    {{ old('username', Auth::user()->username) }}
                </div>
            </div>
            <div class="relative hidden md:flex">
                <button id="bars-icon-profile" class="size-12">
                    <img id="profileImage" class="object-cover p-1 rounded-full"
                        src="{{ Auth::user()->profile_picture ? asset('storage/' . Auth::user()->profile_picture) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}"
                        alt="Profile">
                </button>                
                <div id="dropdown-menu-profile"
                    class="absolute right-0 z-10 hidden w-48 p-4 mt-8 rounded-lg shadow-lg bg-indigo-50 dark:bg-slate-800">
                    <a href="{{ route('profile.show') }}"
                        class="flex justify-center w-full py-2 mb-1 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500">Profile</a>
                    <form action="{{ route('logout') }}" method="POST" class="m-0">
                        @csrf
                        <button
                            class="flex justify-center w-full py-2 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500"
                            type="submit">Logout</button>
                    </form>
                </div>
            </div>
        </div>

        <div id="mobile-menu"
            class="hidden md:hidden absolute p-4 right-5 top-28 w-56 bg-indigo-50 dark:bg-slate-800 rounded-lg shadow-lg">
            <div class="flex items-center justify-center gap-2 p-2 w-full">
                <button id="bars-icon-profile" class="size-10">
                    <img id="profileImage" class="object-cover p-1 rounded-full"
                        src="{{ Auth::user()->profile_picture ? asset('storage/' . Auth::user()->profile_picture) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}"
                        alt="Profile">
                </button>
                <span class="text-sm">{{ old('username', Auth::user()->username) }}</span>
            </div>
            <a href="{{ route('profile.show') }}"
                class="block text-center p-2 mb-1 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500">Profile</a>
            <a href="{{ route('home') }}"
                class="block text-center p-2 mb-1 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500">Home</a>
            <a href="{{ route('tutorial') }}"
                class="block text-center p-2 mb-1 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500">Tutorial</a>
            <form action="{{ route('logout') }}" method="POST" class="m-0">
                @csrf
                <button
                    class="block w-full p-2 font-bold rounded-lg dark:text-white hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500"
                    type="submit">Logout</button>
            </form>
        </div>
    </div>
</div>
@vite('resources/js/dropdown.js')
