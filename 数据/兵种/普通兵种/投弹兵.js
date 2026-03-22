// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['投弹兵'] = {
    name: '投弹兵',
    img: 'images/兵种/普通兵种/GrenadierB.webp',
    desc: '投弹兵能够造成巨大的范围伤害，但他们的准头实在太差了，通常会把炸弹扔到目标的后方！不过这也恰好能让他们在绝对安全的超远距离外，清理掉目标周围的防御建筑。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '6' },
        { label: '训练时间', val: '15m' },
        { label: '移动速度', val: '中等/250' },
        { label: '攻击范围', val: '超远程/11.3' },
        { label: '攻击速度', val: '2s' },
        { label: '溅射半径', val: '1.9' },
        { label: '需要大本等级', val: '16' }
    ],
    // 等级数据表
    levels: [
        { lv: 18, hp: 1200, dmg: 340, train: 25000, upg: 11100000, mirc: 28, time: '5d6h', diamond: 3158, ticket: 504, exp: 117 },
        { lv: 17, hp: 1134, dmg: 317, train: 24000, upg: 10700000, mirc: 27, time: '5d4h', diamond: 2863, ticket: 496, exp: 115 },
        { lv: 16, hp: 1070, dmg: 295, train: 23000, upg: 10300000, mirc: 26, time: '5d2h', diamond: 2999, ticket: 488, exp: 113 },
        { lv: 15, hp: 1010, dmg: 274, train: 22000, upg: 9900000, mirc: 25, time: '5d', diamond: 2947, ticket: 480, exp: 111 },
        { lv: 14, hp: 956, dmg: 256, train: 21000, upg: 9500000, mirc: 24, time: '4d22h', diamond: 2871, ticket: 472, exp: 109 },
        { lv: 13, hp: 904, dmg: 238, train: 20000, upg: 9100000, mirc: 23, time: '4d20h', diamond: 2800, ticket: 464, exp: 109 },
        { lv: 12, hp: 854, dmg: 222, train: 19000, upg: 8700000, mirc: 22, time: '4d18h', diamond: 2725, ticket: 456, exp: 107 },
        { lv: 11, hp: 806, dmg: 206, train: 18000, upg: 8100000, mirc: 21, time: '4d16h', diamond: 2618, ticket: 448, exp: 107 },
        { lv: 10, hp: 760, dmg: 192, train: 17000, upg: 7800000, mirc: 20, time: '4d15h', diamond: 2566, ticket: 444, exp: 105 },
        { lv: 9, hp: 720, dmg: 178, train: 16000, upg: 7400000, mirc: 20, time: '4d13h', diamond: 2488, ticket: 436, exp: 105 },
        { lv: 8, hp: 680, dmg: 166, train: 15000, upg: 7000000, mirc: 19, time: '4d12h', diamond: 2416, ticket: 432, exp: 103 },
        { lv: 7, hp: 638, dmg: 154, train: 14000, upg: 6500000, mirc: 19, time: '4d9h', diamond: 2315, ticket: 420, exp: 103 },
        { lv: 6, hp: 602, dmg: 144, train: 13000, upg: 5900000, mirc: 18, time: '4d6h', diamond: 2194, ticket: 408, exp: 100 },
        { lv: 5, hp: 568, dmg: 134, train: 12000, upg: 5500000, mirc: 18, time: '4d4h', diamond: 2111, ticket: 400, exp: 100 },
        { lv: 4, hp: 536, dmg: 124, train: 11000, upg: 5200000, mirc: 17, time: '4d3h', diamond: 2052, ticket: 396, exp: 99 },
        { lv: 3, hp: 506, dmg: 116, train: 10000, upg: 4600000, mirc: 17, time: '3d22h', diamond: 1914, ticket: 376, exp: 99 },
        { lv: 2, hp: 477, dmg: 108, train: 9000, upg: 4000000, mirc: 16, time: '3d16h', diamond: 1764, ticket: 352, exp: 93 },
        { lv: 1, hp: 450, dmg: 100, train: 8000, upg: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
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