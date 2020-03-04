<template>
  <div id="modal" class="modal">
    <div class="modal-content">
      <div class="input-field col s6">
        <input type="text" id="email" class="validate" />
        <label for="email">Email address</label>
      </div>
      <div class="input-field col s6">
        <input type="password" id="password" class="validate" />
        <label for="password">Password</label>
      </div>
    </div>
    <div class="modal-footer">
      <button @click="login()" class="modal-close waves-effect waves-green">Login</button>
    </div>
  </div>
</template>

<script>
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

export default {};
</script>

<style>
</style>