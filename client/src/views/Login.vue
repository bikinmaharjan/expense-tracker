<template>
  <div class="login row container">
    <div class="row">
      <div class="input-field col s6 offset-s2">
        <input type="text" id="email" class="validate" v-model="email" />
        <label for="email">Email address</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s2">
        <input type="password" id="password" class="validate" v-model="password" />
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="col s6 offset-s2">
        <button class="waves-effect waves-light btn modal-trigger" @click.prevent="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch('retrieveToken', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/');
        });
    }
  }
};
</script>

<style>
</style>