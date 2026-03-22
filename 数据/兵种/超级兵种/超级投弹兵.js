window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['超级投弹兵'] = {
    name: '超级投弹兵',
    img: 'images/兵种/超级兵种/wenhao.webp',
    desc: '超级投弹兵是海岛奇兵中的超级兵种之一，通常出现于特殊建筑中。它拥有远超普通投弹兵的特殊能力。',
    
    // 隐藏由于没有成长等级而不适用的雕像加成计算器
    hideHpCalc: true, 
    hideDmgCalc: true,
    
    // 基础属性网格
    baseStats: [
        { label: '兵种类型', val: '超级兵种' },
        { label: '出处', val: '特殊事件建筑' }
    ],
    
    // ==========================================
    // 专属排版定制区块 (自动覆盖 index.html 默认排版)
    // ==========================================

    // 1. 定制表头（提取专属数据字段）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/大本营/Level.webp" onerror="this.src='images/基础/Level.webp'">属于建筑</th>
                <th>特殊能力</th>
                <th><img src="images/大本营/Hitpoint.webp" onerror="this.src='images/基础/Hitpoint.webp'">建筑血量</th>
                <th><img src="images/大本营/Hitpoint.webp" onerror="this.src='images/基础/Hitpoint.webp'">部队血量</th>
                <th><img src="images/大本营/Damage.webp" onerror="this.src='images/基础/Damage.webp'">每秒伤害/治疗</th>
                <th>移动速度</th>
                <th><img src="images/大本营/Damage.webp" onerror="this.src='images/基础/Damage.webp'">伤害/治疗</th>
                <th><img src="images/大本营/Stopwatch.webp" onerror="this.src='images/基础/Stopwatch.webp'">攻击间隔时间</th>
            </tr>
        </thead>
    `,

    // 2. 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; color:var(--primary); border-right:1px solid rgba(0,0,0,0.03);">${lv.building}</td>
                <td style="text-align:left; border-right:1px solid rgba(0,0,0,0.03);">${lv.ability}</td>
                <td style="color:#16a34a; font-weight:bold;">${lv.bHp}</td>
                <td style="color:#16a34a; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.tHp}</td>
                <td style="color:#dc2626; font-weight:bold;">${lv.dps}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.speed}</td>
                <td style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.dmg}</td>
                <td style="color:#4b5563;">${lv.interval}</td>
            </tr>
        `;
    },

    // 超级投弹兵数据表
    levels: [
        { building: '超级士兵大桶', ability: '属性提升：发射5枚手榴弹而非1枚', bHp: '15,000', tHp: '35,000', dps: '2,600', speed: '482', dmg: '250', interval: '截击间隔3秒，每次投掷间隔0.4秒' },
        { building: '惊喜蛋糕', ability: '属性提升：发射5枚手榴弹而非1枚', bHp: '20,000', tHp: '35,000', dps: '2,600', speed: '482', dmg: '250', interval: '截击间隔3秒，每次投掷间隔0.4秒' }
    ]
};