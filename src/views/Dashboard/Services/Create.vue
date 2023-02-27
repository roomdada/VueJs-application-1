<script setup>
import Input from '@/components/forms/Input.vue';
import { reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import useCategory from '@/composables/category.js'
import useService from '@/composables/service.js'

const user = useUserStore();
const service = useService();

const { getCategories, categories, loading  } = useCategory()
const { store, errors, success } = useService()

const state = reactive({
  name: '',
  description: '',
  image: null,
  category_id: '',
  user_id: user.getUser.id,
})

getCategories()

const onSubmit = async () => {
   await store(state)
}

const clearState = () => {
  state.name = ''
  state.description = ''
  state.image = null
  state.category_id = ''
}

const handleFileUpload = (event) => {
  const files = event.target.files;
  const fileReader = new FileReader();
  fileReader.addEventListener('load', () => {
    const imageUrl = fileReader.result;
  });
 fileReader.readAsDataURL(files[0])
  state.image = files[0]
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
              <div v-if="success" class='alert alert-success'>
                <ul>
                    {{ success }}
                </ul>
            </div>
             <div class="mb-3">
              <Input label="Libellé" v-model="state.name" type="text"/>
            </div>
            <div class="mb-3">
              <Input
              label="Image"
              v-model="state.image"
               type="file"
               ref='state.image'
                @change="handleFileUpload"
                accept="image/*"
               />
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
              <button type="submit" v-if="! loading" class="btn btn-primary w-100">Enregistrer</button>
            </div>
          </div>
        </form>

      </div>
    </div>
</template>
<style>
</style>
