<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header
    class="h-30 p-10 flex items-center justify-between border-b-2 border-zinc-200"
  >
    <h1 class="text-2xl text-zinc-900 font-bold lg:text-4xl">
      {{ props.title }}
    </h1>
    <slot name="button" />
  </header>
</template>
