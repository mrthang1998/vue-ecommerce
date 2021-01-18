<template>
  <div class="home">
    <Master>
      <Slider/>
      <Content/>
      <brand-client/>
    </Master>
  </div>
</template>

<script>
import BrandClient from '../components/BrandClient.vue'
import Content from '../components/Content.vue'
import Slider from '../components/Slider.vue'
import Master from './Master'
export default {
  name: 'Home',
  components: {
    Master,
    Content,
    Slider,
    BrandClient
  }
}
</script>
