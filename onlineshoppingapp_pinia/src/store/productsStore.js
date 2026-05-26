import { defineStore } from "pinia";
import axios from "axios";
export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    loading: false,
  }),

  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3500/products");
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    deleteProduct(productId) {
      this.products = this.products.filter(product => product.id !== productId);
    },
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    incrementLikes(productId) {
      console.log("Increment LIkes");
      const product = this.products.find(product => product.id === productId);
      if (product) {
        product.likes++;
      }
    },
  },
});
