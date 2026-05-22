<script setup>



</script>

<template>
  <!-- Page refreshes -->

  <!-- <a href="/">Products</a> |
  <a href="/posts">Posts</a> -->

  <nav>
    <RouterLink to="/">Products</RouterLink> | 
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>

  <RouterView />
</template>
