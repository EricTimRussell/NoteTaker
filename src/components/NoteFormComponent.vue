<template>
  <form class="form-floating col-md-10 col-12 p-3 bg-lighter rounded">
    <div class="form-floating mb-3">
      <input v-model="newNote.title" type="text" maxlength="40" class="form-control" id="title" placeholder="Note title">
      <label for="title">Note Title</label>
    </div>
    <div>
      <textarea v-model="newNote.content" v-autofocus maxlength="350" class="form-control" rows="5"
        placeholder="Write note here..." id="content">
      </textarea>
    </div>
    <div class="d-flex justify-content-end p-2">
      <button :disabled="!newNote.content || !newNote.title" @click="handleAddNote" class="btn btn-primary">Create
        Note</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/composables/useWatchCharacters";
import { useStoreAuth } from "@/stores/storeAuth";

const storeNotes = useStoreNotes()

const newNote = ref({ title: '', content: '' })

const user = useStoreAuth()

async function handleAddNote() {
  let date = new Date().getTime()
  storeNotes.addNote(newNote, date, user.user.id)
  newNote.value = ref({ title: '', content: '' })
}

useWatchCharacters(newNote.value)

</script>

<style lang="scss" scoped></style>