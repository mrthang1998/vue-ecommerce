<template>
    <div class="slider-sale">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <VueSlickCarousel class="text-white text-center"  v-bind="settings">
                        <div><h3>25% off (Almost) Everything! Use Code: Summer Sale</h3></div>
                        <div><h3>Our biggest sale yet 50% off all summer shoes</h3></div>
                        <div><h3>50% off (Almost) Everything! Use Code: Winter Sale</h3></div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'SliderSale',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            arrows:false,
            edgeFriction: 0.35,
            speed: 200,
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
.slider-sale {
    background-color: #88c8bc;
    padding: 14px 0;
}
.slider-sale h3 {
    text-transform: uppercase;
}
</style>