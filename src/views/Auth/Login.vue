<script setup>
import Input from '@/components/forms/Input.vue';
import { reactive } from 'vue';
import { useUserStore } from '../../stores/user';
import ErrorMessage from '@/components/ErrorMessage.vue'

const state = reactive({
  email: '',
  password: '',
})

const user = useUserStore();

const onSubmit = () => {
  user.login(state);
  console.log(user.getErrors);
}

</script>
<template>
 <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark">
           E-service
          </a>
        </div>
        <form class="card card-md" action="." method="post" @submit.prevent="onSubmit">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Connecter a votre espace</h2>
             <ErrorMessage v-if="user.getErrors.length" :errors="user.getErrors"/>
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
