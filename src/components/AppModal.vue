<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:open', Boolean])

const modalRef = ref(null)

const handleCloseModal = () => emit('update:open', false)

onClickOutside(modalRef, () => emit('update:open', false))
</script>

<template>
  <teleport to="#portal-root">
    <div
      v-if="props.open"
      class="absolute top-0 left-0 z-10 h-full w-full"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed h-full w-full bg-zinc-800/20 backdrop-blur-[8px] backdrop-filter"
      />
      <div
        class="absolute top-1/2 left-1/2 w-[90vw] max-w-lg transform-gpu -translate-x-1/2 -translate-y-1/2 sm:mx-auto sm:w-full"
      >
        <div
          ref="modalRef"
          class="bg-white rounded overflow-hidden shadow-md"
        >
          <header
            class="px-10 py-6 flex items-center justify-between border-b border-zinc-200"
          >
            <h3 class="text-zinc-900 text-base font-bold">{{ props.title }}</h3>
            <button
              type="button"
              class="h-6 w-6"
              aria-label="Close Modal"
              title="Close Modal"
              @click="handleCloseModal"
            >
              <ph-x
                width="24"
                height="24"
                color="#A1A1AA"
              />
            </button>
          </header>
          <form class="p-10">
            <slot name="form" />
          </form>
          <footer class="px-10 pb-10 flex flex-col gap-5 md:flex-row md:gap-10">
            <AppButton
              size="large"
              variant="white"
              @click="handleCloseModal"
            >
              Cancel
            </AppButton>
            <AppButton
              type="submit"
              size="large"
            >
              Add note
            </AppButton>
          </footer>
        </div>
      </div>
    </div>
  </teleport>
</template>
