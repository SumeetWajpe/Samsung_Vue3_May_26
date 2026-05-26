import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "Laptop",
        price: 50000,
        quantity: 100,
        rating: 4,
        imageUrl: "https://techterms.com/img/xl/laptop_586.png",
        likes: 100,
        description:
          "A laptop is a portable personal computer. It integrates a screen, keyboard, pointing device (like a touchpad), and internal hardware into a single clamshell unit. Powered by a rechargeable battery, laptops are designed for mobility and can easily be carried and used outside an office.",
      },
      {
        id: 2,
        title: "OLED TV",
        price: 25000,
        quantity: 0,
        rating: 3,
        imageUrl:
          "https://www.pngkey.com/png/full/280-2808973_shop-our-experts-love-range-of-oled-tvs.png",
        likes: 500,
        description:
          "An OLED (Organic Light-Emitting Diode) TV is a premium display type where every individual pixel generates its own light and color. Because it doesn't require a large backlight like standard LED TVs, it can turn individual pixels completely off to produce perfect blacks and stunning contrast",
      },
      {
        id: 3,
        title: "Desktop",
        price: 10000,
        quantity: 200,
        rating: 3,
        imageUrl:
          "https://www.pngmart.com/files/7/Desktop-Computer-Transparent-Background.png",
        likes: 200,
        description:
          "The term desktop can refer to two main concepts: a desktop computer (the physical hardware) or the desktop interface (the software workspace you see on your screen)",
      },
      {
        id: 4,
        title: "Mobile",
        price: 20000,
        quantity: 1000,
        rating: 5,
        imageUrl: "https://static.toiimg.com/photo/73078527.cms",
        likes: 400,
      },
      {
        id: 5,
        title: "Camera",
        price: 90000,
        quantity: 0,
        rating: 4,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/813CAX2%2BtQL._SL1500_.jpg",
        likes: 100,
      },
    ],
    loading: false,
  }),

  actions: {
    deleteProduct(productId) {
      this.products = this.products.filter(product => product.id !== productId);
    },
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    incrementLikes(productId) {
      const product = this.products.find(product => product.id === productId);
      if (product) {
        product.likes++;
      }
    },
  },
});
