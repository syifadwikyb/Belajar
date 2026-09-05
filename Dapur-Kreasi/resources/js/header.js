window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('shadow-lg');  // Tambahkan shadow saat scroll
    } else {
        header.classList.remove('shadow-lg');  // Hapus shadow saat di atas
    }
});
