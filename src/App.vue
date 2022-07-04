<script setup>
import { ref } from 'vue'

const showSidebar = ref(false)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppSidebar :open="showSidebar" />
    <div class="flex-1 lg:w-[calc(100%-384px)] lg:ml-auto">
      <RouterView />
    </div>
  </div>
  <AppFloatButton v-model:open="showSidebar" />
</template>
