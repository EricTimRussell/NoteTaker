<template>
  <section class="container-fluid">
    <!-- SECTION Create card -->
    <div class="row justify-content-center p-3">
      <NoteFormComponent :notes="notes" @addNote="addNote" />
    </div>
    <!-- SECTION Card -->
    <div class="row">
      <NoteCardComponent v-for="note in notes" :notes="note" :key="note.id" @removeNote="removeNote" />
    </div>
  </section>
</template>

<script setup>
import NoteCardComponent from "@/components/NoteCardComponent.vue";
import NoteFormComponent from "@/components/NoteFormComponent.vue";
import { ref } from "vue";

const notes = ref([
  {
    id: 1,
    title: "Title 1",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id suscipit voluptate, ut nihil labore facilis vero praesentium repudiandae officia quo, distinctio ducimus! Error fugiat quaerat pariatur, non voluptatibus accusantium unde."
  },
  {
    id: 2,
    title: "Title 2",
    content: "Id suscipit voluptate, ut nihil labore facilis vero praesentium repudiandae officia quo, distinctio ducimus! Error fugiat quaerat pariatur, non voluptatibus accusantium unde."
  },
  {
    id: 3,
    title: "Title 3",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id suscipit voluptate, ut nihil labore facilis vero praesentium."
  },
  {
    id: 4,
    title: "Title 4",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id suscipit voluptate, ut nihil labore facilis vero praesentium repudiandae officia quo, distinctio ducimus! Error fugiat quaerat pariatur, non voluptatibus accusantium unde. this is an even longer note like if i was really writing about something important in a lot of detail and what not."
  }

])

function addNote(note) {
  notes.value.unshift(note)
}

function removeNote(id) {
  notes.value = notes.value.filter(note => { return note.id !== id })
}

</script>

<style scoped>

</style>
