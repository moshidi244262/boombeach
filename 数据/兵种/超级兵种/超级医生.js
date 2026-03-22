window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['超级医生'] = {
    name: '超级医生',
    img: 'images/兵种/超级兵种/wenhao.webp',
    desc: '拥有更强治愈能力的超级医生，能为部队提供强效的维他命恢复效果。',
    
    hideHpCalc: true, 
    hideDmgCalc: true,
    
    baseStats: [
        { label: '兵种类型', val: '超级兵种' },
        { label: '出处', val: '特殊事件建筑' }
    ],
    
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

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; color:var(--primary); border-right:1px solid rgba(0,0,0,0.03);">${lv.building}</td>
                <td style="text-align:left; border-right:1px solid rgba(0,0,0,0.03);">${lv.ability}</td>
                <td style="color:#16a34a; font-weight:bold;">${lv.bHp}</td>
                <td style="color:#16a34a; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.tHp}</td>
                <td style="color:#0ea5e9; font-weight:bold;">${lv.dps}</td> <!-- 医生治疗用蓝色高亮 -->
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.speed}</td>
                <td style="color:#0ea5e9; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.dmg}</td>
                <td style="color:#4b5563;">${lv.interval}</td>
            </tr>
        `;
    },

    levels: [
        { building: '超级士兵大桶', ability: '属性提升为部队提供维生素', bHp: '15,000', tHp: '25,000', dps: '240', speed: '144', dmg: '270', interval: '0.6S' },
        { building: '惊喜蛋糕', ability: '属性提升为部队提供维生素', bHp: '20,000', tHp: '25,000', dps: '240', speed: '144', dmg: '270', interval: '0.6S' }
    ]
};