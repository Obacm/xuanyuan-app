<template>
  <b-container fluid>
    <b-form>
      <b-form-group>
        <b-form-input v-model="playerBone" type="number" required placeholder="输入玩家根骨"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="playerGas" type="number" required placeholder="输入玩家真气"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="playerHarm" type="number" required placeholder="输入玩家对敌人伤害"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="enemyHarm" type="number" required placeholder="输入敌人对玩家伤害"></b-form-input>
      </b-form-group>

      <div class="mt-2">玩家防御: {{ playerDefense }}</div>
      <div class="mt-2">敌人防御: {{ enemyDefense }}</div>
      <div class="mt-2">敌人攻击: {{ enemyAttack }}</div>
      <div class="mt-2">玩家总伤害: {{ playerTotalHarm }}</div>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      playerGas: null,
      playerBone: null,
      playerHarm: null,
      enemyHarm: null,
    };
  },
  methods: {},
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
    enemyGas: function() {
      return;
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
    }
  }
};
</script>