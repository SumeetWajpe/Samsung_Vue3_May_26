<script>
import Product from './components/Product.vue';

export default {
  name: "App",
  components: {
    Product
  },
  data() {
    return {
      title: "Mobile"
    }
  }
}


// price , rating , likes:100

</script>
<template>
  <Product :title="title" />
  <Product title="Camera" />
  <Product title="Laptop" />
  <p>{{ title }}</p>

</template>
