window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['木材库'] = {
    name: '木材库',
    img: 'images/经济类建筑/木材库/WoodStorage10.webp',
    desc: '木材库用于存放海岛上最重要的基础资源——木材。升级木材库可以提高您的最高木材存储上限，帮助您建造更高等级的设施。',
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '经济建筑' },
        { label: '存储资源', val: '木材' }
    ],
    
    // 隐藏计算器，因为木材库只有血量加成适用
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Wood.webp">容量</th>
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
                <td style="color:#a16207; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
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
        { lv: 14, hp: 9000, cap: 4500000, cw: 4000000, cs: 3000000, ci: 1500000, time: '1d', diamond: 5042, ticket: 96, reqLv: 28, exp: 70 },
        { lv: 13, hp: 8000, cap: 4000000, cw: 2560000, cs: 2560000, ci: 1000000, time: '21h', diamond: 3874, ticket: 84, reqLv: 25, exp: 66 },
        { lv: 12, hp: 6900, cap: 3500000, cw: 1710000, cs: 1530000, ci: 670000, time: '18h', diamond: 2921, ticket: 72, reqLv: 22, exp: 60 },
        { lv: 11, hp: 5900, cap: 3000000, cw: 1140000, cs: 1020000, ci: 446000, time: '15h', diamond: 2213, ticket: 60, reqLv: 19, exp: 54 },
        { lv: 10, hp: 5000, cap: 2000000, cw: 570000, cs: 510000, ci: 204000, time: '12h', diamond: 1404, ticket: 42, reqLv: 17, exp: 48 },
        { lv: 9, hp: 4200, cap: 1500000, cw: 400000, cs: 307000, ci: 92000, time: '9h', diamond: 1031, ticket: 36, reqLv: 15, exp: 42 },
        { lv: 8, hp: 3500, cap: 1000000, cw: 164000, cs: 99000, ci: 28100, time: '6h', diamond: 539, ticket: 24, reqLv: 13, exp: 31 },
        { lv: 7, hp: 2900, cap: 500000, cw: 75000, cs: 27200, ci: 7800, time: '3h', diamond: 299, ticket: 12, reqLv: 11, exp: 24 },
        { lv: 6, hp: 2400, cap: 300000, cw: 34000, cs: 8100, ci: 2160, time: '1h', diamond: 176, ticket: 4, reqLv: 9, exp: 20 },
        { lv: 5, hp: 2000, cap: 200000, cw: 12700, cs: 2550, ci: '/', time: '45m', diamond: 92, ticket: 3, reqLv: 7, exp: 15 },
        { lv: 4, hp: 1700, cap: 150000, cw: 6300, cs: '/', ci: '/', time: '30m', diamond: 54, ticket: 2, reqLv: 5, exp: 12 },
        { lv: 3, hp: 1400, cap: 100000, cw: 3120, cs: '/', ci: '/', time: '15m', diamond: 36, ticket: 1, reqLv: 4, exp: 10 },
        { lv: 2, hp: 1200, cap: 50000, cw: 1300, cs: '/', ci: '/', time: '3s', diamond: 13, ticket: 1, reqLv: 3, exp: 4 },
        { lv: 1, hp: 1000, cap: 25000, cw: 320, cs: '/', ci: '/', time: '3s', diamond: 3, ticket: 1, reqLv: 2, exp: 1 }
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
                        ${[0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">木材库外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级木材库', img: 'images/经济类建筑/木材库/WoodStorage1.webp' },
                { name: '二级木材库', img: 'images/经济类建筑/木材库/WoodStorage2.webp' },
                { name: '三级木材库', img: 'images/经济类建筑/木材库/WoodStorage3.webp' },
                { name: '四级木材库', img: 'images/经济类建筑/木材库/WoodStorage4.webp' },
                { name: '五级木材库', img: 'images/经济类建筑/木材库/WoodStorage5.webp' },
                { name: '六级木材库', img: 'images/经济类建筑/木材库/WoodStorage6.webp' },
                { name: '七级木材库', img: 'images/经济类建筑/木材库/WoodStorage7.webp' },
                { name: '八级木材库', img: 'images/经济类建筑/木材库/WoodStorage8.webp' },
                { name: '九级木材库', img: 'images/经济类建筑/木材库/WoodStorage9.webp' },
                { name: '十至十四级木材库', img: 'images/经济类建筑/木材库/WoodStorage10.webp' }
            ].map(imgObj => `
                <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                    <div class="card-img-box" style="height:80px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                        <img src="${imgObj.img}" alt="${imgObj.name}" style="max-width:100%; max-height:100%; object-fit:contain;" onerror="this.src=this.src.replace('.webp','.png')">
                    </div>
                    <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">${imgObj.name}</div>
                </div>
            `).join('')}
        </div>
    `
};