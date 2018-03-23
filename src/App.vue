<template>
  <div class="container">
    <router-view class="container"/>
  </div>
</template>

<script>

  import 'normalize.css'

  export default {
    name: 'App'
  }
</script>

<style>
  .container {
    height: 100%;
    overflow: hidden;
  }
</style>
