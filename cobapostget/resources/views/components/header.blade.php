<div class="header sticky h-auto top-0 z-50 w-auto dark:text-white transition-all duration-300">
    <div class="container mx-auto flex justify-between items-center p-8">
        <div>
            <img src="{{ asset('asset/link.png') }}" alt="" class="w-20 md:w-24 lg:w-28">
        </div>
        <div class="relative">
            <div class="hidden md:flex">
                <a href="#template"><button
                        class="text-sm lg:text-base rounded-lg ml-1 px-2 md:px-5 lg:px-8 py-3 font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">Template</button></a>
                <a href="#keunggulan"><button
                        class="text-sm lg:text-base rounded-lg ml-1 px-2 md:px-5 lg:px-8 py-3 font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">Feature</button></a>
                <a href="#aboutme"><button
                        class="text-sm lg:text-base rounded-lg ml-1 px-2 md:px-5 lg:px-8 py-3 font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">About
                        Me</button></a>
                <a href="/login"><button
                        class="text-sm lg:text-base rounded-lg ml-1 px-2 md:px-5 lg:px-8 py-3 font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white">Login</button></a>
                <a href="/register"><button
                        class="text-sm lg:text-base rounded-lg ml-1 px-2 md:px-5 lg:px-8 py-3 font-bold text-white bg-purple-700 dark:bg-orange-500 dark:text-white">Register</button></a>
            </div>
            <div class="flex md:hidden md:space-x-4">
                <button id="bars-icon" class="fas fa-solid fa-bars text-2xl dark:text-white"></button>
                <div id="dropdown-menu"
                    class="hidden absolute p-4 right-0 mt-10 w-48 bg-indigo-50 dark:bg-slate-800 rounded-lg shadow-lg">
                    <a href="/register"><button
                            class="mb-1 flex rounded-lg p-2 w-full font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white justify-center">Register</button></a>
                    <a href="/login"><button
                            class="mb-1 flex rounded-lg p-2 w-full font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white justify-center">Login</button></a>
                    <a href="#aboutme"><button
                            class="mb-1 flex rounded-lg p-2 w-full font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white justify-center">About
                            Me</button></a>
                    <a href="#keunggulan"><button
                            class="mb-1 flex rounded-lg p-2 w-full font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white justify-center">Feature</button></a>
                    <a href="#template"><button
                            class="flex rounded-lg p-2 w-full font-bold  hover:text-white hover:bg-purple-700 dark:hover:bg-orange-500 dark:hover:text-white dark:text-white justify-center">Template</button></a>
                </div>
            </div>
        </div>
    </div>
</div>
@vite('resources/js/header.js')
