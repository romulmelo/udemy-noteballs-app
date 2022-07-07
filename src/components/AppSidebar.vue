<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:open', Boolean])

const handleCloseSidebar = () => emit('update:open', false)

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
    class="bg-zinc-100 border-r-2 border-zinc-200 w-full transform-gpu transition-transform top-0 bottom-0 left-0 duration-200 fixed lg:max-w-sm lg:opacity-100 lg:translate-x-0"
    :class="
      props.open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
    "
  >
    <div
      class="flex border-b-2 border-zinc-200 h-30 p-10 items-center justify-between"
    >
      <AppLogo
        label="Notesball"
        aria-label="Site Logo"
        role="banner"
      />
    </div>
    <div
      class="flex flex-col h-[calc(100%-196px)] p-10 justify-between lg:h-[calc(100%-120px)]"
    >
      <nav aria-label="Main Navigation">
        <span class="font-bold text-xs text-zinc-900 uppercase">
          Main navigation
        </span>
        <ul class="flex flex-col py-4 gap-4 items-start">
          <li
            v-for="view in views"
            :key="view.path"
            class="w-full"
          >
            <RouterLink
              :to="view.path"
              @click="handleCloseSidebar"
              class="rounded flex font-medium text-base py-4 px-2 text-zinc-500 gap-2 items-center"
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
      <footer class="flex w-full py-10 gap-8 items-center justify-between">
        <div
          class="flex flex-col gap-2 items-start sm:flex-row sm:items-center"
        >
          <img
            class="rounded-full object-cover h-12 w-12"
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
  @apply rounded bg-zinc-200;
}
</style>
