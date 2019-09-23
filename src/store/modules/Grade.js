const state = {
  grades: [
    { text: '开光', value: 1},
    { text: '融合', value: 2},
    { text: '金丹', value: 3},
    { text: '元婴', value: 4},
    { text: '分神', value: 5},
    { text: '合体', value: 6},
    { text: '洞虚', value: 7},
    { text: '大乘', value: 8},
    { text: '游仙', value: 9},
    { text: '真仙', value: 10},
    { text: '玄仙', value: 11},
    { text: '天仙', value: 12},
    { text: '太乙玉仙', value: 13},
    { text: '大罗金仙', value: 14},
  ],
}

const getters = {
  grades: (state) => state.grades
}

export default {
  state,
  getters,
}