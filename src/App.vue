<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>
<template>
<Header />
<NavigationBar />
<RouterView />
</template>

<style scoped>

</style>
