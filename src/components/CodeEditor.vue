<template>
  <div class="code-editor">
    <textarea class="form-control" rows="10"
              placeholder="在这里输入你的代码" v-model="editorContent.text"></textarea>
  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.min.css'
  export default {
    name: "code-editor",
    props:['editorContent']
  }
</script>

<style scoped>
  .code-editor {
    max-width: 800px;
  }
</style>
