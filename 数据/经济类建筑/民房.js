window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['民房'] = {
    name: '民房',
    img: 'images/经济类建筑/民房/Residence10.webp',
    desc: '民房是海岛上的基础经济建筑，可以持续为您生产黄金。升级民房将提高黄金的每小时产量和最高存储上限。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '经济建筑' },
        { label: '产出资源', val: '黄金' }
    ],
    
    // 开放产量计算器（复用 dmg 输入框作为资源产量加成）
    hideDmgCalc: false,

    // ==========================================
    // 专属排版定制区块
    // ==========================================
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Gold.webp">容量</th>
                <th><img src="images/基础/Gold.webp">每小时生产</th>
                <th><img src="images/基础/Stopwatch.webp">充满时间</th>
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
                <td style="color:#ca8a04;">${formatNum(lv.cap)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#ca8a04; font-weight:bold;">${formatNum(lv.prod)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.fillTime}</td>
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

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            // dmgInput 视作产量加成
            prod: item.prod !== '/' ? Math.round(item.prod * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 12, hp: 6600, cap: 180000, prod: 4200, fillTime: '1d 19h', cw: 2600000, cs: 2500000, ci: 1980000, time: '1d 4h', diamond: 4522, ticket: 112, reqLv: 25, exp: 70 },
        { lv: 11, hp: 5900, cap: 160000, prod: 4000, fillTime: '1d 16h', cw: 2200000, cs: 2160000, ci: 1220000, time: '1d', diamond: 3798, ticket: 96, reqLv: 24, exp: 63 },
        { lv: 10, hp: 5000, cap: 130000, prod: 3500, fillTime: '1d 13h', cw: 1480000, cs: 1440000, ci: 1130000, time: '20h', diamond: 3065, ticket: 80, reqLv: 19, exp: 54 },
        { lv: 9, hp: 4200, cap: 100000, prod: 3000, fillTime: '1d 9h', cw: 760000, cs: 680000, ci: 298000, time: '12h', diamond: 1678, ticket: 48, reqLv: 16, exp: 48 },
        { lv: 8, hp: 3500, cap: 70000, prod: 2400, fillTime: '1d 5h', cw: 227000, cs: 136000, ci: 39000, time: '8h', diamond: 667, ticket: 32, reqLv: 13, exp: 31 },
        { lv: 7, hp: 2900, cap: 45000, prod: 1800, fillTime: '1d 1h', cw: 57000, cs: 13500, ci: 3600, time: '4h', diamond: 228, ticket: 16, reqLv: 9, exp: 22 },
        { lv: 6, hp: 2400, cap: 26800, prod: 1300, fillTime: '20h 37m', cw: 19800, cs: 3500, ci: '/', time: '1h', diamond: 125, ticket: 4, reqLv: 6, exp: 18 },
        { lv: 5, hp: 2000, cap: 14700, prod: 900, fillTime: '16h 20m', cw: 7800, cs: '/', ci: '/', time: '45m', diamond: 70, ticket: 3, reqLv: 4, exp: 15 },
        { lv: 4, hp: 1700, cap: 7500, prod: 590, fillTime: '12h 43m', cw: 3800, cs: '/', ci: '/', time: '30m', diamond: 52, ticket: 2, reqLv: 4, exp: 13 },
        { lv: 3, hp: 1400, cap: 3500, prod: 360, fillTime: '9h 43m', cw: 1140, cs: '/', ci: '/', time: '15m', diamond: 26, ticket: 1, reqLv: 3, exp: 8 },
        { lv: 2, hp: 1200, cap: 1450, prod: 210, fillTime: '6h 54m', cw: 350, cs: '/', ci: '/', time: '3s', diamond: 6, ticket: 1, reqLv: 2, exp: 2 },
        { lv: 1, hp: 1000, cap: 500, prod: 120, fillTime: '4h 10m', cw: 150, cs: '/', ci: '/', time: '3s', diamond: 3, ticket: 1, reqLv: 1, exp: 1 }
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
                        ${[1,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">民房外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级民房', img: 'images/经济类建筑/民房/Residence1.webp' },
                { name: '二级民房', img: 'images/经济类建筑/民房/Residence2.webp' },
                { name: '三级民房', img: 'images/经济类建筑/民房/Residence3.webp' },
                { name: '四级民房', img: 'images/经济类建筑/民房/Residence4.webp' },
                { name: '五级民房', img: 'images/经济类建筑/民房/Residence5.webp' },
                { name: '六级民房', img: 'images/经济类建筑/民房/Residence6.webp' },
                { name: '七级民房', img: 'images/经济类建筑/民房/Residence7.webp' },
                { name: '八级民房', img: 'images/经济类建筑/民房/Residence8.webp' },
                { name: '九级民房', img: 'images/经济类建筑/民房/Residence9.webp' },
                { name: '十至十二级民房', img: 'images/经济类建筑/民房/Residence10.webp' }
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