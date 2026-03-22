window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['引擎室'] = {
    name: '引擎室',
    img: 'images/大本营/Engine_Room.webp',
    desc: '引擎室是航母战斗中的核心建筑。在航母赛季中，摧毁对手的引擎室即可获得胜利并赢取丰厚奖励。',
    hideDmgCalc: true, // 隐藏伤害计算器，只保留生命值计算
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '4×4' }
    ],
    
    // ==========================================
    // 专属排版定制区块 (自动覆盖 index.html 默认排版)
    // ==========================================

    // 定制表头（移除升级花费，增加建造数量和解锁币）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Build.webp" onerror="this.src='images/大本营/Build.webp'">建造数量</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Icon_Unlock_Token.webp" onerror="this.src='images/大本营/Icon_Unlock_Token.webp'">解锁币</th>
            </tr>
        </thead>
    `,

    // 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td>${lv.build}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td style="color:#ca8a04; font-weight:bold;">${lv.token === 'N/A' ? '<span class="val-none">N/A</span>' : formatNum(lv.token)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑 (只需计算生命值)
    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: Math.round(item.hp * (1 + hpInput / 100))
        }));
    },

    // 引擎室等级数据表 (倒序排列)
    levels: [
        { lv: '5', build: '7/8', hp: 50000, token: 150 },
        { lv: '5', build: '7', hp: 50000, token: 165 },
        { lv: '5', build: '6', hp: 50000, token: 110 },
        { lv: '4', build: '5', hp: 40000, token: 90 },
        { lv: '3', build: '4', hp: 30000, token: 65 },
        { lv: '2', build: '3', hp: 20000, token: 36 },
        { lv: '1', build: '2', hp: 10000, token: 'N/A' }
    ]
};