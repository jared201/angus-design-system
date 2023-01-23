<template>
  <div id="app">
    <NavHeaderWithSideBar />
    <cv-content id="#main-content">
      <router-view/>
    </cv-content>
  </div>
</template>

<script>
import NavHeaderWithSideBar from './components/NavHeaderWithSideBar.vue'

export default {
  name: 'App',
  components: {
    NavHeaderWithSideBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
