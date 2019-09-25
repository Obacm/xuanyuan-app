<template>
  <div>
    <div class="box" v-for="(route, index) in routes" :key="index">
      <router-link :to="route.path" v-if="route.meta.display">
        <b-button :variant="route.meta.variant">{{ route.name }}</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: []
      }
    },
    mounted() {
      this.routes = this.$router.options.routes;
    }
  }
</script>

<style>
  .box {
     margin-top: 20px;
  }
</style>
