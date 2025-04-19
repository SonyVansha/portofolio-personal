<script>
import AppNavbar from '@/components/Navbar.vue';
import AppHome from '@/components/Home.vue';

export default {
  components: {
    AppNavbar,
    AppHome,
  },
};
</script>

<template>
  <div>
    <AppNavbar />

    <AppHome />

    <slot />
  </div>
</template>