window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['焚火战车(改版)'] = {
    name: '焚火战车(改版)',
    img: 'images/兵种/原型部队/Incinerator2.webp',
    desc: '焚火战车拥有厚重的装甲和致命的范围伤害，能在战场上持续造成灼烧效果，并在被摧毁时引发威力巨大的爆炸。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '50m' },
        { label: '移动速度', val: '中等 (230)' },
        { label: '攻击范围', val: '中等 (3.3-7)' },
        { label: '攻击速度', val: '0.5s' },
        { label: '要求大本等级', val: '14' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">残余烧伤伤害</th>
                <th><img src="images/基础/Damagetype.webp" onerror="this.src='images/大本营/Damagetype.webp'">死亡伤害</th>
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
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#f97316;">${formatNum(lv.burn)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#b91c1c; font-weight:500;">${formatNum(lv.deathDmg)}</td>
                <td>${formatNum(lv.train)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.upg)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Number((item.dmg * (1 + dmgInput / 100)).toFixed(1)) : '/',
            perDmg: item.perDmg !== '/' ? Math.round(item.perDmg * (1 + dmgInput / 100)) : '/',
            burn: item.burn !== '/' ? Math.round(item.burn * (1 + dmgInput / 100)) : '/',
            deathDmg: item.deathDmg !== '/' ? Math.round(item.deathDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 26, hp: 50500, dmg: 1422.8, perDmg: 1104, burn: 3408, deathDmg: 9815, train: 85000, upg: 1500 },
        { lv: 25, hp: 49000, dmg: 1301.9, perDmg: 1010, burn: 3119, deathDmg: 9427, train: 80000, upg: 1450 },
        { lv: 24, hp: 47500, dmg: 1188.8, perDmg: 922, burn: 2848, deathDmg: 9039, train: 75000, upg: 1350 },
        { lv: 23, hp: 46000, dmg: 1083.6, perDmg: 840, burn: 2596, deathDmg: 8651, train: 70000, upg: 1250 },
        { lv: 22, hp: 44500, dmg: 986.3, perDmg: 765, burn: 2363, deathDmg: 8263, train: 65000, upg: 1150 },
        { lv: 21, hp: 43000, dmg: 896.8, perDmg: 696, burn: 2148, deathDmg: 7875, train: 60000, upg: 1050 },
        { lv: 20, hp: 41500, dmg: 815.3, perDmg: 632, burn: 1953, deathDmg: 7487, train: 55000, upg: 950 },
        { lv: 19, hp: 40000, dmg: 741.7, perDmg: 575, burn: 1777, deathDmg: 7099, train: 50000, upg: 850 },
        { lv: 18, hp: 38500, dmg: 675.9, perDmg: 524, burn: 1619, deathDmg: 6711, train: 48000, upg: 750 },
        { lv: 17, hp: 37000, dmg: 618.1, perDmg: 479, burn: 1481, deathDmg: 6323, train: 46000, upg: 650 },
        { lv: 16, hp: 35500, dmg: 568.1, perDmg: 441, burn: 1361, deathDmg: 5935, train: 44000, upg: 550 },
        { lv: 15, hp: 34000, dmg: 526, perDmg: 408, burn: 1260, deathDmg: 5547, train: 42000, upg: 450 },
        { lv: 14, hp: 32500, dmg: 491.8, perDmg: 381, burn: 1178, deathDmg: 5159, train: 40000, upg: 350 },
        { lv: 13, hp: 31000, dmg: 465.5, perDmg: 361, burn: 1115, deathDmg: 4771, train: 38000, upg: 250 },
        { lv: 12, hp: 29500, dmg: 447.1, perDmg: 347, burn: 1071, deathDmg: 4383, train: 36000, upg: '/' }
    ],

    warships: [
        { no: 1, lv: 14, cap: 11, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 13, token: '135,500', tech: 10 },
        { no: 3, lv: 18, cap: 15, token: '164,000', tech: 15 },
        { no: 4, lv: 20, cap: 18, token: '198,500', tech: 20 },
        { no: 5, lv: 22, cap: 20, token: '270,000', tech: 25 }
    ]
};