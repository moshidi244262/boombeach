// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['极冻先锋'] = {
    name: '极冻先锋',
    img: 'images/兵种/普通兵种/Cryoneer.webp',
    desc: '极冻先锋的极冻光束能减缓敌军防御建筑的攻击速度。但要小心，她的光束不受控制时也会误伤并冻结友军部队！',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '4' },
        { label: '训练时间', val: '8m' },
        { label: '移动速度', val: '中等/250' },
        { label: '攻击范围', val: '中程/6' },
        { label: '减速/冻结', val: '50% / 5s' },
        { label: '需要大本等级', val: '20' }
    ],
    // 等级数据表 (包含专属字段 extend: 延伸)
    levels: [
        { lv: 14, hp: 2136, dmg: 57, perDmg: 13.57, extend: '86%[7.168]', train: 20000, upg: 9800000, mirc: 28, time: '5d4h', diamond: 2952, ticket: 488, exp: 122 },
        { lv: 13, hp: 1960, dmg: 54, perDmg: 12.9, extend: '79%[6.912]', train: 19000, upg: 9600000, mirc: 27, time: '5d2h', diamond: 2688, ticket: 480, exp: 120 },
        { lv: 12, hp: 1800, dmg: 52, perDmg: 12.3, extend: '73%[6.656]', train: 18000, upg: 9400000, mirc: 26, time: '5d', diamond: 2852, ticket: 480, exp: 118 },
        { lv: 11, hp: 1652, dmg: 49, perDmg: 11.7, extend: '66%[6.4]', train: 17000, upg: 9200000, mirc: 25, time: '4d22h', diamond: 2826, ticket: 472, exp: 116 },
        { lv: 10, hp: 1519, dmg: 47, perDmg: 11.1, extend: '54%[6.144]', train: 16000, upg: 9000000, mirc: 24, time: '4d20h', diamond: 2785, ticket: 464, exp: 114 },
        { lv: 9, hp: 1395, dmg: 44, perDmg: 10.57, extend: '48%[5.888]', train: 15000, upg: 8800000, mirc: 23, time: '4d18h', diamond: 2740, ticket: 456, exp: 112 },
        { lv: 8, hp: 1280, dmg: 42, perDmg: 10.05, extend: '42%[5.632]', train: 14000, upg: 8600000, mirc: 22, time: '4d16h', diamond: 2699, ticket: 448, exp: 110 },
        { lv: 7, hp: 1174, dmg: 40, perDmg: 9.52, extend: '36%[5.376]', train: 13000, upg: 8400000, mirc: 21, time: '4d14h', diamond: 2654, ticket: 440, exp: 108 },
        { lv: 6, hp: 1077, dmg: 38, perDmg: 9.07, extend: '33%[5.12]', train: 12000, upg: 8200000, mirc: 20, time: '4d12h', diamond: 2610, ticket: 432, exp: 106 },
        { lv: 5, hp: 988, dmg: 36, perDmg: 8.62, extend: '26%[4.864]', train: 11000, upg: 8000000, mirc: 20, time: '4d10h', diamond: 2567, ticket: 424, exp: 104 },
        { lv: 4, hp: 907, dmg: 35, perDmg: 8.25, extend: '19%[4.608]', train: 10000, upg: 7800000, mirc: 20, time: '4d8h', diamond: 2523, ticket: 416, exp: 102 },
        { lv: 3, hp: 832, dmg: 33, perDmg: 7.87, extend: '13%[4.352]', train: 9000, upg: 7600000, mirc: 20, time: '4d6h', diamond: 2480, ticket: 408, exp: 101 },
        { lv: 2, hp: 763, dmg: 31, perDmg: 7.5, extend: '6%[4.096]', train: 8000, upg: 7400000, mirc: 20, time: '4d4h', diamond: 2435, ticket: 400, exp: 100 },
        { lv: 1, hp: 700, dmg: 30, perDmg: 7.12, extend: '0%[3.84]', train: 7000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 1, cap: 38, token: '/', tech: 5 },
        { no: 2, lv: 3, cap: 46, token: 89000, tech: 10 },
        { no: 3, lv: 5, cap: 54, token: 108000, tech: 15 },
        { no: 4, lv: 8, cap: 62, token: 153500, tech: 20 },
        { no: 5, lv: 12, cap: 70, token: 225000, tech: 25 }
    ]
};