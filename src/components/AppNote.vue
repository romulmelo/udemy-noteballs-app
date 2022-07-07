<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  content: String,
  createdAt: Date,
  toDelete: Boolean
})

const showModal = ref(false)
</script>

<template>
  <div
    class="bg-white border rounded border-zinc-200 py-8 px-6 transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-200"
    @click="showModal = true"
  >
    <div class="flex flex-col">
      <span class="text-sm pb-6 text-zinc-400 uppercase">
        {{ props.createdAt }}
      </span>
      <header class="flex items-center justify-between">
        <h2 class="font-bold text-xl text-zinc-900">
          {{ props.title }}
        </h2>
        <button
          v-if="props.toDelete"
          type="button"
          class="h-6 w-6"
          aria-label="Delete Note"
        >
          <ph-trash-simple
            class="hover:transition-colors hover:text-red-400 hover:duration-300"
            width="24"
            height="24"
            color="#A1A1AA"
          />
        </button>
      </header>
      <p class="pt-4 text-zinc-800 line-clamp-5">
        {{ props.content }}
      </p>
    </div>
  </div>
  <AppModal
    v-if="!props.toDelete"
    title="Edit the note"
    v-model:open="showModal"
  >
    <template v-slot:action>
      <AppButton size="large">Save changes</AppButton>
    </template>
  </AppModal>
</template>
