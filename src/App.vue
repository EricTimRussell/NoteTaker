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
import { getCurrentUser } from 'vuefire'

const storeAuth = useStoreAuth()

async function user() {
  const user = await getCurrentUser()
}

onMounted(() => {
  storeAuth.init()
  user()
})

</script>

<style>
body{
  background-color: whitesmoke;
}
</style>