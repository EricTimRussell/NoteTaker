<template>
  <section class="container-fluid">
    <div class="row justify-content-center pt-5">
      <div class="form-floating col-md-10 col-12 p-5 bg-lighter rounded">
        <h1>Edit Note</h1>
        <div class="form-floating mb-3">
          <input v-model="noteContent.title" type="text" class="form-control" id="title" placeholder="Edit Note title">
          <label for="title">Edit Title</label>
        </div>
        <div>
          <textarea v-model="noteContent.content" class="form-control" placeholder="Edit Note" id="content"></textarea>
          <label for="content" class="m-3"></label>
        </div>
        <div class="d-flex justify-content-end gap-1">
          <button @click="$router.back()" class="btn btn-danger">Cancel</button>
          <button :disabled="!noteContent.content" @click="handleEditNote" class="btn btn-primary">Save Note</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute } from "vue-router";

const route = useRoute()

const storeNotes = useStoreNotes()

const noteContent = ref({ title: '', content: '' })

noteContent.value = storeNotes.getNoteContentById(route.params.id)

function handleEditNote() {
  storeNotes.editNote(noteContent)
}

</script>

<style scoped></style>