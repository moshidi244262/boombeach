// ⚠️ 重点：将数据注册到全局变量 window.GameDataDB 中
// 这里的 "主基地大本营" 必须和 index.html 里 dbData 中的 name 保持完全一致
window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['主基地大本营'] = {
    name: '主基地大本营',
    img: 'images/大本营/HQ21.webp',
    desc: '海岛奇兵司令部是您基地的核心。保护好它！如果司令部被摧毁，战斗将直接宣告失败，攻击者会掠夺您积累的资源。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '5×5' },
        { label: '特殊技能', val: '如果被摧毁，战斗将获胜.' }
    ],
    // 司令部外观图片表
    hqImages: [
        { name: '一级大本营', img: 'images/大本营/HQ1.webp' },
        { name: '二级大本营', img: 'images/大本营/HQ2.webp' },
        { name: '三级大本营', img: 'images/大本营/HQ3.webp' },
        { name: '四级大本营', img: 'images/大本营/HQ4.webp' },
        { name: '五级大本营', img: 'images/大本营/HQ5.webp' },
        { name: '六级大本营', img: 'images/大本营/HQ6.webp' },
        { name: '七-十级大本营', img: 'images/大本营/HQ7.webp' },
        { name: '十一-十六级大本营', img: 'images/大本营/HQ11.webp' },
        { name: '十七-二十级大本营', img: 'images/大本营/HQ17.webp' },
        { name: '二十一级大本营', img: 'images/大本营/HQ21.webp' },
        { name: '二十二级大本营', img: 'images/大本营/HQ22.webp' },
        { name: '二十三级大本营', img: 'images/大本营/HQ23.webp' },
        { name: '二十四级大本营', img: 'images/大本营/HQ24.webp' },
        { name: '二十五级大本营', img: 'images/大本营/HQ25.webp' },
        { name: '二十六级大本营', img: 'images/大本营/HQ26.webp' },
        { name: '二十七级大本营', img: 'images/大本营/HQ27.webp' },
        { name: '二十八级大本营', img: 'images/大本营/HQ28.webp' },
        { name: '博士司令部', img: 'images/大本营/HQ_Terror.webp' },
        { name: '哈莫曼司令部', img: 'images/大本营/HQ_Hammerman.webp' },
        { name: '战争工厂司令部', img: 'images/大本营/GearheartHQ.webp' }
    ],
    // 司令部升级数据表
    // cw=木材 cs=石材 ci=钢材; capG=金库容量 capW=木库容量 capS=石库容量 capI=钢库容量; reqLv=需要等级
    levels: [
        { lv: 28, hp: 300000, cw: 8400000, cs: 8250000, ci: 8000000, capG: 350000, capW: 350000, capS: 350000, capI: 350000, time: '3d12h', diamond: 11305, ticket: 336, reqLv: 74, exp: 99 },
        { lv: 27, hp: 280000, cw: 7700000, cs: 7500000, ci: 7000000, capG: 300000, capW: 300000, capS: 300000, capI: 300000, time: '3d6h', diamond: 10565, ticket: 312, reqLv: 71, exp: 97 },
        { lv: 26, hp: 260000, cw: 7100000, cs: 6850000, ci: 6600000, capG: 250000, capW: 250000, capS: 250000, capI: 250000, time: '3d', diamond: 9888, ticket: 288, reqLv: 68, exp: 95 },
        { lv: 25, hp: 240000, cw: 6500000, cs: 6250000, ci: 6000000, capG: 200000, capW: 200000, capS: 200000, capI: 200000, time: '2d20h', diamond: 9254, ticket: 272, reqLv: 65, exp: 93 },
        { lv: 24, hp: 220000, cw: 5900000, cs: 5700000, ci: 5400000, capG: 170000, capW: 170000, capS: 170000, capI: 170000, time: '2d16h', diamond: 8613, ticket: 256, reqLv: 62, exp: 91 },
        { lv: 23, hp: 200000, cw: 5350000, cs: 5150000, ci: 5000000, capG: 140000, capW: 140000, capS: 140000, capI: 140000, time: '2d12h', diamond: 8063, ticket: 240, reqLv: 59, exp: 89 },
        { lv: 22, hp: 180000, cw: 4260000, cs: 4780000, ci: 4420000, capG: 120000, capW: 120000, capS: 120000, capI: 120000, time: '2d8h', diamond: 7411, ticket: 224, reqLv: 56, exp: 87 },
        { lv: 21, hp: 160000, cw: 4260000, cs: 4100000, ci: 3940000, capG: 100000, capW: 100000, capS: 100000, capI: 100000, time: '2d4h', diamond: 6820, ticket: 208, reqLv: 53, exp: 85 },
        { lv: 20, hp: 140000, cw: 3700000, cs: 3600000, ci: 2830000, capG: 80000, capW: 80000, capS: 80000, capI: 80000, time: '2d', diamond: 5941, ticket: 192, reqLv: 50, exp: 83 },
        { lv: 19, hp: 120000, cw: 3300000, cs: 3000000, ci: 1970000, capG: 70000, capW: 70000, capS: 70000, capI: 70000, time: '1d20h', diamond: 5143, ticket: 176, reqLv: 47, exp: 81 },
        { lv: 18, hp: 100000, cw: 2690000, cs: 2220000, ci: 1410000, capG: 60000, capW: 60000, capS: 60000, capI: 60000, time: '1d16h', diamond: 4260, ticket: 160, reqLv: 44, exp: 77 },
        { lv: 17, hp: 85000, cw: 1900000, cs: 1700000, ci: 740000, capG: 50000, capW: 50000, capS: 50000, capI: 50000, time: '1d12h', diamond: 3284, ticket: 144, reqLv: 41, exp: 73 },
        { lv: 16, hp: 70000, cw: 1350000, cs: 1020000, ci: 370000, capG: 40000, capW: 40000, capS: 40000, capI: 40000, time: '1d8h', diamond: 2417, ticket: 128, reqLv: 37, exp: 64 },
        { lv: 15, hp: 58000, cw: 790000, cs: 690000, ci: 189000, capG: 35000, capW: 35000, capS: 35000, capI: 35000, time: '1d4h', diamond: 1762, ticket: 112, reqLv: 34, exp: 54 },
        { lv: 14, hp: 50000, cw: 570000, cs: 340000, ci: 97000, capG: 30000, capW: 30000, capS: 30000, capI: 30000, time: '1d', diamond: 1290, ticket: 96, reqLv: 32, exp: 47 },
        { lv: 13, hp: 43000, cw: 400000, cs: 189000, ci: 50000, capG: 25000, capW: 25000, capS: 25000, capI: 25000, time: '18h', diamond: 988, ticket: 72, reqLv: 30, exp: 40 },
        { lv: 12, hp: 38000, cw: 268000, cs: 97000, ci: 28000, capG: 21000, capW: 21000, capS: 21000, capI: 21000, time: '14h', diamond: 742, ticket: 56, reqLv: 27, exp: 37 },
        { lv: 11, hp: 33000, cw: 197000, cs: 50000, ci: 16000, capG: 20000, capW: 20000, capS: 20000, capI: 20000, time: '10h', diamond: 564, ticket: 40, reqLv: 24, exp: 34 },
        { lv: 10, hp: 29000, cw: 126000, cs: 30000, ci: 8000, capG: 20000, capW: 20000, capS: 20000, capI: 20000, time: '6h', diamond: 437, ticket: 24, reqLv: 21, exp: 28 },
        { lv: 9, hp: 26000, cw: 81000, cs: 17800, ci: '/', capG: 20000, capW: 20000, capS: 20000, capI: 20000, time: '4h', diamond: 325, ticket: 16, reqLv: 18, exp: 26 },
        { lv: 8, hp: 23000, cw: 49000, cs: 9800, ci: '/', capG: 20000, capW: 20000, capS: 20000, capI: '/', time: '2h', diamond: 243, ticket: 8, reqLv: 16, exp: 22 },
        { lv: 7, hp: 20000, cw: 33000, cs: 5800, ci: '/', capG: 20000, capW: 20000, capS: 20000, capI: '/', time: '1h30m', diamond: 198, ticket: 6, reqLv: 14, exp: 20 },
        { lv: 6, hp: 18000, cw: 25000, cs: '/', ci: '/', capG: 20000, capW: 20000, capS: 20000, capI: '/', time: '1h', diamond: 154, ticket: 4, reqLv: 11, exp: 19 },
        { lv: 5, hp: 16000, cw: 13000, cs: '/', ci: '/', capG: 20000, capW: 20000, capS: '/', capI: '/', time: '45m', diamond: 120, ticket: 3, reqLv: 9, exp: 17 },
        { lv: 4, hp: 14000, cw: 5900, cs: '/', ci: '/', capG: 20000, capW: 20000, capS: '/', capI: '/', time: '30m', diamond: 62, ticket: 2, reqLv: 1, exp: 13 },
        { lv: 3, hp: 12000, cw: 1900, cs: '/', ci: '/', capG: 20000, capW: 20000, capS: '/', capI: '/', time: '15m', diamond: 32, ticket: 1, reqLv: 1, exp: 7 },
        { lv: 2, hp: 11000, cw: 600, cs: '/', ci: '/', capG: 15000, capW: 15000, capS: '/', capI: '/', time: '3s', diamond: 7, ticket: 1, reqLv: 1, exp: 1 },
        { lv: 1, hp: 10000, cw: '/', cs: '/', ci: '/', capG: 10000, capW: 10000, capS: '/', capI: '/', time: '/', diamond: '/', ticket: '/', reqLv: '/', exp: '/' }
    ],
    // 建筑解锁数据表 (28级至1级倒序排列)
    unlocks: [
        {
            lv: 28,
            items: [
                { name: '钢材库*1', img: 'images/建筑解锁图片/IronStorage1.webp' },
                { name: '震爆地雷*1', img: 'images/建筑解锁图片/ShockMinec.webp' }
            ]
        },
        {
            lv: 27,
            items: [
                { name: '石材库*1', img: 'images/建筑解锁图片/StoneStorage_1.webp' },
                { name: '雕刻工坊*1', img: 'images/建筑解锁图片/Engrave.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' }
            ]
        },
        {
            lv: 26,
            items: [
                { name: '木材库*1', img: 'images/建筑解锁图片/WoodStorage_1.webp' },
                { name: '地堡*2', img: 'images/建筑解锁图片/Bunker_lvl01.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '震爆地雷*1', img: 'images/建筑解锁图片/ShockMinec.webp' }
            ]
        },
        {
            lv: 25,
            items: [
                { name: '火箭发射器*1', img: 'images/建筑解锁图片/RocketLauncher1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '震爆地雷*1', img: 'images/建筑解锁图片/ShockMinec.webp' }
            ]
        },
        {
            lv: 24,
            items: [
                { name: '巨型加农炮*1', img: 'images/建筑解锁图片/Boom_CannonB_1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '震爆地雷*1', img: 'images/建筑解锁图片/ShockMinec.webp' }
            ]
        },
        {
            lv: 23,
            items: [
                { name: '火箭直升机', img: 'images/建筑解锁图片/Rocket_Choppa.webp' },
                { name: '迫击炮*1', img: 'images/建筑解锁图片/MortarB1.webp' },
                { name: '火焰喷射器*1', img: 'images/建筑解锁图片/Flamethrower1.webp' },
                { name: '小怪发射器*1', img: 'images/建筑解锁图片/Critter_Launcher_01.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '震爆地雷*1', img: 'images/建筑解锁图片/ShockMinec.webp' }
            ]
        },
        {
            lv: 22,
            items: [
                { name: '狙击塔*1', img: 'images/建筑解锁图片/SniperTower_Lvl_1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '机甲', img: 'images/建筑解锁图片/MechIcon.webp' }
            ]
        },
        {
            lv: 21,
            items: [
                { name: '巨型加农炮*1', img: 'images/建筑解锁图片/Boom_CannonB_1.webp' },
                { name: '震爆地雷*3', img: 'images/建筑解锁图片/ShockMinec.webp' },
                { name: '迫击炮手', img: 'images/建筑解锁图片/BombardierIcon.webp' }
            ]
        },
        {
            lv: 20,
            items: [
                { name: '巨型加农炮*1', img: 'images/建筑解锁图片/Boom_CannonB_1.webp' },
                { name: '震爆火箭炮*1', img: 'images/建筑解锁图片/ShockLauncher1.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '登陆艇*1', img: 'images/建筑解锁图片/LC1.webp' },
                { name: '激冻先锋', img: 'images/建筑解锁图片/CryoneerIcon.webp' },
                { name: '神秘纪念碑', img: 'images/建筑解锁图片/MysticalMonument1.webp' },
                { name: '阵型编辑*1', img: 'images/建筑解锁图片/Slot_Button.webp' }
            ]
        },
        {
            lv: 19,
            items: [
                { name: '加农炮*1', img: 'images/建筑解锁图片/CannonB1.webp' },
                { name: '小怪发射器*1', img: 'images/建筑解锁图片/Critter_Launcher_01.webp' },
                { name: '火箭发射器*1', img: 'images/建筑解锁图片/RocketLauncher1.webp' },
                { name: '激光突击兵', img: 'images/建筑解锁图片/Lasergirl.webp' },
                { name: '机械小怪', img: 'images/建筑解锁图片/CrittersIcon.webp' }
            ]
        },
        {
            lv: 18,
            items: [
                { name: '钢材库*1', img: 'images/建筑解锁图片/IronStorage1.webp' },
                { name: '迫击炮*1', img: 'images/建筑解锁图片/MortarB1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '烈焰战车', img: 'images/建筑解锁图片/ScorcherIcon.webp' },
                { name: '阵型编辑*1', img: 'images/建筑解锁图片/Slot_Button.webp' }
            ]
        },
        {
            lv: 17,
            items: [
                { name: '金库*1', img: 'images/建筑解锁图片/GoldStorage_1a.webp' },
                { name: '火焰喷射器*1', img: 'images/建筑解锁图片/Flamethrower1.webp' },
                { name: '巨型加农炮*1', img: 'images/建筑解锁图片/Boom_CannonB_1.webp' },
                { name: '震爆火箭炮*1', img: 'images/建筑解锁图片/ShockLauncher1.webp' },
                { name: '小怪发射器*1', img: 'images/建筑解锁图片/Critter_Launcher_01.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' }
            ]
        },
        {
            lv: 16,
            items: [
                { name: '石材库*1', img: 'images/建筑解锁图片/StoneStorage_1.webp' },
                { name: '重机枪*1', img: 'images/建筑解锁图片/MachineGun_1.webp' },
                { name: '加农炮*1', img: 'images/建筑解锁图片/CannonB1.webp' },
                { name: '火箭发射器*1', img: 'images/建筑解锁图片/RocketLauncher1.webp' },
                { name: '登陆艇*1', img: 'images/建筑解锁图片/LC1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '投弹兵', img: 'images/建筑解锁图片/GrenadierIcon.webp' },
                { name: '阵型编辑*1', img: 'images/建筑解锁图片/Slot_Button.webp' }
            ]
        },
        {
            lv: 15,
            items: [
                { name: '民房*1', img: 'images/建筑解锁图片/Residence_lvl1.webp' },
                { name: '狙击塔*1', img: 'images/建筑解锁图片/SniperTower_Lvl_1.webp' },
                { name: '医师', img: 'images/建筑解锁图片/MedicIcon.webp' },
                { name: '武器实验室', img: 'images/建筑解锁图片/WeaponLab_lvl1.webp' }
            ]
        },
        {
            lv: 14,
            items: [
                { name: '木材库*1', img: 'images/建筑解锁图片/WoodStorage_1.webp' },
                { name: '火焰喷射器*1', img: 'images/建筑解锁图片/Flamethrower1.webp' },
                { name: '巨型加农炮*1', img: 'images/建筑解锁图片/Boom_CannonB_1.webp' },
                { name: '小怪发射器*1', img: 'images/建筑解锁图片/Critter_Launcher_01.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '烟雾弹', img: 'images/建筑解锁图片/SmokeScreen.webp' },
                { name: '阵型编辑*1', img: 'images/建筑解锁图片/Slot_Button.webp' }
            ]
        },
        {
            lv: 13,
            items: [
                { name: '钢材库*1', img: 'images/建筑解锁图片/IronStorage1.webp' },
                { name: '重机枪*1', img: 'images/建筑解锁图片/MachineGun_1.webp' },
                { name: '火箭发射器*1', img: 'images/建筑解锁图片/RocketLauncher1.webp' },
                { name: '神像仓库*1', img: 'images/建筑解锁图片/StatueStorage1.webp' },
                { name: '阵型编辑*2', img: 'images/建筑解锁图片/Slot_Button.webp' }
            ]
        },
        {
            lv: 12,
            items: [
                { name: '金库*1', img: 'images/建筑解锁图片/GoldStorage_1a.webp' },
                { name: '狙击塔*1', img: 'images/建筑解锁图片/SniperTower_Lvl_1.webp' },
                { name: '迫击炮*1', img: 'images/建筑解锁图片/MortarB1.webp' },
                { name: '巨型加农炮*1', img: 'images/建筑解锁图片/Boom_CannonB_1.webp' },
                { name: '登陆艇*1', img: 'images/建筑解锁图片/LC1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' }
            ]
        },
        {
            lv: 11,
            items: [
                { name: '民房*1', img: 'images/建筑解锁图片/Residence_lvl1.webp' },
                { name: '加农炮*1', img: 'images/建筑解锁图片/CannonB1.webp' },
                { name: '火焰喷射器*1', img: 'images/建筑解锁图片/Flamethrower1.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '坦克', img: 'images/建筑解锁图片/TankIcon.webp' },
                { name: '原型工厂', img: 'images/建筑解锁图片/UPGRADE PROTO TROOP WORKSHOP.webp' }
            ]
        },
        {
            lv: 10,
            items: [
                { name: '铁矿厂*1', img: 'images/建筑解锁图片/IronMine1.webp' },
                { name: '石材库*1', img: 'images/建筑解锁图片/StoneStorage_1.webp' },
                { name: '重机枪*1', img: 'images/建筑解锁图片/MachineGun_1.webp' },
                { name: '加农炮*1', img: 'images/建筑解锁图片/CannonB1.webp' },
                { name: '高爆地雷*1', img: 'images/建筑解锁图片/BoomMinec.webp' },
                { name: '多管火箭炮', img: 'images/建筑解锁图片/Barrage.webp' },
                { name: '战斗母舰', img: 'images/建筑解锁图片/Warship_Icon.webp' }
            ]
        },
        {
            lv: 9,
            items: [
                { name: '钢材库*1', img: 'images/建筑解锁图片/IronStorage1.webp' },
                { name: '火焰喷射器*1', img: 'images/建筑解锁图片/Flamethrower1.webp' },
                { name: '登陆艇*1', img: 'images/建筑解锁图片/LC1.webp' },
                { name: '潜水艇*1', img: 'images/建筑解锁图片/Submarine.webp' }
            ]
        },
        {
            lv: 8,
            items: [
                { name: '木材库*1', img: 'images/建筑解锁图片/WoodStorage_1.webp' },
                { name: '狙击塔*1', img: 'images/建筑解锁图片/SniperTower_Lvl_1.webp' },
                { name: '加农炮*1', img: 'images/建筑解锁图片/CannonB1.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '土著勇士', img: 'images/建筑解锁图片/WarriorIcon.webp' }
            ]
        },
        {
            lv: 7,
            items: [
                { name: '民房*1', img: 'images/建筑解锁图片/Residence_lvl1.webp' },
                { name: '采石场*1', img: 'images/建筑解锁图片/Quarry1.webp' },
                { name: '金库*1', img: 'images/建筑解锁图片/GoldStorage_1a.webp' },
                { name: '迫击炮*1', img: 'images/建筑解锁图片/MortarB1.webp' },
                { name: '震爆弹', img: 'images/建筑解锁图片/Shock_Bomb.webp' },
                { name: '防御系统*1', img: 'images/建筑解锁图片/Gadgets.webp' },
                { name: '小队长系统*1', img: 'images/建筑解锁图片/SquadLeaders.webp' }
            ]
        },
        {
            lv: 6,
            items: [
                { name: '石材库*1', img: 'images/建筑解锁图片/StoneStorage_1.webp' },
                { name: '重机枪*1', img: 'images/建筑解锁图片/MachineGun_1.webp' },
                { name: '加农炮*1', img: 'images/建筑解锁图片/CannonB1.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '登陆艇*1', img: 'images/建筑解锁图片/LC1.webp' },
                { name: '特遣队', img: 'images/建筑解锁图片/TaskForceBadge.webp' }
            ]
        },
        {
            lv: 5,
            items: [
                { name: '狙击塔*1', img: 'images/建筑解锁图片/SniperTower_Lvl_1.webp' },
                { name: '神庙*1', img: 'images/建筑解锁图片/Sculptor1.webp' },
                { name: '火箭炮手', img: 'images/建筑解锁图片/ZookaIcon.webp' },
                { name: '海岛战令', img: 'images/建筑解锁图片/Pass_Artillery.webp' }
            ]
        },
        {
            lv: 4,
            items: [
                { name: '英雄小屋*1', img: 'images/建筑解锁图片/HeroHut1.webp' },
                { name: '研究所*1', img: 'images/建筑解锁图片/Armory_lvl1.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '登陆艇*1', img: 'images/建筑解锁图片/LC1.webp' },
                { name: '重机枪*1', img: 'images/建筑解锁图片/MachineGun_1.webp' },
                { name: '医疗包', img: 'images/建筑解锁图片/Medkit.webp' }
            ]
        },
        {
            lv: 3,
            items: [
                { name: '民房*1', img: 'images/建筑解锁图片/Residence_lvl1.webp' },
                { name: '迫击炮*1', img: 'images/建筑解锁图片/MortarB1.webp' },
                { name: '引导弹', img: 'images/建筑解锁图片/Flare.webp' }
            ]
        },
        {
            lv: 2,
            items: [
                { name: '民房*1', img: 'images/建筑解锁图片/Residence_lvl1.webp' },
                { name: '木材库*1', img: 'images/建筑解锁图片/WoodStorage_1.webp' },
                { name: '保险库*1', img: 'images/建筑解锁图片/Vault_lvl1.webp' },
                { name: '狙击塔*1', img: 'images/建筑解锁图片/SniperTower_Lvl_1.webp' },
                { name: '地雷*3', img: 'images/建筑解锁图片/Mine_1.webp' },
                { name: '重机枪手', img: 'images/建筑解锁图片/HeavyIcon.webp' }
            ]
        },
        {
            lv: 1,
            items: [
                { name: '民房*1', img: 'images/建筑解锁图片/Residence_lvl1.webp' },
                { name: '锯木厂*1', img: 'images/建筑解锁图片/Sawmill1.webp' },
                { name: '金库*1', img: 'images/建筑解锁图片/GoldStorage_1a.webp' },
                { name: '雷达*1', img: 'images/建筑解锁图片/Radar.webp' },
                { name: '狙击塔*1', img: 'images/建筑解锁图片/SniperTower_Lvl_1.webp' },
                { name: '战舰*1', img: 'images/建筑解锁图片/GB1.webp' },
                { name: '登陆艇*2', img: 'images/建筑解锁图片/LC1.webp' },
                { name: '步兵', img: 'images/建筑解锁图片/RiflemanIcon.webp' },
                { name: '火炮', img: 'images/建筑解锁图片/Artillery_new.webp' }
            ]
        }
    ]
};

// ==========================================
// ⚠️ DOM 劫持与特殊页面定制注入模块 ⚠️
// 为了不修改统一的 index.html，我们在此拦截并定制大本营的视图表现
// ==========================================
(function() {
    if (window.__hqHookInstalled) return;
    window.__hqHookInstalled = true;

    const origOpenDetailView = window.openDetailView;
    if (origOpenDetailView) {
        window.openDetailView = function(itemName) {
            origOpenDetailView(itemName); // 让原始逻辑先生成DOM骨架
            if (itemName === '主基地大本营') {
                customizeHQView();
            }
        };
    }

    const origRenderUpgradeTable = window.renderUpgradeTable;
    if (origRenderUpgradeTable) {
        window.renderUpgradeTable = function(dataArray, hlType) {
            const detailTitle = document.querySelector('.detail-title');
            if (detailTitle && detailTitle.textContent === '主基地大本营') {
                renderHQUpgradeTbody(dataArray, hlType);
            } else {
                origRenderUpgradeTable(dataArray, hlType);
            }
        };
    }

    function customizeHQView() {
        // 1. 隐藏多余的“攻击加成计算器”
        const dmgInput = document.getElementById('dmg-input');
        if (dmgInput && dmgInput.parentElement) {
            dmgInput.parentElement.style.display = 'none';
        }

        // 2. 彻底重写升级表格的表头 (Thead)
        const dataTable = document.querySelector('.data-table');
        if (dataTable) {
            const thead = dataTable.querySelector('thead');
            if (thead) {
                thead.innerHTML = `
                    <tr>
                        <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Level.webp" style="width:18px;vertical-align:middle;">等级</th>
                        <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Hitpoint.webp" style="width:18px;vertical-align:middle;">生命值</th>
                        <th colspan="3" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">升级费用</th>
                        <th colspan="4" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">存储容量</th>
                        <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Stopwatch.webp" style="width:18px;vertical-align:middle;">升级时间</th>
                        <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Diamond.webp" style="width:18px;vertical-align:middle;">秒钻</th>
                        <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/TimeSaver.webp" style="width:18px;vertical-align:middle;">省时卷</th>
                        <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Icon_info_xp.webp" style="width:18px;vertical-align:middle;">所需等级</th>
                        <th rowspan="2"><img src="images/基础/Icon_info_xp.webp" style="width:18px;vertical-align:middle;">经验</th>
                    </tr>
                    <tr>
                        <th><img src="images/基础/Wood.webp" style="width:18px;vertical-align:middle;">木材</th>
                        <th><img src="images/基础/Stone.webp" style="width:18px;vertical-align:middle;">石材</th>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Iron.webp" style="width:18px;vertical-align:middle;">钢材</th>
                        <th><img src="images/基础/Gold.webp" style="width:18px;vertical-align:middle;">黄金</th>
                        <th><img src="images/基础/Wood.webp" style="width:18px;vertical-align:middle;">木材</th>
                        <th><img src="images/基础/Stone.webp" style="width:18px;vertical-align:middle;">石材</th>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Iron.webp" style="width:18px;vertical-align:middle;">钢材</th>
                    </tr>
                `;
            }
        }
        
        // 重新渲染表格躯干数据匹配新的列表
        window.renderUpgradeTable(window.originalLevelData);

        // 3. 追加呈现司令部独有的图片集合以及解锁表格
        const detailRenderArea = document.getElementById('detail-render-area');
        if (detailRenderArea && !document.getElementById('hq-extra-container')) {
            const hqData = window.GameDataDB['主基地大本营'];
            let extraHtml = `<div id="hq-extra-container">`;
            
            // 司令部外观图片表
            if (hqData.hqImages) {
                extraHtml += `
                    <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">司令部外观图片</h3>
                    <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
                        ${hqData.hqImages.map(imgObj => `
                            <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                                <div class="card-img-box" style="height:80px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                                    <img src="${imgObj.img}" alt="${imgObj.name}" style="max-width:100%; max-height:100%; object-fit:contain;">
                                </div>
                                <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">${imgObj.name}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            // 建筑解锁数据表
            if (hqData.unlocks) {
                extraHtml += `
                    <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">各等级建筑解锁清单</h3>
                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th style="width:100px; font-size:0.9rem;">司令部等级</th>
                                    <th style="text-align:left; padding-left:16px; font-size:0.9rem;">解锁内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${hqData.unlocks.map(ul => `
                                    <tr>
                                        <td style="font-weight:bold; color:var(--primary); font-size:1.2rem;">${ul.lv}</td>
                                        <td style="text-align:left; padding:16px;">
                                            <div style="display:flex; flex-wrap:wrap; gap:12px;">
                                                ${ul.items.map(item => `
                                                    <div style="display:flex; flex-direction:column; align-items:center; width:72px;">
                                                        <div style="width:48px; height:48px; background:rgba(255,255,255,0.9); border-radius:10px; display:flex; justify-content:center; align-items:center; margin-bottom:6px; box-shadow:0 2px 6px rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.03);">
                                                            <img src="${item.img}" style="max-width:36px; max-height:36px; object-fit:contain;">
                                                        </div>
                                                        <span style="font-size:0.75rem; color:#4b5563; text-align:center; line-height:1.2;">${item.name}</span>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            }
            
            extraHtml += `</div>`;
            detailRenderArea.insertAdjacentHTML('beforeend', extraHtml);
        }
    }

    // 大本营专属渲染逻辑 (Tbody)
    function renderHQUpgradeTbody(dataArray, hlType) {
        const tbody = document.getElementById('upgrade-tbody');
        if (!tbody) return;
        tbody.innerHTML = dataArray.map(lv => `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatHQNum(lv.hp)}</td>
                <td style="color:#a16207;">${formatHQNum(lv.cw)}</td>
                <td style="color:#4b5563;">${formatHQNum(lv.cs)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${formatHQNum(lv.ci)}</td>
                <td style="color:#ca8a04;">${formatHQNum(lv.capG)}</td>
                <td style="color:#a16207;">${formatHQNum(lv.capW)}</td>
                <td style="color:#4b5563;">${formatHQNum(lv.capS)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${formatHQNum(lv.capI)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatHQNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatHQNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatHQNum(lv.reqLv)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatHQNum(lv.exp)}</td>
            </tr>
        `).join('');
    }

    function formatHQNum(num) {
        return (num === '/' || num === undefined || num === null || isNaN(num)) ? '<span class="val-none">/</span>' : Number(num).toLocaleString();
    }

    // 防止在脚本加载完成前，原先的 index.html 逻辑已经绘制完毕，直接手动触发一次我们的自定义覆盖逻辑
    const currentDetailTitle = document.querySelector('.detail-title');
    if (currentDetailTitle && currentDetailTitle.textContent === '主基地大本营') {
        customizeHQView();
    }

})();