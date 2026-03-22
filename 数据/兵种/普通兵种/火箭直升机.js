// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['火箭直升机'] = {
    name: '火箭直升机',
    img: 'images/兵种/普通兵种/Rocket_Choppa.webp',
    desc: '火箭直升机不仅飞行速度极快，还能在空中向地面倾泻火箭弹雨！由于能够在天上无视地雷等部分地面防御，它们能执行许多出其不意的战术。需要注意，它们被摧毁时还会对地面造成坠毁爆炸伤害！',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '33m20s' },
        { label: '移动速度', val: '快速/500' },
        { label: '攻击范围', val: '9.5' },
        { label: '攻击速度', val: '1.5秒8次齐射' },
        { label: '射击间隔', val: '0.185秒' }
    ],
    // 等级数据表 (包含专属字段 deathDmg: 死亡坠毁伤害)
    levels: [
        { lv: 28, hp: 2370, dmg: 1858, perDmg: 649.35, deathDmg: 180, train: 96000, upg: 10000000, mirc: 28, time: '5d15h', diamond: 3046, ticket: 540, exp: 91 },
        { lv: 27, hp: 2280, dmg: 1767, perDmg: 617.9, deathDmg: 175, train: 94000, upg: 9500000, mirc: 27, time: '5d10h', diamond: 2941, ticket: 520, exp: 91 },
        { lv: 26, hp: 2190, dmg: 1683, perDmg: 588.3, deathDmg: 170, train: 92000, upg: 9000000, mirc: 26, time: '5d5h', diamond: 2838, ticket: 500, exp: 86 },
        { lv: 25, hp: 2110, dmg: 1603, perDmg: 560.6, deathDmg: 165, train: 90000, upg: 8500000, mirc: 25, time: '5d', diamond: 0, ticket: 480, exp: 81 },
        { lv: 24, hp: 2030, dmg: 1529, perDmg: 534.7, deathDmg: 160, train: 88000, upg: 8000000, mirc: 24, time: '4d19h', diamond: 0, ticket: 460, exp: 76 },
        { lv: 23, hp: 1950, dmg: 1455, perDmg: 508.8, deathDmg: 155, train: 86000, upg: 7500000, mirc: 23, time: '4d14h', diamond: 0, ticket: 440, exp: 72 },
        { lv: 22, hp: 1875, dmg: 1386, perDmg: 484.7, deathDmg: 150, train: 84000, upg: 7000000, mirc: 22, time: '4d9h', diamond: 0, ticket: 420, exp: 68 },
        { lv: 21, hp: 1800, dmg: 1317, perDmg: 460.7, deathDmg: 145, train: 82000, upg: 6500000, mirc: 21, time: '4d4h', diamond: 0, ticket: 400, exp: 64 },
        { lv: 20, hp: 1730, dmg: 1257, perDmg: 439.4, deathDmg: 140, train: 80000, upg: 6000000, mirc: 20, time: '3d23h', diamond: 2168, ticket: 380, exp: 60 },
        { lv: 19, hp: 1670, dmg: 1196, perDmg: 418.1, deathDmg: 135, train: 78000, upg: 5500000, mirc: 19, time: '3d18h', diamond: 2050, ticket: 360, exp: 57 },
        { lv: 18, hp: 1600, dmg: 1140, perDmg: 398.7, deathDmg: 130, train: 76000, upg: 5000000, mirc: 18, time: '3d13h', diamond: 1930, ticket: 340, exp: 54 },
        { lv: 17, hp: 1540, dmg: 1085, perDmg: 379.3, deathDmg: 125, train: 74000, upg: 4750000, mirc: 17, time: '3d8h', diamond: 1850, ticket: 320, exp: 51 },
        { lv: 16, hp: 1480, dmg: 1032, perDmg: 360.8, deathDmg: 120, train: 72000, upg: 4500000, mirc: 16, time: '3d3h', diamond: 1775, ticket: 300, exp: 48 },
        { lv: 15, hp: 1425, dmg: 984, perDmg: 344.1, deathDmg: 115, train: 70000, upg: 4250000, mirc: 15, time: '2d22h', diamond: 1696, ticket: 280, exp: 45 },
        { lv: 14, hp: 1370, dmg: 937, perDmg: 327.5, deathDmg: 110, train: 68000, upg: 4000000, mirc: 14, time: '2d17h', diamond: 1616, ticket: 260, exp: 42 },
        { lv: 13, hp: 1320, dmg: 894, perDmg: 312.7, deathDmg: 105, train: 66000, upg: 3750000, mirc: 13, time: '2d12h', diamond: 1534, ticket: 240, exp: 40 },
        { lv: 12, hp: 1260, dmg: 852, perDmg: 297.9, deathDmg: 100, train: 64000, upg: 3500000, mirc: 12, time: '2d7h', diamond: 1449, ticket: 220, exp: 38 },
        { lv: 11, hp: 1215, dmg: 810, perDmg: 283.1, deathDmg: 95, train: 62000, upg: 3250000, mirc: 11, time: '2d2h', diamond: 1363, ticket: 200, exp: 36 },
        { lv: 10, hp: 1170, dmg: 773, perDmg: 270.1, deathDmg: 90, train: 60000, upg: 3000000, mirc: 10, time: '1d21h', diamond: 1279, ticket: 180, exp: 34 },
        { lv: 9, hp: 1125, dmg: 736, perDmg: 257.2, deathDmg: 85, train: 58000, upg: 2750000, mirc: 9, time: '1d16h', diamond: 1188, ticket: 160, exp: 32 },
        { lv: 8, hp: 1080, dmg: 698, perDmg: 244.2, deathDmg: 80, train: 56000, upg: 2500000, mirc: 8, time: '1d11h', diamond: 1098, ticket: 140, exp: 30 },
        { lv: 7, hp: 1040, dmg: 667, perDmg: 233.1, deathDmg: 75, train: 54000, upg: 2250000, mirc: 7, time: '1d6h', diamond: 1004, ticket: 120, exp: 28 },
        { lv: 6, hp: 1000, dmg: 635, perDmg: 222, deathDmg: 70, train: 52000, upg: 2000000, mirc: 6, time: '1d1h', diamond: 903, ticket: 100, exp: 26 },
        { lv: 5, hp: 960, dmg: 603, perDmg: 210.9, deathDmg: 65, train: 50000, upg: 1750000, mirc: 5, time: '20h', diamond: 802, ticket: 80, exp: 24 },
        { lv: 4, hp: 925, dmg: 577, perDmg: 201.7, deathDmg: 60, train: 48000, upg: 1500000, mirc: 4, time: '15h', diamond: 698, ticket: 60, exp: 23 },
        { lv: 3, hp: 890, dmg: 550, perDmg: 192.4, deathDmg: 55, train: 46000, upg: 1250000, mirc: 3, time: '10h', diamond: 584, ticket: 40, exp: 22 },
        { lv: 2, hp: 850, dmg: 524, perDmg: 183.2, deathDmg: 50, train: 44000, upg: 1000000, mirc: 2, time: '5h', diamond: 462, ticket: 20, exp: 21 },
        { lv: 1, hp: 820, dmg: 497, perDmg: 173.9, deathDmg: 45, train: 42000, upg: '/', mirc: 1, time: '/', diamond: '/', ticket: '/', exp: 20 }
    ],
    // 航母数据表
    warships: [
        { no: 1, lv: 14, cap: 11, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 13, token: 135500, tech: 10 },
        { no: 3, lv: 18, cap: 15, token: 164000, tech: 15 },
        { no: 4, lv: 20, cap: 18, token: 198500, tech: 20 },
        { no: 5, lv: 22, cap: 20, token: 270000, tech: 25 }
    ]
};