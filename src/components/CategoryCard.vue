<script setup>
import "lazysizes";
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
      <a href="#" class="d-block">
        <img async='decoding' :data-src="category.image" class="card-img-top lazyload">
      </a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div>
            <div>{{ category.name }}</div>
            <div class="text-muted">{{ category.courses_count }} prestation(s)</div>
          </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.lazyload,
.lazyloading {
	opacity: 0;
}
.lazyloaded {
	opacity: 1;
	transition: opacity 400ms;
}
</style>
