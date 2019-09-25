<template>
  <b-container fluid>
    <b-form>
      <b-form-group>
        <b-form-radio-group v-model="type" :options="options"></b-form-radio-group>
      </b-form-group>
      <div>
        <b-badge pill variant="light">大乘</b-badge>
      </div>
    </b-form>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      type: 1,
      options: [
        { text: '境界', value: 1 },
        { text: '肉身', value: 2 },
      ]
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'grades',
      'magics',
      'gods'
    ]),
  },
  watch: {
    
  }
};
</script>

<style>

</style>