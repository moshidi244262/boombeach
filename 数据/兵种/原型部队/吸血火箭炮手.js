window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['吸血火箭炮手'] = {
    name: '吸血火箭炮手',
    img: 'images/兵种/原型部队/VampireZookaBHiRes.webp',
    desc: '吸血火箭炮手在造成高额伤害的同时，能够汲取敌方的生命值来恢复自身，是拥有不俗单体输出和自我续航能力的强力输出单位。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '2' },
        { label: '训练时间', val: '4m' },
        { label: '移动速度', val: '中等 (240)' },
        { label: '攻击范围', val: '长 (8.2)' },
        { label: '进攻速度', val: '2s' },
        { label: '需要大本等级', val: '14' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
                <th><img src="images/基础/Heal_Iconr.webp" onerror="this.src='images/大本营/Heal_Iconr.webp'">每次射击治疗</th>
                <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">训练成本</th>
                <th><img src="images/基础/Icon_resource_scrap.webp" onerror="this.src='images/大本营/Icon_resource_scrap.webp'">升级费用</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold;">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#dc2626;">${formatNum(lv.perDmg)}</td>
                <td style="color:#16a34a; font-weight:500;">${formatNum(lv.heal)}</td>
                <td>${formatNum(lv.train)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.upg)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Math.round(item.perDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 28, hp: 1343, dmg: 270, perDmg: 540, heal: 2500, train: 4800, upg: 1500 },
        { lv: 27, hp: 1234, dmg: 246, perDmg: 492, heal: 2500, train: 4600, upg: 1500 },
        { lv: 26, hp: 1134, dmg: 224, perDmg: 448, heal: 2500, train: 4400, upg: 1500 },
        { lv: 25, hp: 1044, dmg: 210, perDmg: 420, heal: 2500, train: 4200, upg: 1500 },
        { lv: 24, hp: 960, dmg: 196, perDmg: 392, heal: 2500, train: 4000, upg: 1450 },
        { lv: 23, hp: 882, dmg: 182, perDmg: 364, heal: 2500, train: 3800, upg: 1350 },
        { lv: 22, hp: 810, dmg: 168, perDmg: 336, heal: 2500, train: 3600, upg: 1250 },
        { lv: 21, hp: 744, dmg: 154, perDmg: 308, heal: 2500, train: 3400, upg: 1150 },
        { lv: 20, hp: 684, dmg: 140, perDmg: 280, heal: 2500, train: 3200, upg: 1050 },
        { lv: 19, hp: 630, dmg: 126, perDmg: 252, heal: 2500, train: 3000, upg: 950 },
        { lv: 18, hp: 579, dmg: 115, perDmg: 230, heal: 2500, train: 2800, upg: 850 },
        { lv: 17, hp: 531, dmg: 104, perDmg: 208, heal: 2500, train: 2600, upg: 750 },
        { lv: 16, hp: 489, dmg: 95, perDmg: 190, heal: 2500, train: 2400, upg: 650 },
        { lv: 15, hp: 450, dmg: 87, perDmg: 174, heal: 2500, train: 2200, upg: 550 },
        { lv: 14, hp: 414, dmg: 78, perDmg: 156, heal: 2500, train: 2000, upg: 450 },
        { lv: 13, hp: 378, dmg: 71, perDmg: 142, heal: 2500, train: 1800, upg: 350 },
        { lv: 12, hp: 348, dmg: 64, perDmg: 128, heal: 2500, train: 1600, upg: 250 },
        { lv: 11, hp: 321, dmg: 63, perDmg: 126, heal: 2500, train: 1500, upg: 245 },
        { lv: 10, hp: 294, dmg: 62, perDmg: 124, heal: 2500, train: 1400, upg: 240 },
        { lv: 9, hp: 270, dmg: 60, perDmg: 120, heal: 2500, train: 1300, upg: 235 },
        { lv: 8, hp: 249, dmg: 59, perDmg: 118, heal: 2500, train: 1200, upg: 230 },
        { lv: 7, hp: 228, dmg: 57, perDmg: 114, heal: 2500, train: 1100, upg: 225 },
        { lv: 6, hp: 210, dmg: 56, perDmg: 112, heal: 2500, train: 1000, upg: 220 },
        { lv: 5, hp: 192, dmg: 55, perDmg: 110, heal: 2500, train: 900, upg: 215 },
        { lv: 4, hp: 177, dmg: 53, perDmg: 106, heal: 2500, train: 800, upg: 210 },
        { lv: 3, hp: 162, dmg: 52, perDmg: 104, heal: 2500, train: 700, upg: 205 },
        { lv: 2, hp: 150, dmg: 50, perDmg: 100, heal: 2500, train: 600, upg: 200 },
        { lv: 1, hp: 138, dmg: 49, perDmg: 98, heal: 2500, train: 500, upg: 195 }
    ],

    warships: [
        { no: 1, lv: 14, cap: 112, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 136, token: '82,500', tech: 10 },
        { no: 3, lv: 18, cap: 160, token: '110,000', tech: 15 },
        { no: 4, lv: 20, cap: 184, token: '133,000', tech: 20 },
        { no: 5, lv: 22, cap: 208, token: '210,000', tech: 25 }
    ]
};