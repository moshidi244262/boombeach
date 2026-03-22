window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['冷冻炸弹'] = {
    name: '冷冻炸弹',
    img: 'images/战舰武器/临时战舰武器/Cryobomb.webp',
    desc: '向目标区域投掷冷冻炸弹，对区域内造成一定伤害，并大幅度降低敌方建筑或部队的攻击速度与移动速度。',
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '血量', val: '270' },
        { label: '伤害半径', val: '12' },
        { label: '伤害', val: '260' },
        { label: '部队速度下降', val: '75%' },
        { label: '持续时间', val: '20s' }
    ],
    
    // 无升级计算需要
    hideHpCalc: true,
    hideDmgCalc: true,

    // 因没有常规升级等级数据，简化表头
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

    // 航母数据（从高到低倒序）
    warships: [
        { no: 5, lv: 16, cap: '/', token: 165000, tech: 25 },
        { no: 4, lv: 14, cap: '/', token: 632000, tech: 20 },
        { no: 3, lv: 12, cap: '/', token: 255000, tech: 15 },
        { no: 2, lv: 10, cap: '/', token: 135000, tech: 10 },
        { no: 1, lv: 8, cap: '/', token: '/', tech: 5 }
    ],

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