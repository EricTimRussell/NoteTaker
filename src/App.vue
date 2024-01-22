<template>
  <header class="font-mono">
    <NavbarCompnent />
  </header>

  <RouterView class="font-mono" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarCompnent from "./components/NavbarCompnent.vue";
</script>

<style>
header{
  width: 100%;
}


</style>