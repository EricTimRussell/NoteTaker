<template>
  <form @submit.prevent="onSubmit" id="loginModal" class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login or Create an Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input v-model="credentials.email" type="email" class="form-control" id="email"
              placeholder="name@example.com">
            <label for="email">Email address</label>
          </div>
          <div class="form-floating">
            <input v-model="credentials.password" type="password" class="form-control" id="password"
              placeholder="Password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="modal-footer">
          <RouterLink to="/createAccount">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Create Account</button>
          </RouterLink>
          <button :disabled="!credentials.email || !credentials.password" type="submit"
            class="btn btn-success">Login</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";


// Login credentials
const credentials = ref({
  email: '',
  password: ''
})

// Handle login submit
function onSubmit() {
  if (!credentials.value.email || !credentials.value.password) {
    Swal.fire({
      title: "Please enter a valid email and password.",
      icon: "error"
    })
  }
  else {
    console.log("logged in")
  }
}

</script>

<style scoped></style>

