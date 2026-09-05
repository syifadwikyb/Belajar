<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
    @vite('resources/css/app.css')
    <title>Document</title>
</head>

<body class="h-screen bg-gray-100 flex items-center justify-center font-jaldi">
    <div class="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="w-1/2 bg-orange-500 p-8 flex flex-col justify-center relative">
            <h1 class="text-white text-4xl font-bold mb-4">Selamat datang di Dapur Kreasi</h1>
            <p class="text-white text-lg mb-8">Buat Keajaiban di dapur Anda hari ini!</p>
            <img src="{{ asset('asset/hero.svg') }}" alt="Food Image" class="absolute bottom-0 right-0 w-52 h-auto">
        </div>

        <div class="w-1/2 p-8 flex flex-col justify-center">
            <h2 class="text-4xl font-bold mb-6">Login</h2>
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input type="email" id="email" placeholder="example@mail.com"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                </div>
                <div class="mb-6 relative">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <div class="flex relative items-center">
                        <input type="password" id="password" placeholder="********"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">            
                        <span class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" id="togglePassword">
                            <i class="fa fa-eye text-orange-500"></i>
                        </span>
                    </div>
                </div>
                <button type="submit"
                    class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    Login
                </button>
            </form>
            <p>Atau anda belum mempunyai akun ? klik <span class="text-blue-700 underline"><a href="/register">disini</a></span></p>
        </div>
    </div>
</body>

@vite('resources/js/togglePassword.js')

</html>
