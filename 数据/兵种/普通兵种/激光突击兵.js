// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['激光突击兵'] = {
    name: '激光突击兵',
    img: 'images/兵种/普通兵种/LaserRanger.webp',
    desc: '激光突击兵发射的强大激光束可以穿透一条直线上的所有建筑！调整她的站位，一举摧毁敌方密集的防御阵型吧。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '3' },
        { label: '训练时间', val: '8m10s' },
        { label: '移动速度', val: '中等/300' },
        { label: '攻击范围', val: '中程/7.6' },
        { label: '攻击速度', val: '1.5次齐射(每0.064s)' },
        { label: '需要大本等级', val: '19' }
    ],
    // 等级数据表 (包含专属字段 extend: 延伸)
    levels: [
        { lv: 15, hp: 650, dmg: 692, perDmg: 87.68, extend: '28%(14)', train: 20000, upg: 9500000, mirc: 28, time: '5d6h', diamond: 2917, ticket: 504, exp: 124 },
        { lv: 14, hp: 618, dmg: 678, perDmg: 85.76, extend: '26%(13)', train: 19000, upg: 9300000, mirc: 27, time: '5d3h', diamond: 2651, ticket: 492, exp: 122 },
        { lv: 13, hp: 587, dmg: 663, perDmg: 83.84, extend: '24%(12)', train: 18000, upg: 9000000, mirc: 26, time: '5d1h', diamond: 2801, ticket: 484, exp: 120 },
        { lv: 12, hp: 557, dmg: 647, perDmg: 81.92, extend: '22%(11)', train: 17000, upg: 8900000, mirc: 25, time: '5d', diamond: 2791, ticket: 480, exp: 118 },
        { lv: 11, hp: 528, dmg: 632, perDmg: 80, extend: '20%(10)', train: 16000, upg: 8700000, mirc: 25, time: '4d22h', diamond: 2747, ticket: 472, exp: 116 },
        { lv: 10, hp: 500, dmg: 617, perDmg: 78.08, extend: '18%(9)', train: 15000, upg: 8500000, mirc: 24, time: '4d20h', diamond: 2703, ticket: 464, exp: 114 },
        { lv: 9, hp: 473, dmg: 602, perDmg: 76.16, extend: '16%(8)', train: 14000, upg: 8300000, mirc: 24, time: '4d18h', diamond: 2663, ticket: 456, exp: 112 },
        { lv: 8, hp: 447, dmg: 587, perDmg: 74.24, extend: '14%(7)', train: 13000, upg: 8200000, mirc: 23, time: '4d16h', diamond: 2632, ticket: 448, exp: 110 },
        { lv: 7, hp: 422, dmg: 571, perDmg: 72.32, extend: '12%(6)', train: 12000, upg: 8000000, mirc: 23, time: '4d14h', diamond: 2592, ticket: 440, exp: 108 },
        { lv: 6, hp: 398, dmg: 556, perDmg: 70.4, extend: '10%(5)', train: 11000, upg: 7800000, mirc: 22, time: '4d12h', diamond: 2548, ticket: 432, exp: 106 },
        { lv: 5, hp: 375, dmg: 541, perDmg: 68.48, extend: '8%(4)', train: 10000, upg: 7700000, mirc: 21, time: '4d10h', diamond: 2516, ticket: 424, exp: 104 },
        { lv: 4, hp: 353, dmg: 526, perDmg: 66.56, extend: '6%(3)', train: 9000, upg: 7500000, mirc: 21, time: '4d8h', diamond: 2473, ticket: 416, exp: 102 },
        { lv: 3, hp: 332, dmg: 511, perDmg: 64.64, extend: '4%(2)', train: 8000, upg: 7300000, mirc: 20, time: '4d6h', diamond: 2430, ticket: 408, exp: 101 },
        { lv: 2, hp: 323, dmg: 496, perDmg: 62.72, extend: '2%(1)', train: 7000, upg: 7200000, mirc: 19, time: '4d4h', diamond: 2399, ticket: 400, exp: 100 },
        { lv: 1, hp: 312, dmg: 480, perDmg: 60.8, extend: '0(0)', train: 6000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 1, cap: 56, token: '/', tech: 5 },
        { no: 2, lv: 2, cap: 68, token: 127000, tech: 10 },
        { no: 3, lv: 4, cap: 80, token: 153500, tech: 15 },
        { no: 4, lv: 6, cap: 92, token: 198500, tech: 20 },
        { no: 5, lv: 8, cap: 104, token: 240000, tech: 25 }
    ]
};