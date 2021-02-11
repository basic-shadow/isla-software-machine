const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".navmenu");
const navlinks = document.querySelector(".navbar");
const links = document.querySelectorAll(".navlinks li");
const portfolioBG = document.querySelector(".backgroundCLC");
const slider = document.querySelector(".slider");
const textOnSlider = document.querySelectorAll(".slider h2");
const verticalName = document.querySelectorAll(".verticalName h5");

const contactInputs = document.querySelectorAll(".contact .contactBox");

const t1 = new TimelineMax();

setTimeout(() => {
  document.getElementById("portfolio").style.overflow = "auto";
}, 1000);

textOnSlider.forEach((l, index) => {
    if (index % 2 == 0) {
        t1.fromTo(
        l,
        0.7,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, ease: Power2.easeInOut }
        ).to(l, 1, { x: -80, opacity: 0, ease: Power2.easeInOut });
    } else {
        t1.fromTo(
        l,
        0.7,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, ease: Power2.easeInOut }
        ).to(l, 1, { x: 100, opacity: 0, ease: Power2.easeInOut });
    }
});
    
t1.to(slider, 1, { y: "-100%", ease: Power2.easeInOut });
links.forEach((l) =>
    t1.fromTo(l, 1.2,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, delay: 1.2, ease: Circ.easeInOut },
        "-=2"));
t1.fromTo(logo, 1.2,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, ease: Power2.easeInOut },
    "-=1.4")
    .fromTo(
    portfolioBG,
    1.4,
    { x: "100%" },
    { x: "0%", ease: Power1.easeInOut },
    "-=2.5"
    );

verticalName.forEach((l, index) => {
  if (index % 2 == 0) {
    t1.fromTo(
      l,
      0.2,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, ease: SlowMo.easeInOut },
    );
  } else {
    t1.fromTo(
      l,
      0.2,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, ease: SlowMo.easeInOut },
    );
  }
});

function animateFrom(aboutMe, direction) {
  direction = direction | 1;
  var x = 0, y = direction * 300;
  if (aboutMe.classList.contains("Right")) {
    x = 200;
    y = 0;
  }

  gsap.fromTo(aboutMe, {x: x, y: y, autoAlpha: 0},
    {duration: 2.5,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo"});
}

function hide(grid) {
  gsap.set(grid, {autoAlpha: 0});
}

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".about-boxBottom").forEach(function(child) {
    hide(child);

    ScrollTrigger.create({
      trigger: '.about',
      start: '100px 80%',
      onEnter: function() {animateFrom(child)},
      onEnterBack: function() { animateFrom(child, -1) },
      onLeave: function() { hide(child) } 
    });
  });

  gsap.to('.parallax', {
    yPercent: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.home',
      scrub: true,
    }
  });

  gsap.to('.skills', {
    scrollTrigger: {
      trigger: ".skillsTitle",
      scrub: true,
      start: '20px 60%',
      end: "400px",
      toggleClass: "active",
      ease: "power2",
      toggleActions: "restart pause resume reset",
    }
  });

  gsap.to('.skillsbox', {
    scrollTrigger: {
      trigger: '.langs',
      start: '20px 60%',
      end: "400px",
      toggleClass: 'active',
      ease: 'power2',
      toggleActions: "restart pause resume reset",
    }
  });

  gsap.to('.skillsbox', {
    scrollTrigger: {
      trigger: '.tools',
      start: '20px 60%',
      end: "400px",
      toggleClass: 'active',
      ease: 'power2',
      toggleActions: "restart pause resume reset",
    }
  });
  gsap.utils.toArray('.langs div .lines').forEach(function(progr) {
    ScrollTrigger.create({
      trigger: progr,
      toggleClass: 'active',
    });
  });
  gsap.utils.toArray('.tools div .lines').forEach(function(progr) {
    ScrollTrigger.create({
      trigger: progr,
      toggleClass: 'active',
    });
  });

  gsap.to('.projectbox', {
    scrollTrigger: {
      trigger: '.projects .container',
      toggleActions: "restart reverse resume reset",
    },
    x: 150,
    duration: 1,
    ease: 'expo',
  });
  gsap.to('.projectbox2', {
    scrollTrigger: {
      trigger: '.projects .container',
      toggleActions: "restart reverse resume reset",
    },
    x: -150,
    duration: 1,
    ease: 'expo',
  });

  gsap.to('.contact', {
    scrollTrigger: {
      trigger: '.contact .hr',
      toggleClass: 'active',
      ease: 'power2',
      toggleActions: "restart pause resume reset",

    },
  });
  gsap.to('.contact', {
    scrollTrigger: {
      trigger: '.contact h1',
      toggleClass: 'active',
      ease: 'power2',
      toggleActions: "restart pause resume reset",

    },
  });
  gsap.to('.contact', {
    scrollTrigger: {
      trigger: '.contact .hr',
      toggleClass: 'active',
      ease: 'power2',
      toggleActions: "restart pause resume reset",

      start: '20px 60%',
      end: "400px",
    },
  });

  contactInputs.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
      trigger: '.contactBox',
        toggleActions: "restart reverse resume reset",
      },
      y: -320,
      duration: 1,
      ease: 'expo',
    });
  });
});

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  links.forEach((l) => {
    if (l.classList.value != "fade") {
      l.classList.toggle("fade");
    }
    l.addEventListener("click", () => {
      navlinks.classList.remove("open");
    });
  });
});
