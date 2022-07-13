<script setup>
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'

const props = defineProps({
  note: {
    type: Object
  }
})

const emit = defineEmits(['addNewNote'])

const inputRef = ref(null)

const handleAddNewNote = () => emit('addNewNote')

useFocus(inputRef, { initialValue: true })
</script>

<template>
  <teleport to="#portal-root">
    <AppModalWrapper v-bind="$attrs" title="Add new note">
      <template #content>
        <input
          v-model="props.note.title"
          ref="inputRef"
          type="text"
          class="border-none font-bold w-full placeholder-zinc-900/30 text-2xl text-zinc-900 md:text-3xl focus:outline-none"
          placeholder="Untitled"
        />
        <textarea
          v-model="props.note.content"
          class="border rounded bg-zinc-50 border-2 border-zinc-200 mt-10 w-full min-h-52 p-4 ring-offset-2 ring-offset-zinc-200 resize-none focus:outline-none focus:ring-2"
          placeholder="Type a note text"
        />
      </template>
      <template #action>
        <AppButton type="submit" size="large" @click.prevent="handleAddNewNote">
          Add note
        </AppButton>
      </template>
    </AppModalWrapper>
  </teleport>
</template>
