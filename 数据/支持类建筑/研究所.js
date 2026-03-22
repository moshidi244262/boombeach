window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['研究所'] = {
    name: '研究所',
    img: 'images/支持类建筑/研究所/Armory22.webp',
    desc: '研究所可以让您升级您的部队、地雷以及战舰武器。研究所的等级越高，您可以升级的兵种和武器等级就越高。',
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '解锁并升级科技' }
    ],
    
    // 隐藏计算器
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
        { lv: 1, hp: 1500, cw: 11000, cs: '/', ci: '/', time: '15m', diamond: 33, ticket: 1, reqLv: 4, exp: 9 },
        { lv: 2, hp: 1650, cw: 22000, cs: '/', ci: '/', time: '30m', diamond: 56, ticket: 2, reqLv: 5, exp: 12 },
        { lv: 3, hp: 1800, cw: 39000, cs: 5900, ci: '/', time: '1h', diamond: 93, ticket: 4, reqLv: 6, exp: 16 },
        { lv: 4, hp: 1950, cw: 65000, cs: 17000, ci: '/', time: '2h', diamond: 151, ticket: 8, reqLv: 7, exp: 20 },
        { lv: 5, hp: 2150, cw: 106000, cs: 39000, ci: '/', time: '4h', diamond: 236, ticket: 16, reqLv: 8, exp: 24 },
        { lv: 6, hp: 2350, cw: 156000, cs: 76000, ci: 15000, time: '8h', diamond: 367, ticket: 32, reqLv: 9, exp: 28 },
        { lv: 7, hp: 2550, cw: 225000, cs: 133000, ci: 34000, time: '12h', diamond: 524, ticket: 48, reqLv: 10, exp: 32 },
        { lv: 8, hp: 2800, cw: 330000, cs: 220000, ci: 67000, time: '14h', diamond: 663, ticket: 56, reqLv: 11, exp: 35 },
        { lv: 9, hp: 3050, cw: 470000, cs: 350000, ci: 121000, time: '16h', diamond: 840, ticket: 64, reqLv: 12, exp: 41 },
        { lv: 10, hp: 3350, cw: 650000, cs: 530000, ci: 205000, time: '18h', diamond: 1045, ticket: 72, reqLv: 13, exp: 47 },
        { lv: 11, hp: 3700, cw: 900000, cs: 780000, ci: 340000, time: '20h', diamond: 1289, ticket: 80, reqLv: 14, exp: 53 },
        { lv: 12, hp: 4050, cw: 1210000, cs: 1120000, ci: 520000, time: '1d', diamond: 1573, ticket: 96, reqLv: 15, exp: 60 },
        { lv: 13, hp: 4450, cw: 1600000, cs: 1540000, ci: 770000, time: '1d 4h', diamond: 1888, ticket: 112, reqLv: 16, exp: 65 },
        { lv: 14, hp: 4900, cw: 2060000, cs: 2060000, ci: 1080000, time: '1d 8h', diamond: 2217, ticket: 128, reqLv: 17, exp: 70 },
        { lv: 15, hp: 5400, cw: 2600000, cs: 2600000, ci: 1460000, time: '1d 12h', diamond: 2568, ticket: 144, reqLv: 18, exp: 74 },
        { lv: 16, hp: 5950, cw: 3100000, cs: 3100000, ci: 2060000, time: '1d 14h', diamond: 2850, ticket: 152, reqLv: 19, exp: 76 },
        { lv: 17, hp: 6550, cw: 3700000, cs: 3700000, ci: 2790000, time: '1d 16h', diamond: 3165, ticket: 160, reqLv: 20, exp: 80 },
        { lv: 18, hp: 7200, cw: 4300000, cs: 4300000, ci: 3600000, time: '1d 18h', diamond: 3448, ticket: 168, reqLv: 21, exp: 82 },
        { lv: 19, hp: 7900, cw: 5000000, cs: 5000000, ci: 4600000, time: '1d 20h', diamond: 3762, ticket: 176, reqLv: 22, exp: 84 },
        { lv: 20, hp: 8700, cw: 5700000, cs: 5700000, ci: 5600000, time: '1d 22h', diamond: 4075, ticket: 184, reqLv: 23, exp: 85 },
        { lv: 21, hp: 9550, cw: 6600000, cs: 6600000, ci: 6600000, time: '2d', diamond: 4390, ticket: 192, reqLv: 24, exp: 87 },
        { lv: 22, hp: 10500, cw: 7700000, cs: 7700000, ci: 7700000, time: '2d 4h', diamond: 4851, ticket: 208, reqLv: 25, exp: 89 },
        { lv: 23, hp: 12000, cw: 9300000, cs: 9300000, ci: 9300000, time: '2d 8h', diamond: 5313, ticket: 224, reqLv: 26, exp: 91 }
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
                        ${[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">研究所外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一至二级研究所', img: 'images/支持类建筑/研究所/Armory2.webp' },
                { name: '三级研究所', img: 'images/支持类建筑/研究所/Armory3.webp' },
                { name: '四级研究所', img: 'images/支持类建筑/研究所/Armory4.webp' },
                { name: '五至七级研究所', img: 'images/支持类建筑/研究所/Armory5.webp' },
                { name: '八至十三级研究所', img: 'images/支持类建筑/研究所/Armory8.webp' },
                { name: '十四至二十级研究所', img: 'images/支持类建筑/研究所/Armory20.webp' },
                { name: '二十一级研究所', img: 'images/支持类建筑/研究所/Armory21.webp' },
                { name: '二十二至二十八级研究所', img: 'images/支持类建筑/研究所/Armory22.webp' }
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