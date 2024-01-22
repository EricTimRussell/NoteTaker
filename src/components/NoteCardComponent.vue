<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12 py-2">
    <div class="card">
      <div class="card-body bg-lighter">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
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