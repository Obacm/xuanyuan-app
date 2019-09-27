const state = {
  powers: [
    { text: '废品', value: 1 },
    { text: '凡品', value: 2 },
    { text: '下品', value: 3 },
    { text: '中品', value: 4 },
    { text: '上品', value: 5 },
    { text: '良品', value: 6 },
    { text: '超品', value: 7 },
    { text: '极品', value: 8 },
    { text: '完美', value: 9 },
    { text: '先天', value: 10 },
    { text: '凡仙', value: 11 },
    { text: '仙品', value: 12 },
    { text: '归元', value: 13 },
    { text: '天心', value: 14 },
    { text: '三清', value: 15 },
    { text: '六御', value: 16 },
    { text: '玄门', value: 17 },
    { text: '全真', value: 18 },
    { text: '净明', value: 19 },
    { text: '天道', value: 20 },
  ],
}

const getters = {
  powers: (state) => state.powers
}

export default {
  state,
  getters,
}