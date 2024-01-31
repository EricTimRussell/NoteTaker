<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 py-5">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="name@example.com">
          <label for="email">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="username" placeholder="username">
          <label for="username">username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" placeholder="Password">
          <label for="password">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="confirmPassword" placeholder="Password">
          <label for="confirmPassword">Confirm Password</label>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary">Create Account</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>




</script>

<style scoped></style>