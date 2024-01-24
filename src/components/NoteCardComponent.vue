<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12 py-2">
    <div class="card">
      <div class="card-body bg-lighter">
        <h5 class="card-title">{{ notes.title }}</h5>
        <p class="card-text">{{ notes.content }}</p>
        <div class="text-end">
          <small class="text-secondary">{{ characterLength }}</small>
        </div>
      </div>
      <div class="d-flex justify-content-between card-footer bg-light">
        <RouterLink :to="`/editNote/${notes.id}`">
          <button class="card-link btn">
            <span class="material-symbols-outlined edit-icon">
              edit
            </span>
          </button>
        </RouterLink>
        <button @click="storeNotes.removeNote(notes.id)" class="card-link btn">
          <span class="material-symbols-outlined delete-icon">
            delete_forever
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const props = defineProps({
  notes: { type: Object, required: true }
})

const storeNotes = useStoreNotes()

const characterLength = computed(() => {
  let length = props.notes.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

</script>

<style scoped>
.card-body{
  height: 30vh;
  max-height: 30vh;
}
.add-note:hover{
transform: scale(1.2);
}
.add-note:active{
  transform: scale(0.9);
}
button{
  border: none;
}
.delete-icon{
  color: red;
}
.edit-icon{
  color: gray;
}
.delete-icon:hover, .edit-icon:hover{
transform: scale(1.2);
}
.delete-icon:active, .edit-icon:active{
  transform: scale(0.9);
}
</style>