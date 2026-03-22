window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['神像仓库'] = {
    name: '神像仓库',
    img: 'images/支持类建筑/神像仓库/StatueStorage5.webp',
    desc: '神像仓库可以让您将神像安全地存放起来，以便在日后需要时拿出来使用。不过一旦神像被放置在基地上，就无法再次存入仓库。',
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '安全存放未部署的神像' }
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
                <th><img src="images/基础/UnfinishedStatue.webp">仓库容量</th>
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
                <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.cap}</td>
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
        { lv: 1, hp: 1200, cap: 1, cw: 230000, cs: 170000, ci: 55000, time: '2h', diamond: 194, ticket: 8, reqLv: 13, exp: 27 },
        { lv: 2, hp: 1500, cap: 2, cw: 430000, cs: 360000, ci: 110000, time: '5h', diamond: 350, ticket: 20, reqLv: 14, exp: 42 },
        { lv: 3, hp: 1900, cap: 3, cw: 1100000, cs: 1000000, ci: 340000, time: '10h', diamond: 671, ticket: 40, reqLv: 16, exp: 60 },
        { lv: 4, hp: 2500, cap: 4, cw: 2600000, cs: 2600000, ci: 2600000, time: '15h', diamond: 1121, ticket: 60, reqLv: 20, exp: 73 },
        { lv: 5, hp: 3200, cap: 5, cw: 3300000, cs: 3300000, ci: 3300000, time: '1d', diamond: 2263, ticket: 96, reqLv: 21, exp: 93 }
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">神像仓库外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级神像仓库', img: 'images/支持类建筑/神像仓库/StatueStorage1.webp' },
                { name: '二级神像仓库', img: 'images/支持类建筑/神像仓库/StatueStorage2.webp' },
                { name: '三级神像仓库', img: 'images/支持类建筑/神像仓库/StatueStorage3.webp' },
                { name: '四级神像仓库', img: 'images/支持类建筑/神像仓库/StatueStorage4.webp' },
                { name: '五级神像仓库', img: 'images/支持类建筑/神像仓库/StatueStorage5.webp' }
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