<template>
  <div class="detail">
    <Header></Header>
    <DetailProduct :id="productId"></DetailProduct>
    <Footer></Footer>
  </div>
</template>

<script>
import DetailProduct from "../components/DetailProduct.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      productId: this.$route.params.id,
    };
  },
  components: {
    DetailProduct,
    Header,
    Footer,
  },
};
</script>

<style>
</style>

