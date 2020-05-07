<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/project">项目</el-menu-item>
      <el-menu-item index="/workbench">工作台</el-menu-item>
      <el-menu-item index="/data">数据</el-menu-item>
      <el-menu-item index="/docs">文档</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
  import {
    Menu,
    MenuItem
  } from 'element-ui';
  export default {
    components: {
      'el-menu': Menu,
      'el-menu-item': MenuItem
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
