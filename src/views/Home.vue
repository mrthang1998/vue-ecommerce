<template>
  <div class="home">
    <Master>
      <Slider/>
      <Content/>
    </Master>
  </div>
</template>

<script>
import Content from '../components/Content.vue'
import Slider from '../components/Slider.vue'
import Master from './Master'
export default {
  name: 'Home',
  components: {
    Master,
    Content,
    Slider
  }
}
</script>
