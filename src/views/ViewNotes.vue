<script setup>
import { reactive, ref } from 'vue'

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
</script>

<template>
  <AppHeader title="Notes">
    <template #button>
      <AppButton variant="primary" icon="ph-plus" @click="showModal = true">
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
            :created-at="note.createdAt"
            :to-delete="note.toDelete"
          />
        </li>
      </ul>
    </div>
  </main>
  <AppAddNoteModal
    v-model:open="showModal"
    v-model:title="newNote.title"
    v-model:content="newNote.content"
    @add-new-note="handleAddNewNote"
  />
</template>
