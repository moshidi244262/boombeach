// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['坦克'] = {
    name: '坦克',
    img: 'images/兵种/普通兵种/Tanknew.webp',
    desc: '坦克是血量高、射程远但移动缓慢的重型装甲部队。它们能从远处平推敌人的防御网络，不过需要注意的是，每次部署坦克都需要消耗额外的战舰能量！',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '8' },
        { label: '训练时间', val: '24m' },
        { label: '移动速度', val: '慢/150' },
        { label: '攻击范围', val: '远程/8.2' },
        { label: '攻击速度', val: '3.5s' },
        { label: '需要大本等级', val: '11' }
    ],
    // 等级数据表
    levels: [
        { lv: 23, hp: 10340, dmg: 889, train: 30000, upg: 9100000, mirc: 28, time: '5d7h', diamond: 2864, ticket: 512, exp: 130 },
        { lv: 22, hp: 9600, dmg: 823, train: 29000, upg: 8900000, mirc: 27, time: '5d3h', diamond: 2592, ticket: 496, exp: 128 },
        { lv: 21, hp: 8910, dmg: 762, train: 28000, upg: 8700000, mirc: 26, time: '5d1h', diamond: 2759, ticket: 488, exp: 126 },
        { lv: 20, hp: 8270, dmg: 706, train: 27000, upg: 8500000, mirc: 25, time: '5d1h', diamond: 2733, ticket: 484, exp: 124 },
        { lv: 19, hp: 7700, dmg: 654, train: 26000, upg: 8300000, mirc: 24, time: '4d23h', diamond: 2692, ticket: 476, exp: 122 },
        { lv: 18, hp: 7160, dmg: 604, train: 25000, upg: 8100000, mirc: 23, time: '4d21h', diamond: 2648, ticket: 468, exp: 120 },
        { lv: 17, hp: 6650, dmg: 556, train: 24000, upg: 7900000, mirc: 22, time: '4d19h', diamond: 2603, ticket: 460, exp: 118 },
        { lv: 16, hp: 6170, dmg: 510, train: 23000, upg: 7700000, mirc: 21, time: '4d17h', diamond: 2559, ticket: 452, exp: 116 },
        { lv: 15, hp: 5720, dmg: 468, train: 22000, upg: 7600000, mirc: 20, time: '4d15h', diamond: 2534, ticket: 444, exp: 114 },
        { lv: 14, hp: 5310, dmg: 429, train: 21000, upg: 7500000, mirc: 20, time: '4d12h', diamond: 2498, ticket: 432, exp: 114 },
        { lv: 13, hp: 4930, dmg: 394, train: 20000, upg: 7400000, mirc: 19, time: '4d9h', diamond: 2466, ticket: 420, exp: 112 },
        { lv: 12, hp: 4570, dmg: 361, train: 19000, upg: 7300000, mirc: 18, time: '4d6h', diamond: 2430, ticket: 408, exp: 109 },
        { lv: 11, hp: 4240, dmg: 331, train: 18000, upg: 6300000, mirc: 17, time: '4d3h', diamond: 2243, ticket: 396, exp: 107 },
        { lv: 10, hp: 3930, dmg: 304, train: 17000, upg: 5400000, mirc: 16, time: '3d16h', diamond: 2018, ticket: 352, exp: 101 },
        { lv: 9, hp: 3650, dmg: 279, train: 16000, upg: 5200000, mirc: 15, time: '3d14h', diamond: 1972, ticket: 344, exp: 101 },
        { lv: 8, hp: 3380, dmg: 256, train: 15000, upg: 5000000, mirc: 15, time: '3d11h', diamond: 1917, ticket: 332, exp: 101 },
        { lv: 7, hp: 3140, dmg: 235, train: 14000, upg: 3900000, mirc: 14, time: '3d8h', diamond: 1691, ticket: 320, exp: 96 },
        { lv: 6, hp: 2910, dmg: 215, train: 13000, upg: 2570000, mirc: 13, time: '2d16h', diamond: 1319, ticket: 256, exp: 87 },
        { lv: 5, hp: 2700, dmg: 198, train: 12000, upg: 2480000, mirc: 12, time: '2d12h', diamond: 1273, ticket: 240, exp: 87 },
        { lv: 4, hp: 2510, dmg: 181, train: 11000, upg: 1890000, mirc: 11, time: '2d6h', diamond: 1100, ticket: 216, exp: 80 },
        { lv: 3, hp: 2320, dmg: 166, train: 10000, upg: 1030000, mirc: 10, time: '1d23h', diamond: 837, ticket: 188, exp: 72 },
        { lv: 2, hp: 2156, dmg: 153, train: 9000, upg: 620000, mirc: 9, time: '1d18h', diamond: 683, ticket: 168, exp: 68 },
        { lv: 1, hp: 2000, dmg: 140, train: 8000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 4, cap: 28, token: '/', tech: 5 },
        { no: 2, lv: 7, cap: 34, token: 86500, tech: 10 },
        { no: 3, lv: 10, cap: 40, token: 115500, tech: 15 },
        { no: 4, lv: 14, cap: 46, token: 169000, tech: 20 },
        { no: 5, lv: 17, cap: 52, token: 240000, tech: 25 }
    ]
};