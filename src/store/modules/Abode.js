const state = {
  abodes: [
    { text: '食物', value: 1, level: 1, reserve: 4800, wood: 120, addition: 3, step1: 360, step2: 120 },
    { text: '木材', value: 2, level: 1, reserve: 720, wood: 120, addition: 2, step1: 240, step2: 120 },
    { text: '陨铁', value: 3, level: 1, reserve: 360, wood: 120, addition: 1, step1: 120, step2: 80 },
  ],
}

const getters = {
  abodes: (state) => state.abodes,
}

export default {
  state,
  getters,
}
