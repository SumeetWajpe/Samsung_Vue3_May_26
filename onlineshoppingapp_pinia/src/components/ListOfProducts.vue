<template>
    <div class="row">
        <div class="col-md-3" v-for="product in productStore.products" :key="product.id">
            <Product :productdetails="product" />
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../store/productsStore';
import Product from './Product.vue';

const productStore = useProductStore();

</script>

<style scoped></style>