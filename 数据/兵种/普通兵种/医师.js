// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['医师'] = {
    name: '医师',
    img: 'images/兵种/普通兵种/Medicc.webp',
    desc: '医师在战场上不会进行任何攻击，而是全心全意地向受伤的友军抛洒急救包。他们是维持前排部队生存能力的核心关键！',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '5' },
        { label: '训练时间', val: '10m' },
        { label: '移动速度', val: '中等/270' },
        { label: '治愈范围', val: '近程/4-8' },
        { label: '治愈速度', val: '0.6s' },
        { label: '治愈类型', val: '泼洒' },
        { label: '需要大本等级', val: '15' }
    ],
    // 等级数据表 (为了兼容已有的前端表格代码，'每秒治疗' 同时映射到了 dmg 字段)
    levels: [
        { lv: 19, hp: 2282, dmg: 38, heal: 38, train: 20000, upg: 9200000, mirc: 28, time: '4d16h', diamond: 2792, ticket: 448, exp: 130 },
        { lv: 18, hp: 2098, dmg: 37, heal: 37, train: 19000, upg: 8900000, mirc: 27, time: '4d14h', diamond: 2526, ticket: 440, exp: 128 },
        { lv: 17, hp: 1928, dmg: 36, heal: 36, train: 18000, upg: 8600000, mirc: 26, time: '4d12h', diamond: 2661, ticket: 432, exp: 126 },
        { lv: 16, hp: 1772, dmg: 35, heal: 35, train: 17000, upg: 8300000, mirc: 25, time: '4d10h', diamond: 2615, ticket: 424, exp: 124 },
        { lv: 15, hp: 1630, dmg: 34, heal: 34, train: 16000, upg: 7900000, mirc: 24, time: '4d8h', diamond: 2538, ticket: 416, exp: 122 },
        { lv: 14, hp: 1498, dmg: 33, heal: 33, train: 15000, upg: 7500000, mirc: 23, time: '4d6h', diamond: 2462, ticket: 408, exp: 120 },
        { lv: 13, hp: 1376, dmg: 32, heal: 32, train: 14000, upg: 7100000, mirc: 22, time: '4d4h', diamond: 2385, ticket: 400, exp: 118 },
        { lv: 12, hp: 1264, dmg: 31, heal: 31, train: 13000, upg: 6600000, mirc: 21, time: '4d2h', diamond: 2290, ticket: 392, exp: 116 },
        { lv: 11, hp: 1162, dmg: 30, heal: 30, train: 12000, upg: 6400000, mirc: 20, time: '4d1h', diamond: 2249, ticket: 388, exp: 114 },
        { lv: 10, hp: 1068, dmg: 29, heal: 29, train: 11000, upg: 6100000, mirc: 20, time: '4d', diamond: 2191, ticket: 384, exp: 114 },
        { lv: 9, hp: 982, dmg: 28, heal: 28, train: 10000, upg: 5300000, mirc: 19, time: '3d23h', diamond: 2045, ticket: 380, exp: 112 },
        { lv: 8, hp: 902, dmg: 27, heal: 27, train: 9000, upg: 4800000, mirc: 18, time: '3d18h', diamond: 1923, ticket: 360, exp: 106 },
        { lv: 7, hp: 829, dmg: 26, heal: 26, train: 8000, upg: 4500000, mirc: 18, time: '3d17h', diamond: 1863, ticket: 356, exp: 106 },
        { lv: 6, hp: 762, dmg: 25, heal: 25, train: 7500, upg: 3800000, mirc: 17, time: '3d15h', diamond: 1717, ticket: 348, exp: 102 },
        { lv: 5, hp: 701, dmg: 24, heal: 24, train: 7000, upg: 3400000, mirc: 16, time: '3d5h', diamond: 1575, ticket: 308, exp: 91 },
        { lv: 4, hp: 644, dmg: 23, heal: 23, train: 6500, upg: 3300000, mirc: 15, time: '3d3h', diamond: 1544, ticket: 300, exp: 91 },
        { lv: 3, hp: 592, dmg: 22, heal: 22, train: 6000, upg: 2740000, mirc: 15, time: '3d1h', diamond: 1413, ticket: 292, exp: 91 },
        { lv: 2, hp: 544, dmg: 21, heal: 21, train: 5500, upg: 1680000, mirc: 14, time: '2d22h', diamond: 1161, ticket: 280, exp: 83 },
        { lv: 1, hp: 500, dmg: 20, heal: 20, train: 5000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 2, cap: 45, token: '/', tech: 5 },
        { no: 2, lv: 5, cap: 55, token: 98000, tech: 10 },
        { no: 3, lv: 7, cap: 64, token: 118500, tech: 15 },
        { no: 4, lv: 10, cap: 74, token: 169000, tech: 20 },
        { no: 5, lv: 13, cap: 84, token: 225000, tech: 25 }
    ]
};