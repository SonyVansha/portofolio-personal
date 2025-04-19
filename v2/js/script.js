// Mobile Menu Toggle
document
  .getElementById("menu-toggle")
  .addEventListener("click", function () {
    this.classList.toggle("open");
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

// Text Rotation Animation
const textRotation = document.getElementById("text-rotation");
const textItems = textRotation.children;
let currentTextIndex = 0;

function rotateText() {
  textItems[currentTextIndex].style.display = "none";
  currentTextIndex = (currentTextIndex + 1) % textItems.length;
  textItems[currentTextIndex].style.display = "block";
}

// Initialize text rotation
for (let i = 1; i < textItems.length; i++) {
  textItems[i].style.display = "none";
}

setInterval(rotateText, 3000);

// Matrix Background Effect
function createMatrixBackground() {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;

  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]|=+-*/!@#$%^&*()_~`";
  const columns = 40;
  const drops = [];

  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.className = "matrix-column";
    column.style.left = `${i * 2.5}%`;
    column.style.animationDelay = `${Math.random() * 5}s`;

    const height = Math.floor(Math.random() * 20) + 10;
    let content = "";

    for (let j = 0; j < height; j++) {
      content +=
        characters.charAt(Math.floor(Math.random() * characters.length)) +
        "<br>";
    }

    column.innerHTML = content;
    canvas.appendChild(column);

    drops.push({
      element: column,
      speed: Math.random() * 0.5 + 0.5,
      y: Math.random() * -100,
    });
  }

  function animateMatrix() {
    drops.forEach((drop) => {
      drop.y += drop.speed;
      drop.element.style.transform = `translateY(${drop.y}px)`;

      if (drop.y > window.innerHeight) {
        drop.y = Math.random() * -100;
        let content = "";
        const height = Math.floor(Math.random() * 20) + 10;

        for (let j = 0; j < height; j++) {
          content +=
            characters.charAt(
              Math.floor(Math.random() * characters.length)
            ) + "<br>";
        }

        drop.element.innerHTML = content;
      }
    });

    requestAnimationFrame(animateMatrix);
  }

  animateMatrix();
}

// Custom Cursor Effect
        // Custom Cursor Effect
        function initCustomCursor() {
          const cursorFollower = document.querySelector('.cursor-follower');
          const cursorDot = document.querySelector('.cursor-dot');
          const cursorText = document.querySelector('.cursor-text');
          const particles = document.getElementById('particles');
          const clickables = document.querySelectorAll('.clickable');
          const trails = [];
          const maxTrails = 10;
          
          // Create particles
          for (let i = 0; i < 50; i++) {
              const particle = document.createElement('div');
              particle.className = 'particle';
              particle.style.width = `${Math.random() * 4 + 1}px`;
              particle.style.height = particle.style.width;
              particle.style.opacity = Math.random() * 0.5 + 0.2;
              particle.style.left = `${Math.random() * 100}%`;
              particle.style.top = `${Math.random() * 100}%`;
              particles.appendChild(particle);
              
              // Animate particles
              animateParticle(particle);
          }
          
          function animateParticle(particle) {
              const duration = Math.random() * 15000 + 10000;
              const xMove = Math.random() * 100 - 50;
              const yMove = Math.random() * 100 - 50;
              
              gsap.to(particle, {
                  x: xMove,
                  y: yMove,
                  duration: duration / 1000,
                  ease: "sine.inOut",
                  repeat: -1,
                  yoyo: true
              });
          }
          
          // Update cursor position
          document.addEventListener('mousemove', e => {
              const x = e.clientX;
              const y = e.clientY;
              
              // Main cursor follower
              cursorFollower.style.transform = `translate(${x}px, ${y}px)`;
              
              // Cursor dot
              cursorDot.style.transform = `translate(${x}px, ${y}px)`;
              
              // Cursor text
              cursorText.style.transform = `translate(${x}px, ${y + 25}px)`;
              
              // Create trail effect
              createTrail(x, y);
          });
          
          // Create cursor trail
          function createTrail(x, y) {
              if (trails.length > maxTrails) {
                  const oldTrail = trails.shift();
                  oldTrail.remove();
              }
              
              const trail = document.createElement('div');
              trail.className = 'cursor-trail';
              trail.style.left = `${x}px`;
              trail.style.top = `${y}px`;
              document.body.appendChild(trail);
              trails.push(trail);
              
              // Fade out and remove trail
              setTimeout(() => {
                  trail.style.opacity = '0';
                  setTimeout(() => {
                      if (document.body.contains(trail)) {
                          document.body.removeChild(trail);
                      }
                  }, 500);
              }, 100);
          }
          
          // Handle clickable elements
          clickables.forEach(element => {
              element.addEventListener('mouseenter', () => {
                  cursorDot.style.width = '15px';
                  cursorDot.style.height = '15px';
                  cursorFollower.style.width = '80px';
                  cursorFollower.style.height = '80px';
                  cursorFollower.style.background = 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)';
                  
                  if (element.getAttribute('href') || element.tagName === 'BUTTON') {
                      cursorText.textContent = 'Click';
                      cursorText.style.opacity = '1';
                  }
              });
              
              element.addEventListener('mouseleave', () => {
                  cursorDot.style.width = '10px';
                  cursorDot.style.height = '10px';
                  cursorFollower.style.width = '300px';
                  cursorFollower.style.height = '300px';
                  cursorFollower.style.background = 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)';
                  cursorText.style.opacity = '0';
              });
              
              element.addEventListener('click', () => {
                  cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
                  setTimeout(() => {
                      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                  }, 100);
              });
          });
          
          // Hide default cursor
          document.body.style.cursor = 'none';
          
          // Handle cursor leaving the window
          document.addEventListener('mouseleave', () => {
              cursorFollower.style.opacity = '0';
              cursorDot.style.opacity = '0';
          });
          
          document.addEventListener('mouseenter', () => {
              cursorFollower.style.opacity = '1';
              cursorDot.style.opacity = '1';
          });
      }

// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate form submission
    const submitBtn = document.getElementById("submit-form");
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

    setTimeout(() => {
      submitBtn.innerHTML =
        '<i class="fas fa-check mr-2"></i> Message Sent!';
      submitBtn.classList.remove(
        "bg-emerald-500",
        "hover:bg-emerald-600"
      );
      submitBtn.classList.add("bg-blue-500", "hover:bg-blue-600");

      // Reset form
      document.getElementById("contact-form").reset();

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove("bg-blue-500", "hover:bg-blue-600");
        submitBtn.classList.add("bg-emerald-500", "hover:bg-emerald-600");
      }, 3000);
    }, 2000);
  });

// Initialize functions
document.addEventListener("DOMContentLoaded", function () {
  createMatrixBackground();

  // Check if GSAP is available
  if (typeof gsap !== "undefined") {
    initCustomCursor();
  } else {
    // Fallback for cursor effect if GSAP is not available
    document.addEventListener("mousemove", (e) => {
      const cursorFollower = document.querySelector(".cursor-follower");
      const cursorDot = document.querySelector(".cursor-dot");

      if (cursorFollower && cursorDot) {
        const x = e.clientX;
        const y = e.clientY;

        cursorFollower.style.transform = `translate(${x}px, ${y}px)`;
        cursorDot.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  }

  // Add GSAP library dynamically
  const gsapScript = document.createElement("script");
  gsapScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js";
  gsapScript.onload = function () {
    initCustomCursor();
  };
  document.body.appendChild(gsapScript);
});