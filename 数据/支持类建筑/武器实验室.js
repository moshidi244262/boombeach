window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['武器实验室'] = {
    name: '武器实验室',
    img: 'images/支持类建筑/武器实验室/WeaponLab5.webp',
    desc: '利用原型模块，武器实验室可以制造强大的原型防御武器和原型部队。升级武器实验室可以同时部署更多的原型防御或部队。',
    baseStats: [
        { label: '建筑面积', val: '5×5' },
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '制造原型武器' }
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
                <th><img src="images/基础/Icon_weapon_lab.webp" onerror="this.src='images/基础/UnfinishedStatue.webp'">防御上限</th>
                <th><img src="images/基础/Icon_troop_lab.webp" onerror="this.src='images/基础/TroopCapacity.webp'">部队上限</th>
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
                <td style="color:#0284c7; font-weight:bold;">${lv.def}</td>
                <td style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.troop}</td>
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
        { lv: 1, hp: 2000, def: 1, troop: 0, cw: 600000, cs: 500000, ci: 150000, time: '1d', diamond: 1968, ticket: 96, reqLv: 15, exp: 49 },
        { lv: 2, hp: 2400, def: 1, troop: 1, cw: 900000, cs: 800000, ci: 300000, time: '1d 12h', diamond: 2795, ticket: 144, reqLv: 16, exp: 60 },
        { lv: 3, hp: 3000, def: 2, troop: 1, cw: 1300000, cs: 1200000, ci: 600000, time: '2d', diamond: 3828, ticket: 192, reqLv: 17, exp: 69 },
        { lv: 4, hp: 3700, def: 2, troop: 1, cw: 1800000, cs: 1700000, ci: 1000000, time: '2d 12h', diamond: 5078, ticket: 240, reqLv: 19, exp: 77 },
        { lv: 5, hp: 4500, def: 3, troop: 1, cw: 2500000, cs: 2400000, ci: 1500000, time: '3d', diamond: 6516, ticket: 288, reqLv: 21, exp: 85 },
        { lv: 6, hp: 5500, def: 3, troop: 2, cw: 3400000, cs: 3300000, ci: 2400000, time: '3d 12h', diamond: 8189, ticket: 336, reqLv: 24, exp: 92 }
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">武器实验室外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级武器实验室', img: 'images/支持类建筑/武器实验室/WeaponLab_lvl1.webp' },
                { name: '二级武器实验室', img: 'images/支持类建筑/武器实验室/WeaponLab2.webp' },
                { name: '三级武器实验室', img: 'images/支持类建筑/武器实验室/WeaponLab3.webp' },
                { name: '四级武器实验室', img: 'images/支持类建筑/武器实验室/WeaponLab4.webp' },
                { name: '五至六级武器实验室', img: 'images/支持类建筑/武器实验室/WeaponLab5.webp' }
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