const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.navmenu');
const navlinks = document.querySelector('.navbar');
const links = document.querySelectorAll('.navlinks li');
const portfolioBG = document.querySelector('.backgroundCLC');
const slider = document.querySelector('.slider');
const textOnSlider = document.querySelectorAll('.slider h2');
const verticalName = document.querySelectorAll('.verticalName h5');

const t1 = new TimelineMax();

setTimeout(() => {
    document.getElementById('portfolio').style.overflow = "auto";
}, 8000);

textOnSlider.forEach((l, index) => {
    if (index % 2 == 0) {
        t1.fromTo(l, 1, {opacity: 0, y: -80}, {opacity: 1, y: 0, ease: Power2.easeInOut})
        .to(l, 1, {x: -80, opacity: 0, ease: Power2.easeInOut});
    }
    else {
        t1.fromTo(l, 1, {opacity: 0, y: -80}, {opacity: 1, y: 0, ease: Power2.easeInOut})
        .to(l, 1, {x: 100, opacity: 0, ease: Power2.easeInOut});
    }
});

t1.to(slider, 1.2, {y: '-100%', ease: Power2.easeInOut});
links.forEach(l => t1.fromTo(l, 1.5, {opacity: 0, x: 80}, {opacity: 1, x: 0, delay: 1.2, ease: Circ.easeInOut}, "-=2.5"));
t1.fromTo(logo, 1.2, {opacity: 0, x: -50}, {opacity: 1, x: 0, ease: Power2.easeInOut}, "-=0.4")
.fromTo(portfolioBG, 1.4, {x: '100%'}, {x: '0%', ease: Power1.easeInOut}, "-=1.5");

verticalName.forEach((l, index) => {
    if (index % 2 == 0) {
        t1.fromTo(l, 0.2, {opacity: 0, x: 200}, {opacity: 1, x: 0, ease: SlowMo.easeInOut});
    }
    else {
        t1.fromTo(l, 0.2, {opacity: 0, x: -200}, {opacity: 1, x: 0, ease: SlowMo.easeInOut});
    }
});



hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach(l => {
        if (l.classList.value != "fade") {
            l.classList.toggle("fade");
        }
        l.addEventListener("click", () => {
            navlinks.classList.remove("open");
        });
    });
});

