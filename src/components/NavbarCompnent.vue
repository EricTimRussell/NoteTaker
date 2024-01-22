<template>
  <section class="container-fluid bg-light">
    <div class="row p-5">
      <div class="d-flex col-8 col-md-6 justify-content-start">
        <RouterLink to="/">
          <span class="material-symbols-outlined">
            note_alt
          </span>
          <span>NoteTaker</span>
        </RouterLink>
        <nav id="nav">
          <RouterLink to="/">Home</RouterLink>
          <span class="px-1">||</span>
          <RouterLink to="/notes">Notes</RouterLink>
        </nav>
      </div>
      <div class="d-flex col-4 col-md-6 justify-content-end">
        <div>
          <button class="btn-light">Sign Up</button>
        </div>
        <div>
          <button class="btn-dark">Log In</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
#nav .router-link-active {
  text-decoration: underline 2px black;
  font-weight: bolder;
}


</style>