<template>
  <header>
    <NavbarCompnent />
  </header>


  <RouterView />
  <LoginModalComponent />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarCompnent from "./components/NavbarCompnent.vue";
import LoginModalComponent from "./components/LoginModalComponent.vue";
import { useStoreAuth } from "./stores/storeAuth";
import { onMounted } from "vue";

const storeAuth = useStoreAuth()

onMounted(() => {
  storeAuth.init()
})

</script>

<style>
body{
  background-color: whitesmoke;
}
</style>