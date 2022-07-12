<script setup>
import { computed, ref } from 'vue'
import { format } from 'date-fns'

const props = defineProps({
  title: String,
  content: String,
  createdAt: String,
  toDelete: Boolean
})

const showModal = ref(false)

const prettyDate = computed(() => format(new Date(props.createdAt), 'dd MMM'))
</script>

<template>
  <div
    class="bg-white border rounded border-zinc-200 py-8 px-6 transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-200"
    @click="showModal = true"
  >
    <div class="flex flex-col">
      <span class="font-medium text-sm pb-6 text-zinc-400 uppercase">
        {{ prettyDate }}
      </span>
      <header class="flex items-center justify-between">
        <h2 class="font-bold text-xl text-zinc-900">
          {{ props.title }}
        </h2>
      </header>
      <p class="pt-4 text-zinc-800 line-clamp-5">
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
