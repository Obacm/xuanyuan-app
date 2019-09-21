<template>
  <b-container fluid>
    <b-form>
      <b-form-group>
        <b-form-input v-model="playerGas" type="number" required placeholder="输入玩家真气"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="playerBone" type="number" required placeholder="输入玩家根骨"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="playerHarm" type="number" required placeholder="输入玩家对敌人伤害"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="enemyHarm" type="number" required placeholder="输入敌人对玩家伤害"></b-form-input>
      </b-form-group>
      <b-form-group>
        <div class="mt-2">玩家防御: {{ animatedPlayerDefense }}</div>
        <div class="mt-2">敌人防御: {{ animatedEnemyDefense }}</div>
        <div class="mt-2">敌人攻击: {{ animatedEnemyAttack }}</div>
        <div class="mt-2">玩家总伤害: {{ animatedPlayerTotalHarme }}</div>
      </b-form-group>
      <b-form-group>
        <b-badge href="#" variant="light">上次输入的数据</b-badge>
      </b-form-group>
      <b-form-group>
        <b-badge variant="primary" class="badge animated flipInX" @click="setPlayerGas">{{ lastPlayerGas }}</b-badge>
        <b-badge variant="dark" class="badge animated flipInY" @click="setPlayerBone">{{ lastPlayerBone }}</b-badge>
      </b-form-group>
    </b-form>
    <img class="back" src="../assets/img/back.png" @click="preView">
  </b-container>
</template>

<script>
import { storage } from '../utils/storage'

export default {
  data() {
    return {
      playerGas: null,
      playerBone: null,
      playerHarm: null,
      enemyHarm: null,
      lastPlayerGas: null,
      lastPlayerBone: null,
      tweenedPlayerDefense: 0,
      tweenedEnemyDefense: 0,
      tweenedEnemyAttack: 0,
      tweenedPlayerTotalHarme: 0,
    };
  },
  mounted() {
    this.lastPlayerGas = storage.get('_player_gas');
    this.lastPlayerBone = storage.get('_player_bone');
    TweenLite.to(this.$data, 0.5, { tweenedPlayerDefense: this.playerDefense });
    TweenLite.to(this.$data, 0.5, { tweenedEnemyDefense: this.enemyDefense });
    TweenLite.to(this.$data, 0.5, { tweenedEnemyAttack: this.enemyAttack });
    TweenLite.to(this.$data, 0.5, { tweenedPlayerTotalHarme: this.playerTotalHarm });
  },
  methods: {
    setPlayerGas() {
      this.playerGas = this.lastPlayerGas;
    },
    setPlayerBone() {
      this.playerBone = this.lastPlayerBone;
    },
    preView() {
      this.$router.back();
    }
  },
  computed: {
    playerAttack: function() {
      if (this.playerGas > 0) {
        return this.playerGas * 5;
      }
      return 0;
    },
    enemyAttack: function() {
      if (this.enemyTotalHarm > 0 && this.enemyBone > 0) {
        return this.enemyTotalHarm - this.enemyBone * 4;
      }
      return 0;
    },
    enemyBone: function() {
      if (this.playerBone > 0) {
        return this.enemyDefense / 5;
      }
      return 0;
    },
    playerDefense: function() {
      if (this.playerBone > 0) {
        return this.playerBone * 5;
      }
      return 0;
    },
    enemyDefense: function() {
      if (this.playerTotalHarm > 0 && this.playerHarm > 0) {
        return this.playerTotalHarm - this.playerHarm;
      }
      return 0;
    },
    playerTotalHarm: function() {
      if (this.playerAttack > 0 && this.playerBone > 0) {
        return this.playerAttack + this.playerBone * 4;
      }
      return 0;
    },
    enemyTotalHarm: function() {
      if (this.playerDefense > 0 && this.enemyHarm > 0) {
        return this.playerDefense + parseInt(this.enemyHarm);
      }
      return 0;
    },
    animatedPlayerDefense: function() {
      return this.tweenedPlayerDefense.toFixed(0);
    },
    animatedEnemyDefense: function() {
      return this.tweenedEnemyDefense.toFixed(0);
    },
    animatedEnemyAttack: function() {
      return this.tweenedEnemyAttack.toFixed(0);
    },
    animatedPlayerTotalHarme: function() {
      return this.tweenedPlayerTotalHarme.toFixed(0);
    },
  },
  watch: {
    playerGas: function() {
      storage.set('_player_gas', this.playerGas);
    },
    playerBone: function() {
      storage.set('_player_bone', this.playerBone);
    },
    playerDefense: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedPlayerDefense: newValue });
    },
    enemyDefense: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedEnemyDefense: newValue });
    },
    enemyAttack: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedEnemyAttack: newValue });
    },
    playerTotalHarm: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedPlayerTotalHarme: newValue });
    },
  }
};
</script>