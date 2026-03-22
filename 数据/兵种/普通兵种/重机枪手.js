// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
// 这里的 "重机枪手" 必须和 index.html 里 dbData 中的 name 保持完全一致
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['重机枪手'] = {
    name: '重机枪手',
    img: 'images/兵种/普通兵种/HeavyD.webp',
    desc: '重机枪手拥有高额的生命值，是吸收伤害的绝佳肉盾，为其他部队提供可靠的掩护。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '4' },
        { label: '训练时间', val: '360s' },
        { label: '移动速度', val: '中等/230' },
        { label: '攻击范围', val: '近程/3.3-7' },
        { label: '攻击速度', val: '0.1s' },
        { label: '需要大本等级', val: '2' }
    ],
    // 等级数据表
    levels: [
        { lv: 28, hp: 8018, dmg: 221, train: 12000, upg: 10500000, mirc: 28, time: '3d17h', diamond: 2853, ticket: 356, exp: 108 },
        { lv: 27, hp: 7419, dmg: 206, train: 11000, upg: 9800000, mirc: 27, time: '3d15h', diamond: 2560, ticket: 348, exp: 106 },
        { lv: 26, hp: 6814, dmg: 192, train: 10000, upg: 9100000, mirc: 26, time: '3d13h', diamond: 2600, ticket: 340, exp: 104 },
        { lv: 25, hp: 6351, dmg: 179, train: 9500, upg: 8400000, mirc: 25, time: '3d11h', diamond: 2489, ticket: 332, exp: 102 },
        { lv: 24, hp: 5876, dmg: 167, train: 9000, upg: 7700000, mirc: 24, time: '3d9h', diamond: 2364, ticket: 324, exp: 100 },
        { lv: 23, hp: 5438, dmg: 155, train: 8500, upg: 7000000, mirc: 23, time: '3d7h', diamond: 2237, ticket: 316, exp: 98 },
        { lv: 22, hp: 5034, dmg: 144, train: 8000, upg: 6300000, mirc: 21, time: '3d5h', diamond: 2109, ticket: 308, exp: 96 },
        { lv: 21, hp: 4661, dmg: 133, train: 7500, upg: 5700000, mirc: 20, time: '3d3h', diamond: 1989, ticket: 300, exp: 94 },
        { lv: 20, hp: 4316, dmg: 123, train: 7000, upg: 5000000, mirc: 19, time: '3d1h', diamond: 1690, ticket: 292, exp: 92 },
        { lv: 19, hp: 3996, dmg: 113, train: 6500, upg: 4300000, mirc: 18, time: '2d22h', diamond: 1705, ticket: 280, exp: 90 },
        { lv: 18, hp: 3700, dmg: 104, train: 6000, upg: 3600000, mirc: 17, time: '2d19h', diamond: 1551, ticket: 268, exp: 88 },
        { lv: 17, hp: 3426, dmg: 96, train: 5600, upg: 3200000, mirc: 16, time: '2d12h', diamond: 1425, ticket: 240, exp: 83 },
        { lv: 16, hp: 3172, dmg: 88, train: 5200, upg: 2810000, mirc: 15, time: '2d10h', diamond: 1332, ticket: 232, exp: 83 },
        { lv: 15, hp: 2937, dmg: 81, train: 4800, upg: 2040000, mirc: 14, time: '2d6h', diamond: 1136, ticket: 216, exp: 80 },
        { lv: 14, hp: 2720, dmg: 75, train: 4400, upg: 1700000, mirc: 13, time: '1d20h', diamond: 984, ticket: 176, exp: 71 },
        { lv: 13, hp: 2518, dmg: 69, train: 4000, upg: 1500000, mirc: 12, time: '1d17h', diamond: 915, ticket: 164, exp: 71 },
        { lv: 12, hp: 2332, dmg: 64, train: 3600, upg: 1100000, mirc: 11, time: '1d13h', diamond: 783, ticket: 148, exp: 66 },
        { lv: 11, hp: 2159, dmg: 59, train: 3200, upg: 800000, mirc: 10, time: '1d8h', diamond: 660, ticket: 128, exp: 59 },
        { lv: 10, hp: 1999, dmg: 54, train: 2800, upg: 720000, mirc: 9, time: '1d1h', diamond: 552, ticket: 100, exp: 52 },
        { lv: 9, hp: 1851, dmg: 50, train: 2400, upg: 610000, mirc: 8, time: '1d3h', diamond: 565, ticket: 108, exp: 56 },
        { lv: 8, hp: 1714, dmg: 46, train: 2000, upg: 420000, mirc: 7, time: '1d1h', diamond: 486, ticket: 100, exp: 52 },
        { lv: 7, hp: 1587, dmg: 42, train: 1700, upg: 268000, mirc: 6, time: '19h', diamond: 380, ticket: 76, exp: 45 },
        { lv: 6, hp: 1469, dmg: 39, train: 1400, upg: 159000, mirc: 5, time: '14h', diamond: 289, ticket: 56, exp: 38 },
        { lv: 5, hp: 1360, dmg: 36, train: 1100, upg: 94000, mirc: 4, time: '9h', diamond: 208, ticket: 36, exp: 33 },
        { lv: 4, hp: 1260, dmg: 33, train: 900, upg: 47000, mirc: 3, time: '7h', diamond: 154, ticket: 28, exp: 26 },
        { lv: 3, hp: 1166, dmg: 31, train: 700, upg: 21800, mirc: 2, time: '4h', diamond: 96, ticket: 16, exp: 20 },
        { lv: 2, hp: 1080, dmg: 28, train: 500, upg: 10400, mirc: 1, time: '3h', diamond: 70, ticket: 12, exp: 17 },
        { lv: 1, hp: 1000, dmg: 26, train: 300, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 8, cap: 56, token: '/', tech: 5 },
        { no: 2, lv: 12, cap: 68, token: 63500, tech: 10 },
        { no: 3, lv: 16, cap: 80, token: 93000, tech: 15 },
        { no: 4, lv: 18, cap: 92, token: 123000, tech: 20 },
        { no: 5, lv: 22, cap: 104, token: 180000, tech: 25 }
    ]
};