document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function (e) {
        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;

        this.innerHTML = type === 'password' ? '<i class="fa fa-eye text-orange-500"></i>' : '<i class="fa fa-eye-slash text-gray-500"></i>';
    });
});
