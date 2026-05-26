<template>
    <div className="row m-2">
        <div className="col-md-9">
            <img width="100%" :src="product.imageUrl" :alt="product.title" />
        </div>
        <div className="col-md-3">
            <h1>{{ product.title }}</h1>
            <Rating :rating="product.rating" />


            <p>₹.{{ product.price }}</p>
            <button class="btn btn-primary" @click="IncrementLikes">{{ product.likes }}
                <i class="fa-regular fa-thumbs-up"></i>
            </button>

            <p>{{ product.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import Rating from "./Rating.vue";
import { useProductStore } from "../store/productsStore.js";



const route = useRoute();
const { params: { pid } } = route;
const productStore = useProductStore();
const product = productStore.products.find(p => p.id == pid);
const IncrementLikes = () => {
    productStore.incrementLikes(product.id);
}


</script>

<style scoped></style>