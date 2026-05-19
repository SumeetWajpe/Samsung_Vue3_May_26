<script>
import Product from './components/Product.vue';

export default {
  name: "App",
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
        imageUrl: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-c340-14-amd-hero.png?context=bWFzdGVyfHJvb3R8MjQyMzg2fGltYWdlL3BuZ3xoMGIvaGViLzk5MTUxMzg1Mzk1NTAucG5nfDIyM2E3YjY1ZWI2MTk3NzdhM2QxZjQxYWQzMDA2ZjViNmFmOWIzY2E1MTM3MGM3NDg5YzM2ZDBkYmFiYTgwN2Y",
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


// {id:1, title:"Mobile", price:20000 , rating:5 , likes:100} * 5
// display -> title, price, rating, likes
</script>
<template>

  <div v-for="product in products">
    <Product :productdetails="product" />
  </div>

</template>
