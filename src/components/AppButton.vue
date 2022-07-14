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
    v-bind="$attrs"
    class="button"
    :type="props.type"
    :class="[$style.button, $style[variant], $style[size]]"
  >
    <Icon v-if="props.icon" :icon="props.icon" width="24" height="24" />
    <span>
      <slot />
    </span>
  </button>
</template>

<style module>
.button {
  @apply rounded flex h-12 tracking-tight py-2 px-4 transition transition-colors text-[14px] gap-2 duration-200 items-center justify-center;
}

.primary {
  @apply bg-slate-800 text-white hover:bg-slate-900;
}

.white {
  @apply bg-zinc-200 text-zinc-800 hover:bg-zinc-300;
}

.danger {
  @apply border border-red-500 text-red-600 hover:bg-red-400/30;
}

.large {
  @apply w-full;
}
</style>
