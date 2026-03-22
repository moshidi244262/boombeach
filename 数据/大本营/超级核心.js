window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['超级核心'] = {
    name: '超级核心',
    img: 'images/大本营/MegaCore.webp',
    desc: '超级核心是巨型螃蟹等特殊事件中的核心目标建筑。摧毁它可以进入下一阶段的挑战，并获得丰厚的各种资源和道具奖励。',
    hideDmgCalc: true, // 隐藏伤害计算器
    baseStats: [
        { label: '建筑类别', val: '事件核心' }
    ],
    
    // ==========================================
    // 专属排版定制区块
    // ==========================================

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: Math.round(item.hp * (1 + hpInput / 100))
        }));
    },

    // 超级核心数据 (倒序排列)
    levels: [
        { lv: 5, hp: 240000 },
        { lv: 4, hp: 190000 },
        { lv: 3, hp: 140000 },
        { lv: 2, hp: 90000 },
        { lv: 1, hp: 40000 }
    ]
};