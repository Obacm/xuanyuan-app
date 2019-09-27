const state = {
  categories: [
    { text: '真气', attribute: '攻击', name: '秘籍', value: 1, addition: 5 },
    { text: '根骨', attribute: '防御', name: '真绝', value: 2, addition: 5 },
    { text: '体魄', attribute: '生命', name: '心经', value: 3, addition: 15 },
    { text: '身法', attribute: '闪避', name: '遁术', value: 4, addition: 3 },
  ],
  skills: [
    { text: '仙箓', value: 1, ladder: 1, attribute: 3, addition: 5 },
    { text: '逐浪', value: 2, ladder: 1, attribute: 3, addition: 5 },
    { text: '山海', value: 3, ladder: 1, attribute: 5, addition: 5 },
    { text: '梵圣', value: 4, ladder: 1, attribute: 4, addition: 5 },
    { text: '昊天', value: 5, ladder: 1, attribute: 2, addition: 5 },
    { text: '锐金', value: 6, ladder: 1, attribute: 1, addition: 5 },
    { text: '长春', value: 7, ladder: 1, attribute: 4, addition: 5 },
    { text: '玄雷', value: 8, ladder: 1, attribute: 1, addition: 5 },
    { text: '少阳', value: 9, ladder: 1, attribute: 2, addition: 5 },

    { text: '罗刹', value: 10, ladder: 2, attribute: 5, addition: 19 },
    { text: '混元', value: 11, ladder: 2, attribute: 3, addition: 19 },
    { text: '掠影', value: 12, ladder: 2, attribute: 3, addition: 19 },
    { text: '枯禅', value: 13, ladder: 2, attribute: 1, addition: 19 },
    { text: '太昊', value: 14, ladder: 2, attribute: 4, addition: 19 },
    { text: '都天', value: 15, ladder: 2, attribute: 5, addition: 19 },
    { text: '九幽', value: 16, ladder: 2, attribute: 2, addition: 19 },
    { text: '素女', value: 17, ladder: 2, attribute: 5, addition: 19 },
    { text: '赤尸', value: 19, ladder: 2, attribute: 2, addition: 19 },
    { text: '返照', value: 19, ladder: 2, attribute: 4, addition: 19 },
    { text: '太乙', value: 20, ladder: 2, attribute: 1, addition: 19 },

    { text: '吞天', value: 21, ladder: 3, attribute: 3, addition: 38 },
    { text: '离火', value: 22, ladder: 3, attribute: 4, addition: 38 },
    { text: '罡步', value: 23, ladder: 3, attribute: 2, addition: 38 },
    { text: '镇魂', value: 24, ladder: 3, attribute: 2, addition: 38 },
    { text: '绝阳', value: 25, ladder: 3, attribute: 5, addition: 38 },
    { text: '无相', value: 26, ladder: 3, attribute: 3, addition: 38 },
    { text: '摄神', value: 27, ladder: 3, attribute: 1, addition: 38 },
    { text: '太上', value: 28, ladder: 3, attribute: 5, addition: 38 },
    { text: '日月', value: 29, ladder: 3, attribute: 5, addition: 38 },
    { text: '斗魁', value: 30, ladder: 3, attribute: 1, addition: 38 },
    { text: '鸿蒙', value: 31, ladder: 3, attribute: 2, addition: 38 },
    { text: '朝元', value: 32, ladder: 3, attribute: 4, addition: 38 },

    { text: '御风', value: 33, ladder: 4, attribute: 1, addition: 57 },
    { text: '金阙', value: 34, ladder: 4, attribute: 1, addition: 57 },
    { text: '归墟', value: 35, ladder: 4, attribute: 3, addition: 57 },
    { text: '溯元', value: 36, ladder: 4, attribute: 4, addition: 57 },
    { text: '混沌', value: 37, ladder: 4, attribute: 3, addition: 57 },
    { text: '象甲', value: 38, ladder: 4, attribute: 5, addition: 57 },
    { text: '玄胎', value: 39, ladder: 4, attribute: 2, addition: 57 },
    { text: '噬魂', value: 40, ladder: 4, attribute: 2, addition: 57 },
    { text: '梵天', value: 41, ladder: 4, attribute: 4, addition: 57 },
    { text: '镇龙', value: 42, ladder: 4, attribute: 1, addition: 57 },

    { text: '牵引', value: 43, ladder: 5, attribute: 4, addition: 86 },
    { text: '泰阳', value: 44, ladder: 5, attribute: 1, addition: 86 },
    { text: '勾魂', value: 45, ladder: 5, attribute: 5, addition: 86 },
    { text: '葵水', value: 46, ladder: 5, attribute: 3, addition: 86 },
    { text: '大罗', value: 47, ladder: 5, attribute: 2, addition: 86 },
    { text: '引气', value: 48, ladder: 5, attribute: 2, addition: 86 },
    { text: '锁心', value: 49, ladder: 5, attribute: 4, addition: 86 },
    { text: '玄冰', value: 50, ladder: 5, attribute: 3, addition: 86 },
  ],
}

const getters = {
  skills: (state) => state.skills,
  categories: (state) => state.categories,
}

export default {
  state,
  getters,
}