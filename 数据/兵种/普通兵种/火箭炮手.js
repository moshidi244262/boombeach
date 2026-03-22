// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
// 这里的 "火箭炮手" 必须和 index.html 里 dbData 中的 name 保持完全一致
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['火箭炮手'] = {
    name: '火箭炮手',
    img: 'images/兵种/普通兵种/ZookaD.webp',
    desc: '火箭炮手能造成巨大的范围伤害，但由于缺乏护甲导致生命值非常脆弱。在战场上一定要在她前方部署重型部队来吸收敌方伤害！',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '2' },
        { label: '训练时间', val: '4m' },
        { label: '移动速度', val: '慢/180' },
        { label: '攻击范围', val: '远程/7.2' },
        { label: '攻击速度', val: '2s' },
        { label: '需要大本等级', val: '5' }
    ],
    // 等级数据表 (已全面核对并整合，包含升级时间 time 字段)
    levels: [
        { lv: 27, hp: 447, dmg: 824, train: 4800, upg: 9900000, mirc: 28, time: '4d6h', diamond: 2841, ticket: 408, exp: 115 },
        { lv: 26, hp: 411, dmg: 770, train: 4600, upg: 9300000, mirc: 27, time: '4d4h', diamond: 2545, ticket: 400, exp: 113 },
        { lv: 25, hp: 378, dmg: 720, train: 4400, upg: 8700000, mirc: 26, time: '4d2h', diamond: 2616, ticket: 392, exp: 111 },
        { lv: 24, hp: 348, dmg: 673, train: 4200, upg: 8100000, mirc: 25, time: '4d', diamond: 2523, ticket: 384, exp: 109 },
        { lv: 23, hp: 320, dmg: 628, train: 4000, upg: 7600000, mirc: 24, time: '3d22h', diamond: 2432, ticket: 376, exp: 107 },
        { lv: 22, hp: 294, dmg: 583, train: 3800, upg: 7100000, mirc: 23, time: '3d20h', diamond: 2337, ticket: 368, exp: 105 },
        { lv: 21, hp: 270, dmg: 538, train: 3600, upg: 6600000, mirc: 21, time: '3d18h', diamond: 2240, ticket: 360, exp: 103 },
        { lv: 20, hp: 248, dmg: 489, train: 3400, upg: 6100000, mirc: 20, time: '3d16h', diamond: 2142, ticket: 352, exp: 101 },
        { lv: 19, hp: 228, dmg: 445, train: 3200, upg: 5300000, mirc: 19, time: '3d14h', diamond: 1989, ticket: 344, exp: 100 },
        { lv: 18, hp: 210, dmg: 404, train: 3000, upg: 4500000, mirc: 18, time: '3d10h', diamond: 1819, ticket: 328, exp: 97 },
        { lv: 17, hp: 193, dmg: 368, train: 2800, upg: 3800000, mirc: 17, time: '3d7h', diamond: 1667, ticket: 316, exp: 96 },
        { lv: 16, hp: 177, dmg: 334, train: 2600, upg: 3400000, mirc: 16, time: '2d22h', diamond: 1530, ticket: 280, exp: 91 },
        { lv: 15, hp: 163, dmg: 304, train: 2400, upg: 2970000, mirc: 15, time: '2d19h', diamond: 1423, ticket: 268, exp: 91 },
        { lv: 14, hp: 150, dmg: 276, train: 2200, upg: 2160000, mirc: 14, time: '2d16h', diamond: 1231, ticket: 256, exp: 86 },
        { lv: 13, hp: 138, dmg: 251, train: 2000, upg: 1800000, mirc: 13, time: '2d3h', diamond: 1060, ticket: 204, exp: 77 },
        { lv: 12, hp: 126, dmg: 228, train: 1800, upg: 1590000, mirc: 12, time: '2d', diamond: 988, ticket: 192, exp: 77 },
        { lv: 11, hp: 116, dmg: 207, train: 1600, upg: 1160000, mirc: 11, time: '1d20h', diamond: 852, ticket: 176, exp: 71 },
        { lv: 10, hp: 107, dmg: 189, train: 1450, upg: 850000, mirc: 10, time: '1d13h', diamond: 714, ticket: 148, exp: 64 },
        { lv: 9, hp: 98, dmg: 171, train: 1300, upg: 760000, mirc: 9, time: '1d9h', diamond: 656, ticket: 132, exp: 60 },
        { lv: 8, hp: 90, dmg: 156, train: 1150, upg: 650000, mirc: 8, time: '1d7h', diamond: 608, ticket: 124, exp: 60 },
        { lv: 7, hp: 83, dmg: 142, train: 1000, upg: 450000, mirc: 7, time: '1d6h', diamond: 538, ticket: 120, exp: 57 },
        { lv: 6, hp: 76, dmg: 129, train: 850, upg: 284000, mirc: 6, time: '22h', diamond: 413, ticket: 88, exp: 50 },
        { lv: 5, hp: 70, dmg: 117, train: 700, upg: 168000, mirc: 5, time: '16h', diamond: 313, ticket: 64, exp: 42 },
        { lv: 4, hp: 67, dmg: 106, train: 550, upg: 99000, mirc: 4, time: '11h', diamond: 232, ticket: 44, exp: 34 },
        { lv: 3, hp: 59, dmg: 97, train: 450, upg: 46000, mirc: 3, time: '8h', diamond: 164, ticket: 32, exp: 30 },
        { lv: 2, hp: 54, dmg: 88, train: 330, upg: 17100, mirc: 2, time: '4h', diamond: 92, ticket: 16, exp: 20 },
        { lv: 1, hp: 50, dmg: 80, train: 220, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 7, cap: 112, token: '/', tech: 5 },
        { no: 2, lv: 12, cap: 136, token: 82500, tech: 10 },
        { no: 3, lv: 15, cap: 160, token: 110000, tech: 15 },
        { no: 4, lv: 17, cap: 184, token: 133000, tech: 20 },
        { no: 5, lv: 21, cap: 208, token: 210000, tech: 25 }
    ]
};