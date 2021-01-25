<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer.vue";
import { SET_CART } from "../constants/mutation-type";

export default {
  components: {
    Header,
    Footer,
  },
  beforeCreate() {
    const cartSaved = window.localStorage.getItem("cart");
    if (cartSaved) {
      this.$store.commit(SET_CART, JSON.parse(cartSaved));
    }
  },
};
</script>

<style></style>
