window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['晶簇小怪'] = {
    name: '晶簇小怪',
    img: 'images/战舰武器/临时战舰武器/Crystal_Critters.webp',
    desc: '释放出一群晶簇小怪，它们本身不具备攻击力，但会寻找受伤的己方部队并为其提供快速治疗。',
    baseStats: [
        { label: '移动速度', val: '快速/400' },
        { label: '生命值', val: '2,500' },
        { label: '每秒治疗次数', val: '30' },
        { label: '治愈范围', val: '1.5-2.5' },
        { label: '治愈速度', val: '0.4s' },
        { label: '寿命', val: '15.0s' }
    ],
    
    // 升级仅增加数量，无需展示计算器
    hideHpCalc: true,
    hideDmgCalc: true,

    // 定制化表头
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/Level.webp'">等级</th>
                <th><img src="images/战舰武器/临时战舰武器/Resurrection_Bomb.webp" onerror="this.src='images/基础/TroopCapacity.webp'">部署数量</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/Menu_icon_research.webp'">研究所等级</th>
            </tr>
        </thead>
    `,

    // 专属渲染模板
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.count)}</td>
                <td>${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 等级数据（从高到低倒序）
    levels: [
        { lv: 21, count: 11, reqLv: 28 },
        { lv: 20, count: 11, reqLv: 27 },
        { lv: 19, count: 10, reqLv: 26 },
        { lv: 18, count: 10, reqLv: 25 },
        { lv: 17, count: 9, reqLv: 24 },
        { lv: 16, count: 9, reqLv: 23 },
        { lv: 15, count: 8, reqLv: 22 },
        { lv: 14, count: 8, reqLv: 21 },
        { lv: 13, count: 8, reqLv: 20 },
        { lv: 12, count: 7, reqLv: 19 },
        { lv: 11, count: 7, reqLv: 18 },
        { lv: 10, count: 7, reqLv: 17 },
        { lv: 9, count: 6, reqLv: 16 },
        { lv: 8, count: 6, reqLv: 15 },
        { lv: 7, count: 6, reqLv: 14 },
        { lv: 6, count: 5, reqLv: 13 },
        { lv: 5, count: 5, reqLv: 12 },
        { lv: 4, count: 5, reqLv: 11 },
        { lv: 3, count: 4, reqLv: 10 },
        { lv: 2, count: 4, reqLv: 9 },
        { lv: 1, count: 4, reqLv: 8 }
    ],

    // 附属的战舰能量消耗表格
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">战舰能量消耗表</h3>
        <div class="table-container" style="max-width: 500px;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);">部署次数</th>
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
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">12</td>
                        <td style="color:#4b5563;">18</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">18</td>
                        <td style="color:#4b5563;">36</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">24</td>
                        <td style="color:#4b5563;">60</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">30</td>
                        <td style="color:#4b5563;">90</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};