window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['钢材库'] = {
    name: '钢材库',
    img: 'images/经济类建筑/钢材库/IronStorage8.webp',
    desc: '钢材库用于安全地储存珍贵的钢材资源。升级钢材库可以提高您的最高钢材存储上限。',
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '经济建筑' },
        { label: '存储资源', val: '钢材' }
    ],
    
    // 隐藏伤害(产量)计算器，因为仓库类只有血量加成适用
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Iron.webp">容量</th>
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
                <td style="color:#1f2937; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
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
        { lv: 13, hp: 8000, cap: 4000000, cw: 4370000, cs: 4250000, ci: 3340000, time: '22h', diamond: 6448, ticket: 88, reqLv: 25, exp: 70 },
        { lv: 12, hp: 6900, cap: 3500000, cw: 2910000, cs: 2835000, ci: 2230000, time: '20h', diamond: 4834, ticket: 80, reqLv: 23, exp: 66 },
        { lv: 11, hp: 5900, cap: 3000000, cw: 1900000, cs: 1890000, ci: 1480000, time: '18h', diamond: 3615, ticket: 72, reqLv: 21, exp: 60 },
        { lv: 10, hp: 5000, cap: 2000000, cw: 1110000, cs: 1080000, ci: 850000, time: '16h', diamond: 2482, ticket: 64, reqLv: 19, exp: 54 },
        { lv: 9, hp: 4200, cap: 1500000, cw: 750000, cs: 620000, ci: 390000, time: '14h', diamond: 1721, ticket: 56, reqLv: 17, exp: 50 },
        { lv: 8, hp: 3500, cap: 1000000, cw: 490000, cs: 440000, ci: 193000, time: '12h', diamond: 1282, ticket: 48, reqLv: 16, exp: 48 },
        { lv: 7, hp: 2900, cap: 500000, cw: 340000, cs: 256000, ci: 93000, time: '10h', diamond: 942, ticket: 40, reqLv: 15, exp: 40 },
        { lv: 6, hp: 2400, cap: 250000, cw: 189000, cs: 164000, ci: 45000, time: '8h', diamond: 668, ticket: 32, reqLv: 14, exp: 34 },
        { lv: 5, hp: 2000, cap: 125000, cw: 93000, cs: 43000, ci: 11400, time: '4h', diamond: 368, ticket: 16, reqLv: 12, exp: 26 },
        { lv: 4, hp: 1700, cap: 64000, cw: 56000, cs: 20400, ci: 5900, time: '2h', diamond: 245, ticket: 8, reqLv: 10, exp: 22 },
        { lv: 3, hp: 1400, cap: 32000, cw: 18000, cs: 2400, ci: 1040, time: '1h', diamond: 185, ticket: 4, reqLv: 8, exp: 20 },
        { lv: 2, hp: 1200, cap: 16000, cw: 10400, cs: 1100, ci: 360, time: '30m', diamond: 128, ticket: 2, reqLv: 6, exp: 17 },
        { lv: 1, hp: 1000, cap: 8000, cw: 3900, cs: 1000, ci: 120, time: '3s', diamond: 110, ticket: 1, reqLv: 4, exp: 15 }
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
                        ${[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">钢材库外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级钢材库', img: 'images/经济类建筑/钢材库/IronStorage1.webp' },
                { name: '二级钢材库', img: 'images/经济类建筑/钢材库/IronStorage2.webp' },
                { name: '三级钢材库', img: 'images/经济类建筑/钢材库/IronStorage3.webp' },
                { name: '四级钢材库', img: 'images/经济类建筑/钢材库/IronStorage4.webp' },
                { name: '五级钢材库', img: 'images/经济类建筑/钢材库/IronStorage5.webp' },
                { name: '六级钢材库', img: 'images/经济类建筑/钢材库/IronStorage6.webp' },
                { name: '七级钢材库', img: 'images/经济类建筑/钢材库/IronStorage7.webp' },
                { name: '八至十三级钢材库', img: 'images/经济类建筑/钢材库/IronStorage8.webp' }
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