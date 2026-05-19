<template>
    <!-- <div class="productItem" :class="['outofstock',]"> -->
    <div class="productItem">

        <img :src="productdetails.imageUrl" v-bind:alt="productdetails.title" width="200" height="100"
            :style="productdetails.quantity ? '' : { opacity: 0.4 }">
        <h2>
            {{ productdetails.title }}
        </h2>
        <p>Rs. {{ productdetails.price }}</p>
        <p>{{ productdetails.quantity }}</p>

        <p>{{ productdetails.rating }}</p>
        <button @click="IncrementLikes" class="btn btn-primary">{{ productdetails.likes }}</button>
        <button class="btn btn-warning mx-1" :disabled="!productdetails.quantity">Add to cart</button>
        <!-- <button v-on:click="IncrementCount">{{ count }}</button> -->

    </div>
</template>
<script>
export default {
    name: 'Product',
    props: {
        productdetails: {
            type: Object, // Product (model)
            required: true,
        },

    }, data() {
        return {
            count: 0
        }
    },
    methods: {
        IncrementCount() {
            this.count += 1
        },
        IncrementLikes() {
            this.productdetails.likes += 1
        }
    }
}
</script>
<style>
.productItem {
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 5px 5px 5px darkgray;
    padding: 10px;
    margin: 5px;
}

.outofstock {
    opacity: 0.4;
}
</style>