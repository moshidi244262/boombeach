window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['雷达'] = {
    name: '雷达',
    img: 'images/支持类建筑/Radar9.webp',
    desc: '雷达不仅可以侦查周围的海域，还可以拨开迷雾发现新的海岛并扩大您的版图。升级雷达即可进行更深远的探索。',
    baseStats: [
        { label: '建筑面积', val: '4×4' },
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '开阔视野' }
    ],
    
    hideDmgCalc: true,
    hideHpCalc: false,

    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命</th>
                <th>新可探测区</th>
                <th>累计可探测区</th>
                <th>新岛屿</th>
                <th>累计岛屿</th>
                <th>可入侵数</th>
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
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td style="color:#0284c7;">${formatNum(lv.newRegion)}</td>
                <td style="color:#0369a1; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.totRegion)}</td>
                <td style="color:#16a34a;">${formatNum(lv.newIsland)}</td>
                <td style="color:#15803d; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.totIsland)}</td>
                <td style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.invadable)}</td>
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
        { lv: 1, hp: 1200, newRegion: 8, totRegion: 8, newIsland: 8, totIsland: 13, invadable: 2, cw: 150, cs: '/', ci: '/', time: '3s', diamond: 3, ticket: 1, reqLv: 1, exp: 1 },
        { lv: 2, hp: 1300, newRegion: 6, totRegion: 14, newIsland: 9, totIsland: 22, invadable: 5, cw: 400, cs: '/', ci: '/', time: '3s', diamond: 11, ticket: 1, reqLv: 2, exp: 5 },
        { lv: 3, hp: 1400, newRegion: 6, totRegion: 20, newIsland: 11, totIsland: 33, invadable: 7, cw: 2360, cs: '/', ci: '/', time: '15m', diamond: 34, ticket: 1, reqLv: 3, exp: 10 },
        { lv: 4, hp: 1500, newRegion: 6, totRegion: 26, newIsland: 10, totIsland: 43, invadable: 9, cw: 5900, cs: '/', ci: '/', time: '15m', diamond: 58, ticket: 1, reqLv: 4, exp: 13 },
        { lv: 5, hp: 1600, newRegion: 8, totRegion: 34, newIsland: 9, totIsland: 52, invadable: 11, cw: 11300, cs: '/', ci: '/', time: '30m', diamond: 78, ticket: 2, reqLv: 5, exp: 15 },
        { lv: 6, hp: 1700, newRegion: 7, totRegion: 41, newIsland: 11, totIsland: 63, invadable: 13, cw: 16500, cs: 2900, ci: '/', time: '45m', diamond: 109, ticket: 3, reqLv: 6, exp: 17 },
        { lv: 7, hp: 1900, newRegion: 7, totRegion: 48, newIsland: 11, totIsland: 74, invadable: 15, cw: 25500, cs: 5100, ci: '/', time: '1h', diamond: 139, ticket: 4, reqLv: 7, exp: 18 },
        { lv: 8, hp: 2100, newRegion: 7, totRegion: 55, newIsland: 13, totIsland: 87, invadable: 17, cw: 44000, cs: 16800, ci: 4500, time: '2h', diamond: 186, ticket: 8, reqLv: 8, exp: 20 },
        { lv: 9, hp: 2300, newRegion: 7, totRegion: 62, newIsland: 11, totIsland: 98, invadable: 19, cw: 71000, cs: 16800, ci: 4500, time: '4h', diamond: 280, ticket: 16, reqLv: 9, exp: 24 },
        { lv: 10, hp: 2500, newRegion: 7, totRegion: 69, newIsland: 12, totIsland: 110, invadable: 21, cw: 114000, cs: 28700, ci: 9300, time: '6h', diamond: 374, ticket: 24, reqLv: 10, exp: 28 },
        { lv: 11, hp: 2700, newRegion: 9, totRegion: 78, newIsland: 14, totIsland: 124, invadable: 23, cw: 161000, cs: 58000, ci: 16800, time: '8h', diamond: 486, ticket: 32, reqLv: 11, exp: 31 },
        { lv: 12, hp: 2900, newRegion: 9, totRegion: 87, newIsland: 12, totIsland: 136, invadable: 24, cw: 249000, cs: 117000, ci: 30700, time: '10h', diamond: 674, ticket: 40, reqLv: 12, exp: 34 },
        { lv: 13, hp: 3200, newRegion: 9, totRegion: 96, newIsland: 13, totIsland: 149, invadable: 26, cw: 360000, cs: 218000, ci: 62000, time: '12h', diamond: 908, ticket: 48, reqLv: 13, exp: 40 },
        { lv: 14, hp: 3500, newRegion: 8, totRegion: 104, newIsland: 12, totIsland: 161, invadable: 27, cw: 520000, cs: 450000, ci: 125000, time: '14h', diamond: 1271, ticket: 56, reqLv: 14, exp: 46 },
        { lv: 15, hp: 3800, newRegion: 8, totRegion: 112, newIsland: 11, totIsland: 172, invadable: 28, cw: 910000, cs: 700000, ci: 254000, time: '16h', diamond: 1783, ticket: 64, reqLv: 15, exp: 56 },
        { lv: 16, hp: 4100, newRegion: 8, totRegion: 120, newIsland: 12, totIsland: 184, invadable: 30, cw: 1330000, cs: 1190000, ci: 520000, time: '18h', diamond: 2476, ticket: 72, reqLv: 16, exp: 64 },
        { lv: 17, hp: 4500, newRegion: 7, totRegion: 127, newIsland: 12, totIsland: 196, invadable: 31, cw: 1940000, cs: 1600000, ci: 1010000, time: '20h', diamond: 3279, ticket: 80, reqLv: 17, exp: 69 },
        { lv: 18, hp: 4900, newRegion: 8, totRegion: 135, newIsland: 13, totIsland: 209, invadable: 32, cw: 2430000, cs: 2220000, ci: 1460000, time: '1d', diamond: 4046, ticket: 96, reqLv: 18, exp: 72 },
        { lv: 19, hp: 5300, newRegion: 7, totRegion: 142, newIsland: 11, totIsland: 220, invadable: 33, cw: 2810000, cs: 2740000, ci: 2150000, time: '1d 6h', diamond: 4804, ticket: 120, reqLv: 19, exp: 74 },
        { lv: 20, hp: 5800, newRegion: 7, totRegion: 149, newIsland: 13, totIsland: 233, invadable: 34, cw: 3200000, cs: 3200000, ci: 3200000, time: '1d 12h', diamond: 5651, ticket: 144, reqLv: 20, exp: 80 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">雷达外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级雷达', img: 'images/支持类建筑/雷达/Radar.webp' },
                { name: '二至五级雷达', img: 'images/支持类建筑/雷达/Radar2.webp' },
                { name: '六至八级雷达', img: 'images/支持类建筑/雷达/Radar6.webp' },
                { name: '九至二十级雷达', img: 'images/支持类建筑/雷达/Radar9.webp' }
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