<template>
  <section class="container-fluid bg-darker shadow-lg">
    <div class="row">
      <div class="d-flex py-2 px-3 col-sm-4 col-md-3 justify-content-start">
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
          <span class="fs-lg">|</span>
          <RouterLink class="ps-1 fs-lg" to="/notes">Notes</RouterLink>
        </nav>
      </div>
      <div class="d-flex justify-content-end col-sm-4 col-md-7 d-none d-sm-flex p-2">
        <div v-if="!storeAuth.user.id" class="pt-2 px-2">
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login/Create</button>
        </div>
        <div v-if="storeAuth.user.id" class="pt-2">
          <button @click="storeAuth.logoutUser" class="btn btn-light">Logout {{ storeAuth.user.email }}</button>
        </div>
      </div>
    </div>

    <!-- Mobile view only -->
    <div class="d-flex col-12 p-1 justify-content-end d-flex d-sm-none">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="material-symbols-outlined fs-lg">
            menu
          </span></button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item">Login/Create</button></li>
          <li><button v-if="storeAuth.user.id" @click="storeAuth.logoutUser" class="dropdown-item">Logout</button></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useStoreAuth } from "@/stores/storeAuth";

// store
const storeAuth = useStoreAuth()


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

.dropdown-toggle::after {
  display: none;
}
</style>