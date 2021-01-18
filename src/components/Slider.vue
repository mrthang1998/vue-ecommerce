<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="customImg">
        <img src="../assets/images/slider/banner3.jpg" alt="" />
      </div>
      <div class="customImg">
        <img src="../assets/images/slider/banner4.jpg" alt="" />
      </div>
      <div class="customImg">
        <img src="../assets/images/slider/banner2.jpg" alt="" />
      </div>
      <div class="customImg">
        <img src="../assets/images/slider/banner1.jpg" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        arrowsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    };
  },
};
</script>
<style>
/* img {
  text-align: center;
  width: 50%;
} */
.slick-next::before,
.slick-prev::before {
  font-size: 20px;
}
.customImg > img {
  width: 100%;
  height: 500px;
}
</style>
