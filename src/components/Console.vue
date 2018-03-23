<template>
  <div class="console">
    <div class="content">
      <pre>gcc version 4.6.3</pre>
    </div>
  </div>
</template>

<script>

  export default {
    name: "console"
  }
</script>

<style scoped>
  .console {
    padding: 25px;
    width: 100%;
    height: 100%;
    background-color: rgb(14, 22, 40);
  }

  .content pre {
    color: rgb(244, 255, 255);
  }
</style>
