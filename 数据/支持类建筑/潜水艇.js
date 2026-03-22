window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['潜水艇'] = {
    name: '潜水艇',
    img: 'images/支持类建筑/潜水艇/Submarine.webp',
    desc: '潜水艇可以潜入海底帮您寻找深海宝藏。升级潜水艇可以增加最大下潜深度，从而获取更珍贵的战利品。',
    baseStats: [
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '深海寻宝' }
    ],
    
    // 隐藏计算器（潜水艇没有生命值和伤害）
    hideHpCalc: true,
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Submarine.webp">最大深度</th>
                <th><img src="images/基础/Wood.webp">木材</th>
                <th><img src="images/基础/Stone.webp">石材</th>
                <th><img src="images/基础/Iron.webp">钢材</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">大本</th>
                <th><img src="images/基础/Icon_info_xp.webp">经验</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.depth)} 米</td>
                <td style="color:#a16207;">${formatNum(lv.cw)}</td>
                <td style="color:#4b5563;">${formatNum(lv.cs)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ci)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    levels: [
        { lv: 1, depth: 600, cw: 50000, cs: 12000, ci: 3200, time: '2h', diamond: 184, ticket: 8, reqLv: 9, exp: 1 },
        { lv: 2, depth: 700, cw: 57000, cs: 13500, ci: 3600, time: '3h 15m', diamond: 217, ticket: 13, reqLv: 9, exp: 1 },
        { lv: 3, depth: 800, cw: 99000, cs: 24800, ci: 8000, time: '5h', diamond: 326, ticket: 20, reqLv: 10, exp: 8 },
        { lv: 4, depth: 900, cw: 134000, cs: 49000, ci: 14000, time: '6h', diamond: 422, ticket: 24, reqLv: 11, exp: 12 },
        { lv: 5, depth: 1000, cw: 201000, cs: 95000, ci: 24800, time: '7h', diamond: 573, ticket: 28, reqLv: 12, exp: 14 },
        { lv: 6, depth: 1100, cw: 284000, cs: 171000, ci: 49000, time: '8h', diamond: 754, ticket: 32, reqLv: 13, exp: 15 },
        { lv: 7, depth: 1200, cw: 390000, cs: 340000, ci: 95000, time: '10h', diamond: 1042, ticket: 40, reqLv: 14, exp: 17 },
        { lv: 8, depth: 1300, cw: 670000, cs: 510000, ci: 187000, time: '12h', diamond: 1435, ticket: 48, reqLv: 15, exp: 20 },
        { lv: 9, depth: 1400, cw: 950000, cs: 850000, ci: 370000, time: '13h', diamond: 1936, ticket: 52, reqLv: 16, exp: 23 },
        { lv: 10, depth: 1500, cw: 1350000, cs: 1110000, ci: 700000, time: '14h', diamond: 2517, ticket: 56, reqLv: 17, exp: 26 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">各等级可用数量</h3>
        <div class="table-container">
            <table class="data-table" style="min-width: max-content;">
                <thead>
                    <tr>
                        <th style="padding:12px 16px; border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/HQ_Icon.webp" style="vertical-align:middle;margin-right:4px;">司令部等级</th>
                        ${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map(l => `<th style="min-width:40px;">${l}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:bold; color:var(--primary); border-right:1px solid rgba(0,0,0,0.03);">最大建造数量</td>
                        ${[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">潜水艇下潜地点数据</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th><img src="images/基础/Explore.webp" onerror="this.src='images/大本营/Explore.webp'">需雷达等级</th>
                        <th><img src="images/基础/Gold.webp">发现区域的成本</th>
                        <th><img src="images/基础/Submarine.webp">最大可能下潜深度</th>
                    </tr>
                </thead>
                <tbody>
                    ${[
                        { no: 1, radar: 5, cost: '14,000', depth: '700' },
                        { no: 2, radar: 7, cost: '34,000', depth: '700' },
                        { no: 3, radar: 8, cost: '100,000', depth: '700' },
                        { no: 4, radar: 9, cost: '170,000', depth: '700' },
                        { no: 5, radar: 9, cost: '220,000', depth: '700' },
                        { no: 6, radar: 10, cost: '190,000', depth: '800' },
                        { no: 7, radar: 11, cost: '180,000', depth: '900' },
                        { no: 8, radar: 12, cost: '330,000', depth: '1,000' },
                        { no: 9, radar: 13, cost: '600,000', depth: '1,100' },
                        { no: 10, radar: 14, cost: '600,000', depth: '1,200' },
                        { no: 11, radar: 15, cost: '800,000', depth: '1,300' },
                        { no: 12, radar: 16, cost: '1,100,000', depth: '1,400' },
                        { no: 13, radar: 17, cost: '1,800,000', depth: '1,500' },
                        { no: 14, radar: 18, cost: '2,000,000', depth: '1,500' },
                        { no: 15, radar: 19, cost: '2,400,000', depth: '1,500' },
                        { no: 16, radar: 20, cost: '2,000,000', depth: '1,500' }
                    ].map(item => `
                        <tr>
                            <td>${item.no}</td>
                            <td>${item.radar}</td>
                            <td style="color:#ca8a04;">${item.cost}</td>
                            <td style="color:var(--primary); font-weight:bold;">${item.depth} 米</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
};