<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ totalPrice }}
    <apple></apple>
    <banan></banan>
  </div>
</template>

<script>
import Apple from './components/apple.vue'
import Banan from './components/banan.vue'
export default {
  components:{Apple,Banan},
  computed:{
    totalPrice(){
      return this.$store.state.totalPrice
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
