<template>
  <div id="app">
    <router-view />
    <view-back v-if="$route.path !== '/'"></view-back>
  </div>
</template>

<script>
import ViewBack from "./components/ViewBack";

export default {
  components: {
    ViewBack
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.back {
  width: 15%;
  margin-top: 10%;
}
</style>
