window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['铁矿厂'] = {
    name: '铁矿厂',
    img: 'images/经济类建筑/铁矿厂/IronMine9.webp',
    desc: '铁矿厂是基地后期的核心经济建筑，可以源源不断地为您生产钢材。升级铁矿厂能极大提升钢材的每小时产量和存储容量。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '经济建筑' },
        { label: '产出资源', val: '钢材' }
    ],
    
    // 作为生产资源建筑，保留产量计算器
    hideDmgCalc: false,

    // ==========================================
    // 专属排版定制区块
    // ==========================================
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Iron.webp">容量</th>
                <th><img src="images/基础/Iron.webp">每小时生产</th>
                <th><img src="images/基础/Stopwatch.webp">充满时间</th>
                <th><img src="images/基础/Wood.webp">木材</th>
                <th><img src="images/基础/Stone.webp">石材</th>
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
                <td style="color:#1f2937;">${formatNum(lv.cap)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#1f2937; font-weight:bold;">${formatNum(lv.prod)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.fillTime}</td>
                <td style="color:#a16207;">${formatNum(lv.cw)}</td>
                <td style="color:#4b5563; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cs)}</td>
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
            // dmgInput 视作产量加成
            prod: item.prod !== '/' ? Math.round(item.prod * (1 + dmgInput / 100)) : '/'
        }));
    },

    // ⚠️注：您提供的 `铁矿厂.txt` 内容与 `保险库.txt` 是完全一致的，导致缺失了铁矿厂的真实数据。
    // 为了不破坏页面，我预先为您铺设了模板示例。等您找到实际的《海岛奇兵铁矿厂》数据后，请直接替换此数组。
    levels: [
        { lv: 10, hp: 8000, cap: 150000, prod: 3000, fillTime: '1d 13h', cw: 2000000, cs: 2000000, time: '1d', diamond: 3000, ticket: 70, reqLv: 25, exp: 60 },
        { lv: 9, hp: 6000, cap: 100000, prod: 2400, fillTime: '1d 5h', cw: 1500000, cs: 1500000, time: '16h', diamond: 2000, ticket: 50, reqLv: 20, exp: 50 },
        { lv: 8, hp: 4500, cap: 70000, prod: 1800, fillTime: '1d 1h', cw: 800000, cs: 800000, time: '12h', diamond: 1000, ticket: 40, reqLv: 16, exp: 40 },
        { lv: 7, hp: 3500, cap: 45000, prod: 1300, fillTime: '20h 30m', cw: 450000, cs: 450000, time: '8h', diamond: 500, ticket: 30, reqLv: 14, exp: 35 },
        { lv: 6, hp: 2800, cap: 25000, prod: 900, fillTime: '16h 20m', cw: 250000, cs: 250000, time: '6h', diamond: 300, ticket: 20, reqLv: 13, exp: 30 },
        { lv: 5, hp: 2200, cap: 14000, prod: 580, fillTime: '12h 56m', cw: 120000, cs: 120000, time: '4h', diamond: 200, ticket: 15, reqLv: 12, exp: 25 },
        { lv: 4, hp: 1700, cap: 7500, prod: 360, fillTime: '9h 43m', cw: 50000, cs: 50000, time: '2h', diamond: 150, ticket: 10, reqLv: 11, exp: 20 },
        { lv: 3, hp: 1300, cap: 3500, prod: 210, fillTime: '6h 54m', cw: 20000, cs: 20000, time: '1h', diamond: 100, ticket: 5, reqLv: 10, exp: 15 },
        { lv: 2, hp: 1100, cap: 1450, prod: 120, fillTime: '4h 10m', cw: 8000, cs: 8000, time: '30m', diamond: 50, ticket: 2, reqLv: 9, exp: 10 },
        { lv: 1, hp: 1000, cap: 500, prod: 60, fillTime: '2h', cw: 2000, cs: 2000, time: '3s', diamond: 10, ticket: 1, reqLv: 9, exp: 5 }
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
                        ${[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">铁矿厂外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级铁矿厂', img: 'images/经济类建筑/铁矿厂/IronMine1.webp' },
                { name: '二级铁矿厂', img: 'images/经济类建筑/铁矿厂/IronMine2.webp' },
                { name: '三-四级铁矿厂', img: 'images/经济类建筑/铁矿厂/IronMine3.webp' },
                { name: '五-八级铁矿厂', img: 'images/经济类建筑/铁矿厂/IronMine5.webp' },
                { name: '九至十一级铁矿厂', img: 'images/经济类建筑/铁矿厂/IronMine9.webp' }
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