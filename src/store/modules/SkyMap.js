const state = {
  maps: [
    { text: '天图一', value: 1, attack: 205000, defense: 20500, blood: 615000 },
    { text: '天图二', value: 2, attack: 255000, defense: 255000, blood: 765000 },
    { text: '天图三', value: 3, attack: 355000, defense: 355000, blood: 1065000 },
    { text: '天图四', value: 4, attack: 505000, defense: 505000, blood: 1515000 },
    { text: '天图五', value: 5, attack: 655000, defense: 655000, blood: 1965000 },
    { text: '天图六', value: 6, attack: 805000, defense: 805000, blood: 2415000 },
    { text: '天图七', value: 7, attack: 955000, defense: 955000, blood: 2865000 },
    { text: '天图八', value: 8, attack: 1105000, defense: 1105000, blood: 3315000 },
    { text: '天图九', value: 9, attack: 1255000, defense: 1255000, blood: 3765000 },
    { text: '天图十', value: 10, attack: 1405000, defense: 1405000, blood: 4215000 },
    { text: '天图十一', value: 11, attack: 1555000, defense: 1555000, blood: 4665000 },
    { text: '天图十二', value: 12, attack: 1705000, defense: 1705000, blood: 5115000 },
    { text: '天图十三', value: 13, attack: 1855000, defense: 1855000, blood: 5565000 },
    { text: '天图十四', value: 14, attack: 2005000, defense: 2005000, blood: 6015000 },
    { text: '天图十五', value: 15, attack: 2155000, defense: 2155000, blood: 6465000 },
    { text: '天图十六', value: 16, attack: 2305000, defense: 2305000, blood: 6915000 },
    { text: '天图十七', value: 17, attack: 2455000, defense: 2455000, blood: 7365000 },
    { text: '天图十八', value: 18, attack: 2605000, defense: 2605000, blood: 7815000 },
    { text: '天图十九', value: 19, attack: 2755000, defense: 2755000, blood: 8265000 },
    { text: '天图二十', value: 20, attack: 2905000, defense: 2905000, blood: 8715000 }
  ],
}

const getters = {
  maps: (state) => state.maps
}

export default {
  state,
  getters,
}