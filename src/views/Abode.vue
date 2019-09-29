<template>
  <b-container>
    <div class="box">
      <b-badge variant="dark">洞府</b-badge>
    </div>
    <div class="box">
      <b-form-radio-group v-model="abode" :options="abodes"></b-form-radio-group>
    </div>
    <div class="box">
      <b-badge variant="dark">起始等级</b-badge>
    </div>
    <div class="box">
      <div class="m-3">
        <b-input v-model="startLevel" type="number" min=1 max=100></b-input>
      </div>
    </div>
    <div class="box">
      <b-badge variant="dark">目标等级</b-badge>
    </div>
    <div class="box">
      <div class="m-3">
        <b-input v-model="endLevel" type="number" min=1 max=100></b-input>
      </div>
    </div>
    <div class="m-3 flex">
      <b-badge class="flex-1">储量</b-badge>
      <b-badge class="flex-1" variant="light">{{ reserves }}</b-badge>
    </div>
    <div class="m-3 flex">
      <b-badge class="flex-1">木材</b-badge>
      <b-badge class="flex-1" variant="light">{{ woods }}</b-badge>
    </div>
    <div class="m-3 flex">
      <b-badge class="flex-1">产量</b-badge>
      <b-badge class="flex-1" variant="light">{{ additions }}</b-badge>
    </div>
    <div class="m-3 flex">
      <b-badge class="flex-1" variant="warning">总木材</b-badge>
      <b-badge class="flex-1" variant="light">{{ totalWoods }}</b-badge>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { plus } from '../utils/helper'
export default {
  data() {
    return {
      abode: 1,
      startLevel: 1,
      endLevel: 2,
    };
  },
  mounted() {
  },
  methods: {
    getWoods(level) {
      return this.currentAbode.wood + this.currentAbode.step2 * plus(level - 1);
    },
  },
  computed: {
    ...mapGetters([
      "abodes",
    ]),
    currentAbode() {
      return this.abodes.filter(item => item.value === this.abode).shift();
    },
    reserves() {
      if (this.endLevel) {
        return this.currentAbode.reserve + this.currentAbode.step1 * plus(this.endLevel - 1);
      }
      return 0;
    },
    woods() {
      if (this.endLevel) {
        return this.currentAbode.wood + this.currentAbode.step2 * plus(this.endLevel - 1);
      }
      return 0;
    },
    additions() {
      if (this.endLevel) {
        if (this.abode === 1) {
          return this.currentAbode.addition * (parseInt(this.endLevel) + 1);
        }
        return this.currentAbode.addition * this.endLevel;
      }
      return 0;
    },
    totalWoods() {
      let total = 0;
      for (let i = parseInt(this.startLevel); i < this.endLevel; i++) {
        total = total + this.getWoods(i)
      }
      return total;
    }
  },
  watch: {
  }
};
</script>

<style scoped>
  .flex{
    display: flex;
  }
  .flex-1{
    flex:1;
  }
</style>
