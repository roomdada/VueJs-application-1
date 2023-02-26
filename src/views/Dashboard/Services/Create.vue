<script setup>
import Input from '@/components/forms/Input.vue';
import { reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import useCategory from '@/composables/category.js'
import useService from '@/composables/service.js'

const user = useUserStore();
const service = useService();

const { getCategories, categories, loading  } = useCategory()
const { store, errors } = useService()

const state = reactive({
  name: '',
  description: '',
  image: '',
  category_id: '',
  user_id: user.getUser.id,
})

getCategories()

const onSubmit = async () => {
   await store(state);
}

</script>
<template>
 <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt=""></a>
        </div>
        <form class="card card-md" action="." method="post" @submit.prevent="onSubmit" enctype="multipart/form-data">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Ajouter un service</h2>
              <div v-if="errors.length" class='alert alert-danger'>
                <ul>
                   <li v-for="error in errors">
                    {{ error }}
                   </li>
                </ul>
            </div>
             <div class="mb-3">
              <Input label="Libellé" v-model="state.name" type="text"/>
            </div>
            <div class="mb-3">
              <Input ref="file" accept="image/*" label="Image" v-model="state.image" type="file"/>
            </div>
             <div class="mb-3">
             <select class="form-control"  v-model="state.category_id" type="text">
               <option value="">Categorie</option>
               <option :value="category.id" v-for="category in categories" v-bind:key="category.id">{{ category.name }}</option>
             </select>
            </div>

            <div class="mb-3">
             <textarea class="form-control"  v-model="state.description" type="text">
               Description
             </textarea>
            </div>
            <div class="form-footer">
              <button type="submit" class="btn btn-primary w-100">Se connecter</button>
            </div>
          </div>
        </form>

      </div>
    </div>
</template>
<style>
</style>
