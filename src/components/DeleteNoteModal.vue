<template>
  <div class="modal" tabindex="-1" id="deleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="modal-title">Delete Note?</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
          <button @click="storeNotes.removeNote(notes.id)" type="button" data-bs-dismiss="modal"
            class="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/stores/storeNotes";


defineProps({
  notes: { type: Object, required: true }
})

const storeNotes = useStoreNotes()


</script>

<style scoped></style>