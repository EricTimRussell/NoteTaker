<template>
  <div class="flex justify-between bg-green-600 p-5">
    <div class="flex">
      <span class="material-symbols-outlined text-3xl">
        note_alt
      </span>
      <span class="text-3xl">NoteTaker</span>
      <nav class="text-3xl px-7">
        <RouterLink to="/">Home</RouterLink>
        <span class="px-5">||</span>
        <RouterLink to="/notes">Notes</RouterLink>
      </nav>
    </div>
    <div class="flex">
      <div class="px-1">
        <button class="btn-light">Sign Up</button>
      </div>
      <div>
        <button class="btn-dark">Log In</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>

</style>