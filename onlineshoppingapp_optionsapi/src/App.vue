<script>
import ListOfProducts from './components/ListOfProducts.vue';
import Product from './components/Product.vue';

export default {
  name: "App",
  components: {
    ListOfProducts
  },

}


// {id:1, title:"Mobile", price:20000 , rating:5 , likes:100} * 5
// display -> title, price, rating, likes
</script>
<template>


  <ListOfProducts />

</template>
