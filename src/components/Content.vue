<template>
  <div>
    <!--new-arrivals start -->
    <section
      id="new-arrivals"
      class="new-arrivals"
      v-for="group in groups"
      :key="group.id"
    >
      <div class="container">
        <div class="section-header">
          <h2>{{ group.title }}</h2>
        </div>
        <!--/.section-header-->
        <div class="new-arrivals-content">
          <div class="row">
            <div
              v-for="product in group.products.slice(0, 8)"
              :key="product.id"
              class="col-md-3 col-sm-4"
            >
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    :src="'http://127.0.0.1:8000' + product.image_source"
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
                <h4 class="mt-3 mb-2">
                  <router-link
                    :to="'/detail/' + product.id"
                    class="text-decoration-none"
                    >{{ product.title }}</router-link
                  >
                </h4>
                <p class="arrival-product-price">${{ product.price }}</p>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <router-link
                :to="{ name: 'group', params: { id: group.id } }"
                type="button"
                class="btn btn-outline-info"
                >All Product</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!--/.container-->
    </section>
    <!--/.new-arrivals-->
    <!--new-arrivals end -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      groups: null,
      idGr: this.$route.params,
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/groups")
      .then((response) => (this.groups = response.data.data))
      .catch((error) => console.log(error));
  },
  methods: {},
};
</script>

<style>
.new-arrivals {
}
</style>
