<script setup>
import Input from '@/components/forms/Input.vue';
import axios from 'axios';
import { reactive } from 'vue';
import { useUserStore } from '../../stores/user';
import { useRouter  } from 'vue-router';
import ErrorMessage from '@/components/ErrorMessage.vue'

const state = reactive({
  first_name: '',
  last_name: '',
  contact: '',
  email: '',
  password: '',
  password_confirmation: '',
  terms: false,
})

const user = useUserStore()

const onSubmit = () => {
  user.register(state)
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
        <form class="card card-md" action="." method="POST" @submit.prevent='onSubmit'>
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Rejoingnez la communauté</h2>
           <ErrorMessage v-if="user.getErrors.length" :errors="user.getErrors"/>
            <div class="mb-3">
                <Input label="Nom" v-model="state.first_name" type="text"/>
            </div>
            <div class="mb-3">
                <Input label="Prénoms" v-model="state.last_name" type="text"/>
            </div>
            <div class="mb-3">
              <Input label="Votre Email" v-model="state.email" type="email"/>
            </div>
             <div class="mb-3">
                <Input label="Contact" v-model="state.contact" type="text"/>
            </div>
            <div class="mb-3">
             <Input label="Mot de passe" v-model="state.password" type="password"/>
            </div>
            <div class="mb-3">
               <Input label="Confirmer le mot de passe" v-model="state.password_confirmation" type="password"/>
            </div>
            <div class="mb-3">
              <label class="form-check">
                <input type="checkbox" class="form-check-input"/>
                <span class="form-check-label">Agree the <a href="./terms-of-service.html" tabindex="-1">terms and policy</a>.</span>
              </label>
            </div>
            <div class="form-footer">
              <button type="submit" class="btn btn-primary w-100">S'inscrire maintenant</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          J'ai déjà un compte <router-link to="/login" tabindex="-1">Je me connecte</router-link>
        </div>
      </div>
    </div>
</template>

<style>

</style>
