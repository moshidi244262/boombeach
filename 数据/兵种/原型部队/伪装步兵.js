window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['伪装步兵'] = {
    name: '伪装步兵',
    img: 'images/兵种/原型部队/RiflemanD.webp',
    desc: '伪装步兵拥有与普通步兵相似的外表，但具备特殊的战术定位与消耗机制，能够在战场上形成数量优势。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '1' },
        { label: '训练时间', val: '1m' },
        { label: '移动速度', val: '中等 (220)' },
        { label: '攻击范围', val: '中等 (4.7)' },
        { label: '进攻速度', val: '1s' },
        { label: '要求大本等级', val: '14' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
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
                <td>${formatNum(lv.train)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.upg)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 26, hp: 752, dmg: 215, train: 2000, upg: 1500 },
        { lv: 25, hp: 706, dmg: 199, train: 1900, upg: 1500 },
        { lv: 24, hp: 662, dmg: 184, train: 1800, upg: 1450 },
        { lv: 23, hp: 620, dmg: 170, train: 1700, upg: 1350 },
        { lv: 22, hp: 580, dmg: 157, train: 1600, upg: 1250 },
        { lv: 21, hp: 542, dmg: 145, train: 1500, upg: 1150 },
        { lv: 20, hp: 506, dmg: 134, train: 1400, upg: 1050 },
        { lv: 19, hp: 473, dmg: 124, train: 1300, upg: 950 },
        { lv: 18, hp: 442, dmg: 115, train: 1200, upg: 850 },
        { lv: 17, hp: 413, dmg: 106, train: 1100, upg: 750 },
        { lv: 16, hp: 386, dmg: 98, train: 1000, upg: 650 },
        { lv: 15, hp: 361, dmg: 90, train: 900, upg: 550 },
        { lv: 14, hp: 337, dmg: 84, train: 800, upg: 450 },
        { lv: 13, hp: 315, dmg: 77, train: 700, upg: 350 },
        { lv: 12, hp: 295, dmg: 71, train: 600, upg: 250 },
        { lv: 11, hp: 290, dmg: 65, train: 500, upg: 245 },
        { lv: 10, hp: 285, dmg: 59, train: 450, upg: 240 },
        { lv: 9, hp: 280, dmg: 53, train: 400, upg: 235 },
        { lv: 8, hp: 275, dmg: 47, train: 350, upg: 230 },
        { lv: 7, hp: 270, dmg: 41, train: 300, upg: 225 },
        { lv: 6, hp: 265, dmg: 35, train: 250, upg: 220 },
        { lv: 5, hp: 260, dmg: 29, train: 200, upg: 215 },
        { lv: 4, hp: 255, dmg: 23, train: 150, upg: 210 },
        { lv: 3, hp: 250, dmg: 17, train: 100, upg: 205 },
        { lv: 2, hp: 245, dmg: 11, train: 50, upg: 200 },
        { lv: 1, hp: 240, dmg: 5, train: 20, upg: 195 }
    ],

    warships: [
        { no: 1, lv: 14, cap: 224, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 272, token: '58,000', tech: 10 },
        { no: 3, lv: 18, cap: 320, token: '84,500', tech: 15 },
        { no: 4, lv: 20, cap: 368, token: '112,500', tech: 20 },
        { no: 5, lv: 22, cap: 416, token: '165,000', tech: 25 }
    ]
};