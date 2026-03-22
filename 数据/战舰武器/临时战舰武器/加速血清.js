window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['加速血清'] = {
    name: '加速血清',
    img: 'images/战舰武器/临时战舰武器/Speed_Serum.webp',
    desc: '向战场投掷加速血清，大幅提升范围内己方部队的移动和攻击速度，同时还能减少受到的伤害。',
    baseStats: [
        { label: '生命值', val: '500' },
        { label: '建筑面积', val: '3×3' },
        { label: '作用范围', val: '8' },
        { label: '速度加成', val: '300%' },
        { label: '伤害减成', val: '50%' },
        { label: '持续时间', val: '20s' }
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
                <td style="color:var(--text-muted); padding: 32px;">该物品为活动专属或拥有固定属性，无升级数据。</td>
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
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">6</td>
                        <td style="color:#4b5563;">6</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">2</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">14</td>
                        <td style="color:#4b5563;">20</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">22</td>
                        <td style="color:#4b5563;">42</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">30</td>
                        <td style="color:#4b5563;">72</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">38</td>
                        <td style="color:#4b5563;">110</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};