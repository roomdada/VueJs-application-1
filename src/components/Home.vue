<script setup>
import CategoryCard from './CategoryCard.vue';
import ServiceCard from './ServiceCard.vue';
import { onMounted, ref, reactive } from 'vue';
import useCategory from '@/composables/category.js'
import useService from '@/composables/service.js'

const { recentCategories, categories, loading  } = useCategory()
const { popularServices, services  } = useService()

popularServices(); // recuperation des services
recentCategories(); // recuperation des categories recentes


</script>
<template>
    <div class="page-wrapper">
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                  Les differentes catégories
                </h2>
              </div>
            </div>
          </div>
        </div>
        <!--Loading-->

        <div class="page-body" v-if="loading">
          <div class="container-xl">
            <div class="row row-cards container">
                 <span class='text-center text-lg'>
                   Chargement des données...
                 </span>
            </div>
          </div>
        </div>
        <div class="page-body" v-if="! loading">
          <div class="container-xl">
            <div class="row row-cards">
              <div class="col-sm-6 col-lg-3" v-for="category in categories" v-bind:key="category.id">
                  <CategoryCard :category="category"/>
              </div>
            </div>
          </div>
        </div>

         <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                  Les meilleurs prestations
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
            <div class="row row-cards">
              <div class="col-sm-6 col-lg-4" v-for="service in services" v-bind:key="service.id">
                  <ServiceCard :service="service"/>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
