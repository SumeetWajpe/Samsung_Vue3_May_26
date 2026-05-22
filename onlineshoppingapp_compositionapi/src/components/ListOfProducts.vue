<template>
    <div v-if="loading" class="text-center">
        <div class="spinner-border text-primary">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else>

        <div class="row">
            <div class="col-md-3" v-for="product in products" :key="product.id">
                <Product :productdetails="product" />
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive, onMounted } from 'vue'

import { getProducts } from "../services/products.service"
import Product from './Product.vue'
import useLoading from "../composables/useLoading"


let products = reactive([]);
const { loading, startLoading, stopLoading } = useLoading();

const fetchProducts = async () => {
    try {
        startLoading();
        let productsResponse = await getProducts();
        products = productsResponse;
    } catch (error) {
        console.log("Error : " + error)
    } finally {
        stopLoading()
    }
}


onMounted(() => fetchProducts())

</script>