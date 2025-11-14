/* ================================
   HAMBURGER MENU
================================= */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});


/* ================================
   SCROLL TO TOP BUTTON
================================= */
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    scrollBtn.style.display = "block";
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
    setTimeout(() => {
      scrollBtn.style.display = "none";
    }, 200);
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ================================
   SCROLL REVEAL ANIMATION
================================= */
const animatedEls = document.querySelectorAll('[data-animation^="scroll-"]');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animatedEls.forEach(el => revealObserver.observe(el));


/* ================================
   LAZY LOAD IMAGES
================================= */
document.querySelectorAll("img").forEach(img => { img.loading = "lazy"; });


/* ================================
   VIDEO FALLBACK FOR MOBILE
================================= */
const bgVideo = document.getElementById("bg-video");

const lowPowerDevice =
  navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || lowPowerDevice) {
  if (bgVideo) bgVideo.remove();

  const hero = document.querySelector(".hero");
  hero.style.backgroundImage = "url('images/mobile-fallback.jpg')";
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
}


/* ================================
   PARTICLES.JS — AUTO-DISABLE ON MOBILE
================================= */
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 650 || lowPowerDevice) {
    console.warn("Particles disabled on low-end/mobile device.");
    return;
  }

  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 20, density: { enable: true, value_area: 1000 } },
        color: { value: "#C6A664" },
        shape: { type: "circle" },
        opacity: { value: 0.25 },
        size: { value: 2, random: true },
        line_linked: {
          enable: true,
          distance: 130,
          color: "#7A7A7A",
          opacity: 0.25,
          width: 1
        },
        move: { enable: true, speed: 1.3 }
      },
      interactivity: { events: { resize: true } },
      retina_detect: true
    });
  }
});
