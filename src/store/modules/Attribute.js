const state = {
  attributes: [
    { text: '金', value: 1},
    { text: '木', value: 2},
    { text: '水', value: 3},
    { text: '火', value: 4},
    { text: '土', value: 5},
    { text: '根骨', value: 6},
    { text: '真气', value: 7},
    { text: '身法', value: 8},
    { text: '体魄', value: 9},
  ],
}

const getters = {
  attributes: (state) => state.attributes
}

export default {
  state,
  getters,
}