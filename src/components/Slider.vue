<template>
    <div>
        <VueSlickCarousel class="banner"  v-bind="settings">
            <div><img src="../assets/images/slider/banner3.jpg" alt=""></div>
            <div><img src="../assets/images/slider/banner4.jpg" alt=""></div>
            <div><img src="../assets/images/slider/banner2.jpg" alt=""></div>
            <div><img src="../assets/images/slider/banner1.jpg" alt=""></div>
        </VueSlickCarousel>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'Slider',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            arrows: true,
            arrowsClass: "slick-dots custom-dot-class",
            edgeFriction: 0.35,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:1000
        },
      }
    },

}
</script>
<style>
.banner img{
    width: 100%;
    height: 500px;
}
.banner .slick-next::before, .banner .slick-prev::before{
    font-size: 40px;
}
.banner .slick-next {
    right: 30px;
}
.banner .slick-prev{
    left: 30px;
    z-index: 1;
}
</style>