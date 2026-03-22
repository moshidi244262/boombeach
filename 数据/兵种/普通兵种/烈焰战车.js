// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['烈焰战车'] = {
    name: '烈焰战车',
    img: 'images/兵种/普通兵种/Scorcher.webp',
    desc: '烈焰战车装甲极厚，它配备的火焰喷射器会点燃附近的建筑，在它转移目标后还会持续造成烧伤伤害。战车被摧毁时会发生爆炸，请保持安全距离！',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '50m' },
        { label: '移动速度', val: '中等/230' },
        { label: '攻击范围', val: '中程/3.3-7' },
        { label: '攻击速度', val: '0.5s' },
        { label: '需要大本等级', val: '18' }
    ],
    // 等级数据表 (包含专属字段 burnDmg: 残余烧伤, deathDmg: 死亡爆炸伤害)
    levels: [
        { lv: 15, hp: 64800, dmg: 1706, perDmg: 1313, burnDmg: 3939, deathDmg: 7600, train: 95000, upg: 11000000, mirc: 28, time: '5d9h', diamond: 3165, ticket: 516, exp: 121 },
        { lv: 14, hp: 60600, dmg: 1553.5, perDmg: 1195, burnDmg: 3585, deathDmg: 6900, train: 90000, upg: 10500000, mirc: 27, time: '5d7h', diamond: 2849, ticket: 508, exp: 119 },
        { lv: 13, hp: 56700, dmg: 1414, perDmg: 1080, burnDmg: 3264, deathDmg: 6300, train: 85000, upg: 10000000, mirc: 26, time: '5d5h', diamond: 2972, ticket: 500, exp: 117 },
        { lv: 12, hp: 53000, dmg: 1287, perDmg: 990, burnDmg: 2970, deathDmg: 5700, train: 80000, upg: 9500000, mirc: 25, time: '5d3h', diamond: 2901, ticket: 492, exp: 115 },
        { lv: 11, hp: 49500, dmg: 1175.2, perDmg: 904, burnDmg: 2712, deathDmg: 5190, train: 75000, upg: 9100000, mirc: 24, time: '5d1h', diamond: 2830, ticket: 484, exp: 113 },
        { lv: 10, hp: 46000, dmg: 1071.2, perDmg: 824, burnDmg: 2472, deathDmg: 4700, train: 70000, upg: 8700000, mirc: 23, time: '4d23h', diamond: 2754, ticket: 476, exp: 111 },
        { lv: 9, hp: 43000, dmg: 975, perDmg: 750, burnDmg: 2250, deathDmg: 4290, train: 65000, upg: 8300000, mirc: 21, time: '4d21h', diamond: 2681, ticket: 468, exp: 109 },
        { lv: 8, hp: 40000, dmg: 886.6, perDmg: 682, burnDmg: 2046, deathDmg: 3900, train: 60000, upg: 8000000, mirc: 20, time: '4d19h', diamond: 2621, ticket: 460, exp: 107 },
        { lv: 7, hp: 37500, dmg: 806, perDmg: 620, burnDmg: 1860, deathDmg: 3540, train: 55000, upg: 7600000, mirc: 20, time: '4d17h', diamond: 2545, ticket: 452, exp: 107 },
        { lv: 6, hp: 35000, dmg: 733.2, perDmg: 564, burnDmg: 1692, deathDmg: 3220, train: 50000, upg: 7200000, mirc: 19, time: '4d16h', diamond: 2470, ticket: 448, exp: 105 },
        { lv: 5, hp: 32800, dmg: 665.6, perDmg: 512, burnDmg: 1536, deathDmg: 2930, train: 45000, upg: 7100000, mirc: 19, time: '4d14h', diamond: 2445, ticket: 440, exp: 105 },
        { lv: 4, hp: 30600, dmg: 605.8, perDmg: 466, burnDmg: 1398, deathDmg: 2660, train: 40000, upg: 6500000, mirc: 19, time: '4d12h', diamond: 2333, ticket: 432, exp: 105 },
        { lv: 3, hp: 28600, dmg: 551.2, perDmg: 424, burnDmg: 1272, deathDmg: 2420, train: 35000, upg: 5900000, mirc: 18, time: '4d10h', diamond: 2216, ticket: 424, exp: 102 },
        { lv: 2, hp: 26800, dmg: 500.5, perDmg: 385, burnDmg: 1155, deathDmg: 2200, train: 30000, upg: 5400000, mirc: 18, time: '4d6h', diamond: 2104, ticket: 408, exp: 102 },
        { lv: 1, hp: 25000, dmg: 455, perDmg: 350, burnDmg: 1050, deathDmg: 2000, train: 25000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 1, cap: 11, token: '/', tech: 5 },
        { no: 2, lv: 3, cap: 13, token: 135500, tech: 10 },
        { no: 3, lv: 5, cap: 15, token: 164000, tech: 15 },
        { no: 4, lv: 7, cap: 18, token: 198500, tech: 20 },
        { no: 5, lv: 9, cap: 20, token: 270000, tech: 25 }
    ]
};