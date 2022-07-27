<script setup>
import { ref } from "vue"
import { useFocus } from "@vueuse/core"

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const emit = defineEmits(["addNewNote", "update:title", "update:content"])

const inputRef = ref(null)

const handleAddNewNote = () => emit("addNewNote")
const handleUpdateTitle = (e) => emit("update:title", e.target.value)
const handleUpdateContent = (e) => emit("update:content", e.target.value)

useFocus(inputRef, { initialValue: true })
</script>

<template>
  <teleport to="#portal-root">
    <AppModalWrapper v-bind="$attrs" title="Add new note">
      <template #content>
        <input
          ref="inputRef"
          :value="props.title"
          type="text"
          class="border-none font-bold w-full placeholder-zinc-900/30 text-2xl text-zinc-900 md:text-3xl focus:outline-none"
          placeholder="Untitled"
          @input="handleUpdateTitle"
        />
        <textarea
          :value="props.content"
          class="border rounded bg-zinc-50 border-2 border-zinc-200 mt-10 w-full min-h-52 p-4 ring-offset-2 ring-offset-zinc-200 resize-none focus:outline-none focus:ring-2"
          placeholder="Type a note text"
          @input="handleUpdateContent"
        />
      </template>
      <template #action>
        <AppButton
          type="submit"
          variant="primary"
          size="large"
          :disabled="!props.title || !props.content"
          @click.prevent="handleAddNewNote"
        >
          Add note
        </AppButton>
      </template>
    </AppModalWrapper>
  </teleport>
</template>
