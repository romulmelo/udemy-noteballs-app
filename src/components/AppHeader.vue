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
    class="flex border-b-2 border-zinc-200 h-30 p-10 items-center justify-between"
  >
    <h1 class="font-bold text-2xl text-zinc-900 lg:text-4xl">
      {{ props.title }}
    </h1>
    <slot name="button" />
  </header>
</template>
