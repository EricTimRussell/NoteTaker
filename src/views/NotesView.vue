<template>
  <section class="container-fluid">
    <!-- SECTION Create note -->
    <div class="row justify-content-center p-3">
      <NoteFormComponent />
    </div>
    <!-- SECTION Note card -->
    <div class="row">
      <NoteCardComponent v-for="note in storeNotes.notes" :notes="note" :key="note.id" />
      <div v-if="!storeNotes.notes.length" class="fs-xlg text-secondary py-5 col-12 d-flex justify-content-center">
        No notes to display try adding a note...
      </div>
    </div>
  </section>
</template>

<script setup>
import NoteCardComponent from "@/components/NoteCardComponent.vue";
import NoteFormComponent from "@/components/NoteFormComponent.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { onMounted } from "vue";

const storeNotes = useStoreNotes()

onMounted(() => {
  storeNotes.getNotes()
})

</script>

<style scoped>

</style>
