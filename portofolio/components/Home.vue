<script setup>
import { ref, onMounted } from 'vue';

const textRotation = ref(null);
let currentTextIndex = 0;
let textItems = [];

const rotateText = () => {
  if (textItems.length > 0) {
    textItems.forEach((item, index) => {
      item.style.transition = 'opacity 0.5s ease-in-out';
      item.style.opacity = index === currentTextIndex ? 1 : 0;
    });
    currentTextIndex = (currentTextIndex + 1) % textItems.length;
  }
};

onMounted(() => {
  if (textRotation.value && textRotation.value.children.length > 0) {
    textItems = Array.from(textRotation.value.children);

    // Initialize text rotation (set all but the first to display: none initially)
    for (let i = 1; i < textItems.length; i++) {
      textItems[i].style.opacity = 0;
    }
    textItems[0].style.opacity = 1; // Show the first item initially

    // Set interval for rotation
    setInterval(rotateText, 3000);
  }
});

// Importing necessary modules
defineOptions({
  name: 'AppHome',
});
</script>

<template>

    <!-- Hero Section -->
  <section id="home" class="hero-bg text-white min-h-screen flex items-center pt-16">
    <div class="matrix-bg" id="matrix-canvas"></div>
    <div class="particles-container" id="particles"></div>
    <div class="container mx-auto px-4 py-16 hero-content">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <p class="text-emerald-400 code-font mb-2">
            &lt; Hello World /&gt;
          </p>

          <!-- Title Name -->
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            I'm <span class="text-emerald-400">Sony Vansha</span>
          </h1>

          <!-- Overview Job -->
          <div class="h-12 overflow-hidden">
            <div ref="textRotation" class="text-xl md:text-2xl mb-8 code-font">
              <div class="text-blue-400">Problem Solver</div>
              <div class="text-purple-400">DevOps Engineer</div>
              <div class="text-emerald-400">Full Stack Engineer</div>
              <div class="text-yellow-400">Cloud Engineering</div>
            </div>
          </div>

          <!-- Decs -->
          <p class="text-lg mb-8 max-w-lg text-slate-300">
            Building innovative digital solutions with clean code and
            exceptional user experiences.
          </p>

          <!-- Buttons in Home -->
          <div class="flex space-x-4">
            <a href="#contact"
              class="glow-button bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-3 px-6 rounded-md transition duration-300 flex items-center clickable">
              Contact Me <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <a href="#about"
              class="glow-button bg-transparent hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-md border-2 border-emerald-500 transition duration-300 clickable">
              About Me
            </a>
          </div>

          <!-- Social Media Icons -->
          <div class="mt-8 flex space-x-4">
            <a href="#" class="social-icon text-slate-300 hover:text-emerald-400 text-xl clickable">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-icon text-slate-300 hover:text-emerald-400 text-xl clickable">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-icon text-slate-300 hover:text-emerald-400 text-xl clickable">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon text-slate-300 hover:text-emerald-400 text-xl clickable">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon text-slate-300 hover:text-emerald-400 text-xl clickable">
              <i class="fab fa-dev"></i>
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="md:w-1/2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80">
            <div class="absolute inset-0 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
            <div class="absolute inset-4 rounded-full bg-slate-700 opacity-80"></div>
            <div class="absolute inset-8 rounded-full profile-image overflow-hidden">
              <!-- Replace with actual image -->
              <div class="w-full h-full bg-slate-600 flex items-center justify-center">
                <i class="fas fa-user text-6xl text-slate-400"></i>
                <!-- Placeholder for professional photo -->
                <!-- <img src="your-professional-photo.jpg" alt="Sony Vansha" class="w-full h-full object-cover"> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon V -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-slate-400 hover:text-emerald-400 clickable">
          <i class="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </div>
  </section>
</template>