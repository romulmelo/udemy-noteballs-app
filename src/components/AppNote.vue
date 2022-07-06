<script setup>
import { ref } from 'vue'

const props = defineProps({
  toDelete: {
    type: Boolean,
    default: false
  }
})

const showModal = ref(false)
</script>

<template>
  <div
    class="px-6 py-8 bg-white border border-zinc-200 rounded transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-200"
    @click="showModal = true"
  >
    <div class="flex flex-col">
      <header class="flex items-center justify-between">
        <h2 class="text-xl text-zinc-900 font-bold">Dog in the office</h2>
        <button
          v-if="props.toDelete"
          type="button"
          class="w-6 h-6"
          aria-label="Delete Note"
        >
          <ph-trash-simple
            class="hover:text-red-400 hover:transition-colors hover:duration-300"
            width="24"
            height="24"
            color="#A1A1AA"
          />
        </button>
      </header>
      <p class="pt-4 text-zinc-800 line-clamp-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, in
        quisquam odit quae recusandae illum animi architecto. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequatur, in quisquam odit
        quae recusandae illum animi architecto. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequatur, in quisquam odit quae
        recusandae illum animi architecto.
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
