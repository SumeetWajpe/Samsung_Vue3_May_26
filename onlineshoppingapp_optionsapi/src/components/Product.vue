<template>
    <img :src="productdetails.imageUrl" v-bind:alt="productdetails.title" width="200">
    <h2>
        {{ productdetails.title }}
    </h2>
    <p>{{ productdetails.price }}</p>
    <p>{{ productdetails.rating }}</p>
    <button @click="IncrementLikes" class="btn btn-primary">{{ productdetails.likes }}</button>
    <!-- <button v-on:click="IncrementCount">{{ count }}</button> -->
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