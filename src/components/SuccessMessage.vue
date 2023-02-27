<script setup>
  defineProps({
    message : {
      type : string,
      required : true,
      default: []
    },
  })
</script>
<template>
  <div class="alert alert-success">
     {{ message }}
  </div>
</template>
