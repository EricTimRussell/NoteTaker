<template>
  <section class="container-fluid">
    <!-- SECTION Create card -->
    <div class="row justify-content-center p-3">
      <NoteFormComponent :notes="notes" />
    </div>
    <!-- SECTION Card -->
    <div class="row">
      <NoteCardComponent v-for="note in storeNotes.notes" :notes="note" :key="note.id" @removeNote="removeNote" />
    </div>
  </section>
</template>

<script setup>
import NoteCardComponent from "@/components/NoteCardComponent.vue";
import NoteFormComponent from "@/components/NoteFormComponent.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes()

function removeNote(id) {
  notes.value = notes.value.filter(note => { return note.id !== id })
}

</script>

<style scoped>

</style>
