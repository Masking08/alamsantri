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

// SMOOTH SCROLLING

const navlink = document.querySelectorAll(".navbar a");
navlink.forEach(elem => elem.addEventListener("click", smoothscroll));
function smoothscroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}
