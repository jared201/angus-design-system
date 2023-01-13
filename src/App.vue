<template>
  <div id="app">
    <NavHeaderWithSideBar />
    <LandingPage/>
  </div>
</template>

<script>
import NavHeaderWithSideBar from './components/NavHeaderWithSideBar.vue'
import LandingPage from "@/views/LandingPage/LandingPage.vue";
export default {
  name: 'App',
  components: {
    LandingPage,
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
