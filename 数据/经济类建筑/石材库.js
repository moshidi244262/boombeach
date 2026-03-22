window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['石材库'] = {
    name: '石材库',
    img: 'images/经济类建筑/石材库/StoneStorage10.webp',
    desc: '石材库用于安全地储存您开采和掠夺来的石材。升级石材库可以提高您的最高石材存储上限，是升级中高级建筑的必要保障。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '经济建筑' },
        { label: '存储资源', val: '石材' }
    ],
    
    // 存储建筑隐藏伤害(产量)计算器
    hideDmgCalc: true,

    // ==========================================
    // 专属排版定制区块
    // ==========================================
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Stone.webp">容量</th>
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
                <td style="color:#4b5563; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
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
        { lv: 13, hp: 8000, cap: 4000000, cw: 3650000, cs: 3015000, ci: 1890000, time: '18h', diamond: 5036, ticket: 72, reqLv: 25, exp: 74 },
        { lv: 12, hp: 6900, cap: 3500000, cw: 2430000, cs: 2010000, ci: 1260000, time: '16h', diamond: 3778, ticket: 64, reqLv: 22, exp: 66 },
        { lv: 11, hp: 5900, cap: 3000000, cw: 1620000, cs: 1340000, ci: 840000, time: '14h', diamond: 2850, ticket: 56, reqLv: 20, exp: 58 },
        { lv: 10, hp: 5000, cap: 2000000, cw: 810000, cs: 670000, ci: 420000, time: '12h', diamond: 1790, ticket: 48, reqLv: 17, exp: 50 },
        { lv: 9, hp: 4200, cap: 1500000, cw: 380000, cs: 286000, ci: 104000, time: '10h', diamond: 1005, ticket: 40, reqLv: 15, exp: 42 },
        { lv: 8, hp: 3500, cap: 1000000, cw: 212000, cs: 185000, ci: 51000, time: '8h', diamond: 713, ticket: 32, reqLv: 14, exp: 37 },
        { lv: 7, hp: 2900, cap: 500000, cw: 147000, cs: 89000, ci: 25200, time: '7h', diamond: 519, ticket: 28, reqLv: 13, exp: 28 },
        { lv: 6, hp: 2400, cap: 250000, cw: 101000, cs: 47000, ci: 12400, time: '6h', diamond: 385, ticket: 24, reqLv: 12, exp: 26 },
        { lv: 5, hp: 2000, cap: 125000, cw: 64000, cs: 23300, ci: 6700, time: '4h', diamond: 276, ticket: 16, reqLv: 11, exp: 24 },
        { lv: 4, hp: 1700, cap: 64000, cw: 29000, cs: 6900, ci: 1840, time: '2h', diamond: 154, ticket: 8, reqLv: 9, exp: 18 },
        { lv: 3, hp: 1400, cap: 32000, cw: 14800, cs: 3900, ci: 600, time: '1h', diamond: 108, ticket: 4, reqLv: 7, exp: 15 },
        { lv: 2, hp: 1200, cap: 16000, cw: 6300, cs: 1030, ci: 200, time: '30m', diamond: 76, ticket: 2, reqLv: 5, exp: 13 },
        { lv: 1, hp: 1000, cap: 8000, cw: 2300, cs: 116, ci: '/', time: '3s', diamond: 51, ticket: 1, reqLv: 3, exp: 10 }
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
                        ${[0,0,0,0,0,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">石材库外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '' },
                { name: '' },
                { name: '' },
                { name: '' },
                { name: '' },
                { name: '十至十四级石材库', img: 'images/经济类建筑/石材库/StoneStorage10.webp' }
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