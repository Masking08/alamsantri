// Toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');
    
// ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').
    onclick = () => {
        navbarNav.classList.toggle('active');
    };

// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// CONTACT
function sendMessage() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const nomor = document.getElementById('nomor').value;

    const url = "https://api.whatsapp.com/send?phone=6283869236077&text=Halo%20Admin%0ASaya%20*+"+ name +"*%0A*"+ message+ "*%0ANomor%20Saya%20*" + nomor +"*%0A";
    window.open(url);
};
