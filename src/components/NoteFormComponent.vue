<template>
  <div class="form-floating col-md-10 col-12 p-3 bg-lighter rounded">
    <div class="form-floating mb-3">
      <input v-model="newNote.title" type="text" class="form-control" id="title" placeholder="Note title">
      <label for="title">Title</label>
    </div>
    <div>
      <textarea v-model="newNote.content" class="form-control" placeholder="Write a new note here"
        id="content"></textarea>
      <label for="content" class="m-3"></label>
    </div>
    <div class="d-flex justify-content-end">
      <button :disabled="!newNote.content" @click="handleAddNote" class="btn btn-primary">Create Note</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes()

const newNote = ref({ title: '', content: '' })

function handleAddNote() {
  storeNotes.addNote(newNote)

  newNote.value = ref({ title: '', content: '' })
}

</script>

<style lang="scss" scoped></style>