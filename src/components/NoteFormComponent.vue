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
      <button :disabled="!newNote.content" @click="addNote" class="btn btn-primary">Create Note</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  notes: { id: Number, title: String, content: String }
})

const newNote = ref({ title: '', content: '' })

function addNote() {
  let currentDate = new Date().getTime()
  let note = {
    id: currentDate,
    title: newNote.value.title,
    content: newNote.value.content
  }
  // note.push(props.notes)
  console.log(note);
}
</script>

<style lang="scss" scoped></style>