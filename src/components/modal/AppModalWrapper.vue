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

const emit = defineEmits(['update:open'])

const modalRef = ref(null)

const handleCloseModal = () => emit('update:open', false)

onClickOutside(modalRef, handleCloseModal)
</script>

<template>
  <div
    v-if="props.open"
    class="h-full w-full top-0 left-0 z-10 absolute"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="h-full bg-zinc-800/20 w-full fixed backdrop-filter backdrop-blur-[8px]"
    />
    <div
      class="max-w-lg transform-gpu top-1/2 left-1/2 w-[90vw] -translate-x-1/2 -translate-y-1/2 absolute sm:mx-auto sm:w-full"
    >
      <div ref="modalRef" class="bg-white rounded shadow-md overflow-hidden">
        <header
          class="border-b flex border-zinc-200 py-6 px-10 items-center justify-between"
        >
          <h3 class="font-bold text-base text-zinc-900">
            {{ props.title }}
          </h3>
          <button
            type="button"
            class="h-6 w-6"
            aria-label="Close Modal"
            title="Close Modal"
            @click="handleCloseModal"
          >
            <ph-x width="24" height="24" color="#A1A1AA" />
          </button>
        </header>
        <form class="p-10">
          <slot name="content" />
          <div class="flex flex-col pt-10 gap-5 md:flex-row md:gap-10">
            <AppButton size="large" variant="white" @click="handleCloseModal">
              Cancel
            </AppButton>
            <slot name="action" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
