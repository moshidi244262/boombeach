window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['克隆步兵'] = {
    name: '克隆步兵',
    img: 'images/兵种/原型部队/CloneRiflemanB.webp',
    desc: '克隆步兵不仅拥有不俗的战斗力，还能在战场上不断产生自身的克隆体，依靠人海战术淹没敌人的防御阵地。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '1' },
        { label: '训练时间', val: '30s' },
        { label: '移动速度', val: '中等/220' },
        { label: '攻击范围', val: '中等/4.7' },
        { label: '攻击速度', val: '1s' }
    ],
    
    // 定制表头：极具特色的多阶分身属性展示
    tableHeadersHtml: `
        <thead>
            <tr>
                <th rowspan="2"><img src="images/基础/Level.webp">等级</th>
                <th colspan="2" style="border-right:1px solid rgba(0,0,0,0.05);">本体属性</th>
                <th colspan="2" style="border-right:1px solid rgba(0,0,0,0.05);">一阶分身(次要)</th>
                <th colspan="2" style="border-right:1px solid rgba(0,0,0,0.05);">二阶分身(第三)</th>
                <th rowspan="2"><img src="images/基础/Gold.webp">训练成本</th>
                <th rowspan="2"><img src="images/基础/Menu_icon_research.webp">研究所</th>
                <th rowspan="2"><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th rowspan="2"><img src="images/基础/Icon_resource_scrap.webp">解锁费用</th>
            </tr>
            <tr>
                <th><img src="images/基础/Hitpoint.webp">生命</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Damage.webp">伤害</th>
                <th><img src="images/基础/Hitpoint.webp">生命</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Damage.webp">伤害</th>
                <th><img src="images/基础/Hitpoint.webp">生命</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Damage.webp">伤害</th>
            </tr>
        </thead>
    `,

    // 定制每一行的渲染逻辑（包含多阶分身的数据）
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp1)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg1)}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp2)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg2)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.train)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.armoryLv)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${lv.unlock === '/' || lv.unlock === '0' ? '<span class="val-none">/</span>' : formatNum(lv.unlock)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑：同步计算本体和所有分身的血量和伤害
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            hp1: item.hp1 !== '/' ? Math.round(item.hp1 * (1 + hpInput / 100)) : '/',
            hp2: item.hp2 !== '/' ? Math.round(item.hp2 * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            dmg1: item.dmg1 !== '/' ? Math.round(item.dmg1 * (1 + dmgInput / 100)) : '/',
            dmg2: item.dmg2 !== '/' ? Math.round(item.dmg2 * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 克隆步兵 等级数据表
    levels: [
        { lv: 28, hp: 871, dmg: 252, hp1: 649, dmg1: 189, hp2: 484, dmg2: 142, train: 108000, armoryLv: 28, time: '3d 3h', unlock: 15600 },
        { lv: 27, hp: 814, dmg: 233, hp1: 606, dmg1: 175, hp2: 452, dmg2: 131, train: 82000, armoryLv: 27, time: '2d 14h', unlock: 11900 },
        { lv: 26, hp: 761, dmg: 215, hp1: 564, dmg1: 161, hp2: 423, dmg2: 120, train: 62000, armoryLv: 26, time: '2d 4h', unlock: 9100 },
        { lv: 25, hp: 711, dmg: 199, hp1: 530, dmg1: 149, hp2: 397, dmg2: 112, train: 46000, armoryLv: 25, time: '1d 19h', unlock: 6900 },
        { lv: 24, hp: 664, dmg: 184, hp1: 497, dmg1: 138, hp2: 372, dmg2: 103, train: 34800, armoryLv: 24, time: '1d 12h', unlock: 5300 },
        { lv: 23, hp: 621, dmg: 170, hp1: 465, dmg1: 128, hp2: 350, dmg2: 96, train: 26200, armoryLv: 23, time: '1d 6h', unlock: 4000 },
        { lv: 22, hp: 580, dmg: 157, hp1: 435, dmg1: 118, hp2: 326, dmg2: 88, train: 19700, armoryLv: 22, time: '1d 1h', unlock: 3100 },
        { lv: 21, hp: 542, dmg: 145, hp1: 407, dmg1: 109, hp2: 305, dmg2: 82, train: 14800, armoryLv: 21, time: '21h', unlock: 2300 },
        { lv: 20, hp: 506, dmg: 134, hp1: 380, dmg1: 101, hp2: 284, dmg2: 75, train: 11200, armoryLv: 20, time: '17h', unlock: 1800 },
        { lv: 19, hp: 473, dmg: 124, hp1: 355, dmg1: 93, hp2: 266, dmg2: 70, train: 8400, armoryLv: 19, time: '15h', unlock: 1500 },
        { lv: 18, hp: 442, dmg: 115, hp1: 332, dmg1: 86, hp2: 249, dmg2: 65, train: 6300, armoryLv: 18, time: '13h', unlock: 1200 },
        { lv: 17, hp: 413, dmg: 106, hp1: 310, dmg1: 80, hp2: 232, dmg2: 60, train: 4750, armoryLv: 17, time: '11h', unlock: 960 },
        { lv: 16, hp: 386, dmg: 98, hp1: 290, dmg1: 74, hp2: 217, dmg2: 55, train: 3600, armoryLv: 16, time: '10h', unlock: 780 },
        { lv: 15, hp: 361, dmg: 90, hp1: 271, dmg1: 68, hp2: 203, dmg2: 51, train: 2700, armoryLv: 15, time: '9h', unlock: 630 },
        { lv: 14, hp: 337, dmg: 84, hp1: 253, dmg1: 63, hp2: 190, dmg2: 47, train: 2000, armoryLv: 14, time: '8h', unlock: 510 },
        { lv: 13, hp: 315, dmg: 77, hp1: 236, dmg1: 58, hp2: 177, dmg2: 43, train: 1520, armoryLv: 13, time: '7h', unlock: 420 },
        { lv: 12, hp: 295, dmg: 71, hp1: 221, dmg1: 53, hp2: 166, dmg2: 40, train: 1150, armoryLv: 12, time: '6h', unlock: 340 },
        { lv: 11, hp: 276, dmg: 66, hp1: 206, dmg1: 49, hp2: 155, dmg2: 37, train: 860, armoryLv: 11, time: '5h', unlock: 270 },
        { lv: 10, hp: 258, dmg: 61, hp1: 193, dmg1: 46, hp2: 145, dmg2: 34, train: 650, armoryLv: 10, time: '4h', unlock: 220 },
        { lv: 9, hp: 241, dmg: 56, hp1: 181, dmg1: 42, hp2: 136, dmg2: 31, train: 490, armoryLv: 9, time: '4h', unlock: 190 },
        { lv: 8, hp: 225, dmg: 52, hp1: 169, dmg1: 39, hp2: 127, dmg2: 29, train: 370, armoryLv: 8, time: '4h', unlock: 170 },
        { lv: 7, hp: 210, dmg: 48, hp1: 157, dmg1: 36, hp2: 118, dmg2: 27, train: 275, armoryLv: 7, time: '3h', unlock: 140 },
        { lv: 6, hp: 197, dmg: 44, hp1: 147, dmg1: 33, hp2: 110, dmg2: 25, train: 205, armoryLv: 6, time: '3h', unlock: 120 },
        { lv: 5, hp: 184, dmg: 41, hp1: 138, dmg1: 31, hp2: 104, dmg2: 23, train: 155, armoryLv: 5, time: '3h', unlock: 110 },
        { lv: 4, hp: 172, dmg: 38, hp1: 129, dmg1: 28, hp2: 97, dmg2: 21, train: 120, armoryLv: 4, time: '2h', unlock: 90 },
        { lv: 3, hp: 160, dmg: 35, hp1: 120, dmg1: 26, hp2: 90, dmg2: 19, train: 90, armoryLv: 3, time: '2h', unlock: 80 },
        { lv: 2, hp: 150, dmg: 32, hp1: 112, dmg1: 24, hp2: 84, dmg2: 18, train: 65, armoryLv: 2, time: '2h', unlock: 70 },
        { lv: 1, hp: 140, dmg: 30, hp1: 105, dmg1: 22, hp2: 79, dmg2: 16, train: 50, armoryLv: 1, time: '/', unlock: '/' }
    ],

    warships: [
        { no: 1, lv: 14, cap: 224, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 272, token: '58,000', tech: 10 },
        { no: 3, lv: 18, cap: 320, token: '84,500', tech: 15 },
        { no: 4, lv: 20, cap: 368, token: '112,500', tech: 20 },
        { no: 5, lv: 22, cap: 416, token: '165,000', tech: 25 },
        { no: '合计', lv: '/', cap: '/', token: '420,000', tech: 75 }
    ]
};