// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['机甲'] = {
    name: '机甲',
    img: 'images/兵种/普通兵种/Mech.webp',
    desc: '机甲是装甲厚重的终极兵种，能在战场上稳定推进。它的重机枪不仅能造成可观的溅射伤害，最可怕的是子弹附带震爆效果，能让敌方防御建筑瞬间瘫痪！',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '30m' },
        { label: '移动速度', val: '中等/130' },
        { label: '攻击范围', val: '近程/5-8' },
        { label: '攻击速度', val: '0.1s' },
        { label: '溅射半径', val: '0.2' },
        { label: '震爆持续', val: '3.5s' },
        { label: '需要大本等级', val: '22' }
    ],
    // 等级数据表
    levels: [
        { lv: 11, hp: 24900, dmg: 968, perDmg: 96.8, train: 46000, upg: 8900000, mirc: 28, time: '5d11h', diamond: 2851, ticket: 524, exp: 138 },
        { lv: 10, hp: 24200, dmg: 944, perDmg: 94.4, train: 44000, upg: 8700000, mirc: 27, time: '5d8h', diamond: 2580, ticket: 512, exp: 136 },
        { lv: 9, hp: 23500, dmg: 921, perDmg: 92.1, train: 42000, upg: 8500000, mirc: 26, time: '5d6h', diamond: 2748, ticket: 504, exp: 134 },
        { lv: 8, hp: 22800, dmg: 899, perDmg: 89.9, train: 40000, upg: 8400000, mirc: 25, time: '5d5h', diamond: 2741, ticket: 500, exp: 132 },
        { lv: 7, hp: 22140, dmg: 879, perDmg: 87.9, train: 38000, upg: 8300000, mirc: 24, time: '5d3h', diamond: 2715, ticket: 492, exp: 130 },
        { lv: 6, hp: 21500, dmg: 859, perDmg: 85.9, train: 36000, upg: 8200000, mirc: 23, time: '5d1h', diamond: 2685, ticket: 484, exp: 128 },
        { lv: 5, hp: 20880, dmg: 838, perDmg: 83.8, train: 34000, upg: 8100000, mirc: 23, time: '4d23h', diamond: 2659, ticket: 476, exp: 126 },
        { lv: 4, hp: 20280, dmg: 818, perDmg: 81.8, train: 32000, upg: 8000000, mirc: 22, time: '4d21h', diamond: 2633, ticket: 468, exp: 124 },
        { lv: 3, hp: 19700, dmg: 798, perDmg: 79.8, train: 30000, upg: 7900000, mirc: 22, time: '4d19h', diamond: 2603, ticket: 460, exp: 122 },
        { lv: 2, hp: 19140, dmg: 777, perDmg: 77.7, train: 28000, upg: 7800000, mirc: 21, time: '4d17h', diamond: 2577, ticket: 452, exp: 120 },
        { lv: 1, hp: 18600, dmg: 757, perDmg: 75.7, train: 26000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 1, cap: 11, token: '/', tech: 5 },
        { no: 2, lv: 2, cap: 13, token: 135500, tech: 10 },
        { no: 3, lv: 3, cap: 15, token: 164000, tech: 15 },
        { no: 4, lv: 4, cap: 18, token: 198500, tech: 20 },
        { no: 5, lv: 5, cap: 20, token: 270000, tech: 25 }
    ]
};