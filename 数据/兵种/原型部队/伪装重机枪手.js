window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['伪装重机枪手'] = {
    name: '伪装重机枪手',
    img: 'images/兵种/原型部队/HeavyD.webp',
    desc: '伪装重机枪手能够承受大量伤害，同时拥有极快的攻击速度，是用作掩护和清扫近距离防御的极佳人选。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '4' },
        { label: '训练时间', val: '6m' },
        { label: '移动速度', val: '中等 (230)' },
        { label: '攻击速度', val: '0.1s' },
        { label: '攻击范围', val: '近程 (3.3)' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">天赋伤害</th>
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
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#dc2626;">${formatNum(lv.talentDmg)}</td>
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
            talentDmg: item.talentDmg !== '/' ? Math.round(item.talentDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 26, hp: 6866, dmg: 203, talentDmg: 2390, train: 10500, upg: 1500 },
        { lv: 25, hp: 6351, dmg: 191, talentDmg: 2190, train: 10000, upg: 1500 },
        { lv: 24, hp: 5876, dmg: 179, talentDmg: 2010, train: 9500, upg: 1450 },
        { lv: 23, hp: 5438, dmg: 167, talentDmg: 1850, train: 9000, upg: 1350 },
        { lv: 22, hp: 5034, dmg: 155, talentDmg: 1670, train: 8500, upg: 1250 },
        { lv: 21, hp: 4661, dmg: 144, talentDmg: 1550, train: 8000, upg: 1150 },
        { lv: 20, hp: 4316, dmg: 133, talentDmg: 1430, train: 7500, upg: 1050 },
        { lv: 19, hp: 3996, dmg: 123, talentDmg: 1320, train: 7000, upg: 950 },
        { lv: 18, hp: 3700, dmg: 113, talentDmg: 1220, train: 6500, upg: 850 },
        { lv: 17, hp: 3426, dmg: 104, talentDmg: 1130, train: 6000, upg: 750 },
        { lv: 16, hp: 3172, dmg: 96, talentDmg: 1040, train: 5600, upg: 650 },
        { lv: 15, hp: 2937, dmg: 88, talentDmg: 960, train: 5200, upg: 550 },
        { lv: 14, hp: 2720, dmg: 81, talentDmg: 890, train: 4800, upg: 450 },
        { lv: 13, hp: 2518, dmg: 75, talentDmg: 820, train: 4400, upg: 350 },
        { lv: 12, hp: 2332, dmg: 69, talentDmg: 760, train: 4000, upg: 250 },
        { lv: 11, hp: 2159, dmg: 64, talentDmg: 700, train: 3900, upg: 245 },
        { lv: 10, hp: 1999, dmg: 59, talentDmg: 650, train: 3800, upg: 240 },
        { lv: 9, hp: 1851, dmg: 54, talentDmg: 600, train: 3700, upg: 235 },
        { lv: 8, hp: 1714, dmg: 50, talentDmg: 560, train: 3600, upg: 230 },
        { lv: 7, hp: 1587, dmg: 46, talentDmg: 510, train: 3500, upg: 225 },
        { lv: 6, hp: 1469, dmg: 42, talentDmg: 470, train: 3400, upg: 220 },
        { lv: 5, hp: 1360, dmg: 39, talentDmg: 440, train: 3300, upg: 215 },
        { lv: 4, hp: 1260, dmg: 36, talentDmg: 410, train: 3200, upg: 210 },
        { lv: 3, hp: 1166, dmg: 33, talentDmg: 370, train: 3100, upg: 205 },
        { lv: 2, hp: 1080, dmg: 31, talentDmg: 350, train: 3000, upg: 200 },
        { lv: 1, hp: 1000, dmg: 28, talentDmg: 320, train: 2900, upg: 195 }
    ]
};