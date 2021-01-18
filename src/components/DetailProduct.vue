<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="task">
            <h4 class="color" style="text-align: center; font-weight: bold">
              Detail
            </h4>
          </div>
        </div>
      </div>
    </div>
    <h1>this is number {{ productId }}</h1>
    <div class="detail">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <img
              class="imgdt"
              :src="'http://apiecommerce.huesoft.net' + product.image_source"
              alt=""
            />
          </div>
          <div class="col-12 col-md-1 endbor"></div>
          <div class="col-12 col-md-7 bor">
            <h3 class="namepr">{{ product.title }}</h3>
            <h5 style="font-weight: bold; color: #f6a225; text-align: center">
              -- Giá: {{ product.price }}$ --
            </h5>
            <li>Content: {{product.content}}</li>
            <button @click="clickhere">cilck to get product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productId: this.$route.params.id,
      product: [],
    };
  },
  methods: {
    clickhere() {
      console.log(this.product);
    },
  },
  mounted() {
    axios
      .get("http://apiecommerce.huesoft.net/api/products/get?id=" + this.productId)
      .then((response) => (this.product = response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
