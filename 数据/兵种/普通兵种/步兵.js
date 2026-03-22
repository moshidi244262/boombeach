// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
// 这里的 "步兵" 必须和 index.html 里 dbData 中的 name 保持完全一致
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['步兵'] = {
    name: '步兵',
    img: 'images/兵种/普通兵种/RiflemanD.webp',
    desc: '步兵们已整装待发！作为基础的地面部队，步兵的生命值和攻击力都属于中等水平。如果施以人海战术，步兵们几乎势不可挡。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '1' },
        { label: '训练时间', val: '10s' },
        { label: '移动速度', val: '中等/220' },
        { label: '攻击范围', val: '中程/4.7' },
        { label: '攻击速度', val: '1s' },
        { label: '需要大本等级', val: '1' }
    ],
    // 等级数据表 (已全面核对并整合步兵.txt中的所有数据，包含升级时间 time 字段)
    levels: [
        { lv: 28, hp: 865, dmg: 252, train: 2400, upg: 8500000, mirc: 28, time: '3d9h', diamond: 2492, ticket: 324, exp: 103 },
        { lv: 27, hp: 808, dmg: 233, train: 2200, upg: 8000000, mirc: 27, time: '3d7h', diamond: 2242, ticket: 316, exp: 101 },
        { lv: 26, hp: 755, dmg: 215, train: 2000, upg: 7500000, mirc: 26, time: '3d5h', diamond: 2295, ticket: 308, exp: 99 },
        { lv: 25, hp: 706, dmg: 199, train: 1900, upg: 7000000, mirc: 25, time: '3d3h', diamond: 2212, ticket: 300, exp: 97 },
        { lv: 24, hp: 662, dmg: 184, train: 1800, upg: 6500000, mirc: 24, time: '3d1h', diamond: 2115, ticket: 292, exp: 95 },
        { lv: 23, hp: 620, dmg: 170, train: 1700, upg: 6000000, mirc: 23, time: '2d23h', diamond: 2017, ticket: 284, exp: 93 },
        { lv: 22, hp: 580, dmg: 157, train: 1600, upg: 5500000, mirc: 21, time: '2d21h', diamond: 1916, ticket: 276, exp: 91 },
        { lv: 21, hp: 542, dmg: 145, train: 1500, upg: 5100000, mirc: 20, time: '2d19h', diamond: 1832, ticket: 268, exp: 89 },
        { lv: 20, hp: 506, dmg: 134, train: 1400, upg: 4400000, mirc: 19, time: '2d17h', diamond: 1690, ticket: 260, exp: 87 },
        { lv: 19, hp: 473, dmg: 124, train: 1300, upg: 3800000, mirc: 18, time: '2d13h', diamond: 1549, ticket: 244, exp: 84 },
        { lv: 18, hp: 442, dmg: 115, train: 1200, upg: 3200000, mirc: 17, time: '2d11h', diamond: 1417, ticket: 236, exp: 83 },
        { lv: 17, hp: 413, dmg: 106, train: 1100, upg: 2850000, mirc: 16, time: '2d5h', diamond: 1304, ticket: 212, exp: 78 },
        { lv: 16, hp: 386, dmg: 98, train: 1000, upg: 2480000, mirc: 15, time: '2d3h', diamond: 1211, ticket: 204, exp: 78 },
        { lv: 15, hp: 361, dmg: 90, train: 900, upg: 1800000, mirc: 14, time: '2d', diamond: 1038, ticket: 192, exp: 74 },
        { lv: 14, hp: 337, dmg: 84, train: 800, upg: 1500000, mirc: 13, time: '1d15h', diamond: 901, ticket: 156, exp: 67 },
        { lv: 13, hp: 314, dmg: 77, train: 700, upg: 1320000, mirc: 12, time: '1d12h', diamond: 832, ticket: 144, exp: 67 },
        { lv: 12, hp: 295, dmg: 71, train: 600, upg: 970000, mirc: 11, time: '1d9h', diamond: 716, ticket: 132, exp: 61 },
        { lv: 11, hp: 275, dmg: 66, train: 500, upg: 710000, mirc: 10, time: '1d4h', diamond: 602, ticket: 112, exp: 55 },
        { lv: 10, hp: 257, dmg: 61, train: 450, upg: 630000, mirc: 9, time: '1d1h', diamond: 552, ticket: 100, exp: 52 },
        { lv: 9, hp: 241, dmg: 56, train: 400, upg: 540000, mirc: 8, time: '1d', diamond: 517, ticket: 96, exp: 52 },
        { lv: 8, hp: 225, dmg: 52, train: 350, upg: 370000, mirc: 7, time: '22h', diamond: 444, ticket: 88, exp: 50 },
        { lv: 7, hp: 210, dmg: 48, train: 300, upg: 236000, mirc: 6, time: '17h', diamond: 349, ticket: 68, exp: 43 },
        { lv: 6, hp: 196, dmg: 44, train: 250, upg: 140000, mirc: 5, time: '12h', diamond: 261, ticket: 48, exp: 37 },
        { lv: 5, hp: 184, dmg: 41, train: 200, upg: 83000, mirc: 4, time: '8h', diamond: 190, ticket: 32, exp: 30 },
        { lv: 4, hp: 172, dmg: 38, train: 150, upg: 42000, mirc: 3, time: '6h', diamond: 138, ticket: 24, exp: 24 },
        { lv: 3, hp: 160, dmg: 35, train: 100, upg: 19500, mirc: 2, time: '3h', diamond: 79, ticket: 12, exp: 17 },
        { lv: 2, hp: 150, dmg: 32, train: 50, upg: 9500, mirc: 1, time: '2h', diamond: 56, ticket: 8, exp: 14 },
        { lv: 1, hp: 140, dmg: 30, train: 20, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 8, cap: 224, token: '/', tech: 5 },
        { no: 2, lv: 12, cap: 272, token: 58000, tech: 10 },
        { no: 3, lv: 16, cap: 320, token: 84500, tech: 15 },
        { no: 4, lv: 18, cap: 368, token: 112500, tech: 20 },
        { no: 5, lv: 22, cap: 416, token: 165000, tech: 25 }
    ]
};