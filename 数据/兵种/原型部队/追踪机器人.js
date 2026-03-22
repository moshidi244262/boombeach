window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['追踪机器人'] = {
    name: '追踪机器人',
    img: 'images/兵种/原型部队/Seeker.webp',
    desc: '追踪机器人会无视其他建筑的攻击，直接飞向并锁定敌方大本营或引擎室，是极其致命和直接的战术打击单位。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '3' },
        { label: '训练时间', val: '7m30s' },
        { label: '移动速度', val: '中等 (350)' },
        { label: '攻击范围', val: '短 (5)' },
        { label: '攻击速度', val: '0.5s' },
        { label: '特殊能力', val: '锁定大本' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
                <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">训练成本</th>
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
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    levels: [
        { lv: 6, hp: 3800, dmg: 504, perDmg: 252, train: 125000 },
        { lv: 5, hp: 3200, dmg: 441, perDmg: 220.5, train: 97500 },
        { lv: 4, hp: 2600, dmg: 375, perDmg: 187.5, train: 75000 },
        { lv: 3, hp: 2000, dmg: 315, perDmg: 157.5, train: 60000 },
        { lv: 2, hp: 1600, dmg: 267, perDmg: 133.5, train: 50000 },
        { lv: 1, hp: 1300, dmg: 225, perDmg: 112.5, train: 40000 }
    ],

    warships: [
        { no: 1, lv: 1, cap: 75, token: '/', tech: 5 },
        { no: 2, lv: 2, cap: 91, token: '135,500', tech: 10 },
        { no: 3, lv: 3, cap: 107, token: '164,000', tech: 15 },
        { no: 4, lv: 4, cap: 123, token: '198,500', tech: 20 },
        { no: 5, lv: 5, cap: 139, token: '270,000', tech: 25 }
    ]
};