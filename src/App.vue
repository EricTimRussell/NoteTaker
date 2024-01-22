<template>
  <header>
    <NavbarCompnent />
  </header>


  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarCompnent from "./components/NavbarCompnent.vue";
</script>

<style>

</style>