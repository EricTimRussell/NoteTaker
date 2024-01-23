<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12 py-2">
    <div class="card">
      <div class="card-body bg-lighter">
        <h5 class="card-title">{{ notes.title }}</h5>
        <p class="card-text">{{ notes.content }}</p>
        <div class="d-flex justify-content-between">
          <button class="card-link btn">
            <span class="material-symbols-outlined edit-icon">
              edit
            </span>
          </button>
          <button class="card-link btn">
            <span class="material-symbols-outlined delete-icon">
              delete_forever
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  notes: { id: Number, title: String, content: String }
})





</script>

<style scoped>
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