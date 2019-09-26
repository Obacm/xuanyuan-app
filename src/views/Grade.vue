<template>
  <b-container>
    <div class="box">
      <b-badge variant="dark">境界</b-badge>
    </div>
    <div class="box">
      <span class="badge badge-pill" :class="meGrade === grade.value ? 'badge-primary': 'badge-light'" v-for="(grade, index) in grades" :key="index" @click="setGrade(grade.value)">{{ grade.text }}</span>
    </div>
    <div class="box">
      <b-badge variant="dark">等级</b-badge>
    </div>
    <div class="box">
      <span class="badge mr-2" :class="meNode === node.value ? 'badge-primary': 'badge-light'" v-for="(node, index) in nodes" :key="index" @click="setNode(node.value)">{{ node.text }}</span>
    </div>
    <div class="box">
      <b-badge variant="dark">悟性</b-badge>
    </div>
    <div class="box">
      <div class="m-4">
        <b-form-input v-model="currentPower"></b-form-input>
      </div>
    </div>
    <div class="box">
      <b-badge variant="dark">方式</b-badge>
    </div>
    <div class="box">
      <b-form-radio-group v-model="passType" :options="passOptions" size="50"></b-form-radio-group>
      <b-form-checkbox-group v-model="isPass" :options="options"></b-form-checkbox-group>
    </div>
    <div class="box">
      <b-badge variant="info">当前条件</b-badge>
    </div>
    <div>
      <b-badge variant="light">{{ currentMagic ? currentMagic.text : ''}}</b-badge>
      <b-badge variant="light">{{ currentPower }}</b-badge>
    </div>
    <div class="box">
      <b-badge variant="warning">总修为</b-badge>
      <b-badge pill variant="light">{{ totalExp }}</b-badge>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      type: 1,
      meGrade: 1,
      meNode: 1,
      currentPower: 0,
      time: 5,
      passType: 0,
      isPass: false,
      passOptions: [
        { text: '不练功', value: 0 },
        { text: '普练功', value: 1 },
        { text: '掌练功', value: 2 },
      ],
      options: [
        { text: '掌传功', value: 3 },
      ]
    };
  },
  methods: {
    setGrade(value) {
      this.meGrade = value;
    },
    setNode(value) {
      this.meNode = value;
    },
  },
  computed: {
    ...mapGetters([
      'grades',
      'nodes',
      'magics',
      'gods'
    ]),
    currentGrade() {
      return this.grades.filter(item => item.value === this.meGrade).shift();
    },
    currentNode() {
      return this.nodes.filter(item => item.value === this.meNode).shift();
    },
    currentMagic() {
      return this.magics.filter(item => item.grade === this.meGrade && item.node === this.meNode).shift();
    },
    currentPowerRate() {
      return this.currentPower / 2;
    },
    currentMagicMinRate() {
      return this.currentMagic.min;
    },
    currentMagicMaxRate() {
      return this.currentMagic.max;
    },
    currentMagicAvgRate() {
      return (this.currentMagicMinRate + this.currentMagicMaxRate) / 2;
    },
    currentRate() {
      return this.currentPowerRate + this.currentMagicAvgRate;
    },
    currentMinRate() {
      return this.currentPowerRate + this.currentMagicMinRate;
    },
    currentMaxRate() {
      return this.currentPowerRate + this.currentMagicMaxRate;
    },
    exp() {
      return this.currentRate * this.times;
    },
    goodExp() {
      return this.currentRate * 5 * this.passGoodTimes;
    },
    betterExp() {
      return this.currentRate * 5 * this.passBetterTimes;
    },
    bestExp() {
      return this.currentRate * 8 * this.passBestTimes;
    },
    totalExp() {
      if (this.isPass) {
        if (this.passType === 0) {
          return this.bestExp + this.currentRate * (this.times - this.passBestTimes);
        }

        if (this.passType === 1) {
          return this.goodExp + this.bestExp + this.currentRate * (this.times - this.passGoodTimes);
        }

        if (this.passType === 2) {
          return this.betterExp + this.bestExp + this.currentRate * (this.times - this.passBetterTimes);
        }
      } else {
        if (this.passType === 0) {
          return this.exp;
        }

        if (this.passType === 1) {
          return this.goodExp + this.currentRate * (this.times - this.passGoodTimes);
        }

        if (this.passType === 2) {
          return this.betterExp + this.currentRate * (this.times - this.passBetterTimes);
        }
      }

      return 0;
    },
    duration() {
      return 24 * 60 * 60;
    },
    times() {
      return this.duration / this.time;
    },
    passGoodTimes() {
      return 2.5 * 60 * 60 / this.time;
    },
    passBetterTimes() {
      return 2.5 * 60 * 60 * 2 / this.time;
    },
    passBestTimes() {
      return 2.5 * 60 * 60 / this.time;
    },
  },
  watch: {
    
  }
};
</script>

<style>
</style>