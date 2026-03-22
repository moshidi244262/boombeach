window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['隐身战士'] = {
    name: '隐身战士',
    img: 'images/兵种/原型部队/Hidden_Warrior.webp',
    desc: '隐身战士能在极近距离发起攻击，并且每次攻击都能为自己恢复生命值，拥有极强的单兵续航能力。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '5' },
        { label: '训练时间', val: '3m' },
        { label: '移动速度', val: '快速 (300)' },
        { label: '攻击范围', val: '近 (0.9)' },
        { label: '攻击速度', val: '1.1s' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次攻击伤害</th>
                <th><img src="images/基础/Heal_Iconr.webp" onerror="this.src='images/大本营/Heal_Iconr.webp'">每次攻击治疗</th>
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
            // 包含小数的字段，保留1位小数
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    levels: [
        { lv: 28, hp: 1646, dmg: 643, perDmg: 578.7, heal: 130, train: 5800, upg: 1500 },
        { lv: 27, hp: 1553, dmg: 607, perDmg: 546.3, heal: 140, train: 5600, upg: 1500 },
        { lv: 26, hp: 1465, dmg: 573, perDmg: 515.7, heal: 140, train: 5400, upg: 1500 },
        { lv: 25, hp: 1395, dmg: 542, perDmg: 487.8, heal: 140, train: 5200, upg: 1500 },
        { lv: 24, hp: 1324, dmg: 511, perDmg: 459.9, heal: 150, train: 5000, upg: 1450 },
        { lv: 23, hp: 1253, dmg: 482, perDmg: 433.8, heal: 150, train: 4800, upg: 1350 },
        { lv: 22, hp: 1190, dmg: 454, perDmg: 408.6, heal: 150, train: 4600, upg: 1250 },
        { lv: 21, hp: 1120, dmg: 430, perDmg: 387, heal: 160, train: 4400, upg: 1150 },
        { lv: 20, hp: 1058, dmg: 405, perDmg: 364.5, heal: 160, train: 4200, upg: 1050 },
        { lv: 19, hp: 990, dmg: 384, perDmg: 345.6, heal: 170, train: 4000, upg: 950 },
        { lv: 18, hp: 942, dmg: 363, perDmg: 326.7, heal: 170, train: 3800, upg: 850 },
        { lv: 17, hp: 890, dmg: 343, perDmg: 308.7, heal: 180, train: 3600, upg: 750 },
        { lv: 16, hp: 800, dmg: 307, perDmg: 276.3, heal: 180, train: 3200, upg: 650 },
        { lv: 15, hp: 750, dmg: 289, perDmg: 260.1, heal: 190, train: 3000, upg: 550 },
        { lv: 14, hp: 709, dmg: 274, perDmg: 246.6, heal: 190, train: 2800, upg: 450 },
        { lv: 13, hp: 670, dmg: 260, perDmg: 234, heal: 200, train: 2600, upg: 350 },
        { lv: 12, hp: 635, dmg: 245, perDmg: 220.5, heal: 200, train: 2400, upg: 250 },
        { lv: 11, hp: 600, dmg: 230, perDmg: 207, heal: 210, train: 2200, upg: 245 },
        { lv: 10, hp: 560, dmg: 218, perDmg: 196.2, heal: 210, train: 2000, upg: 240 },
        { lv: 9, hp: 531, dmg: 207, perDmg: 186.3, heal: 220, train: 1800, upg: 235 },
        { lv: 8, hp: 502, dmg: 194, perDmg: 174.6, heal: 220, train: 1600, upg: 230 },
        { lv: 7, hp: 473, dmg: 184, perDmg: 165.6, heal: 230, train: 1400, upg: 225 },
        { lv: 6, hp: 450, dmg: 175, perDmg: 157.5, heal: 230, train: 1200, upg: 220 },
        { lv: 5, hp: 423, dmg: 165, perDmg: 148.5, heal: 240, train: 1000, upg: 215 },
        { lv: 4, hp: 400, dmg: 155, perDmg: 139.5, heal: 240, train: 800, upg: 210 },
        { lv: 3, hp: 374, dmg: 145, perDmg: 130.5, heal: 250, train: 600, upg: 205 },
        { lv: 2, hp: 351, dmg: 135, perDmg: 121.5, heal: 250, train: 400, upg: 200 },
        { lv: 1, hp: 328, dmg: 125, perDmg: 112.5, heal: 250, train: 200, upg: 195 }
    ],

    warships: [
        { no: 1, lv: 12, cap: 28, token: '/', tech: 5 },
        { no: 2, lv: 14, cap: 34, token: '57,500', tech: 10 },
        { no: 3, lv: 16, cap: 40, token: '84,000', tech: 15 },
        { no: 4, lv: 18, cap: 46, token: '123,000', tech: 20 },
        { no: 5, lv: 22, cap: 52, token: '195,000', tech: 25 }
    ]
};