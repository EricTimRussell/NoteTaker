<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <form @submit.prevent="onSubmit" class="col-10 py-5">
        <div class="form-floating mb-3">
          <input v-model="credentials.email" type="email" class="form-control" id="createEmail"
            placeholder="name@example.com">
          <label for="createEmail">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="credentials.password" type="password" class="form-control" id="createPassword"
            placeholder="Password">
          <label for="createPassword">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="credentials.passwordConfirm" type="password" class="form-control" id="confirmPassword"
            placeholder="Password">
          <label for="confirmPassword">Confirm Password</label>
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" :disabled="credentials.passwordConfirm != credentials.password"
            class="btn btn-primary">Create
            Account</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { useStoreAuth } from "@/stores/storeAuth";

// store
const storeAuth = useStoreAuth()

const credentials = ref({
  email: '',
  password: '',
  passwordConfirm: ''
})

// handle create account submit
function onSubmit() {
  if (!credentials.value.email || !credentials.value.password) {
    Swal.fire({
      title: "Please enter a valid email, password, and username.",
      icon: "error"
    })
  }
  else {
    storeAuth.createAccount(credentials)
  }
}


</script>

<style scoped></style>