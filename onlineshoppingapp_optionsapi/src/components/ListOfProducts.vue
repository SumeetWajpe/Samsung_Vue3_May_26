<template>


    <div>

        <!-- <label for="txtName">Enter Message :</label> <input type="text" id="txtName" v-model="message">
        <h2>{{ message }}</h2> -->
        <div v-if="loading" class="text-center">
            <div class="spinner-border text-primary">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else>

            <div class="row">
                <div class="col-md-3" v-for="product in products" :key="product.id">
                    <Product :productdetails="product" @delete-a-product="deleteAProduct" />
                </div>
            </div>
        </div>



    </div>

</template>

<script>
import LoadingMixing from '../mixins/loading.mixing';
import ProductService from '../services/product.service';
import Product from './Product.vue';

export default {
    name: "ListOfProducts",
    components: {
        Product
    },
    mixins: [LoadingMixing],
    data() {
        return {
            products: []
        }
    },
    methods: {
        ChangeMessage(event) {
            this.message = event.target.value
        },

        deleteAProduct(theId) {
            // logic to change array of 5 items to 4 items
            // remove the selected item from the listofcourses array
            // console.log("Deleting the product.."+theId)
            let index = this.products.findIndex(p => p.id == theId);
            this.products.splice(index, 1);
        },
        fetchProducts() {
            this.startLoading();
            let thePromise = ProductService.getProducts();
            thePromise.then(products => {
                this.products = products;
                console.log(products)
            }).catch(err => console.log(err)).finally(() => this.stopLoading());
        }
    },
    mounted() {
        this.fetchProducts();
    }
}
</script>

<style scoped></style>