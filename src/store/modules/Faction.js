const state = {
  datum: [
    { text: '点苍派', value: 1, level: 1, grade: 1, type: 1, pellet: 0, implement: 2, stunt: '', class: 3, skill: '寒冰诀', addition: 1, attribute: 3 },
    { text: '经脉殿', value: 2, level: 1, grade: 1, type: 0, pellet: 0, implement: 2, stunt: '', class: 3, skill: '裂石印', addition: 1, attribute: 5 },
    { text: '无极门', value: 3, level: 1, grade: 1, type: 1, pellet: 2, implement: 0, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '如意宗', value: 4, level: 1, grade: 1, type: 0, pellet: 2, implement: 0, stunt: '', class: 3, skill: '烈阳诀', addition: 1, attribute: 4 },
    { text: '遁世宫', value: 5, level: 1, grade: 1, type: 1, pellet: 0, implement: 0, stunt: '', class: 3, skill: '枯木功', addition: 1, attribute: 2 },
    { text: '狂仙府', value: 6, level: 1, grade: 1, type: 0, pellet: 0, implement: 0, stunt: '', class: 3, skill: '乾天罡气', addition: 1, attribute: 6 },
    { text: '天心派', value: 7, level: 1, grade: 1, type: 1, pellet: 0, implement: 0, stunt: '', class: 3, skill: '磐龙灭法', addition: 1, attribute: 9 },
    { text: '丹霞教', value: 8, level: 1, grade: 1, type: 1, pellet: 0, implement: 0, stunt: '', class: 3, skill: '熔金诀', addition: 1, attribute: 1 },
    { text: '落日谷', value: 9, level: 1, grade: 1, type: 0, pellet: 0, implement: 0, stunt: '', class: 3, skill: '五雷正法', addition: 1, attribute: 8 },

    { text: '甲御派', value: 10, level: 2, grade: 3, type: 1, pellet: 0, implement: 4, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '飘渺宫', value: 11, level: 2, grade: 3, type: 0, pellet: 0, implement: 4, stunt: '', class: 3, skill: '长春诀', addition: 2, attribute: 3 },
    { text: '奇锋门', value: 12, level: 2, grade: 3, type: 0, pellet: 0, implement: 4, stunt: '奇锋绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '灵宝派', value: 13, level: 2, grade: 3, type: 1, pellet: 4, implement: 0, stunt: '', class: 3, skill: '沉壁诀', addition: 2, attribute: 5 },
    { text: '璇玑宗', value: 14, level: 2, grade: 3, type: 1, pellet: 4, implement: 0, stunt: '', class: 3, skill: '覆雨诀', addition: 2, attribute: 8 },
    { text: '丹鼎派', value: 15, level: 2, grade: 3, type: 1, pellet: 4, implement: 0, stunt: '', class: 3, skill: '真火诀', addition: 2, attribute: 4 },
    { text: '龙虎派', value: 16, level: 2, grade: 3, type: 1, pellet: 4, implement: 0, stunt: '龙虎残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '落月宗', value: 17, level: 2, grade: 3, type: 0, pellet: 0, implement: 0, stunt: '', class: 3, skill: '黄龙浩气', addition: 4, attribute: 6 },
    { text: '紫雷府', value: 18, level: 2, grade: 3, type: 0, pellet: 0, implement: 0, stunt: '', class: 3, skill: '金铭诀', addition: 2, attribute: 1 },
    { text: '灵寂洞', value: 19, level: 2, grade: 3, type: 0, pellet: 0, implement: 0, stunt: '', class: 3, skill: '日照光华', addition: 2, attribute: 9 },
    { text: '秘道宗', value: 20, level: 2, grade: 3, type: 1, pellet: 0, implement: 0, stunt: '', class: 3, skill: '轩辕斗气', addition: 1, attribute: 6 },

    { text: '昆仑派', value: 21, level: 3, grade: 5, type: 1, pellet: 0, implement: 6, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '九煞殿', value: 22, level: 3, grade: 5, type: 0, pellet: 0, implement: 6, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '斩龙观', value: 23, level: 3, grade: 5, type: 1, pellet: 0, implement: 6, stunt: '', class: 3, skill: '金光罩', addition: 3, attribute: 1 },
    { text: '琉璃宗', value: 24, level: 3, grade: 5, type: 0, pellet: 0, implement: 6, stunt: '', class: 3, skill: '空桑诀', addition: 3, attribute: 2 },
    { text: '剑奇宫', value: 25, level: 3, grade: 5, type: 1, pellet: 0, implement: 6, stunt: '', class: 3, skill: '涡流术', addition: 3, attribute: 3 },
    { text: '上清道', value: 26, level: 3, grade: 5, type: 1, pellet: 0, implement: 6, stunt: '', class: 3, skill: '湮灭术', addition: 3, attribute: 5 },
    { text: '金丹派', value: 27, level: 3, grade: 5, type: 1, pellet: 6, implement: 0, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '药王宗', value: 28, level: 3, grade: 5, type: 1, pellet: 6, implement: 0, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '邪心宗', value: 29, level: 3, grade: 5, type: 0, pellet: 6, implement: 0, stunt: '', class: 3, skill: '炎龙击', addition: 3, attribute: 4 },
    { text: '清虚门', value: 30, level: 3, grade: 5, type: 0, pellet: 6, implement: 0, stunt: '清虚绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '补天门', value: 31, level: 3, grade: 5, type: 0, pellet: 0, implement: 0, stunt: '补天绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '金莲宗', value: 32, level: 3, grade: 5, type: 1, pellet: 0, implement: 0, stunt: '金莲残页', class: 2, skill: '', addition: '', attribute: '' },

    { text: '天衍宗', value: 33, level: 4, grade: 7, type: 1, pellet: 8, implement: 0, stunt: '', class: 3, skill: '鸿蒙无极', addition: 2, attribute: 6 },
    { text: '符录派', value: 34, level: 4, grade: 7, type: 1, pellet: 8, implement: 0, stunt: '', class: 3, skill: '太乙真火', addition: 2, attribute: [1, 4] },
    { text: '御虚府', value: 35, level: 4, grade: 7, type: 0, pellet: 8, implement: 0, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '蓬莱宫', value: 36, level: 4, grade: 7, type: 1, pellet: 8, implement: 0, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '万妖谷', value: 37, level: 4, grade: 7, type: 0, pellet: 0, implement: 0, stunt: '万妖残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '五雷宗', value: 38, level: 4, grade: 7, type: 1, pellet: 0, implement: 8, stunt: '', class: 3, skill: '移山填海', addition: 2, attribute: [2, 5] },
    { text: '赤炼堂', value: 39, level: 4, grade: 7, type: 0, pellet: 0, implement: 8, stunt: '', class: 3, skill: '火冰水气', addition: 2, attribute: [3, 4] },
    { text: '琼华派', value: 40, level: 4, grade: 7, type: 1, pellet: 0, implement: 8, stunt: '', class: 3, skill: '天诛地灭', addition: 3, attribute: 9 },
    { text: '无量宫', value: 41, level: 4, grade: 7, type: 0, pellet: 0, implement: 8, stunt: '', class: '', skill: '', addition: '', attribute: '' },
    { text: '流云阁', value: 42, level: 4, grade: 7, type: 1, pellet: 0, implement: 8, stunt: '', class: 3, skill: '金虹贯日', addition: 3, attribute: 8 },

    { text: '神霄派', value: 43, level: 5, grade: 9, type: 1, pellet: 10, implement: 0, stunt: '', class: 3, skill: '一剑天罡', addition: 2, attribute: [6, 8] },
    { text: '观海天门', value: 44, level: 5, grade: 9, type: 1, pellet: 10, implement: 0, stunt: '', class: 3, skill: '大梵圣掌', addition: 2, attribute: [6, 9] },
    { text: '合欢教', value: 45, level: 5, grade: 9, type: 0, pellet: 10, implement: 0, stunt: '', class: 3, skill: '五气连波', addition: 4, attribute: 9 },
    { text: '终南紫府', value: 46, level: 5, grade: 9, type: 1, pellet: 10, implement: 0, stunt: '', class: 3, skill: '九转神功', addition: 3, attribute: 6 },
    { text: '蜃冥都', value: 47, level: 5, grade: 9, type: 0, pellet: 10, implement: 0, stunt: '蜃冥残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '玄天剑宗', value: 48, level: 5, grade: 9, type: 1, pellet: 0, implement: 10, stunt: '', class: 3, skill: '万象神功', addition: 2, attribute: [6, 7] },
    { text: '幽冥教', value: 49, level: 5, grade: 9, type: 0, pellet: 0, implement: 10, stunt: '幽冥绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '修罗宗', value: 50, level: 5, grade: 9, type: 0, pellet: 0, implement: 10, stunt: '', class: 3, skill: '太乙生风', addition: 4, attribute: 8 },

    { text: '万灵山', value: 51, level: 6, grade: 11, type: 1, pellet: 12, implement: 0, stunt: '万灵绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '梵天宗', value: 52, level: 6, grade: 11, type: 1, pellet: 12, implement: 0, stunt: '梵天残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '六道玄宗', value: 53, level: 6, grade: 11, type: 1, pellet: 0, implement: 12, stunt: '六道残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '归然宗', value: 54, level: 6, grade: 11, type: 1, pellet: 0, implement: 12, stunt: '归然绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '神魔殿', value: 55, level: 6, grade: 11, type: 0, pellet: 0, implement: 12, stunt: '神魔残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '虚天殿', value: 56, level: 6, grade: 11, type: 0, pellet: 0, implement: 12, stunt: '虚天绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '忘情门', value: 57, level: 6, grade: 11, type: 0, pellet: 12, implement: 10, stunt: '忘情绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '九幽宗', value: 58, level: 6, grade: 11, type: 0, pellet: 12, implement: 10, stunt: '九幽残页', class: 2, skill: '', addition: '', attribute: '' },

    { text: '三尸宗', value: 59, level: 7, grade: 12, type: 0, pellet: 14, implement: 0, stunt: '三尸残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '百花谷', value: 60, level: 7, grade: 12, type: 0, pellet: 14, implement: 0, stunt: '百花绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '十方楼', value: 61, level: 7, grade: 12, type: 0, pellet: 0, implement: 14, stunt: '十方残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '昆吾山', value: 62, level: 7, grade: 12, type: 0, pellet: 0, implement: 14, stunt: '昆吾绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '天师道', value: 63, level: 7, grade: 12, type: 1, pellet: 14, implement: 0, stunt: '天师残页', class: 2, skill: '', addition: '', attribute: '' },
    { text: '玉虚府', value: 64, level: 7, grade: 12, type: 1, pellet: 0, implement: 14, stunt: '玉虚绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '苍穹道', value: 65, level: 7, grade: 12, type: 1, pellet: 14, implement: 0, stunt: '苍穹绝学', class: 1, skill: '', addition: '', attribute: '' },
    { text: '无名剑阁', value: 66, level: 7, grade: 12, type: 1, pellet: 0, implement: 14, stunt: '无名残页', class: 2, skill: '', addition: '', attribute: '' },
  ],
}

const getters = {
  datum: (state) => state.datum
}

export default {
  state,
  getters,
}