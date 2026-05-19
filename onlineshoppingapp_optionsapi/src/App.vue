<script>
import Product from './components/Product.vue';

export default {
  name: "App",
  components: {
    Product
  }
}

</script>

<template>
  <Product name="Mobile" />
  <Product name="Camera" />
  <Product name="Laptop" />

</template>
