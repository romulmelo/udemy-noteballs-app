<script setup>
import { reactive, ref } from 'vue'
import { useFocus } from '@vueuse/core'

const input = ref()
const showModal = ref(false)
const notes = ref([])
const newNote = reactive({
  title: '',
  content: ''
})

const handleAddNewNote = () => {
  const uuid = new Date().getTime()
  const createdAt = new Date().toISOString()

  const note = {
    id: uuid,
    title: newNote.title,
    content: newNote.content,
    createdAt,
    toDelete: false
  }

  notes.value.unshift(note)

  newNote.title = ''
  newNote.content = ''

  showModal.value = false
}

useFocus(input, { initialValue: true })
</script>

<template>
  <AppHeader title="Notes">
    <template v-slot:button>
      <AppButton icon="ph-plus" @click="showModal = true">
        Add a new note
      </AppButton>
    </template>
  </AppHeader>
  <main class="bg-zinc-50">
    <div class="flex flex-col p-10">
      <div v-if="notes.length === 0" class="flex flex-col gap-6 items-center">
        <img
          src="@/static/img/no-results-found.svg"
          alt="Thow empty notebooks"
          loading="lazy"
          width="240"
          height="240"
        />
        <div class="flex flex-col text-center gap-1 items-center">
          <p class="font-medium text-zinc-400/80 lg:text-lg">
            Oops. Looks like there are no notes around here :(
          </p>
          <p class="font-medium text-zinc-400/80 lg:text-lg">
            Click on Add a new note button and register everything here.
          </p>
        </div>
      </div>
      <div v-else class="flex text-zinc-800 gap-4 items-center">
        <span class="font-semibold text-[14px] uppercase">All notes</span>
        <span class="rounded font-semibold border-2 border-zinc-800 px-2">
          {{ notes.length }}
        </span>
      </div>
      <ul class="grid py-10 gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        <li v-for="note in notes" :key="note.id">
          <AppNote
            :title="note.title"
            :content="note.content"
            :createdAt="note.createdAt"
            :toDelete="note.toDelete"
          />
        </li>
      </ul>
    </div>
  </main>
  <AppModal v-model:open="showModal" title="Add a new note">
    <template v-slot:form>
      <input
        v-model="newNote.title"
        ref="input"
        type="text"
        class="border-none font-bold w-full placeholder-zinc-900/30 text-2xl text-zinc-900 md:text-3xl focus:outline-none"
        placeholder="Untitled"
      />
      <textarea
        v-model="newNote.content"
        class="border rounded bg-zinc-50 border-2 border-zinc-200 mt-10 w-full min-h-52 p-4 ring-offset-2 ring-offset-zinc-200 resize-none focus:outline-none focus:ring-2"
        placeholder="Type a note text"
      />
    </template>
    <template v-slot:action>
      <AppButton @click.prevent="handleAddNewNote" type="submit" size="large">
        Add note
      </AppButton>
    </template>
  </AppModal>
</template>
