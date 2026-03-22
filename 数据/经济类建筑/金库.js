window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['金库'] = {
    name: '金库',
    img: 'images/经济类建筑/金库/GoldStorage10.webp',
    desc: '金库用于安全地储存您收集到的黄金。升级金库可以提高您的最高黄金存储上限，以备各种高额军费开销。',
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '经济建筑' },
        { label: '存储资源', val: '黄金' }
    ],
    
    // 金库只有生命值加成适用
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Gold.webp">容量</th>
                <th><img src="images/基础/Wood.webp">木材</th>
                <th><img src="images/基础/Stone.webp">石材</th>
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
                <td style="color:#ca8a04; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
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

    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 14, hp: 9000, cap: 4500000, cw: 7000000, cs: 7000000, ci: 3000000, time: '2d', diamond: 8415, ticket: 192, reqLv: 27, exp: 100 },
        { lv: 13, hp: 8000, cap: 4000000, cw: 5350000, cs: 5160000, ci: 2010000, time: '1d 12h', diamond: 6693, ticket: 144, reqLv: 25, exp: 95 },
        { lv: 12, hp: 6900, cap: 3500000, cw: 3560000, cs: 3440000, ci: 1340000, time: '1d 6h', diamond: 5009, ticket: 120, reqLv: 22, exp: 84 },
        { lv: 11, hp: 5900, cap: 3000000, cw: 2400000, cs: 2300000, ci: 894000, time: '1d', diamond: 3772, ticket: 96, reqLv: 20, exp: 73 },
        { lv: 10, hp: 5000, cap: 2000000, cw: 1080000, cs: 820000, ci: 298000, time: '12h', diamond: 1995, ticket: 48, reqLv: 15, exp: 61 },
        { lv: 9, hp: 4200, cap: 1500000, cw: 450000, cs: 273000, ci: 78000, time: '8h', diamond: 1030, ticket: 32, reqLv: 13, exp: 44 },
        { lv: 8, hp: 3500, cap: 1000000, cw: 158000, cs: 40000, ci: 12800, time: '4h', diamond: 450, ticket: 16, reqLv: 10, exp: 34 },
        { lv: 7, hp: 2900, cap: 500000, cw: 65000, cs: 14200, ci: '/', time: '1h', diamond: 251, ticket: 4, reqLv: 8, exp: 26 },
        { lv: 6, hp: 2400, cap: 250000, cw: 26400, cs: 4600, ci: '/', time: '45m', diamond: 160, ticket: 3, reqLv: 6, exp: 20 },
        { lv: 5, hp: 2000, cap: 150000, cw: 20000, cs: '/', ci: '/', time: '30m', diamond: 119, ticket: 2, reqLv: 5, exp: 20 },
        { lv: 4, hp: 1700, cap: 80000, cw: 10400, cs: '/', ci: '/', time: '30m', diamond: 85, ticket: 2, reqLv: 4, exp: 17 },
        { lv: 3, hp: 1400, cap: 40000, cw: 4100, cs: '/', ci: '/', time: '15m', diamond: 57, ticket: 1, reqLv: 3, exp: 14 },
        { lv: 2, hp: 1200, cap: 25000, cw: 500, cs: '/', ci: '/', time: '3s', diamond: 15, ticket: 1, reqLv: 3, exp: 6 },
        { lv: 1, hp: 1000, cap: 15000, cw: 130, cs: '/', ci: '/', time: '3s', diamond: 2, ticket: 1, reqLv: 3, exp: 1 }
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
                        ${[0,0,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">金库外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '' },
                { name: '' },
                { name: '' },
                { name: '' },
                { name: '' },
                { name: '' }
            ].map(imgObj => `
                <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                    <div class="card-img-box" style="height:80px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                        <img src="${imgObj.img}" alt="${imgObj.name}" style="max-width:100%; max-height:100%; object-fit:contain;" onerror="this.src=this.src.replace('.png','.webp')">
                    </div>
                    <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">${imgObj.name}</div>
                </div>
            `).join('')}
        </div>
    `
};