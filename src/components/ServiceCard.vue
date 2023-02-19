<script setup>
defineProps({
  service : {
    type : Object,
    required : true,
    default: {}
  },
})

</script>
<template>
    <div class="card card-sm">
      <a href="#" class="d-block"><img :src="service.image" class="card-img-top"></a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <span class="avatar me-3 rounded" style="background-image: url(@/assets/static/avatars/000m.jpg)"></span>
          <div>
            <div>{{ service.name }}</div>
            <div class="text-muted">3 days ago</div>
          </div>
          <div class="ms-auto">
            <a href="#" class="text-muted">
              <!-- Download SVG icon from http://tabler-icons.io/i/eye -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
              467
            </a>
            <a href="#" class="ms-3 text-muted">
              <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
              67
            </a>
          </div>
      </div>
    </div>
  </div>
</template>
