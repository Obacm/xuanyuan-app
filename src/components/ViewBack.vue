<template>
  <div>
    <img class="back" src="../assets/img/back.png" @click="preView">
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    preView() {
      this.$router.back();
    }
  },
};
</script>