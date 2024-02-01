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
          <input v-model="credentials.username" type="text" class="form-control" id="username" placeholder="username">
          <label for="username">username</label>
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


const credentials = ref({
  email: '',
  username: '',
  password: '',
  passwordConfirm: ''
})

// handle create account submit
async function onSubmit() {
  if (!credentials.value.email || !credentials.value.password || !credentials.value.username) {
    Swal.fire({
      title: "Please enter a valid email, password, and username.",
      icon: "error"
    })
  }
  else {
    console.log("account created")
  }
}


</script>

<style scoped></style>