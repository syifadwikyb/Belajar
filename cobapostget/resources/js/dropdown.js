document.getElementById('bars-icon').addEventListener('click', function(event) {
    event.stopPropagation();
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    // Ganti ikon bars menjadi tanda silang
    if (mobileMenu.classList.contains('hidden')) {
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
    } else {
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
    }
});

document.getElementById('bars-icon-profile').addEventListener('click', function(event) {
    event.stopPropagation();
    var dropdown = document.getElementById('dropdown-menu-profile');
    dropdown.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobile-menu');
    var dropdown = document.getElementById('dropdown-menu-profile');

    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        document.getElementById('bars-icon').classList.remove('fa-times');
        document.getElementById('bars-icon').classList.add('fa-bars');
    }

    if (!dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    }
});