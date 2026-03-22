// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['迫击炮手'] = {
    name: '迫击炮手',
    img: 'images/兵种/普通兵种/Bombardier.webp',
    desc: '迫击炮手能够在极远的距离抛射高爆炮弹，轻松摧毁敌方纵深的防御建筑！不过由于身板非常脆弱，请务必在前排布置肉盾部队来保护他们。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '8' },
        { label: '训练时间', val: '15m' },
        { label: '移动速度', val: '中等/200' },
        { label: '攻击范围', val: '超远程/12' },
        { label: '攻击速度', val: '2.2s' },
        { label: '溅射半径', val: '1' },
        { label: '需要大本等级', val: '21' }
    ],
    // 等级数据表
    levels: [
        { lv: 9, hp: 875, dmg: 2800, perDmg: 6160, train: 55000, upg: 10500000, mirc: 28, time: '5d2h', diamond: 3048, ticket: 488, exp: 119 },
        { lv: 8, hp: 810, dmg: 2500, perDmg: 5500, train: 50000, upg: 10000000, mirc: 27, time: '5d', diamond: 2742, ticket: 480, exp: 116 },
        { lv: 7, hp: 750, dmg: 2300, perDmg: 5060, train: 45000, upg: 9500000, mirc: 26, time: '4d22h', diamond: 2853, ticket: 472, exp: 113 },
        { lv: 6, hp: 700, dmg: 2100, perDmg: 4620, train: 40000, upg: 9000000, mirc: 25, time: '4d20h', diamond: 2785, ticket: 464, exp: 113 },
        { lv: 5, hp: 600, dmg: 1900, perDmg: 4180, train: 35000, upg: 8500000, mirc: 23, time: '4d18h', diamond: 2692, ticket: 456, exp: 110 },
        { lv: 4, hp: 500, dmg: 1700, perDmg: 3740, train: 30000, upg: 8000000, mirc: 23, time: '4d16h', diamond: 2603, ticket: 448, exp: 107 },
        { lv: 3, hp: 380, dmg: 1500, perDmg: 3300, train: 25000, upg: 7500000, mirc: 22, time: '4d14h', diamond: 2509, ticket: 440, exp: 105 },
        { lv: 2, hp: 300, dmg: 1300, perDmg: 2860, train: 20000, upg: 7500000, mirc: 21, time: '4d12h', diamond: 2498, ticket: 432, exp: 103 },
        { lv: 1, hp: 250, dmg: 1100, perDmg: 2420, train: 17000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 1, cap: 28, token: '/', tech: 5 },
        { no: 2, lv: 2, cap: 34, token: 135500, tech: 10 },
        { no: 3, lv: 3, cap: 40, token: 164000, tech: 15 },
        { no: 4, lv: 4, cap: 46, token: 198500, tech: 20 },
        { no: 5, lv: 5, cap: 52, token: 270000, tech: 25 }
    ]
};