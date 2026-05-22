<template>
    <!-- <div class="productItem" :class="['outofstock',]"> -->
    <!-- <div class="productItem" :class="isSelected ? 'selectedItem' : ''"> -->
    <!-- <div class="productItem" :class="classesToBeApplied"> -->
    <div class="productItem" :class="{ outofstock: !productdetails.quantity, selectedItem: isSelected }">



        <img :src="productdetails.imageUrl" v-bind:alt="productdetails.title" width="200" height="100"
            :style="productdetails.quantity ? '' : { opacity: 0.4 }">
        <h2>
            {{ productdetails.title }}
        </h2>
        <p>Rs. {{ productdetails.price }}</p>
        <p :class="productdetails.quantity ? 'text-success' : 'text-danger fw-bold'">{{
            outofstock(productdetails.quantity, 'nos') }}</p>

        <p>
            <Rating :rating="productdetails.rating" />
        </p>
        <p>
            <input type="checkbox" :id="'chkCart-' + productdetails.id" v-model="isSelected"> <label
                :for="'chkCart-' + productdetails.id">Add To
                Wishlist</label>
        </p>
        <button @click="IncrementLikes" class="btn btn-primary p-1">{{ likes }}<i
                class="fa-regular fa-thumbs-up"></i></button>
        <button class="btn btn-warning mx-1" :disabled="!productdetails.quantity">Add to cart</button>
        <button class="btn btn-outline-danger">Delete <i class="fa-solid fa-trash"></i></button>

    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import Rating from './Rating.vue';
const props = defineProps({
    productdetails: {
        type: Object,
        required: true
    }
});

const likes = ref(props.productdetails.likes);

var isSelected = ref(false);

function IncrementLikes() {
    likes.value++;
};
function outofstock(value, text) {
    return value > 0 ? `${value} ${text}` : `Out Of Stock`;
};
</script>
<style>
.productItem {
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 5px 5px 5px darkgray;
    padding: 10px;
    margin: 5px;
}

.selectedItem {
    background-color: lightblue;
}

.outofstock {
    opacity: 0.4;
}


</style>