const hamburger = document.querySelector('.navmenu');
const navlinks = document.querySelector('.navbar');
const links = document.querySelectorAll('.navlinks li');

hamburger.addEventListener("click", () => {
    console.log("clicked");
    navlinks.classList.toggle("open");
    links.forEach(l => {
        l.classList.toggle("fade");
        l.addEventListener("click", () => {
            navlinks.classList.remove("open");
        });
    });
});
