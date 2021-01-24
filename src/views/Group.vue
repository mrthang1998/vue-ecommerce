<template>
  <div>
    <Master>
      <ShowAll />
    </Master>
  </div>
</template>

<script>
import Master from "./Master.vue";
import ShowAll from "../components/ShowAll.vue";
export default {
  components: {
    Master,
    ShowAll,
  },
};
</script>

<style>
</style>
