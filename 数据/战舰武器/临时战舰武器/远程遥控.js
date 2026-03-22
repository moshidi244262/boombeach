window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['远程遥控'] = {
    name: '远程遥控',
    img: 'images/战舰武器/临时战舰武器/Remote_Hack.webp',
    desc: '发射黑客信标，控制一座敌方防御建筑，使其在限定时间内为你作战，攻击其他敌方目标。',
    baseStats: [
        { label: '所属分类', val: '临时战舰武器' }
    ],
    
    // 无血量伤害计算器
    hideHpCalc: true,
    hideDmgCalc: true,

    // 定制化表头
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/Level.webp'">等级</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/基础/Stopwatch.webp'">持续时间</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/Menu_icon_research.webp'">研究所等级</th>
            </tr>
        </thead>
    `,

    // 专属渲染模板
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.duration}</td>
                <td>${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 等级数据（从高到低倒序）
    levels: [
        { lv: 21, duration: '18.0s', reqLv: 28 },
        { lv: 20, duration: '17.5s', reqLv: 27 },
        { lv: 19, duration: '17.0s', reqLv: 26 },
        { lv: 18, duration: '16.5s', reqLv: 25 },
        { lv: 17, duration: '16.0s', reqLv: 24 },
        { lv: 16, duration: '15.5s', reqLv: 23 },
        { lv: 15, duration: '15.0s', reqLv: 22 },
        { lv: 14, duration: '14.5s', reqLv: 21 },
        { lv: 13, duration: '14.0s', reqLv: 20 },
        { lv: 12, duration: '13.5s', reqLv: 19 },
        { lv: 11, duration: '13.0s', reqLv: 18 },
        { lv: 10, duration: '12.5s', reqLv: 17 },
        { lv: 9, duration: '12.0s', reqLv: 16 },
        { lv: 8, duration: '11.5s', reqLv: 15 },
        { lv: 7, duration: '11.0s', reqLv: 14 },
        { lv: 6, duration: '10.5s', reqLv: 13 },
        { lv: 5, duration: '10.0s', reqLv: 12 },
        { lv: 4, duration: '9.5s', reqLv: 11 },
        { lv: 3, duration: '9.0s', reqLv: 10 },
        { lv: 2, duration: '8.5s', reqLv: 9 },
        { lv: 1, duration: '8.0s', reqLv: 8 }
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
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">10</td>
                        <td style="color:#4b5563;">10</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">2</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">20</td>
                        <td style="color:#4b5563;">30</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">30</td>
                        <td style="color:#4b5563;">60</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">40</td>
                        <td style="color:#4b5563;">100</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">50</td>
                        <td style="color:#4b5563;">150</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};