<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @vite('resources/css/app.css')
    <title>Tutorial</title>
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
</head>

<body class="bg-white dark:bg-slate-900 font-montserrat">
    <x-header2></x-header2>
    <div class="container px-6 py-8 mx-auto">
        <h1 class="mb-12 text-5xl font-bold text-center text-black dark:text-white">Tutorial</h1>

        <div class="grid gap-8">
            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Kustom Link</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/kustomLink.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Buat link khusus yang mewakili Anda dengan maksimal 20 karakter. Link ini akan menjadi identitas
                        digital Anda, jadi pastikan memilih nama yang singkat, mudah diingat, dan mencerminkan
                        personalitas atau bisnis Anda. Link ini akan muncul di bagian atas halaman Anda, memberikan
                        akses cepat bagi pengunjung untuk mengingat dan mengunjungi kembali situs Anda.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Banner</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/banner.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Tambahkan banner dengan ukuran optimal 400px x 800px (rasio 1:2) untuk memberikan tampilan yang
                        menarik di halaman Anda. Banner ini dapat digunakan untuk menonjolkan gambar, slogan, atau
                        informasi penting lainnya yang ingin Anda tampilkan di bagian atas halaman Anda. Ukuran ini
                        memastikan banner terlihat proporsional dan menarik perhatian pengunjung.
                    </p>
                </div>
            </div>
            
            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Profil</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/banner.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Tampilkan diri Anda atau logo brand Anda dengan mengunggah foto profil berukuran optimal 400px x
                        400px.
                        Ukuran ini dipilih agar foto tampil tajam dan proporsional di layar, baik di perangkat desktop
                        maupun mobile.
                        Pastikan foto yang Anda pilih jelas dan mewakili identitas Anda dengan baik.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Judul</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/judul.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Pasang judul yang menggambarkan inti dari halaman Anda dengan maksimal 25 karakter. Judul ini
                        bisa berupa
                        nama, slogan, atau informasi utama lainnya yang ingin Anda tonjolkan. Batasi jumlah karakter
                        agar judul tetap
                        singkat, padat, dan efektif dalam menyampaikan pesan.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Tentang</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/tentangEdit.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Gunakan bagian "Tentang" untuk memperkenalkan diri Anda kepada pengunjung. Bagikan
                        cerita singkat tentang siapa Anda, apa yang Anda lakukan, atau apa yang membuat Anda berbeda.
                        Bagian
                        ini adalah tempat yang sempurna untuk menambahkan sedikit kepribadian ke halaman Anda dan
                        membuat
                        pengunjung merasa lebih dekat dengan Anda.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Sosial Media</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/sosmed.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Hubungkan halaman Anda dengan akun media sosial seperti Instagram, WhatsApp, LinkedIn,
                        dan lainnya. Dengan menambahkan ikon media sosial ini, pengunjung bisa dengan mudah terhubung
                        dan
                        berinteraksi dengan Anda di berbagai platform. Pastikan untuk menambahkan semua akun yang aktif
                        agar
                        pengunjung memiliki banyak pilihan untuk mengikuti atau berkomunikasi dengan Anda.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Tombol</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/tombol.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Tambahkan tombol-tombol interaktif yang dapat mengarahkan pengunjung ke berbagai
                        halaman atau sumber daya lain, seperti halaman produk, artikel, atau situs eksternal. Tombol ini
                        adalah cara yang efektif untuk mengarahkan pengunjung ke bagian penting dari halaman Anda atau
                        bahkan untuk mendorong aksi tertentu, seperti mendaftar atau membeli produk.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Latar Belakang</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/latarBelakang.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Ciptakan suasana yang sesuai dengan memilih background dari template yang kami
                        sediakan, atau Anda bisa mengunggah background custom sesuai dengan selera Anda. Background yang
                        tepat bisa membuat halaman Anda lebih menarik dan mencerminkan identitas visual Anda. Jangan
                        ragu
                        untuk bereksperimen dengan berbagai warna dan tekstur hingga menemukan yang paling cocok.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Font</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/font.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Personalisasi teks di halaman Anda dengan memilih dari berbagai pilihan font yang
                        tersedia. Setiap font memiliki karakteristik unik yang bisa mengubah suasana dan kesan halaman
                        Anda.
                        Selain itu, Anda juga bisa mengubah warna font untuk menyesuaikan dengan tema keseluruhan
                        halaman
                        Anda. Pastikan font yang dipilih mudah dibaca dan konsisten dengan gaya visual yang Anda
                        inginkan.
                    </p>
                </div>
            </div>

            <div class="p-6 bg-indigo-50 rounded-lg shadow-lg dark:bg-gray-800">
                <h1 class="mb-4 text-2xl font-bold text-center text-black dark:text-orange-500 md:text-center lg:text-left">Gaya Tombol</h1>
                <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div class="lg:w-1/3">
                        <img src="{{ asset('asset/kustomTombol.png') }}" alt=""
                            class="object-cover w-full h-auto rounded-lg">
                    </div>
                    <p class="text-sm text-center lg:w-2/3 text-black dark:text-white md:text-base lg:text-lg md:text-center lg:text-left">
                        Sesuaikan bentuk dan warna tombol di halaman Anda untuk menciptakan tampilan yang
                        lebih personal dan sesuai dengan tema Anda. Anda bisa memilih dari berbagai bentuk tombol, mulai
                        dari yang bulat hingga yang lebih tajam, serta mengubah warna tombol sesuai dengan palet warna
                        yang
                        Anda gunakan di halaman Anda. Tombol yang didesain dengan baik dapat meningkatkan pengalaman
                        pengguna dan membuat navigasi lebih intuitif.
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
<x-footer></x-footer>
<x-darkmode></x-darkmode>
@vite('resources/js/dropdown.js')
@vite('resources/js/header.js')

</html>
