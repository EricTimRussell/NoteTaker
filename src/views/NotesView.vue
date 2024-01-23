<template>
  <section class="container-fluid">
    <!-- SECTION Create card -->
    <div class="row justify-content-center p-3">
      <NoteFormComponent />
    </div>
    <!-- SECTION Card -->
    <div class="row">
      <NoteCardComponent />
      <NoteCardComponent />
      <NoteCardComponent />
      <NoteCardComponent />
    </div>
  </section>
</template>

<script setup>
import NoteCardComponent from "@/components/NoteCardComponent.vue";
import NoteFormComponent from "@/components/NoteFormComponent.vue";


</script>

<style scoped>

</style>
