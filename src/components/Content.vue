<template>
  <!--new-arrivals start -->
  <section id="new-arrivals" class="new-arrivals">
    <div class="container">
      <div v-for="brand in groups" :key="brand.id" class="section-header">
        <h2>{{ brand.title }}</h2>

        <div class="new-arrivals-content">
          <div class="row">
            <div
              class="col-md-3 col-sm-4"
              v-for="product in brand.products"
              :key="product.id"
            >
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    :src="'http://apiecommerce.huesoft.net' + product.image_source"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="sale bg-1">
                    <p>sale</p>
                  </div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">add <span>to </span> cart</a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <router-link
                    :to="{ name: 'detail', params: { id: product.id } }"
                    >{{ product.title }}</router-link
                  >
                </h4>
                <p class="arrival-product-price">{{ product.price }} $</p>
              </div>
            </div>
            <button @click="handleClick">hello</button>
          </div>
        </div>
      </div>
      <!--/.section-header-->
    </div>
    <!--/.container-->
  </section>
  <!--/.new-arrivals-->
  <!--new-arrivals end -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      groups: [],
    };
  },
  methods: {
    handleClick() {
      console.log(this);
    },
  },
  mounted() {
    axios
      .get("http://apiecommerce.huesoft.net/api/groups")
      .then((response) => (this.groups = response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
