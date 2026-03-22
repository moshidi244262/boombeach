window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['复苏水晶'] = {
    name: '复苏水晶',
    img: 'images/战舰武器/临时战舰武器/Resurrection_Bomb.webp',
    desc: '抛出复苏水晶，将复苏能量覆盖战场，复活在范围内阵亡的部队。',
    baseStats: [
        { label: '持续时间', val: '4.0s' },
        { label: '所属分类', val: '临时战舰武器' }
    ],
    
    // 该物品无生命值和伤害，隐藏计算器
    hideHpCalc: true,
    hideDmgCalc: true,

    // 定制化表头：仅展示需要的列
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/Level.webp'">等级</th>
                <th><img src="images/基础/TroopCapacity.webp" onerror="this.src='images/基础/TroopCapacity.webp'">复活空间</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/Menu_icon_research.webp'">研究所等级</th>
            </tr>
        </thead>
    `,

    // 专属行渲染模板
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.space)}</td>
                <td>${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 提取的升级数据
    levels: [
        { lv: 1, space: 6, reqLv: 8 },
        { lv: 2, space: 7, reqLv: 9 },
        { lv: 3, space: 8, reqLv: 10 },
        { lv: 4, space: 9, reqLv: 11 },
        { lv: 5, space: 10, reqLv: 12 },
        { lv: 6, space: 11, reqLv: 13 },
        { lv: 7, space: 12, reqLv: 14 },
        { lv: 8, space: 13, reqLv: 15 },
        { lv: 9, space: 14, reqLv: 16 },
        { lv: 10, space: 15, reqLv: 17 },
        { lv: 11, space: 16, reqLv: 18 },
        { lv: 12, space: 17, reqLv: 19 },
        { lv: 13, space: 18, reqLv: 20 },
        { lv: 14, space: 19, reqLv: 21 },
        { lv: 15, space: 20, reqLv: 22 },
        { lv: 16, space: 21, reqLv: 23 },
        { lv: 17, space: 22, reqLv: 24 },
        { lv: 18, space: 23, reqLv: 25 },
        { lv: 19, space: 24, reqLv: 26 },
        { lv: 20, space: 25, reqLv: 27 },
        { lv: 21, space: 26, reqLv: 28 }
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
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">8</td>
                        <td style="color:#4b5563;">8</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">2</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">18</td>
                        <td style="color:#4b5563;">26</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">28</td>
                        <td style="color:#4b5563;">54</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">38</td>
                        <td style="color:#4b5563;">92</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">48</td>
                        <td style="color:#4b5563;">140</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};