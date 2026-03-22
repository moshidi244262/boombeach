window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['微型震爆弹'] = {
    name: '微型震爆弹',
    img: 'images/战舰武器/临时战舰武器/Tiny_Shock.webp',
    desc: '向目标区域发射微型震爆弹，瘫痪范围内的敌方防御建筑，使其在短时间内无法攻击。这是一个拥有超长控制时间的特殊战舰技能。',
    baseStats: [
        { label: '震爆时长', val: '30.0s' },
        { label: '所属分类', val: '临时战舰武器' }
    ],
    
    // 无相关计算器需要
    hideHpCalc: true,
    hideDmgCalc: true,

    // 因没有升级等级数据，简化表头并隐藏常规升级表逻辑
    tableHeadersHtml: `
        <thead>
            <tr>
                <th style="text-align:center; padding: 16px;">升级数据说明</th>
            </tr>
        </thead>
    `,

    // 仅显示一条占位信息
    renderRowTemplate: function() {
        return `
            <tr>
                <td style="color:var(--text-muted); padding: 32px;">该物品为活动专属或拥有固定属性，暂无常规研究所升级数据。</td>
            </tr>
        `;
    },

    // 传入一个占位元素以触发渲染
    levels: [ {} ],

    // 附属的战舰能量消耗表格
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">战舰能量消耗表</h3>
        <div class="table-container" style="max-width: 500px;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);">施放次数</th>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Ammo.webp" onerror="this.src='images/基础/Ammo.webp'">本次能量成本</th>
                        <th><img src="images/基础/Ammo.webp" onerror="this.src='images/基础/Ammo.webp'">累计消耗能量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">1</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#4b5563;">3</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">2</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">6</td>
                        <td style="color:#4b5563;">9</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">9</td>
                        <td style="color:#4b5563;">18</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">12</td>
                        <td style="color:#4b5563;">30</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">15</td>
                        <td style="color:#4b5563;">45</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};