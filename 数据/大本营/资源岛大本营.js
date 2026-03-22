window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['资源岛大本营'] = {
    name: '资源岛大本营',
    img: 'images/大本营/Sub.webp',
    desc: '资源岛大本营又称为分基地，是资源岛的核心建筑。占领资源岛后，它将为你源源不断地生产资源。务必保护好你的资源岛大本营，防止被其他玩家夺走！',
    hideDmgCalc: true, // 隐藏伤害计算器
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '4×4' }
    ],
    
    // ==========================================
    // 专属排版定制区块
    // ==========================================

    // 定制表头（极简表头）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
            </tr>
        </thead>
    `,

    // 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑
    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: Math.round(item.hp * (1 + hpInput / 100))
        }));
    },

    // 资源岛大本营数据 (倒序排列)
    levels: [
        { lv: 28, hp: 328000 },
        { lv: 27, hp: 288000 },
        { lv: 26, hp: 253000 },
        { lv: 25, hp: 222000 },
        { lv: 24, hp: 204000 },
        { lv: 23, hp: 186000 },
        { lv: 22, hp: 168300 },
        { lv: 21, hp: 153000 },
        { lv: 20, hp: 135000 },
        { lv: 19, hp: 117000 },
        { lv: 18, hp: 99000 },
        { lv: 17, hp: 81000 },
        { lv: 16, hp: 67500 },
        { lv: 15, hp: 54000 },
        { lv: 14, hp: 45000 },
        { lv: 13, hp: 38700 },
        { lv: 12, hp: 34200 },
        { lv: 11, hp: 29700 },
        { lv: 10, hp: 26100 },
        { lv: 9, hp: 23400 },
        { lv: 8, hp: 20700 },
        { lv: 7, hp: 18000 },
        { lv: 6, hp: 16200 },
        { lv: 5, hp: 14400 },
        { lv: 4, hp: 12600 },
        { lv: 3, hp: 10800 },
        { lv: 2, hp: 9900 },
        { lv: 1, hp: 9000 }
    ]
};