window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['船舰'] = {
    name: '船舰',
    img: 'images/支持类建筑/GB22.webp',
    desc: '您的船舰（战舰）停靠在海边，能够为您的部队提供强大的火力支援和掩护。升级船舰可以获得更多的初始战舰能量。<br><span style="color:#6b7280;font-size:0.85rem;">（注：当前显示的详细数据基于原「登陆艇」格式进行复刻和预留）</span>',
    baseStats: [
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '火力支援' }
    ],
    
    // 隐藏计算器
    hideHpCalc: true,
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/TroopCapacity.webp">容量(能量)</th>
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
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.cap}</td>
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
        { lv: 1, cap: 5, cw: 150, cs: '/', ci: '/', time: '3s', diamond: 1, ticket: 1, reqLv: 1, exp: 1 },
        { lv: 2, cap: 6, cw: 250, cs: '/', ci: '/', time: '3s', diamond: 3, ticket: 1, reqLv: 2, exp: 1 },
        { lv: 3, cap: 7, cw: 3200, cs: '/', ci: '/', time: '15m', diamond: 33, ticket: 1, reqLv: 3, exp: 8 },
        { lv: 4, cap: 8, cw: 9400, cs: '/', ci: '/', time: '30m', diamond: 62, ticket: 2, reqLv: 4, exp: 12 },
        { lv: 5, cap: 9, cw: 18300, cs: '/', ci: '/', time: '45m', diamond: 87, ticket: 3, reqLv: 5, exp: 14 },
        { lv: 6, cap: 10, cw: 24400, cs: 4300, ci: '/', time: '1h', diamond: 121, ticket: 4, reqLv: 6, exp: 15 },
        { lv: 7, cap: 11, cw: 37000, cs: 7400, ci: '/', time: '1h 30m', diamond: 157, ticket: 6, reqLv: 7, exp: 17 },
        { lv: 8, cap: 12, cw: 62000, cs: 13500, ci: '/', time: '2h', diamond: 221, ticket: 8, reqLv: 8, exp: 20 },
        { lv: 9, cap: 13, cw: 97000, cs: 23100, ci: 6200, time: '4h', diamond: 303, ticket: 16, reqLv: 9, exp: 22 },
        { lv: 10, cap: 14, cw: 154000, cs: 39000, ci: 12500, time: '6h', diamond: 422, ticket: 24, reqLv: 10, exp: 26 },
        { lv: 11, cap: 15, cw: 212000, cs: 77000, ci: 22100, time: '7h', diamond: 533, ticket: 28, reqLv: 11, exp: 28 },
        { lv: 12, cap: 16, cw: 320000, cs: 151000, ci: 40000, time: '8h', diamond: 750, ticket: 32, reqLv: 12, exp: 28 },
        { lv: 13, cap: 17, cw: 460000, cs: 276000, ci: 79000, time: '10h', diamond: 1022, ticket: 40, reqLv: 13, exp: 34 },
        { lv: 14, cap: 18, cw: 660000, cs: 510000, ci: 155000, time: '12h', diamond: 1426, ticket: 48, reqLv: 14, exp: 40 },
        { lv: 15, cap: 19, cw: 1080000, cs: 840000, ci: 310000, time: '14h', diamond: 1979, ticket: 56, reqLv: 15, exp: 46 },
        { lv: 16, cap: 20, cw: 1590000, cs: 1430000, ci: 620000, time: '16h', diamond: 2766, ticket: 64, reqLv: 16, exp: 54 },
        { lv: 17, cap: 21, cw: 2020000, cs: 1890000, ci: 1200000, time: '18h', diamond: 3528, ticket: 72, reqLv: 17, exp: 58 },
        { lv: 18, cap: 22, cw: 2830000, cs: 2580000, ci: 1690000, time: '20h', diamond: 4449, ticket: 80, reqLv: 18, exp: 60 },
        { lv: 19, cap: 23, cw: 3200000, cs: 3130000, ci: 2460000, time: '1d', diamond: 5216, ticket: 96, reqLv: 19, exp: 61 },
        { lv: 20, cap: 24, cw: 3400000, cs: 3600000, ci: 3350000, time: '1d 4h', diamond: 5880, ticket: 112, reqLv: 20, exp: 66 },
        { lv: 21, cap: 25, cw: 3700000, cs: 4430000, ci: 4100000, time: '1d 6h', diamond: 6659, ticket: 120, reqLv: 21, exp: 68 },
        { lv: 22, cap: 26, cw: 4320000, cs: 5080000, ci: 4700000, time: '1d 8h', diamond: 7337, ticket: 128, reqLv: 22, exp: 70 },
        { lv: 23, cap: 27, cw: 4970000, cs: 5840000, ci: 5410000, time: '1d 10h', diamond: 8127, ticket: 136, reqLv: 23, exp: 72 },
        { lv: 24, cap: 28, cw: 5710000, cs: 6720000, ci: 6220000, time: '1d 12h', diamond: 8989, ticket: 144, reqLv: 24, exp: 74 },
        { lv: 25, cap: 29, cw: 6570000, cs: 7730000, ci: 7150000, time: '1d 14h', diamond: 9944, ticket: 152, reqLv: 25, exp: 76 },
        { lv: 26, cap: 30, cw: 9000000, cs: 10200000, ci: 9600000, time: '1d 16h', diamond: 12287, ticket: 160, reqLv: 26, exp: 78 },
        { lv: 27, cap: 31, cw: 10500000, cs: 11700000, ci: 11100000, time: '1d 18h', diamond: 13674, ticket: 168, reqLv: 28, exp: 80 }
    ],

    warships: [
        { no: 1, lv: 10, cap: 4, token: '/', tech: 5 },
        { no: 2, lv: 12, cap: 5, token: 29000, tech: 10 },
        { no: 3, lv: 14, cap: 6, token: 47000, tech: 15 },
        { no: 4, lv: 18, cap: 8, token: 92000, tech: 20 },
        { no: 5, lv: 22, cap: 8, token: 135000, tech: 25 },
        { no: 6, lv: 26, cap: 8, token: '/', tech: '/' }
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
                        ${[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">船舰外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级船舰', img: 'images/支持类建筑/船舰/GB1.webp' },
                { name: '二至三级船舰', img: 'images/支持类建筑/船舰/GB2.webp' },
                { name: '四至五级船舰', img: 'images/支持类建筑/船舰/GB4.webp' },
                { name: '六至七级船舰', img: 'images/支持类建筑/船舰/GB6.webp' },
                { name: '八至九级船舰', img: 'images/支持类建筑/船舰/GB8.webp' },
                { name: '十至十四级船舰', img: 'images/支持类建筑/船舰/GB10.webp' },
                { name: '十五至十六级船舰', img: 'images/支持类建筑/船舰/GB15.webp' },
                { name: '十七级船舰', img: 'images/支持类建筑/船舰/GB17.webp' },
                { name: '十八至二十级船舰', img: 'images/支持类建筑/船舰/GB18.webp' },
                { name: '二十一级船舰', img: 'images/支持类建筑/船舰/GB21.webp' },
                { name: '二十二至二十七级船舰', img: 'images/支持类建筑/船舰/GB22.webp' }
            ].map(imgObj => `
                <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                    <div class="card-img-box" style="height:80px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                        <img src="${imgObj.img}" alt="${imgObj.name}" style="max-width:100%; max-height:100%; object-fit:contain;">
                    </div>
                    <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">${imgObj.name}</div>
                </div>
            `).join('')}
        </div>
    `
};