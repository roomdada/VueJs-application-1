<script setup>
defineProps({
  category : {
    type : Object,
    required : true,
    default: {}
  },
})


</script>
<template>
    <div class="card card-sm">
      <a href="#" class="d-block"><img :src="category.image" class="card-img-top"></a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div>
            <div>{{ category.name }}</div>
            <div class="text-muted">{{ category.courses_count }} service(s) disponible(s)</div>
          </div>
      </div>
    </div>
  </div>
</template>
