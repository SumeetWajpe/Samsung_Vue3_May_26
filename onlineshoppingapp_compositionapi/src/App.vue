<script setup>
import Navbar from './components/Navbar.vue';




</script>

<template>
  <!-- Page refreshes -->

  <!-- <a href="/">Products</a> |
  <a href="/posts">Posts</a> -->

  <!-- <nav>
    <RouterLink to="/">Products</RouterLink> | 
    <RouterLink to="/posts">Posts</RouterLink>
  </nav> -->

  <Navbar />

  <RouterView />
</template>
