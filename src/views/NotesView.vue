<template>
  <section class="container-fluid">
    <!-- SECTION Create card -->
    <div class="row justify-content-center pt-3">
      <div class="form-floating col-md-10 col-12 p-3 bg-lighter rounded">
        <textarea class="form-control" placeholder="Write a new note here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea" class="m-3">Write a new note</label>
        <div class="d-flex justify-content-end pt-2">
          <button class="btn btn-primary">Create Note</button>
        </div>
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
