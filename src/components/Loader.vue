<script setup>
  defineProps({
    loading : {
      type : Boolean,
      required : true,
      default: []
    },
  })
</script>
<template>
<div class="page-body" v-if="loading">
  <div class="container-xl">
    <div class="row row-cards container">
      <span class='text-center text-lg'>
        Chargement des données...
      </span>
  </div>
</div>
</div>
</template>
