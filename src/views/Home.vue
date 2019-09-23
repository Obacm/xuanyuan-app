<template>
  <div>
    <div >
      <router-link to="/player">
        <b-button variant="primary">玩家</b-button>
      </router-link>
    </div>
    <div class="box">
      <router-link to="/boss">
        <b-button variant="danger">怪物</b-button>
      </router-link>
    </div>
    <div class="box">
      <router-link to="/faction">
        <b-button variant="warning">门派</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style>
  .box {
     margin-top: 20px;
  }
</style>
