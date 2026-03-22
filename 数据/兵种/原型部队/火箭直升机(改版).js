window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['火箭直升机(改版)'] = {
    name: '火箭直升机(改版)',
    img: 'images/兵种/原型部队/Rocket_Choppa.webp',
    desc: '火箭直升机是能够无视地形移动的空中单位，能对地面目标倾泻致命的火箭弹雨。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '33m20s' },
        { label: '移动速度', val: '快速 (500)' },
        { label: '攻击范围', val: '9.5' },
        { label: '攻击速度', val: '1.5秒8次齐射' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
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
        { lv: 28, hp: 2300, dmg: 3400, perDmg: 2267, train: 115000, upg: 1500 },
        { lv: 27, hp: 2200, dmg: 3200, perDmg: 2133, train: 110000, upg: 1500 },
        { lv: 26, hp: 2150, dmg: 3050, perDmg: 2033, train: 105000, upg: 1500 },
        { lv: 25, hp: 2100, dmg: 2975, perDmg: 1983, train: 100000, upg: 1500 },
        { lv: 24, hp: 2050, dmg: 2900, perDmg: 1933, train: 95000, upg: 1450 },
        { lv: 23, hp: 2000, dmg: 2825, perDmg: 1883, train: 90000, upg: 1350 },
        { lv: 22, hp: 1950, dmg: 2750, perDmg: 1833, train: 85000, upg: 1250 },
        { lv: 21, hp: 1900, dmg: 2675, perDmg: 1783, train: 80000, upg: 1150 },
        { lv: 20, hp: 1850, dmg: 2600, perDmg: 1733, train: 75000, upg: 1050 },
        { lv: 19, hp: 1800, dmg: 2525, perDmg: 1683, train: 70000, upg: 950 },
        { lv: 18, hp: 1750, dmg: 2450, perDmg: 1633, train: 65000, upg: 850 },
        { lv: 17, hp: 1700, dmg: 2375, perDmg: 1583, train: 60000, upg: 750 },
        { lv: 16, hp: 1650, dmg: 2300, perDmg: 1533, train: 55000, upg: 650 },
        { lv: 15, hp: 1600, dmg: 2225, perDmg: 1483, train: 50000, upg: 550 },
        { lv: 14, hp: 1550, dmg: 2150, perDmg: 1433, train: 45000, upg: 450 },
        { lv: 13, hp: 1500, dmg: 2075, perDmg: 1383, train: 40000, upg: 350 },
        { lv: 12, hp: 1450, dmg: 2000, perDmg: 1333, train: 35000, upg: 250 },
        { lv: 11, hp: 1400, dmg: 1925, perDmg: 1283, train: 30000, upg: 245 },
        { lv: 10, hp: 1350, dmg: 1850, perDmg: 1233, train: 25000, upg: 240 },
        { lv: 9, hp: 1300, dmg: 1775, perDmg: 1183, train: 20000, upg: 235 },
        { lv: 8, hp: 1250, dmg: 1700, perDmg: 1133, train: 19000, upg: 230 },
        { lv: 7, hp: 1200, dmg: 1625, perDmg: 1083, train: 18000, upg: 225 },
        { lv: 6, hp: 1150, dmg: 1550, perDmg: 1033, train: 17000, upg: 220 },
        { lv: 5, hp: 1100, dmg: 1475, perDmg: 983, train: 16000, upg: 215 },
        { lv: 4, hp: 1050, dmg: 1400, perDmg: 933, train: 15000, upg: 210 },
        { lv: 3, hp: 1000, dmg: 1325, perDmg: 883, train: 14000, upg: 205 },
        { lv: 2, hp: 950, dmg: 1250, perDmg: 833, train: 13000, upg: 200 },
        { lv: 1, hp: 900, dmg: 1175, perDmg: 783, train: 12000, upg: 195 }
    ],

    warships: [
        { no: 1, lv: 14, cap: 11, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 13, token: '135,500', tech: 10 },
        { no: 3, lv: 18, cap: 15, token: '164,000', tech: 15 },
        { no: 4, lv: 20, cap: 18, token: '198,500', tech: 20 },
        { no: 5, lv: 22, cap: 20, token: '270,000', tech: 25 }
    ]
};