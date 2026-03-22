window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['采石场'] = {
    name: '采石场',
    img: 'images/经济类建筑/采石场/Quarry5.webp',
    desc: '采石场是海岛上提供石材的重要经济建筑。升级采石场可以显著提高石材的每小时产量和存储容量。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '5×5' },
        { label: '建筑类型', val: '经济建筑' },
        { label: '产出资源', val: '石材' }
    ],
    
    // 隐藏血量计算器以外的选项（通过将 dmg 属性借用来代表产量，实现计算）
    hideDmgCalc: false,

    // ==========================================
    // 专属排版定制区块
    // ==========================================
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Stone.webp">容量</th>
                <th><img src="images/基础/Stone.webp">每小时生产</th>
                <th><img src="images/基础/Stopwatch.webp">充满时间</th>
                <th><img src="images/基础/Wood.webp">木材</th>
                <th><img src="images/基础/Iron.webp">钢材</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">需要大本等级</th>
                <th><img src="images/基础/Icon_info_xp.webp">经验</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td style="color:#4b5563;">${formatNum(lv.cap)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#16a34a; font-weight:bold;">${formatNum(lv.prod)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.fillTime}</td>
                <td style="color:#a16207;">${formatNum(lv.cw)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ci)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            // 在这里将 dmgInput 视作为“产量加成”
            prod: item.prod !== '/' ? Math.round(item.prod * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 11, hp: 9000, cap: 150000, prod: 4000, fillTime: '1d 13h 30m', cw: 1500000, ci: 1000000, time: '20h', diamond: 2006, ticket: 80, reqLv: 27, exp: 60 },
        { lv: 10, hp: 7500, cap: 130000, prod: 3500, fillTime: '1d 13h', cw: 990000, ci: 590000, time: '16h', diamond: 1470, ticket: 64, reqLv: 18, exp: 52 },
        { lv: 9, hp: 6300, cap: 100000, prod: 3000, fillTime: '1d 9h', cw: 570000, ci: 223000, time: '13h', diamond: 956, ticket: 52, reqLv: 16, exp: 44 },
        { lv: 8, hp: 5300, cap: 70000, prod: 2400, fillTime: '1d 5h', cw: 236000, ci: 57000, time: '10h', diamond: 546, ticket: 40, reqLv: 14, exp: 37 },
        { lv: 7, hp: 4400, cap: 45000, prod: 1800, fillTime: '1d 1h', cw: 170000, ci: 29100, time: '8h', diamond: 431, ticket: 32, reqLv: 13, exp: 34 },
        { lv: 6, hp: 3700, cap: 26800, prod: 1320, fillTime: '20h 30m', cw: 121000, ci: 14900, time: '6h', diamond: 338, ticket: 24, reqLv: 12, exp: 28 },
        { lv: 5, hp: 3100, cap: 14700, prod: 900, fillTime: '16h 20m', cw: 60000, ci: 8400, time: '4h', diamond: 270, ticket: 16, reqLv: 10, exp: 28 },
        { lv: 4, hp: 2600, cap: 7500, prod: 580, fillTime: '12h 56m', cw: 15000, ci: 4800, time: '2h', diamond: 222, ticket: 8, reqLv: 9, exp: 26 },
        { lv: 3, hp: 2200, cap: 3500, prod: 360, fillTime: '9h 43m', cw: 3150, ci: 2000, time: '45m', diamond: 161, ticket: 3, reqLv: 7, exp: 24 },
        { lv: 2, hp: 1800, cap: 1450, prod: 210, fillTime: '6h 54m', cw: 200, ci: '/', time: '15m', diamond: 113, ticket: 1, reqLv: 4, exp: 18 },
        { lv: 1, hp: 1500, cap: 500, prod: 120, fillTime: '4h 10m', cw: 200, ci: '/', time: '3s', diamond: 58, ticket: 1, reqLv: 2, exp: 11 }
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
                        ${[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">采石场外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级采石场', img: 'images/经济类建筑/采石场/Quarry1.webp' },
                { name: '二级采石场', img: 'images/经济类建筑/采石场/Quarry2.webp' },
                { name: '三级采石场', img: 'images/经济类建筑/采石场/Quarry3.webp' },
                { name: '四级采石场', img: 'images/经济类建筑/采石场/Quarry4.webp' },
                { name: '五至十一级采石场', img: 'images/经济类建筑/采石场/Quarry5.webp' }
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