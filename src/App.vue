<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style>


</style>
