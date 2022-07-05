<script setup>
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'

const input = ref()
const showModal = ref(false)

useFocus(input, { initialValue: true })
</script>

<template>
  <AppHeader title="Notes">
    <template v-slot:button>
      <AppButton
        icon="ph-plus"
        @click="showModal = true"
      >
        Add a new note
      </AppButton>
    </template>
  </AppHeader>
  <main />
  <AppModal
    v-model:open="showModal"
    title="Add a new note"
  >
    <template v-slot:form>
      <input
        ref="input"
        type="text"
        class="w-full text-2xl text-zinc-900 font-bold border-none placeholder-zinc-900/30 focus:outline-none md:text-3xl"
        placeholder="Untitled"
      />
      <textarea
        class="w-full min-h-52 mt-10 p-4 border bg-zinc-50 border-2 border-zinc-200 rounded ring-offset-2 ring-offset-zinc-200 resize-none focus:outline-none focus:ring-2"
        placeholder="Type a note text"
      />
    </template>
  </AppModal>
</template>
