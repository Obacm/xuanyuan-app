<template>
  <div id="app">
    <transition name="custom-animated rotateOut" enter-active-class="animated rotateOut">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
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
