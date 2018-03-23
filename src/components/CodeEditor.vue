<template>
  <div class="code-editor">
    <textarea class="form-control"
              placeholder="在这里输入你的代码" v-model="editorContent.text"></textarea>
  </div>
</template>

<script>

  export default {
    name: "code-editor",
    props:['editorContent']
  }
</script>

<style scoped>
  .code-editor {
    height: 100%;
    width: 100%;
  }

  .code-editor textarea {
    height: 100%;
    width: 100%;
    resize: none;
  }
</style>
