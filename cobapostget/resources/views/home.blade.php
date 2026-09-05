<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @vite('resources/css/app.css')
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <title>Home</title>
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>

<body class="bg-white dark:bg-slate-900 font-montserrat">
    <x-header2></x-header2>
    <!-- resources/views/home.blade.php -->
    <div class="container mx-auto bg-inherit">    
        <div class="min-h-[58vh] p-6">
            @if ($customization)
                <div class="text-black dark:text-white">
                    <p class="mb-5 ml-5 text-lg font-semibold">Halaman anda:</p>
                    <div class="flex items-center p-5 rounded-lg shadow-2xl bg-slate-100 dark:bg-slate-800">
                        <p class="flex-grow "><strong>cdlink.id/</strong>{{ $customization->slug }}</p>
                        <button
                            onclick="window.location.href='{{ route('customization.showContentBySlug', ['slug' => $customization->slug]) }}'"
                            class="px-3 py-3 ml-2 text-sm font-semibold text-white bg-green-600 rounded-lg lg:text-base md:px-4 lg:px-5 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-800 dark:text-white focus:outline-none">
                            View
                        </button>
                        <button onclick="window.location.href='{{ route('customization.edit') }}'"
                            class="px-3 py-3 ml-2 text-sm font-semibold text-white bg-purple-700 rounded-lg lg:text-base md:px-4 lg:px-5 hover:bg-purple-900 dark:bg-orange-500 dark:hover:bg-orange-700 dark:text-white focus:outline-none">
                            Edit
                        </button>                                            
                        <form id="delete-form-{{ $customization->id }}" action="{{ route('customization.destroy', $customization->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="button"
                                onclick="confirmDeletion({{ $customization->id }})"
                                class="px-3 py-3 ml-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-800 lg:text-base md:px-4 lg:px-5 dark:bg-red-500 dark:text-white focus:outline-none">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            @else
                <div class="text-black dark:text-white">
                    <p class="mb-5 ml-5 text-base font-semibold">Anda belum memiliki Halaman.</p>
                    <div class="flex items-center p-5 rounded-lg bg-indigo-50 dark:bg-slate-800">
                        <p class="flex-grow ">Buat halaman Anda!</p>
                        <button onclick="window.location.href='{{ route('customization.edit') }}'"
                            class="px-4 py-3 ml-1 text-sm font-semibold text-white bg-purple-700 rounded-lg lg:text-base md:px-8 lg:px-10 dark:bg-orange-500 dark:text-white focus:outline-none">
                            Buat
                        </button>
                    </div>
                </div>
                <p class="text-sm font-semibold p-5 text-black dark:text-white">Anda butuh bantuan? Klik <a class="text-blue-900 dark:text-white-300 underline" href="{{ route('tutorial') }}">disini</a></p>
            @endif
        </div>
    </div>
    <x-footer></x-footer>
</body>
<script>
    function confirmDeletion(id) {
        Swal.fire({
            title: 'Anda yakin?',
            text: 'Halaman ini akan dihapus secara permanen!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Tidak'
        }).then((result) => {
            if (result.isConfirmed) {
                // Submit the form if confirmed
                document.getElementById('delete-form-' + id).submit();
            }
        });
    }
</script>
<x-darkmode></x-darkmode>
@vite('resources/js/dropdown.js')
@vite('resources/js/header.js')
</html>
