<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const views = [
  {
    description: 'All notes',
    path: '/',
    icon: 'ph-notepad'
  },
  {
    description: 'Stats',
    path: '/stats',
    icon: 'ph-trend-up'
  },
  {
    description: 'Deleted notes',
    path: '/deleted-notes',
    icon: 'ph-trash-simple'
  }
]
</script>

<template>
  <aside
    class="fixed top-0 left-0 bottom-0 w-full bg-zinc-100 border-r-2 border-zinc-200 transform-gpu transition-transform duration-200 lg:max-w-sm lg:translate-x-0 lg:opacity-100"
    :class="
      props.open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
    "
  >
    <div
      class="h-30 p-10 flex items-center justify-between border-b-2 border-zinc-200"
    >
      <AppLogo
        label="Notesball"
        aria-label="Site Logo"
        role="banner"
      />
    </div>
    <div
      class="h-[calc(100%-196px)] p-10 flex flex-col justify-between lg:h-[calc(100%-120px)]"
    >
      <nav aria-label="Main Navigation">
        <span class="text-xs text-zinc-900 font-bold uppercase">
          Main navigation
        </span>
        <ul class="py-4 flex flex-col items-start gap-4">
          <li
            v-for="view in views"
            :key="view.path"
            class="w-full"
          >
            <RouterLink
              :to="view.path"
              class="px-2 py-4 flex items-center gap-2 text-base text-zinc-500 font-medium rounded"
            >
              <Icon
                :icon="view.icon"
                width="24"
                height="24"
                color="#71717A"
              />
              <span>{{ view.description }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
      <footer class="w-full py-10 flex items-center justify-between gap-8">
        <div
          class="flex flex-col items-start gap-2 sm:flex-row sm:items-center"
        >
          <img
            class="w-12 h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
            alt="Profile picture - Jane Cooper"
            title="Jane Cooper"
          />
          <div class="flex flex-col">
            <strong class="text-base text-zinc-900">Jane Cooper </strong>
            <span class="text-sm text-zinc-600"> jane.cooper@email.com </span>
          </div>
        </div>
        <button
          type="button"
          aria-label="Sign Out"
          title="Sign Out"
        >
          <ph-sign-out
            height="32"
            width="32"
            color="#71717A"
          />
        </button>
      </footer>
    </div>
  </aside>
</template>

<style lang="postcss">
a.active,
a.exact {
  @apply bg-zinc-200 rounded;
}
</style>
