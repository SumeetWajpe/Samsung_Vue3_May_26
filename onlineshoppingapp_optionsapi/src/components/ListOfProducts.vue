<template>

    <div class="row">
        <div class="col-md-3" v-for="product in products">
            <Product :productdetails="product" />
        </div>
    </div>


</template>

<script>
import Product from './Product.vue';

export default {
    name: "ListOfProducts",
    components: {
        Product
    },
    data() {
        return {
            products: [{
                id: 1,
                title: "Laptop",
                price: 50000,
                quantity: 100,
                rating: 4,
                imageUrl: "https://techterms.com/img/xl/laptop_586.png",
                likes: 100
            }, {
                id: 2,
                title: "OLED TV",
                price: 25000,
                quantity: 0,
                rating: 3.5,
                imageUrl: "https://www.pngkey.com/png/full/280-2808973_shop-our-experts-love-range-of-oled-tvs.png",
                likes: 500
            }, {
                id: 3,
                title: "Desktop",
                price: 10000,
                quantity: 200,
                rating: 3,
                imageUrl: "https://www.pngmart.com/files/7/Desktop-Computer-Transparent-Background.png",
                likes: 200
            }, {
                id: 4,
                title: "Mobile",
                price: 20000,
                quantity: 1000,
                rating: 5,
                imageUrl: "https://static.toiimg.com/photo/73078527.cms",
                likes: 400
            }, {
                id: 5,
                title: "Camera",
                price: 90000,
                quantity: 0,
                rating: 4,
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/813CAX2%2BtQL._SL1500_.jpg",
                likes: 100
            }]
        }
    }
}
</script>

<style scoped></style>