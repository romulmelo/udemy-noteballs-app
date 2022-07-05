<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String
  },
  size: {
    type: String
  },
  icon: {
    type: String
  }
})
</script>

<template>
  <button
    class="button"
    :class="[
      `button--${props.variant ?? 'primary'}`,
      `button--${props.size ?? 'small'}`
    ]"
    :type="props.type"
  >
    <Icon
      v-if="props.icon"
      :icon="props.icon"
      width="24"
      height="24"
    />
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="postcss" scoped>
.button {
  @apply h-12 px-4 py-2 flex items-center justify-center gap-2 rounded text-[14px] tracking-tight transition transition-colors duration-200;
}

.button--primary {
  @apply bg-slate-800 text-white hover:bg-slate-900;
}

.button--white {
  @apply bg-zinc-200 text-zinc-800 hover:bg-zinc-300;
}

.button--danger {
  @apply text-red-600 border border-red-500 hover:bg-red-400/30;
}

.button--large {
  @apply w-full;
}
</style>
