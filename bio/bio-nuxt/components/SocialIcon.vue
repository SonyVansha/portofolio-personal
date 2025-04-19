<!-- Social Icon in Profile -->

<template>
  <a
    href="#"
    class="social-icon rounded-full p-2 transition-colors duration-300"
    :class="{
      'dark:bg-sky-900/30 bg-sky-100': social.color === 'sky',
      'dark:bg-pink-900/30 bg-pink-100': social.color === 'pink',
      'dark:bg-blue-900/30 bg-blue-100': social.color === 'blue',
      'dark:bg-red-900/30 bg-red-100': social.color === 'red',
      'dark:bg-gray-700/30 bg-gray-100': social.color === 'gray',
      'dark:bg-white/30 bg-gray-200': social.color === 'teal'
    }"
    :aria-label="social.name"
    :data-link="social.url"
    @click.prevent="openModal(social.url)"
    @keydown.enter.prevent="openModal(social.url)"
    @keydown.space.prevent="openModal(social.url)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 transition-colors duration-300"
      :class="{
        'dark:text-sky-400 text-sky-600': social.color === 'sky',
        'dark:text-pink-400 text-pink-600': social.color === 'pink',
        'dark:text-blue-400 text-blue-600': social.color === 'blue',
        'dark:text-red-400 text-red-600': social.color === 'red',
        'dark:text-gray-400 text-gray-600': social.color === 'gray',
        'dark:text-white text-gray-800': social.color === 'teal'
      }"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path :d="social.icon" />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    social: {
      type: Object,
      required: true
    }
  },
  methods: {
    openModal(link) {
      this.$emit('open-modal', link)
      this.addRippleEffect(event)
    },
    addRippleEffect(e) {
      const ripple = document.createElement('div')
      ripple.classList.add('ripple')
      ripple.style.position = 'absolute'
      ripple.style.borderRadius = '50%'
      ripple.style.backgroundColor = document.documentElement.classList.contains('dark')
        ? 'rgba(255, 255, 255, 0.3)'
        : 'rgba(0, 0, 0, 0.1)'
      ripple.style.width = '100px'
      ripple.style.height = '100px'
      ripple.style.transform = 'translate(-50%, -50%)'
      ripple.style.animation = 'ripple 0.6s linear'

      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`

      e.currentTarget.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }
  }
}
</script>