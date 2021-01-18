<template>
  <Master>
    <Slider />
    <Content />
  </Master>
</template>

<script>
import Master from "../components/layouts/Master";
import Slider from "../components/Slider";
import Content from "../components/Content";

export default {
  data() {
    return {
      // productId: 12,
    };
  },
  components: {
    Master,
    Slider,
    Content,
  },
};
</script>

<style>
</style>
