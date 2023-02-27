<script setup>
  defineProps({
    errors : {
      type : Array,
      required : true,
      default: []
    },
  })
</script>
<template>
  <div class="alert alert-danger" v-if='errors.length'>
     <p v-for='error in errors'>{{ error }}</p>
  </div>
</template>
