<template>
    <div>
        <h1>{{GET_COUNT}}</h1>
  <button class="btn btn-primary" @click="increment">Increment</button>
    </div>
</template>

<script>
import {GET_COUNT} from '../constants/mutation-type'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            product : {
                name: 'iphone',
                quantity: 10
            }
        }
    },
    methods: {
        increment(product) {
            this.$store.commit('increment', product);
        }
    },
    computed: {
        ...mapGetters({
            GET_COUNT
        })
    }
}
</script>

<style>

</style>