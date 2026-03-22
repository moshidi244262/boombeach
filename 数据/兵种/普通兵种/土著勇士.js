// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
// 这里的 "土著勇士" 必须和 index.html 里 dbData 中的 name 保持完全一致
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['土著勇士'] = {
    name: '土著勇士',
    img: 'images/兵种/普通兵种/WarriorD.webp',
    desc: '土著勇士是无所畏惧的近战战士，移动速度极快。他们的每一次水晶战锤攻击不仅能对敌方建筑造成伤害，还能为自己恢复生命值！非常适合配合烟雾弹直捣黄龙。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '3' },
        { label: '训练时间', val: '3m' },
        { label: '移动速度', val: '快/300' },
        { label: '攻击范围', val: '近程/0.9' },
        { label: '攻击速度', val: '1s' },
        { label: '需要大本等级', val: '8' }
    ],
    // 等级数据表 (已全面核对并整合，包含 time 及特有的 heal 字段)
    levels: [
        { lv: 26, hp: 1690, dmg: 663, heal: 90, train: 5800, upg: 10500000, mirc: 28, time: '4d8h', diamond: 2944, ticket: 416, exp: 117 },
        { lv: 25, hp: 1550, dmg: 625, heal: 88, train: 5600, upg: 10000000, mirc: 27, time: '4d6h', diamond: 2662, ticket: 408, exp: 115 },
        { lv: 24, hp: 1473, dmg: 590, heal: 86, train: 5400, upg: 9500000, mirc: 26, time: '4d4h', diamond: 2751, ticket: 400, exp: 113 },
        { lv: 23, hp: 1399, dmg: 557, heal: 84, train: 5200, upg: 9000000, mirc: 25, time: '4d2h', diamond: 2680, ticket: 392, exp: 111 },
        { lv: 22, hp: 1327, dmg: 525, heal: 82, train: 5000, upg: 8500000, mirc: 24, time: '4d', diamond: 2585, ticket: 384, exp: 109 },
        { lv: 21, hp: 1257, dmg: 495, heal: 80, train: 4800, upg: 8000000, mirc: 23, time: '3d22h', diamond: 2497, ticket: 376, exp: 107 },
        { lv: 20, hp: 1189, dmg: 467, heal: 78, train: 4600, upg: 7500000, mirc: 22, time: '3d20h', diamond: 2401, ticket: 368, exp: 105 },
        { lv: 19, hp: 1123, dmg: 441, heal: 76, train: 4400, upg: 7000000, mirc: 21, time: '3d18h', diamond: 2306, ticket: 360, exp: 103 },
        { lv: 18, hp: 1060, dmg: 417, heal: 74, train: 4200, upg: 6400000, mirc: 20, time: '3d16h', diamond: 2193, ticket: 352, exp: 101 },
        { lv: 17, hp: 1001, dmg: 394, heal: 72, train: 4000, upg: 5600000, mirc: 19, time: '3d14h', diamond: 2042, ticket: 344, exp: 100 },
        { lv: 16, hp: 945, dmg: 373, heal: 70, train: 3800, upg: 4800000, mirc: 18, time: '3d10h', diamond: 1873, ticket: 328, exp: 97 },
        { lv: 15, hp: 892, dmg: 352, heal: 68, train: 3600, upg: 4500000, mirc: 17, time: '3d7h', diamond: 1800, ticket: 316, exp: 96 },
        { lv: 14, hp: 843, dmg: 333, heal: 66, train: 3400, upg: 4000000, mirc: 17, time: '3d4h', diamond: 1689, ticket: 304, exp: 96 },
        { lv: 13, hp: 796, dmg: 315, heal: 64, train: 3200, upg: 3600000, mirc: 16, time: '2d22h', diamond: 1571, ticket: 280, exp: 91 },
        { lv: 12, hp: 751, dmg: 297, heal: 62, train: 3300, upg: 3140000, mirc: 15, time: '2d20h', diamond: 1466, ticket: 272, exp: 91 },
        { lv: 11, hp: 710, dmg: 281, heal: 60, train: 2800, upg: 2280000, mirc: 14, time: '2d16h', diamond: 1257, ticket: 256, exp: 86 },
        { lv: 10, hp: 670, dmg: 266, heal: 58, train: 2600, upg: 1900000, mirc: 13, time: '2d3h', diamond: 1082, ticket: 204, exp: 77 },
        { lv: 9, hp: 633, dmg: 251, heal: 56, train: 2400, upg: 1680000, mirc: 12, time: '2d', diamond: 1010, ticket: 192, exp: 77 },
        { lv: 8, hp: 597, dmg: 237, heal: 54, train: 2200, upg: 1230000, mirc: 11, time: '1d20h', diamond: 870, ticket: 176, exp: 71 },
        { lv: 7, hp: 564, dmg: 224, heal: 52, train: 2000, upg: 900000, mirc: 10, time: '1d13h', diamond: 729, ticket: 148, exp: 64 },
        { lv: 6, hp: 533, dmg: 212, heal: 50, train: 1800, upg: 800000, mirc: 9, time: '1d9h', diamond: 668, ticket: 132, exp: 60 },
        { lv: 5, hp: 503, dmg: 200, heal: 48, train: 1600, upg: 680000, mirc: 8, time: '1d7h', diamond: 618, ticket: 124, exp: 60 },
        { lv: 4, hp: 475, dmg: 189, heal: 46, train: 1400, upg: 470000, mirc: 7, time: '1d6h', diamond: 545, ticket: 120, exp: 57 },
        { lv: 3, hp: 449, dmg: 179, heal: 44, train: 1200, upg: 294000, mirc: 6, time: '22h', diamond: 416, ticket: 88, exp: 50 },
        { lv: 2, hp: 424, dmg: 169, heal: 42, train: 1000, upg: 155000, mirc: 5, time: '16h', diamond: 308, ticket: 64, exp: 42 },
        { lv: 1, hp: 400, dmg: 160, heal: 40, train: 800, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 4, cap: 75, token: '/', tech: 5 },
        { no: 2, lv: 8, cap: 91, token: 57500, tech: 10 },
        { no: 3, lv: 12, cap: 107, token: 84000, tech: 15 },
        { no: 4, lv: 16, cap: 123, token: 123000, tech: 20 },
        { no: 5, lv: 20, cap: 139, token: 195000, tech: 25 }
    ]
};