document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode-btn');
    const body = document.body;
    const wrapperLobby = document.querySelector('.wrapper-lobby');

    toggleDarkModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        wrapperLobby.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            toggleDarkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            toggleDarkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
});
