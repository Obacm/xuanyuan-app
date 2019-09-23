<template>
  <b-container fluid>
      <div>
        <b-badge variant="primary" v-for="(level, index) in levels" :key="index" @click="setLevel(level.key)">{{ level.value }}</b-badge>
      </div>
      <div class="box">
        <b-badge variant="dark" v-for="(type, index) in types" :key="index" @click="setType(type.key)">{{ type.value }}</b-badge>
      </div>
      <div class="box">
        <b-badge variant="success" v-for="(ability, index) in abilities" :key="index" @click="setAbility(ability.key)">{{ ability.value }}</b-badge>
      </div>
      <div class="box">
          <b-badge pill variant="light" class="box" v-for="(collection, index) in collections" :key="index">{{ collection.text }}</b-badge>
      </div>
      <div class="box-max">
        <b-button variant="primary" size="sm" @click="setClear" v-if="isCondition">清除筛选条件</b-button>
      </div>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      level: null,
      type: null,
      ability: null,
      isClear: false,
    };
  },
  methods: {
    setLevel(key) {
      this.level = key;
    },
    setType(key) {
      this.type = key;
    },
    setAbility(key) {
      this.ability = key;
    },
    setClear() {
      this.isClear = true;
    }
  },
  computed: {
    isCondition() {
      return this.level > 0 || this.type || this.ability > 0
    },
    levels() {
      return this.$store.getters.levels;
    },
    types() {
      return this.$store.getters.types;
    },
    abilities() {
      return this.$store.getters.abilities;
    },
    factions() {
      return this.$store.getters.factions;
    },
    collections() {
        if (this.level > 0 && this.type && this.ability) {
          return this.factions.filter(item => item.level === this.level && item.type === this.type && item.ability === this.ability)
        } else if(this.level > 0 && this.type) {
          return this.factions.filter(item => item.level === this.level && item.type === this.type)
        } else if(this.level > 0 && this.ability) {
          return this.factions.filter(item => item.level === this.level && item.ability === this.ability)
        } else if(this.type && this.ability) {
          return this.factions.filter(item => item.type === this.type && item.ability === this.ability)
        }else if(this.level > 0) {
          return this.factions.filter(item => item.level === this.level)
        } else if(this.type) {
          return this.factions.filter(item => item.type === this.type)
        } else if(this.ability > 0) {
          return this.factions.filter(item => item.ability === this.ability)
        }else {
          return [];
        }
    }
  },
};
</script>

<style>
  .box {
    margin-top: 20px;
  }
  .box-max {
    margin-top: 40px;
  }
  .box-small {
    margin-top: 10px;
  }
</style>