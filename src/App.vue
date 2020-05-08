<template>
  <div id="app">
    <NavBar :nav="navConfig" />
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar';
  import navConfig from './configs/nav';

  export default {
    components: {
      NavBar
    },

    data: () => ({
      navConfig
    })
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
