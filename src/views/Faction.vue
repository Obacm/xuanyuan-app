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
        <b-badge variant="info" v-for="(clas, index) in classes" :key="index" @click="setClass(clas.key)">{{ clas.value }}</b-badge>
      </div>
      <div class="box">
        <span v-for="(collection, index) in collections" :key="index">
          <b-badge pill variant="light" class="box animated" :id="`tooltip-${collection.value}`" :class="{rubberBand:isAnimated}">{{ collection.text }}</b-badge>
          <b-tooltip ref="tooltip" :target="`tooltip-${collection.value}`" v-if="collection.class === 3">
            {{ collection.skill }}
          </b-tooltip>
          <b-tooltip ref="tooltip" placement="bottom" variant="warning" :target="`tooltip-${collection.value}`" v-if="collection.class === 3">
            {{ getAttribute(collection.attribute, collection.addition) }}
          </b-tooltip>
          <b-tooltip ref="tooltip" :target="`tooltip-${collection.value}`" v-if="collection.class === 1 || collection.class === 2">
            {{ collection.stunt }}
          </b-tooltip>
        </span>
      </div>
      <div class="box">
        <b-badge href="#" variant="light">本次筛选条件</b-badge>
      </div>
      <div>
        <b-badge variant="primary">{{ currentLevel }}</b-badge>
        <b-badge variant="dark">{{ currentType }}</b-badge>
        <b-badge variant="success">{{ currentAbility }}</b-badge>
        <b-badge variant="info">{{ currentClass }}</b-badge>
      </div>
      <div class="box-max">
        <b-button variant="danger" size="sm" @click="setClear" v-if="isCondition">清除筛选条件</b-button>
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
      class: null,
      attribute: null,
      isAnimated: true,
      params: [],
      paramsArray: [],
    };
  },
  methods: {
    setLevel(key) {
      this.level = key;
      if(this.params.indexOf('level') === -1) {
        this.params.push('level');
      }
    },
    setType(key) {
      this.type = key;
      if(this.params.indexOf('type') === -1) {
        this.params.push('type');
      }
    },
    setAbility(key) {
      this.ability = key;
      if(this.params.indexOf('ability') === -1) {
        this.params.push('ability');
      }
    },
    setClass(key) {
      this.class = key;
      if(this.params.indexOf('class') === -1) {
        this.params.push('class');
      }
    },
    setClear() {
      this.level = null;
      this.type = null;
      this.ability = null;
      this.class = null;
      this.params = [];
    },
    getAttribute(attribute, addition) {
      if (attribute instanceof Array) {
        let attributeArray = attribute.map(element => {
          return this.attributes.filter(item => item.value === element).shift();
        });
        
        return attributeArray.map(element => {
          return element.text + '*' + addition
        }).join(' '); 
      }
      let attributeArray = this.attributes.filter(item => item.value === attribute).shift();
      return attributeArray.text + '*' + addition
    },
  },
  computed: {
    isCondition() {
      return this.level > 0 || this.type || this.ability > 0 || this.class > 0
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
    classes() {
      return this.$store.getters.classes;
    },
    attributes() {
      return this.$store.getters.attributes;
    },
    factions() {
      return this.$store.getters.factions;
    },
    currentLevel() {
      if (this.level) {
        return this.levels.filter(item => item.key === this.level).shift().value;
      }
      return null;
    },
    currentType() {
      if (this.type) {
        return this.types.filter(item => item.key === this.type).shift().value;
      }
      return null;
    },
    currentAbility() {
      if (this.ability) {
        return this.abilities.filter(item => item.key === this.ability).shift().value;
      }
      return null;
    },
    currentClass() {
      if (this.class) {
        return this.classes.filter(item => item.key === this.class).shift().value;
      }
      return null;
    },
    paramsString() {
      if (this.params instanceof Array) {
        return this.params.map(element => {
          return `item.${element} === this.${element}`;
        }).join(' && ');
      }
      return '';
    },
    collections() {
      if (this.paramsString) {
        return eval(`this.factions.filter(item => ${this.paramsString})`)
      }
      return [];
    }
  },
  watch: {
    collections(newValue, oldValue) {
      if (newValue !== oldValue) {
       this.isAnimated = false;
        setTimeout(() => {
          this.isAnimated = true;
        }, 100)
      }
    }
  }
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