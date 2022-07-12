<script setup>
import { ref } from 'vue'
import { onClickOutside, useFocus } from '@vueuse/core'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  note: {
    type: Object
  }
})

const emit = defineEmits(['update:open', 'addNewNote'])

const inputRef = ref(null)
const modalRef = ref(null)

const handleCloseModal = () => emit('update:open', false)
const handleAddNewNote = () => emit('addNewNote')

onClickOutside(modalRef, handleCloseModal)
useFocus(inputRef, { initialValue: true })
</script>

<template>
  <teleport to="#portal-root">
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
            <h3 class="font-bold text-base text-zinc-900">Add a new note</h3>
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
            <input
              v-model="props.note.title"
              ref="inputRef"
              type="text"
              class="border-none font-bold w-full placeholder-zinc-900/30 text-2xl text-zinc-900 md:text-3xl focus:outline-none"
              placeholder="Untitled"
            />
            <textarea
              v-model="props.note.content"
              class="border rounded bg-zinc-50 border-2 border-zinc-200 mt-10 w-full min-h-52 p-4 ring-offset-2 ring-offset-zinc-200 resize-none focus:outline-none focus:ring-2"
              placeholder="Type a note text"
            />
            <div class="flex flex-col pt-10 gap-5 md:flex-row md:gap-10">
              <AppButton size="large" variant="white" @click="handleCloseModal">
                Cancel
              </AppButton>
              <AppButton
                type="submit"
                size="large"
                @click.prevent="handleAddNewNote"
              >
                Add note
              </AppButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </teleport>
</template>
