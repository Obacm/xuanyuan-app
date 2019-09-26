<template>
  <b-container fluid>
    <div class="box">
      <b-badge variant="dark">当前境界</b-badge>
    </div>
    <div class="box">
      <span class="badge badge-pill" :class="currentGrade === grade.value ? 'badge-primary': 'badge-light'" v-for="(grade, index) in grades" :key="index" @click="setGrade(grade.value)">{{ grade.text }}</span>
    </div>
    <div class="box">
      <b-badge variant="dark">当前等级</b-badge>
    </div>
    <div class="box">
      <span class="badge" :class="currentNode === node ? 'badge-primary': 'badge-light'" v-for="(node, index) in nodes" :key="index" @click="setNode(node)">{{ node }}</span>
    </div>
    <div class="box">
      <b-badge variant="dark">当前悟性</b-badge>
    </div>
    <div class="box">
      <div class="m-4">
        <b-form-input v-model="currentPowerWan" type="range" min=0 max=100000 step=10000></b-form-input>
        <b-form-input v-model="currentPowerQian" type="range" min=0 max=10000 step=1000></b-form-input>
        <b-form-input v-model="currentPowerBai" type="range" min=0 max=1000 step=100></b-form-input>
        <b-form-input v-model="currentPowerShi" type="range" min=0 max=100 step=10></b-form-input>
        <b-form-input v-model="currentPowerGe" type="range" min=0 max=10 step=1></b-form-input>
        <div class="mt-2">
          <b-badge href="#" variant="light">{{ currentPower }}</b-badge>
        </div>
      </div>
    </div>
    <div class="box">
      <b-button variant="primary" id="tooltip-target" @click="goNext">下一步</b-button>
      <b-tooltip target="tooltip-target" triggers="hover" v-if="!gradeOver">
        当前境界
      </b-tooltip>
      <b-tooltip target="tooltip-target" triggers="hover" v-if="!nodeOver">
        当前等级
      </b-tooltip>
      <b-tooltip target="tooltip-target" triggers="hover" v-if="!powerOver">
        当前悟性
      </b-tooltip>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      type: 1,
      currentGrade: 1,
      currentNode: 1,
      currentPowerWan: 0,
      currentPowerQian: 0,
      currentPowerBai: 0,
      currentPowerShi: 0,
      currentPowerGe: 0,
      options: [
        { text: '境界', value: 1 },
        { text: '肉身', value: 2 },
      ],
    };
  },
  methods: {
    setGrade(value) {
      this.currentGrade = value;
    },
    setNode(value) {
      this.currentNode = value;
    },
    goNext() {
      if (this.currentGrade && this.currentNode && this.powerOver) {
        return true;
      } else {
        return false;
      }
    }
  },
  computed: {
    ...mapGetters([
      'grades',
      'nodes',
      'magics',
      'gods'
    ]),
    gradeOver() {
      return this.currentGrade > 0;
    },
    nodeOver() {
      return this.currentNode > 0;
    },
    powerOver() {
      return parseInt(this.currentPower) > 0;
    },
    currentPower() {
      return parseInt(this.currentPowerWan) + parseInt(this.currentPowerQian) + parseInt(this.currentPowerBai) + parseInt(this.currentPowerShi) + parseInt(this.currentPowerGe);
    }
  },
  watch: {
    
  }
};
</script>

<style>
</style>