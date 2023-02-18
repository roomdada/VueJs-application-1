<script setup>
import Input from '@/components/forms/Input.vue';
import { reactive } from 'vue';

const state = reactive({
  email: '',
  password: '',
})
</script>
<template>
 <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt=""></a>
        </div>
        <form class="card card-md" action="." method="get">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Connecter a votre espace</h2>
             <div class="mb-3">
              <Input label="Votre Email" v-model="state.email" type="email"/>
            </div>

            <div class="mb-3">
             <Input label="Mot de passe" v-model="state.password" type="password"/>
            </div>
            <div class="form-footer">
              <button type="submit" class="btn btn-primary w-100">Se connecter</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          J'ai pas encore de compte  <router-link to="/register" tabindex="-1">Je veux m'inscrire</router-link>
        </div>
      </div>
    </div>
</template>

<style>

</style>
