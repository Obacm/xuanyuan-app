<template>
  <b-container fluid>
    <div class="box">
      <b-badge href="#" variant="dark">当前境界</b-badge>
    </div>
    <div class="box">
      <span class="badge badge-pill" :class="currentGrade === grade.value ? 'badge-primary': 'badge-light'" v-for="(grade, index) in grades" :key="index" @click="setGrade(grade.value)">{{ grade.text }}</span>
    </div>
    <div class="box">
      <b-badge href="#" variant="dark">当前等级</b-badge>
    </div>
    <div class="box">
      <span class="badge" :class="currentNode === node ? 'badge-primary': 'badge-light'" v-for="(node, index) in nodes" :key="index" @click="setNode(node)">{{ node }}</span>
    </div>
    <div class="box">
      <b-badge href="#" variant="dark">当前悟性</b-badge>
    </div>
    <div class="box">
      <div class="m-4">
        <b-form-input v-model="currentPower" type="range" min=0 max=200000></b-form-input>
        <div class="mt-2">{{ currentPower }}</div>
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
      currentPower: 0,
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
  },
  watch: {
    
  }
};
</script>

<style>
</style>