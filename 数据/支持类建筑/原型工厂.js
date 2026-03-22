window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['原型工厂'] = {
    name: '原型工厂',
    img: 'images/支持类建筑/原型工厂/UPGRADE PROTO TROOP WORKSHOP.webp',
    desc: '原型部队工作室可以生产强大的原型部队，为您的进攻提供额外的战力支援。升级以解锁更多卡槽与容量。',
    baseStats: [
        { label: '建筑面积', val: '4×4' },
        { label: '建筑类型', val: '支持类建筑' }
    ],
    
    // 隐藏攻击计算器，保留血量计算器
    hideDmgCalc: true,
    hideHpCalc: false,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/wenhao.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/基础/wenhao.webp'">生命</th>
                <th><img src="images/基础/Wood.webp" onerror="this.src='images/基础/wenhao.webp'">升级(木)</th>
                <th><img src="images/基础/Stone.webp" onerror="this.src='images/基础/wenhao.webp'">升级(石)</th>
                <th><img src="images/基础/Iron.webp" onerror="this.src='images/基础/wenhao.webp'">升级(钢)</th>
                <th><img src="images/基础/TroopCapacity.webp" onerror="this.src='images/基础/wenhao.webp'">存储容量</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/wenhao.webp'">训练卡槽</th>
                <th><img src="images/基础/wenhao.webp">采购插槽</th>
                <th><img src="images/基础/wenhao.webp">最大优惠</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/基础/wenhao.webp'">时间</th>
                <th><img src="images/基础/Diamond.webp" onerror="this.src='images/基础/wenhao.webp'">秒钻</th>
                <th><img src="images/基础/TimeSaver.webp" onerror="this.src='images/基础/wenhao.webp'">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/基础/wenhao.webp'">大本</th>
                <th><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/基础/wenhao.webp'">经验</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td style="color:#a16207;">${formatNum(lv.cw)}</td>
                <td style="color:#4b5563;">${formatNum(lv.cs)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ci)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.sc)}</td>
                <td style="color:#10b981; font-weight:bold;">${formatNum(lv.ts)}</td>
                <td style="color:#8b5cf6;">${formatNum(lv.ps)}</td>
                <td style="color:#f59e0b; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.yh)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 1, hp: 1200, cw: 500000, cs: 200000, ci: 50000, sc: 4, ts: 1, ps: 1, yh: 4, time: '45m', diamond: '/', ticket: 3, reqLv: 11, exp: 8 },
        { lv: 2, hp: 1300, cw: 590000, cs: 260000, ci: 75000, sc: 4, ts: 2, ps: 1, yh: 4, time: '2h', diamond: 988, ticket: 8, reqLv: 12, exp: 14 },
        { lv: 3, hp: 1400, cw: 700000, cs: 340000, ci: 115000, sc: 6, ts: 2, ps: 1, yh: 6, time: '3h 30m', diamond: 1178, ticket: 14, reqLv: 13, exp: 18 },
        { lv: 4, hp: 1500, cw: 825000, cs: 450000, ci: 175000, sc: 6, ts: 3, ps: 1, yh: 6, time: '4h', diamond: 1387, ticket: 16, reqLv: 14, exp: 20 },
        { lv: 5, hp: 1600, cw: 975000, cs: 580000, ci: 275000, sc: 8, ts: 3, ps: 1, yh: 8, time: '5h', diamond: 1644, ticket: 20, reqLv: 15, exp: 22 },
        { lv: 6, hp: 1700, cw: 1150000, cs: 770000, ci: 415000, sc: 8, ts: 3, ps: 2, yh: 8, time: '6h', diamond: 1965, ticket: 24, reqLv: 16, exp: 26 },
        { lv: 7, hp: 1900, cw: 1350000, cs: 1000000, ci: 630000, sc: 10, ts: 3, ps: 2, yh: 10, time: '7h', diamond: 2343, ticket: 28, reqLv: 17, exp: 28 },
        { lv: 8, hp: 2100, cw: 1600000, cs: 1300000, ci: 700000, sc: 10, ts: 4, ps: 2, yh: 10, time: '8h', diamond: 2678, ticket: 32, reqLv: 18, exp: 31 },
        { lv: 9, hp: 2300, cw: 1900000, cs: 1720000, ci: 1500000, sc: 12, ts: 4, ps: 2, yh: 12, time: '9h', diamond: 3456, ticket: 36, reqLv: 19, exp: 31 },
        { lv: 10, hp: 2500, cw: 2250000, cs: 2250000, ci: 2250000, sc: 12, ts: 5, ps: 2, yh: 12, time: '10h', diamond: 4222, ticket: 40, reqLv: 20, exp: 34 },
        { lv: 11, hp: 2700, cw: 2650000, cs: 2650000, ci: 2650000, sc: 12, ts: 5, ps: 3, yh: 12, time: '12h', diamond: '/', ticket: 48, reqLv: 21, exp: 40 },
        { lv: 12, hp: 2900, cw: 3150000, cs: 3150000, ci: 3150000, sc: 14, ts: 5, ps: 3, yh: 14, time: '14h', diamond: 5344, ticket: 56, reqLv: 22, exp: 48 },
        { lv: 13, hp: 3200, cw: 3700000, cs: 3700000, ci: 3700000, sc: 14, ts: 6, ps: 3, yh: 14, time: '16h', diamond: '/', ticket: 64, reqLv: 23, exp: 50 },
        { lv: 14, hp: 3500, cw: 4400000, cs: 4400000, ci: 4400000, sc: 16, ts: 6, ps: 3, yh: 16, time: '18h', diamond: '/', ticket: 72, reqLv: 24, exp: 60 },
        { lv: 15, hp: 3800, cw: 5200000, cs: 5200000, ci: 5200000, sc: 18, ts: 6, ps: 3, yh: 16, time: '20h', diamond: '/', ticket: 80, reqLv: 25, exp: 67 },
        { lv: 16, hp: 4100, cw: 6150000, cs: 6150000, ci: 6150000, sc: 18, ts: 6, ps: 4, yh: 16, time: '1d', diamond: '/', ticket: 96, reqLv: 26, exp: 69 },
        { lv: 17, hp: 4500, cw: 7250000, cs: 7250000, ci: 7250000, sc: 20, ts: 6, ps: 4, yh: 16, time: '1d 4h', diamond: '/', ticket: 112, reqLv: 27, exp: 73 },
        { lv: 18, hp: 4900, cw: 8500000, cs: 8500000, ci: 8500000, sc: 22, ts: 6, ps: 4, yh: 16, time: '1d 8h', diamond: 11202, ticket: 128, reqLv: 28, exp: 74 }
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
                        ${[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
    `
};