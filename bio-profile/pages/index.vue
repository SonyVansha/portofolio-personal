<template>
  <div
    class="min-h-screen transition-colors duration-300"
    :class="{
      'dark:bg-pattern-dark bg-pattern-light': true,
      'dark:bg-dark-200 dark:text-white bg-light-200 text-gray-800': true
    }"
  >
    <ThemeToggle />
    <div class="py-10 px-4 content-container">
      <ProfileSection @open-modal="openModal" />
      <main class="space-y-3">
        <LinkButton
          v-for="(link, index) in links"
          :key="link.id"
          :link="link"
          :delay="0.2 + index * 0.1"
          @open-modal="openModal"
        />
      </main>
      <footer
        class="mt-10 text-center dark:text-gray-400 text-gray-500 text-xs fade-in transition-colors duration-300"
        style="animation-delay: 0.8s"
      >
        <div
          class="dark:bg-white/5 bg-gray-200/50 rounded-full px-4 py-2 inline-block transition-colors duration-300"
        >
          <p>© 2025 Sony Vansha</p>
        </div>
      </footer>
    </div>
    <LinkModal
      :is-open="modalOpen"
      :current-link="currentLink"
      :show-copy-message="showCopyMessage"
      @close="closeModal"
      @visit="visitLink"
      @copy="copyLink"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
      currentLink: '',
      showCopyMessage: false,
      links: [
        {
          id: 1,
          url: 'https://sonyvansha.netlify.app',
          title: 'Portofolio Website',
          color: 'indigo',
          icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          id: 2,
          url: 'https://catatanitsony.blogspot.com',
          title: 'Blog Post',
          color: 'pink',
          icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
        },
        // {
        //   id: 3,
        //   url: 'https://youtube.com/@yourchannel',
        //   title: 'YouTube Channel',
        //   color: 'purple',
        //   icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
        // },
        {
          id: 4,
          url: 'https://cv.example.com',
          title: 'Resume or CV',
          color: 'emerald',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          id: 5,
          url: 'mailto:sonyvansha@email.com',
          title: 'Contact Me',
          color: 'amber',
          icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
          id: 6,
          url: 'https://drive/resources',
          title: 'Free Resources',
          color: 'cyan',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
        }
      ]
    }
  },
  methods: {
    openModal(link) {
      console.log('Opening modal with link:', link)
      this.currentLink = link
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
      this.showCopyMessage = false
    },
    visitLink() {
      window.open(this.currentLink, '_blank')
      this.closeModal()
    },
    async copyLink() {
      console.log('Copying link:', this.currentLink)
      try {
        await navigator.clipboard.writeText(this.currentLink)
        this.showCopyMessage = true
        setTimeout(() => {
          this.showCopyMessage = false
        }, 2000)
      } catch (err) {
        console.error('Could not copy text: ', err)
        const input = document.getElementById('linkInput')
        if (input) {
          input.select()
          document.execCommand('copy')
          this.showCopyMessage = true
          setTimeout(() => {
            this.showCopyMessage = false
          }, 2000)
        }
      }
    }
  }
}
</script>