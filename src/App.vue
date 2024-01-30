<template>
  <header>
    <NavbarCompnent />
  </header>


  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarCompnent from "./components/NavbarCompnent.vue";
import { useStoreNotes } from "./stores/storeNotes";
import { onMounted } from "vue";

const storeNotes = useStoreNotes()

onMounted(() => {
  storeNotes.getNotes()
})
</script>

<style>
body{
  background-color: whitesmoke;
}
</style>