// --- Scroll-to-top button functionality ---
const scrollTopBtn = document.getElementById("scrollTop");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
      scrollTopBtn.style.opacity = "1";
    } else {
      scrollTopBtn.style.opacity = "0";
      setTimeout(() => {
        if (window.scrollY <= 300) {
          scrollTopBtn.style.display = "none";
        }
      }, 300);
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Intersection Observer for Scroll Reveal Animations ---
try {
  const animateOnScroll = document.querySelectorAll('[data-animation^="scroll-"]');
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of element visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply delay if specified
        const delay = entry.target.dataset.delay || '0s';
        entry.target.style.animationDelay = delay;
        
        entry.target.classList.add('is-visible');
        
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  animateOnScroll.forEach(element => {
    observer.observe(element);
  });
} catch (e) {
  console.error("Scroll animation observer failed:", e);
}


// --- Particles.js Initialization (PERFORMANCE OPTIMIZED) ---
document.addEventListener('DOMContentLoaded', () => {
  if (typeof particlesJS === 'function' && document.getElementById('particles-js')) {
    try {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 25, // Reduced particle count
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#C6A664"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.4, // Slightly more subtle
            "random": false
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 120, // Reduced distance
            "color": "#7A7A7A",
            "opacity": 0.3, // Slightly more subtle
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "out_mode": "out"
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false, // DISABLED hover for performance
              "mode": "grab"
            },
            "onclick": {
              "enable": true, // Kept click
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
    } catch (e) {
      console.error("particlesJS initialization failed:", e);
    }
  } else {
    console.warn("particles.js library or #particles-js element not found.");
  }
});
