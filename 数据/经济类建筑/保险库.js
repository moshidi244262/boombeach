window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['保险库'] = {
    name: '保险库',
    img: 'images/经济类建筑/保险库/Vault15.webp',
    desc: '保险库可以保护您的部分资源免遭敌人的掠夺。即使基地被完全摧毁，保险库中所保护额度内的资源依然百分之百安全。',
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '建筑类型', val: '经济/防御建筑' },
        { label: '特有能力', val: '资源防掠夺保护' }
    ],
    
    // 隐藏计算器
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命</th>
                <th><img src="images/基础/Gold.webp">容量(金)</th>
                <th><img src="images/基础/Wood.webp">容量(木)</th>
                <th><img src="images/基础/Stone.webp">容量(石)</th>
                <th><img src="images/基础/Iron.webp">容量(钢)</th>
                <th><img src="images/基础/Protect.webp">保护比例</th>
                <th><img src="images/基础/Wood.webp">升级(木)</th>
                <th><img src="images/基础/Stone.webp">升级(石)</th>
                <th><img src="images/基础/Iron.webp">升级(钢)</th>
                <th><img src="images/基础/Stopwatch.webp">时间</th>
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
                <td style="color:#ca8a04;">${formatNum(lv.capG)}</td>
                <td style="color:#a16207;">${formatNum(lv.capW)}</td>
                <td style="color:#4b5563;">${formatNum(lv.capS)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.capI)}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.prot}</td>
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
        { lv: 23, hp: 6100, capG: 1300000, capW: 1150000, capS: 1150000, capI: 1150000, prot: '92%', cw: 2900000, cs: 2900000, ci: 2900000, time: '2d 16h', diamond: 5474, ticket: 256, reqLv: 28, exp: 90 },
        { lv: 22, hp: 5700, capG: 1100000, capW: 870000, capS: 870000, capI: 870000, prot: '91%', cw: 2600000, cs: 2600000, ci: 2600000, time: '2d 8h', diamond: 5032, ticket: 224, reqLv: 26, exp: 80 },
        { lv: 21, hp: 5300, capG: 1000000, capW: 666000, capS: 666000, capI: 666000, prot: '90%', cw: 2310000, cs: 2310000, ci: 2310000, time: '2d', diamond: 4607, ticket: 192, reqLv: 24, exp: 74 },
        { lv: 20, hp: 4900, capG: 800000, capW: 510000, capS: 510000, capI: 510000, prot: '88%', cw: 2060000, cs: 2060000, ci: 2050000, time: '1d 16h', diamond: 4210, ticket: 160, reqLv: 22, exp: 74 },
        { lv: 19, hp: 4500, capG: 700000, capW: 410000, capS: 400000, capI: 320000, prot: '86%', cw: 1810000, cs: 1760000, ci: 1390000, time: '1d 8h', diamond: 3587, ticket: 128, reqLv: 20, exp: 70 },
        { lv: 18, hp: 4100, capG: 600000, capW: 360000, capS: 340000, capI: 230000, prot: '84%', cw: 1780000, cs: 1730000, ci: 1360000, time: '1d 4h', diamond: 3511, ticket: 112, reqLv: 19, exp: 70 },
        { lv: 17, hp: 3800, capG: 500000, capW: 300000, capS: 250000, capI: 170000, prot: '82%', cw: 1550000, cs: 1410000, ci: 930000, time: '1d 2h', diamond: 3009, ticket: 104, reqLv: 18, exp: 67 },
        { lv: 16, hp: 3500, capG: 420000, capW: 220000, capS: 200000, capI: 100000, prot: '80%', cw: 1240000, cs: 1020000, ci: 650000, time: '1d', diamond: 2475, ticket: 96, reqLv: 17, exp: 64 },
        { lv: 15, hp: 3200, capG: 320000, capW: 160000, capS: 130000, capI: 60000, prot: '78%', cw: 850000, cs: 760000, ci: 330000, time: '20h', diamond: 1874, ticket: 80, reqLv: 16, exp: 61 },
        { lv: 14, hp: 2900, capG: 240000, capW: 110000, capS: 90000, capI: 40000, prot: '75%', cw: 590000, cs: 450000, ci: 164000, time: '18h', diamond: 1389, ticket: 72, reqLv: 15, exp: 52 },
        { lv: 13, hp: 2700, capG: 190000, capW: 80000, capS: 60000, capI: 27000, prot: '72%', cw: 340000, cs: 295000, ci: 81000, time: '14h', diamond: 995, ticket: 56, reqLv: 14, exp: 44 },
        { lv: 12, hp: 2500, capG: 140000, capW: 60000, capS: 38000, capI: 19000, prot: '69%', cw: 238000, cs: 143000, ci: 41000, time: '12h', diamond: 724, ticket: 48, reqLv: 13, exp: 37 },
        { lv: 11, hp: 2300, capG: 120000, capW: 48000, capS: 26000, capI: 13000, prot: '66%', cw: 165000, cs: 77000, ci: 20300, time: '10h', diamond: 544, ticket: 40, reqLv: 12, exp: 31 },
        { lv: 10, hp: 2100, capG: 90000, capW: 39000, capS: 18000, capI: 8000, prot: '63%', cw: 107000, cs: 39000, ci: 11200, time: '8h', diamond: 398, ticket: 32, reqLv: 11, exp: 31 },
        { lv: 9, hp: 1900, capG: 70000, capW: 30000, capS: 14000, capI: 4000, prot: '60%', cw: 77000, cs: 193000, ci: 6200, time: '6h', diamond: 308, ticket: 24, reqLv: 10, exp: 28 },
        { lv: 8, hp: 1700, capG: 45000, capW: 23000, capS: 10000, capI: '/', prot: '56%', cw: 48000, cs: 11400, ci: 3040, time: '4h', diamond: 233, ticket: 16, reqLv: 9, exp: 24 },
        { lv: 7, hp: 1600, capG: 35000, capW: 18000, capS: 6000, capI: '/', prot: '52%', cw: 30000, cs: 6600, ci: '/', time: '2h', diamond: 158, ticket: 8, reqLv: 8, exp: 20 },
        { lv: 6, hp: 1500, capG: 25000, capW: 15000, capS: 3000, capI: '/', prot: '48%', cw: 17600, cs: 3500, ci: '/', time: '1h 30m', diamond: 125, ticket: 6, reqLv: 7, exp: 19 },
        { lv: 5, hp: 1400, capG: 20000, capW: 12000, capS: '/', capI: '/', prot: '44%', cw: 11600, cs: 2030, ci: '/', time: '1h', diamond: 97, ticket: 4, reqLv: 6, exp: 17 },
        { lv: 4, hp: 1300, capG: 15000, capW: 9000, capS: '/', capI: '/', prot: '40%', cw: 8800, cs: '/', ci: '/', time: '45m', diamond: 75, ticket: 3, reqLv: 5, exp: 15 },
        { lv: 3, hp: 1200, capG: 12000, capW: 6000, capS: '/', capI: '/', prot: '35%', cw: 4600, cs: '/', ci: '/', time: '30m', diamond: 58, ticket: 2, reqLv: 4, exp: 14 },
        { lv: 2, hp: 1100, capG: 10000, capW: 4000, capS: '/', capI: '/', prot: '30%', cw: 2070, cs: '/', ci: '/', time: '15m', diamond: 43, ticket: 1, reqLv: 3, exp: 12 },
        { lv: 1, hp: 1000, capG: 5000, capW: 2000, capS: '/', capI: '/', prot: '25%', cw: 300, cs: '/', ci: '/', time: '3s', diamond: 5, ticket: 1, reqLv: 3, exp: 0 }
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
                        ${[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">保险库外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级保险库', img: 'images/经济类建筑/保险库/Vault1.webp' },
                { name: '二至三级保险库', img: 'images/经济类建筑/保险库/Vault2.webp' },
                { name: '四级保险库', img: 'images/经济类建筑/保险库/Vault4.webp' },
                { name: '五级保险库', img: 'images/经济类建筑/保险库/Vault5.webp' },
                { name: '六至七级保险库', img: 'images/经济类建筑/保险库/Vault6.webp' },
                { name: '八级保险库', img: 'images/经济类建筑/保险库/Vault8.webp' },
                { name: '九级保险库', img: 'images/经济类建筑/保险库/Vault9.webp' },
                { name: '十至十二级保险库', img: 'images/经济类建筑/保险库/Vault10.webp' },
                { name: '十三级保险库', img: 'images/经济类建筑/保险库/Vault13.webp' },
                { name: '十四级保险库', img: 'images/经济类建筑/保险库/Vault14.webp' },
                { name: '十五至二十三级保险库', img: 'images/经济类建筑/保险库/Vault15.webp' }
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