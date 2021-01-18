<template>
    <div class="bg-light p-5">
        <VueSlickCarousel class="container"  v-bind="settings">
            <div class=""><img class="img-fluid" src="../assets/images/clients/c1.png" alt=""></div>
            <div class=""><img class="img-fluid" src="../assets/images/clients/c2.png" alt=""></div>
            <div class=""><img class="img-fluid" src="../assets/images/clients/c3.png" alt=""></div>
            <div class=""><img class="img-fluid" src="../assets/images/clients/c4.png" alt=""></div>
            <div class=""><img class="img-fluid" src="../assets/images/clients/c5.png" alt=""></div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            arrows: true,
            arrowsClass: "slick-dots custom-dot-class",
            edgeFriction: 0.35,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed:2000,
            centerMode: true,
            focusOnSelect: true,
        },
      }
    },
}
</script>

<style>

</style>