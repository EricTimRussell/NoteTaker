<template>
  <section class="container-fluid">
    <!-- SECTION Create card -->
    <div class="row justify-content-center p-3">
      <NoteFormComponent />
    </div>
    <!-- SECTION Card -->
    <div class="row">
      <NoteCardComponent v-for="note in storeNotes.notes" :notes="note" :key="note.id" />
    </div>
  </section>
</template>

<script setup>
import NoteCardComponent from "@/components/NoteCardComponent.vue";
import NoteFormComponent from "@/components/NoteFormComponent.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes()

</script>

<style scoped>

</style>
