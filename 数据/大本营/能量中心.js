window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['能量中心'] = {
    name: '能量中心',
    img: 'images/大本营/Powercore.webp',
    desc: '能量中心是特遣队行动任务中的最终核心目标。它往往拥有极其夸张的生命值，需要集结整个特遣队成员的力量，依靠团队配合来共同摧毁它。',
    hideDmgCalc: true, // 隐藏伤害计算器
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '7×7' }
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

    // 能量中心数据 (仅1级)
    levels: [
        { lv: 1, hp: 200000 }
    ]
};