import Vue from 'vue'
import Router from 'vue-router'
import CppEditorPage from '../views/CppEditorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/cpp-editor-page'
    },
    {
      path: '/cpp-editor-page',
      name: 'cpp-editor-page',
      component: CppEditorPage
    }
  ]
})
