<script setup>
import ServiceCard from './../components/ServiceCard.vue';
import useService from './../composables/service.js'
import { reactive } from 'vue'

const { getServices, services, loading  } = useService()

getServices();
// recuperation des categories recentes

const result = reactive({ show : 6 })

</script>
<template>
    <div class="page-wrapper">
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                    Toute les prestations
                </h2>
              </div>
              <!-- Page title actions -->
              <div class="col-12 col-md-auto ms-auto d-print-none">
                <div class="d-flex">
                  <div class="me-3">
                    <div class="input-icon">
                      <input type="text" value="" class="form-control" placeholder="Rechercher...">
                      <span class="input-icon-addon">
                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
            <div class="row row-cards">
              <div class="col-sm-6 col-lg-4" v-for="service in services.slice(0, result.show)" v-bind:key="service.id">
                  <ServiceCard :service="service"/>
              </div>
                <div class="d-flex mt-4 page-center" v-if="result.show != services.length">
                  <button @click='result.show += 3' class="btn btn-primary">Charger plus de service</button>
                </div>
            </div>
          </div>
        </div>

      </div>
</template>
