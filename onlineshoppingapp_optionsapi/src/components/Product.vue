<template>
    <!-- <div class="productItem" :class="['outofstock',]"> -->
    <!-- <div class="productItem" :class="isSelected ? 'selectedItem' : ''"> -->
    <!-- <div class="productItem" :class="classesToBeApplied"> -->
    <div class="productItem" :class="{ outofstock: !this.productdetails.quantity, selectedItem: isSelected }">



        <img :src="productdetails.imageUrl" v-bind:alt="productdetails.title" width="200" height="100"
            :style="productdetails.quantity ? '' : { opacity: 0.4 }">
        <h2>
            {{ productdetails.title }}
        </h2>
        <p>Rs. {{ productdetails.price }}</p>
        <p :class="productdetails.quantity ? 'text-success' : 'text-danger fw-bold'">{{
            outofstock(productdetails.quantity, 'nos') }}</p>

        <p>{{ productdetails.rating }}</p>
        <p>
            <input type="checkbox" :id="'chkCart-' + productdetails.id" v-model="isSelected"> <label
                :for="'chkCart-' + productdetails.id">Add To
                Wishlist</label>
        </p>
        <button @click="IncrementLikes" class="btn btn-primary">{{ productdetails.likes }}</button>
        <button class="btn btn-warning mx-1" :disabled="!productdetails.quantity">Add to cart</button>
        <button class="btn btn-outline-danger" @click="deleteProductHandler()">Delete</button>
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

    },
    emits: ["delete-a-product"]
    , data() {
        return {
            count: 0,
            isSelected: false
        }
    },
    methods: {
        IncrementCount() {
            this.count += 1
        },
        IncrementLikes() {
            this.productdetails.likes += 1
        },
        outofstock(value, text) {
            return value > 0 ? `${value} ${text}` : `Out Of Stock`;
        },
        deleteProductHandler() {
            this.$emit('delete-a-product')
        }
    }, computed: {
        classesToBeApplied() {
            return {
                outofstock: !this.productdetails.quantity,
                selectedItem: this.isSelected
            }
        }
    }
}
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