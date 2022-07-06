<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:open', Boolean])

const handleToggleSidebar = () => emit('update:open', !props.open)
</script>

<template>
  <button
    type="button"
    class="rounded-full bg-slate-800 text-white p-4 right-4 bottom-4 ring-offset-2 ring-offset-slate-100 fixed lg:hidden lg:pointer-events-none focus:outline-none focus:ring-2"
    aria-label="Toggle Sidebar"
    @click="handleToggleSidebar"
    :title="props.open ? 'Close Sidebar' : 'Open Sidebar'"
  >
    <ph-x
      v-if="props.open"
      width="24"
      height="24"
      color="#fff"
    />
    <ph-list
      v-else
      width="24"
      height="24"
      color="#fff"
    />
  </button>
</template>
