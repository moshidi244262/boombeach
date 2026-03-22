window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['神庙'] = {
    name: '神庙',
    img: 'images/支持类建筑/神庙/Sculptor5.webp',
    desc: '神庙用来利用力量水晶制造具有强大力量的雕像。升级神庙可以放置更多的神像。',
    baseStats: [
        { label: '建筑面积', val: '4×4' },
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '放置神像' }
    ],
    
    // 隐藏计算器(只保留生命值计算)
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
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/UnfinishedStatue.webp">雕像上限</th>
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
                <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.dx}</td>
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
        { lv: 1, hp: 1400, dx: 3, cw: 3000, cs: '/', ci: '/', time: '30m', diamond: 26, ticket: 2, reqLv: 5, exp: 7 },
        { lv: 2, hp: 1800, dx: 4, cw: 29400, cs: 5900, ci: '/', time: '1h', diamond: 155, ticket: 4, reqLv: 7, exp: 20 },
        { lv: 3, hp: 2300, dx: 5, cw: 88000, cs: 21000, ci: 5600, time: '2h', diamond: 325, ticket: 8, reqLv: 9, exp: 28 },
        { lv: 4, hp: 2900, dx: 6, cw: 320000, cs: 151000, ci: 40000, time: '10h', diamond: 793, ticket: 40, reqLv: 12, exp: 40 },
        { lv: 5, hp: 3600, dx: 7, cw: 670000, cs: 580000, ci: 161000, time: '18h', diamond: 1516, ticket: 72, reqLv: 14, exp: 54 },
        { lv: 6, hp: 4500, dx: 8, cw: 1710000, cs: 1530000, ci: 670000, time: '1d', diamond: 2975, ticket: 96, reqLv: 16, exp: 73 },
        { lv: 7, hp: 5700, dx: 9, cw: 3060000, cs: 2790000, ci: 1830000, time: '1d 12h', diamond: 4831, ticket: 144, reqLv: 18, exp: 81 },
        { lv: 8, hp: 7200, dx: 10, cw: 3900000, cs: 3900000, ci: 3900000, time: '2d', diamond: 6560, ticket: 192, reqLv: 20, exp: 88 },
        { lv: 9, hp: 9000, dx: 11, cw: 4820000, cs: 4820000, ci: 4820000, time: '2d 12h', diamond: 7676, ticket: 240, reqLv: 24, exp: 95 },
        { lv: 10, hp: 9700, dx: 12, cw: 5760000, cs: 5760000, ci: 5760000, time: '3d', diamond: 8778, ticket: 288, reqLv: 25, exp: 102 },
        { lv: 11, hp: 10800, dx: 13, cw: 6900000, cs: 6900000, ci: 6900000, time: '3d 12h', diamond: 10006, ticket: 336, reqLv: 28, exp: 110 }
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
                        ${[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">神庙外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级神庙', img: 'images/支持类建筑/神庙/Sculptor1.webp' },
                { name: '二级神庙', img: 'images/支持类建筑/神庙/Sculptor2.webp' },
                { name: '三级神庙', img: 'images/支持类建筑/神庙/Sculptor3.webp' },
                { name: '四级神庙', img: 'images/支持类建筑/神庙/Sculptor4.webp' },
                { name: '五至十一级神庙', img: 'images/支持类建筑/神庙/Sculptor5.webp' }
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