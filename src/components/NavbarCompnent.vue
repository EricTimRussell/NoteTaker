<template>
  <section class="container-fluid bg-secondary">
    <div class="row">
      <div class="d-flex p-2 col-sm-4 col-md-3 justify-content-start">
        <RouterLink to="/">
          <span class="material-symbols-outlined fs-lg">
            note_alt
          </span>
          <span class="fs-lg">NoteTakr</span>
        </RouterLink>
      </div>
      <div class="d-flex col-sm-4 col-md-2 justify-content-start">
        <nav id="nav" class="d-none d-sm-flex">
          <RouterLink class="pe-1 fs-lg" to="/">Home</RouterLink>
          <span class="fs-lg">||</span>
          <RouterLink class="ps-1 fs-lg" to="/notes">Notes</RouterLink>
        </nav>
      </div>
      <div class="d-flex justify-content-end col-sm-4 col-md-7 d-none d-sm-flex">
        <div class="pt-2 px-2">
          <button class="btn-light">Sign Up</button>
        </div>
        <div class="pt-2">
          <button class="btn-dark">Log In</button>
        </div>
      </div>
    </div>
    <div class="d-flex col-12 p-2 justify-content-end d-flex d-sm-none">
      <span class="material-symbols-outlined fs-xlg">
        menu
      </span>
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

a{
  color: inherit;
  text-decoration: none;
}

</style>