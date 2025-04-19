<script setup>
import { ref, onMounted } from 'vue';

// Refs untuk elemen DOM
const menuToggle = ref(null);
const mobileMenu = ref(null);

// Event listener untuk toggle menu
onMounted(() => {
  if (menuToggle.value && mobileMenu.value) {
    menuToggle.value.addEventListener('click', function() {
      this.classList.toggle('open');
      mobileMenu.value.classList.toggle('hidden');
    });
  }
});


// Importing necessary modules
defineOptions({
  name: 'AppNavbar',
});
</script>

<template>
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-slate-900 text-white shadow-lg border-b border-slate-700">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold code-font clickable">Sony
          <span class="text-emerald-400">Vansha</span><span class="text-emerald-400 animate-blink">_</span></a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6">
          <a href="#home" class="nav-link active clickable">Home</a>
          <a href="#about" class="nav-link clickable">About</a>
          <a href="#experience" class="nav-link clickable">Experience</a>
          <a href="#education" class="nav-link clickable">Education</a>
          <a href="#skills" class="nav-link clickable">Skills</a>
          <a href="#organizations" class="nav-link clickable">Organizations</a>
          <a href="#achievements" class="nav-link clickable">Achievements</a>
          <a href="#certificates" class="nav-link clickable">Certificates</a>
          <a href="#projects" class="nav-link clickable">Projects</a>
          <a href="#contact" class="nav-link clickable">Contact</a>
        </div>

        <!-- Mobile Navigation Toggle -->
        <div class="md:hidden">
          <button ref="menuToggle" class="hamburger focus:outline-none clickable">
            <span class="hamburger-top" />
            <span class="hamburger-middle" />
            <span class="hamburger-bottom" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div ref="mobileMenu" class="md:hidden hidden bg-slate-800 pb-4">
        <div class="container mx-auto px-4 flex flex-col space-y-3">
          <a href="#home" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Home</a>
          <a href="#about" class="py-2 px-4 hover:bg-slate-700 rounded clickable">About</a>
          <a href="#experience" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Experience</a>
          <a href="#education" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Education</a>
          <a href="#skills" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Skills</a>
          <a href="#organizations" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Organizations</a>
          <a href="#achievements" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Achievements</a>
          <a href="#certificate" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Certificate</a>
          <a href="#projects" class="py-2 px-4 hover:bg-slate-700 rounded clickable">projects</a>
          <a href="#contact" class="py-2 px-4 hover:bg-slate-700 rounded clickable">Contact</a>
        </div>
      </div>
    </nav>

    <slot />
    <!-- Main Content Area -->
</template>