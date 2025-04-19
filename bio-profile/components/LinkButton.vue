<!-- Button body -->

<template>
  <button
    class="link-btn block w-full py-3.5 px-5 rounded-lg text-center font-medium shadow-sm fade-in transition-colors duration-300"
    :class="{
      'dark:bg-indigo-900/20 bg-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-900/30': link.color === 'indigo',
      'dark:bg-pink-900/20 bg-pink-100 hover:bg-pink-200 dark:hover:bg-pink-900/30': link.color === 'pink',
      'dark:bg-purple-900/20 bg-purple-100 hover:bg-purple-200 dark:hover:bg-purple-900/30': link.color === 'purple',
      'dark:bg-emerald-900/20 bg-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-900/30': link.color === 'emerald',
      'dark:bg-amber-900/20 bg-amber-100 hover:bg-amber-200 dark:hover:bg-amber-900/30': link.color === 'amber',
      'dark:bg-cyan-900/20 bg-cyan-100 hover:bg-cyan-200 dark:hover:bg-cyan-900/30': link.color === 'cyan',
      'dark:text-white text-gray-800': true
    }"
    :style="{ animationDelay: `${delay}s` }"
    :aria-label="`Visit ${link.title}`"
    :data-link="link.url"
    @click.prevent="openModal(link.url)"
    @keydown.enter.prevent="openModal(link.url)"
    @keydown.space.prevent="openModal(link.url)"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div
          class="p-2 rounded-md mr-3 transition-colors duration-300"
          :class="{
            'dark:bg-indigo-500/20 bg-indigo-200': link.color === 'indigo',
            'dark:bg-pink-500/20 bg-pink-200': link.color === 'pink',
            'dark:bg-purple-500/20 bg-purple-200': link.color === 'purple',
            'dark:bg-emerald-500/20 bg-emerald-200': link.color === 'emerald',
            'dark:bg-amber-500/20 bg-amber-200': link.color === 'amber',
            'dark:bg-cyan-500/20 bg-cyan-200': link.color === 'cyan'
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 transition-colors duration-300"
            :class="{
              'dark:text-indigo-400 text-indigo-600': link.color === 'indigo',
              'dark:text-pink-400 text-pink-600': link.color === 'pink',
              'dark:text-purple-400 text-purple-600': link.color === 'purple',
              'dark:text-emerald-400 text-emerald-600': link.color === 'emerald',
              'dark:text-amber-400 text-amber-600': link.color === 'amber',
              'dark:text-cyan-400 text-cyan-600': link.color === 'cyan'
            }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="link.icon"
            />
          </svg>
        </div>
        <span class="text-base">{{ link.title }}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 btn-icon transition-colors duration-300"
        :class="{
          'dark:text-indigo-400 text-indigo-600': link.color === 'indigo',
          'dark:text-pink-400 text-pink-600': link.color === 'pink',
          'dark:text-purple-400 text-purple-600': link.color === 'purple',
          'dark:text-emerald-400 text-emerald-600': link.color === 'emerald',
          'dark:text-amber-400 text-amber-600': link.color === 'amber',
          'dark:text-cyan-400 text-cyan-600': link.color === 'cyan'
        }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    },
    delay: {
      type: Number,
      default: 0
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