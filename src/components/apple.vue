<template>
  <div class="hello">
    <h1>{{ mag }}</h1>
    <button @click="getParam" type="button" name="button">get param</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        mag: 'aaaa'
      }
    },
    methods: {
      getParam () {
        console.log(this.$route.params)
      }
    }
  }
</script>
