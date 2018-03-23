<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.png">
    </div>
    <div class="title">
      <span>在线C/C++编译器</span>
    </div>
  </div>
</template>

<script>
  /**
   * 页头组件
   */
  export default {
    name: "nav-header"
  }
</script>

<style scoped>

  .header {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 60px;
    padding: 0 25px;
    background: #F4F4F4;
    border-bottom: 1px solid #E4E4E4;
  }

  .logo {
    height: 60px;
    float: left;
  }

  .logo img {
    position: relative;
    top: 50%;
    margin-top: -21px;
    height: 42px;
    display: block;
  }

  .title {
    float: left;
    line-height: 60px;
    margin-left: 25px;
  }
  .title span {
    color: rgb(120, 122, 123);
  }

</style>
