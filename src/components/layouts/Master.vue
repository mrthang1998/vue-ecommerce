<template>
  <div id="app">
    <Header></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<script>
// import Content from "../Content.vue";
import Header from "../Header.vue";
import Footer from "../Footer.vue";
export default {
  components: {
    Header,
    // Content,
    Footer,
  },
};
</script>

<style>
</style>
