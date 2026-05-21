<script>
import ListOfProducts from './components/ListOfProducts.vue';
import Posts from './components/posts.vue';
import Product from './components/Product.vue';

export default {
  name: "App",
  components: {
    ListOfProducts, Posts
  },

}


// {id:1, title:"Mobile", price:20000 , rating:5 , likes:100} * 5
// display -> title, price, rating, likes
</script>
<template>


  <!-- <Posts /> -->
  <!-- <header>
    <h1>Online Shopping App </h1>
  </header> -->

  <ListOfProducts />

</template>
