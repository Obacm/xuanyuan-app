<template>
  <b-container>
    <div class="box">
      <b-badge variant="dark">功法等阶</b-badge>
    </div>
    <div class="box">
      <b-form-checkbox-group v-model="ladders" :options="nodes"></b-form-checkbox-group>
    </div>
    <div class="box">
      <b-badge variant="dark">功法等级</b-badge>
    </div>
    <div class="box">
      <span class="badge mr-2" :class="level === item.value ? 'badge-primary': 'badge-light'" v-for="(item, index) in nodes" :key="index" @click="setLevel(item.value)">{{ item.text }}</span>
    </div>
    <div class="box">
      <b-badge variant="dark">灵根等级</b-badge>
    </div>
    <div class="box">
      <span class="badge mr-2" :class="power === item.value ? 'badge-primary': 'badge-light'" v-for="(item, index) in powers" :key="index" @click="setPower(item.value)">{{ item.text }}</span>
    </div>
    <div class="box">
      <b-badge variant="dark">功法属性</b-badge>
    </div>
    <div class="box">
      <span class="badge" :class="category === item.value ? 'badge-primary': 'badge-light'" v-for="(item, index) in categories" :key="index" @click="setCategory(item.value)">{{ item.text }}</span>
    </div>
    <div class="box">
      <b-badge variant="dark">功法</b-badge>
    </div>
    <div>
      <span v-for="(collection, index) in collections" :key="index">
        <b-badge pill variant="light" class="box animated" :id="`tooltip-${collection.value}`" :class="{rubberBand: isAnimated}">{{ collection.text }}<span v-if="category">{{ currentCategory.name }}</span></b-badge>
      </span>
    </div>
    <div class="box">
      <b-badge variant="warning">属性</b-badge>
      <b-badge variant="light">{{ totalAttribute }}</b-badge>
      <b-badge variant="success">{{ currentCategory ? currentCategory.attribute : '' }}</b-badge>
      <b-badge variant="light">{{ currentCategory ? totalLastAttribute : ''}}</b-badge>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import flatten from '../utils/helper'

export default {
  data() {
    return {
      ladders: [],
      level: 1,
      power: 1,
      category: 0,
      isAnimated: true,
    };
  },
  methods: {
      setLevel(value) {
        this.level = value;
      },
      setPower(value) {
        this.power = value;
      },
      setCategory(value) {
        this.category = value;
      },
  },
  computed: {
    ...mapGetters([
      'skills',
      'nodes',
      'categories',
      'powers'
    ]),
    currentCategory() {
      if (this.category) {
        return this.categories.filter(item => item.value === this.category).shift();
      }
      return null;
    },
    collections() {
      if (this.ladders instanceof Array) {
        let collections =  this.ladders.map(element => {
          return this.skills.filter(item => item.ladder === element)
        });
        return flatten(collections);
      }
      return [];
    },
    additionCollections() {
      if (this.collections instanceof Array) {
        return this.collections.map(element => ({
          ...element,
          addition: element.addition + this.level - 1
        }));
      }

      return 0;
    },
    totalAttribute() {
      let sum = 0;
      this.additionCollections.forEach(element => {
        sum = sum + element.addition
      });

      return sum;
    },
    totalLastAttribute() {
      if (this.category === 1) {
        return this.totalAttribute * 5;
      }

      if (this.category === 2) {
        return this.totalAttribute * 5;
      }

      if (this.category === 3) {
        return this.totalAttribute * 15;
      }

      if (this.category === 4) {
        return this.totalAttribute * 3;
      }

      return 0;
    },
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