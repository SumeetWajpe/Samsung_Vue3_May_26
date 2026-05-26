<template>
    <div className="row m-2">
        <div className="col-md-9">
            <img width="100%" :src="product.data.imageUrl" :alt="product.data.title" />
        </div>
        <div className="col-md-3">
            <h1>{{ product.data.title }}</h1>
            <Rating :rating="product.data.rating" />


            <p>₹.{{ product.data.price }}</p>
            <button class="btn btn-primary" @click="IncrementLikes">{{ product.data.likes }}
                <i class="fa-regular fa-thumbs-up"></i>
            </button>

            <p>{{ product.data.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import Rating from "./Rating.vue";


let product = reactive({
    data: {
        id: 0,
        title: "",
        price: 0,
        quantity: 0,
        rating: 0,
        imageUrl: "",
        likes: 0,
        description: ""
    }
});
const route = useRoute();
const { params: { pid } } = route;
onMounted(async () => {
    try {
        console.log(pid)
        const response = await fetch(`http://localhost:3500/products/${pid}`);

        product.data = await response.json();
        console.log(product.data)
    } catch (error) {

    }
});
function IncrementLikes() {
    product.data.likes++;
};
</script>

<style scoped></style>