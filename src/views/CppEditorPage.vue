<template>
<div>
  <nav-header></nav-header>
  <h3>请在下面输入C++代码:</h3>
  <code-editor v-bind:editorContent="editorContent"></code-editor>
  <button class="btn btn-default" v-on:click="getUrl">获取URL</button>
  <button class="btn btn-primary" v-on:click="submitCode">提交代码</button>
  <nav-footer></nav-footer>
</div>
</template>

<script>
  /**
   * 默认c++编辑器页面
   */
  import 'bootstrap/dist/css/bootstrap.min.css'
  import NavHeader from '../components/NavHeader'
  import NavFooter from '../components/NavFooter'
  import CodeEditor from '../components/CodeEditor'
  import {postSubmitCode, postGetUrl} from "../api/code";

  export default {
    name: "cpp-editor-page",
    data() {
      return {
        editorContent: {
          text: ''
        }
      }
    },
    components: {
      NavHeader, NavFooter, CodeEditor
    },
    methods: {
      submitCode () {
        (async () => {
          try {
            let data = await postSubmitCode('');
            alert(JSON.stringify(data));
          } catch (e) {
            alert(JSON.stringify(data));
          }
        })()
      },
      getUrl () {
        (async () => {
          try {
            let data = await postGetUrl('');
            alert(JSON.stringify(data));
          } catch (e) {
            alert(JSON.stringify(data));
          }
        })()
      }
    }
  }
</script>

<style scoped>

</style>
