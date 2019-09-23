<template>
  <b-container fluid>
    <b-form>
      <b-form-group>
        <b-form-input v-model="playerBlood" type="number" required placeholder="输入玩家血量"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="playerBone" type="number" required placeholder="输入玩家根骨"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-select v-model="map" :options="mapBoss">
        </b-form-select>
      </b-form-group>
      <b-form-group>
        <div class="mt-2">玩家防御: {{ animatedPlayerDefense }}</div>
        <div class="mt-2">当前Boss攻击: {{ animatedCurrentBossAttack }}</div>
        <div class="mt-2">当前Boss防御: {{ animatedCurrentBossDefense }}</div>
        <div class="mt-2">当前Boss血量: {{ animatedCurrentBossBlood }}</div>
        <div class="mt-2">承受攻击次数: {{ times }}</div>
      </b-form-group>
      <b-form-group>
        <b-badge href="#" variant="light">上次输入的数据</b-badge>
      </b-form-group>
      <b-form-group>
        <b-badge variant="primary" class="badge animated flipInX" @click="setPlayerBlood">{{ lastPlayerBlood }}</b-badge>
        <b-badge variant="dark" class="badge animated flipInY" @click="setPlayerBone">{{ lastPlayerBone }}</b-badge>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import { storage } from '../utils/storage'
import { TweenLite } from 'gsap'

export default {
  data() {
    return {
      playerBlood: null,
      playerBone: null,
      map: 1,
      lastPlayerBlood: null,
      lastPlayerBone: null,
      tweenedCurrentBossAttack: 0,
      tweenedCurrentBossDefense: 0,
      tweenedCurrentBossBlood: 0,
      tweenedPlayerDefense: 0,
    };
  },
  mounted() {
    this.lastPlayerBlood = storage.get('player_blood');
    this.lastPlayerBone = storage.get('player_bone');
    TweenLite.to(this.$data, 0.5, { tweenedPlayerDefense: this.playerDefense });
    TweenLite.to(this.$data, 0.5, { tweenedCurrentBossAttack: this.currentBossAttack });
    TweenLite.to(this.$data, 0.5, { tweenedCurrentBossDefense: this.currentBossDefense });
    TweenLite.to(this.$data, 0.5, { tweenedCurrentBossBlood: this.currentBossBlood });
  },
  methods: {
    setPlayerBlood() {
      this.playerBlood = this.lastPlayerBlood;
    },
    setPlayerBone() {
      this.playerBone = this.lastPlayerBone;
    },
  },
  computed: {
    mapBoss() {
      return this.$store.getters.maps;
    },
    playerDefense() {
      if (this.playerBone > 0) {
        return this.playerBone * 5;
      }
      return 0;
    },
    currentBossAttack() {
      if (this.map > 0) {
        return this.mapBoss[this.map - 1].attack;
      }
      return 0;
    },
    currentBossDefense() {
      if (this.map > 0) {
        return this.mapBoss[this.map - 1].defense;
      }
      return 0;
    },
    currentBossBlood() {
      if (this.map > 0) {
        return this.mapBoss[this.map - 1].blood;
      }
      return 0;
    },
    times() {
      if (this.playerDefense > 0 && this.playerBlood > 0) {
        let times = Math.floor(this.playerBlood / (this.currentBossAttack - this.playerDefense));
        if (times < 0) {
            times = '无限次';
        }
        return times;
      }
      return 0;
    },
    animatedPlayerDefense() {
      return this.tweenedPlayerDefense.toFixed(0);
    },
    animatedCurrentBossAttack() {
      return this.tweenedCurrentBossAttack.toFixed(0);
    },
    animatedCurrentBossDefense() {
      return this.tweenedCurrentBossDefense.toFixed(0);
    },
    animatedCurrentBossBlood() {
      return this.tweenedCurrentBossBlood.toFixed(0);
    },
  },
  watch: {
    playerBlood() {
      storage.set('player_blood', this.playerBlood);
    },
    playerBone() {
      storage.set('player_bone', this.playerBone);
    },
    playerDefense(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedPlayerDefense: newValue });
    },
    currentBossAttack(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedCurrentBossAttack: newValue });
    },
    currentBossDefense(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedCurrentBossDefense: newValue });
    },
    currentBossBlood(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedCurrentBossBlood: newValue });
    },
  }
};
</script>

<style>
.content {
  margin: 15px;
}
.badge {
  margin-right: 15px;
}
</style>