<template>
<div>
  <nav-header></nav-header>
  <div class="editor-area">
    <div class="divding-line"></div>
    <div class="editor">
      <div class="editor-control">
        <button>share</button>
        <button>run</button>
      </div>
      <code-editor v-bind:editorContent="editorContent"></code-editor>
    </div>
    <div class="divding-line"></div>
    <div class="console">
      <console></console>
    </div>
  </div>
</div>
</template>

<script>
  /**
   * 默认c++编辑器页面
   */
  import NavHeader from '../components/NavHeader'
  import CodeEditor from '../components/CodeEditor'
  import Console from '../components/Console'
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
      NavHeader, CodeEditor, Console
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
.editor-area {
  height: 100%;
  padding-top: 60px;
  display: flex;
}
.divding-line {
  height: 100%;
  background-color: #DDD;
  overflow: hidden;
  width: 11px;
}

.editor {
  height: calc(100% - 50px);
  width: 70%;
}

.console {
  height: 100%;
  width: calc(30% - 22px);
}

.editor-control {
  height: 50px;
  display: flex;
  background-color: rgb(241, 241, 241);
  justify-content: center;
  align-items: center;
}

.editor-control button {
  margin: 5px;
  height: 29px;
  width: 118px;
  font-size: 15px;
  color: rgb(118, 119, 119);
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(212, 212, 212);
}

</style>
