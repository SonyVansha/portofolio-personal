//   // Initialize skill animations
//   function initSkillAnimations() {
//     const skillPills = document.querySelectorAll('.skill-pill');

//     skillPills.forEach(pill => {
//         // Create particles for each skill
//         const particlesContainer = pill.querySelector('.skill-particles');

//         // Create particles on hover
//         pill.addEventListener('mouseenter', () => {
//             // Show glow effect
//             const glow = pill.querySelector('.skill-glow');
//             glow.style.opacity = '1';

//             // Create particles
//             createSkillParticles(particlesContainer, 10);
//         });

//         pill.addEventListener('mouseleave', () => {
//             // Hide glow effect
//             const glow = pill.querySelector('.skill-glow');
//             glow.style.opacity = '0';
//         });
//     });

//     // Trigger shine effect periodically
//     setInterval(() => {
//         const randomIndex = Math.floor(Math.random() * skillPills.length);
//         const randomSkill = skillPills[randomIndex];
//         const shine = randomSkill.querySelector('.skill-shine');

//         shine.style.left = '-100%';
//         setTimeout(() => {
//             shine.style.transition = 'left 1s ease-in-out';
//             shine.style.left = '100%';

//             setTimeout(() => {
//                 shine.style.transition = 'none';
//             }, 1000);
//         }, 50);
//     }, 3000);
// }

function createSkillParticles(container, count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'skill-particle';

    // Random position within the container
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.width = `${Math.random() * 4 + 2}px`;
    particle.style.height = particle.style.width;

    container.appendChild(particle);

    // Animate the particle
    setTimeout(() => {
      particle.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
      particle.style.opacity = '0.8';

      const angle = Math.random() * Math.PI * 2;
      const distance = 20 + Math.random() * 30;
      const translateX = Math.cos(angle) * distance;
      const translateY = Math.sin(angle) * distance;

      particle.style.transform = `translate(${translateX}px, ${translateY}px)`;

      setTimeout(() => {
        particle.style.opacity = '0';

        setTimeout(() => {
          if (container.contains(particle)) {
            container.removeChild(particle);
          }
        }, 1000);
      }, 500);
    }, Math.random() * 200);
  }
}
