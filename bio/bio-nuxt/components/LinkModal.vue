<!-- Pop Up Copy link URL -->

<template>
  <div
    id="linkModal"
    class="modal"
    :class="{ active: isOpen }"
  >
    <div
      class="modal-overlay"
      @click="$emit('close')"
    />
    <div
      class="modal-container dark:bg-dark-100 bg-white p-6 shadow-xl transition-colors duration-300"
    >
      <div class="flex justify-between items-center mb-4">
        <h3
          class="text-lg font-medium dark:text-white text-gray-900 transition-colors duration-300"
        >
          Link Details
        </h3>
        <button
          class="dark:text-gray-400 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
          @click="$emit('close')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="mb-4">
        <label
          for="linkInput"
          class="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2 transition-colors duration-300"
        >
          Link URL
        </label>
        <div class="flex">
          <input
            id="linkInput"
            type="text"
            :value="currentLink"
            readonly
            class="link-input dark:bg-dark-300 bg-gray-100 dark:text-white text-gray-800 rounded-l-lg transition-colors duration-300"
            @focus="$event.target.select()"
          >
          <button
            class="flex items-center justify-center px-4 dark:bg-indigo-600 bg-indigo-500 dark:hover:bg-indigo-700 hover:bg-indigo-600 text-white rounded-r-lg transition-colors duration-300"
            :class="{ 'copy-animation': isCopying }"
            @click="handleCopy"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          </button>
        </div>
        
        <!-- Message Copy -->
        <p
          id="copyMessage"
          class="mt-2 text-sm dark:text-green-400 text-green-600 transition-opacity duration-300"
          :class="{ 'opacity-100': showCopyMessage, 'opacity-0': !showCopyMessage }"
        >
          Link copied to clipboard!
        </p>
      </div>

      <!-- Button Copy and link -->
      <div class="flex justify-between">
        <button
          class="px-4 py-2 dark:bg-indigo-600 bg-indigo-500 dark:hover:bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
          @click="$emit('visit')"
        >
          Visit Link
        </button>
        <button
          class="px-4 py-2 dark:bg-gray-700 bg-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300 dark:text-white text-gray-800 rounded-lg transition-colors duration-300"
          @click="$emit('close')"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    currentLink: {
      type: String,
      required: true
    },
    showCopyMessage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCopying: false
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal && window.innerWidth > 768) {
        this.$nextTick(() => {
          const input = document.getElementById('linkInput')
          if (input) {
            input.focus()
            input.select()
          }
        })
      }
    }
  },
  methods: {
    handleCopy() {
      console.log('Copy button clicked')
      this.isCopying = true
      this.$emit('copy')
      setTimeout(() => {
        this.isCopying = false
      }, 300)
    }
  }
}
</script>