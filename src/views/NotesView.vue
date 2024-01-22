<template>
  <section class="container-fluid">
    <!-- SECTION Create card -->
    <div class="row">
      <div class="col-12">
        <button class="btn" title="Create Note">
          <span class="material-symbols-outlined fs-xlg p-2 text-success add-note">
            add_circle
          </span>
        </button>
      </div>
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


</script>

<style scoped>

</style>
