window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['加农炮'] = {
    name: '加农炮',
    img: 'images/防御建筑/普通防御建筑/Cannon22.webp',
    desc: '加农炮能够对单一目标造成巨大的伤害，尤其是对付生命值较高的装甲部队（如坦克、机甲）。虽然它的射速较慢，但每一炮都极具威力。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '10' },
        { label: '攻击速度', val: '3s' },
        { label: '伤害类型', val: '单体伤害' },
        { label: '攻击目标', val: '对空，对地' }
    ],
    
    // 1. 定制表头（引入每秒伤害、每次射击伤害）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th colspan="2" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">攻击伤害属性</th>
                <th colspan="3" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">升级费用</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Diamond.webp" onerror="this.src='images/大本营/Diamond.webp'">秒钻花费</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/TimeSaver.webp" onerror="this.src='images/大本营/TimeSaver.webp'">省时卷</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/大本营/HQ_Icon.webp'">需要大本等级</th>
                <th rowspan="2"><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/大本营/Icon_info_xp.webp'">经验</th>
            </tr>
            <tr>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
                <th><img src="images/基础/Wood.webp" onerror="this.src='images/大本营/Wood.webp'">木材</th>
                <th><img src="images/基础/Stone.webp" onerror="this.src='images/大本营/Stone.webp'">石材</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Iron.webp" onerror="this.src='images/大本营/Iron.webp'">钢材</th>
            </tr>
        </thead>
    `,

    // 2. 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03); color:#b91c1c; font-weight:bold;">${formatNum(lv.perDmg)}</td>
                <td style="color:#a16207;">${formatNum(lv.cw)}</td>
                <td style="color:#4b5563;">${formatNum(lv.cs)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${lv.ci === '/' ? '<span class="val-none">/</span>' : formatNum(lv.ci)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td>${formatNum(lv.diamond)}</td>
                <td>${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    // 3. 定制计算器运算逻辑
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Math.round(item.perDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 加农炮等级数据表 (28至1级倒序排列)
    levels: [
        { lv: 28, hp: 20000, dmg: 1815, perDmg: 5445, cw: 6180000, cs: 6700000, ci: 7240000, time: '2d', diamond: 9575, ticket: 192, reqLv: 28, exp: 86 },
        { lv: 27, hp: 18390, dmg: 1650, perDmg: 4950, cw: 5520000, cs: 6000000, ci: 6470000, time: '1d 22h', diamond: 8832, ticket: 184, reqLv: 27, exp: 84 },
        { lv: 26, hp: 16870, dmg: 1500, perDmg: 4500, cw: 4930000, cs: 5350000, ci: 5780000, time: '1d 20h', diamond: 8133, ticket: 176, reqLv: 26, exp: 82 },
        { lv: 25, hp: 15480, dmg: 1366, perDmg: 4098, cw: 4400000, cs: 4780000, ci: 5160000, time: '1d 18h', diamond: 7503, ticket: 168, reqLv: 25, exp: 80 },
        { lv: 24, hp: 14180, dmg: 1248, perDmg: 3744, cw: 3930000, cs: 4260000, ci: 4600000, time: '1d 16h', diamond: 6915, ticket: 160, reqLv: 24, exp: 78 },
        { lv: 23, hp: 12980, dmg: 1138, perDmg: 3414, cw: 3500000, cs: 3800000, ci: 4110000, time: '1d 14h', diamond: 6373, ticket: 152, reqLv: 23, exp: 76 },
        { lv: 22, hp: 11880, dmg: 1036, perDmg: 3108, cw: 3130000, cs: 3400000, ci: 3670000, time: '1d 12h', diamond: 5881, ticket: 144, reqLv: 22, exp: 74 },
        { lv: 21, hp: 10800, dmg: 942, perDmg: 2826, cw: 2750000, cs: 2990000, ci: 3230000, time: '1d 10h', diamond: 5374, ticket: 136, reqLv: 21, exp: 72 },
        { lv: 20, hp: 9900, dmg: 856, perDmg: 2568, cw: 2470000, cs: 2470000, ci: 2460000, time: '1d 8h', diamond: 4692, ticket: 128, reqLv: 20, exp: 70 },
        { lv: 19, hp: 9100, dmg: 778, perDmg: 2334, cw: 2220000, cs: 2160000, ci: 1700000, time: '1d 4h', diamond: 4073, ticket: 112, reqLv: 19, exp: 66 },
        { lv: 18, hp: 8400, dmg: 708, perDmg: 2124, cw: 1970000, cs: 1800000, ci: 1180000, time: '1d', diamond: 3507, ticket: 96, reqLv: 18, exp: 64 },
        { lv: 17, hp: 7700, dmg: 643, perDmg: 1929, cw: 1810000, cs: 1650000, ci: 1080000, time: '22h', diamond: 3296, ticket: 88, reqLv: 18, exp: 61 },
        { lv: 16, hp: 7100, dmg: 585, perDmg: 1755, cw: 1480000, cs: 1220000, ci: 770000, time: '20h', diamond: 2738, ticket: 80, reqLv: 17, exp: 60 },
        { lv: 15, hp: 6500, dmg: 532, perDmg: 1596, cw: 1350000, cs: 1110000, ci: 700000, time: '18h', diamond: 2555, ticket: 72, reqLv: 17, exp: 58 },
        { lv: 14, hp: 6000, dmg: 483, perDmg: 1449, cw: 950000, cs: 850000, ci: 370000, time: '16h', diamond: 1976, ticket: 64, reqLv: 16, exp: 54 },
        { lv: 13, hp: 5500, dmg: 439, perDmg: 1317, cw: 850000, cs: 760000, ci: 330000, time: '14h', diamond: 1818, ticket: 56, reqLv: 16, exp: 50 },
        { lv: 12, hp: 5100, dmg: 399, perDmg: 1197, cw: 610000, cs: 460000, ci: 168000, time: '12h', diamond: 1353, ticket: 48, reqLv: 15, exp: 44 },
        { lv: 11, hp: 4600, dmg: 363, perDmg: 1089, cw: 540000, cs: 410000, ci: 149000, time: '10h', diamond: 1238, ticket: 40, reqLv: 15, exp: 42 },
        { lv: 10, hp: 4300, dmg: 330, perDmg: 990, cw: 314000, cs: 274000, ci: 76000, time: '8h', diamond: 904, ticket: 32, reqLv: 14, exp: 37 },
        { lv: 9, hp: 3900, dmg: 300, perDmg: 900, cw: 227000, cs: 136000, ci: 39000, time: '6h', diamond: 667, ticket: 24, reqLv: 13, exp: 31 },
        { lv: 8, hp: 3600, dmg: 273, perDmg: 819, cw: 161000, cs: 76000, ci: 19800, time: '4h', diamond: 504, ticket: 16, reqLv: 12, exp: 28 },
        { lv: 7, hp: 3300, dmg: 248, perDmg: 744, cw: 107000, cs: 39000, ci: 11200, time: '2h 30m', diamond: 375, ticket: 10, reqLv: 11, exp: 26 },
        { lv: 6, hp: 3000, dmg: 225, perDmg: 675, cw: 79000, cs: 19800, ci: 6400, time: '1h 30m', diamond: 289, ticket: 6, reqLv: 10, exp: 24 },
        { lv: 5, hp: 2800, dmg: 205, perDmg: 615, cw: 50000, cs: 12000, ci: 3200, time: '1h', diamond: 213, ticket: 4, reqLv: 9, exp: 20 },
        { lv: 4, hp: 2600, dmg: 186, perDmg: 558, cw: 32000, cs: 7100, ci: '/', time: '45m', diamond: 156, ticket: 3, reqLv: 8, exp: 18 },
        { lv: 3, hp: 2370, dmg: 169, perDmg: 507, cw: 19600, cs: 3900, ci: '/', time: '30m', diamond: 116, ticket: 2, reqLv: 7, exp: 16 },
        { lv: 2, hp: 2180, dmg: 154, perDmg: 462, cw: 13200, cs: 2320, ci: '/', time: '15m', diamond: 92, ticket: 1, reqLv: 6, exp: 15 },
        { lv: 1, hp: 2000, dmg: 140, perDmg: 420, cw: 11600, cs: 2030, ci: '/', time: '3s', diamond: 83, ticket: 1, reqLv: 6, exp: 14 }
    ],

    // 动态追加的模块
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
                        ${[0,0,0,0,0,1,1,2,2,3,4,4,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table" style="min-width:500px;">
                <thead>
                    <tr>
                        <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">序号</th>
                        <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">航母等级</th>
                        <th><img src="images/基础/Build.webp" onerror="this.src='images/大本营/Build.webp'">建造数量</th>
                        <th><img src="images/基础/Icon_Upgrade_Token.webp" onerror="this.src='images/大本营/Icon_Upgrade_Token.webp'">升级令牌</th>
                        <th><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/大本营/Icon_info_xp.webp'">科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    ${[
                        { no: 1, lv: 6, cap: 2, token: '/', tech: 5 },
                        { no: 2, lv: 10, cap: 3, token: '34,500', tech: 10 },
                        { no: 3, lv: 14, cap: 4, token: '67,000', tech: 15 },
                        { no: 4, lv: 18, cap: 5, token: '133,000', tech: 20 },
                        { no: 5, lv: 22, cap: 5, token: '195,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '429,500', tech: 75 }
                    ].map(ws => `
                        <tr style="${ws.no === '合计' ? 'background:rgba(0,0,0,0.02); font-weight:bold;' : ''}">
                            <td>${ws.no}</td>
                            <td>${ws.lv}</td>
                            <td style="color:var(--primary); font-weight:bold;">${ws.cap}</td>
                            <td style="color:#ca8a04;">${ws.token}</td>
                            <td>${ws.tech}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">加农炮外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级加农炮', img: 'images/防御建筑图片/加农炮/Cannon1.webp' },
                { name: '二-三级加农炮', img: 'images/防御建筑图片/加农炮/Cannon2.webp' },
                { name: '四级加农炮', img: 'images/防御建筑图片/加农炮/Cannon4.webp' },
                { name: '五级加农炮', img: 'images/防御建筑图片/加农炮/Cannon5.webp' },
                { name: '六-九级加农炮', img: 'images/防御建筑图片/加农炮/Cannon6.webp' },
                { name: '十级加农炮', img: 'images/防御建筑图片/加农炮/Cannon10.webp' },
                { name: '十一级加农炮', img: 'images/防御建筑图片/加农炮/Cannon11.webp' },
                { name: '十二级加农炮', img: 'images/防御建筑图片/加农炮/Cannon12.webp' },
                { name: '十三级加农炮', img: 'images/防御建筑图片/加农炮/Cannon13.webp' },
                { name: '十四级加农炮', img: 'images/防御建筑图片/加农炮/Cannon14.webp' },
                { name: '十五级加农炮', img: 'images/防御建筑图片/加农炮/Cannon15.webp' },
                { name: '十六-十八级加农炮', img: 'images/防御建筑图片/加农炮/Cannon16.webp' },
                { name: '十九-二十级加农炮', img: 'images/防御建筑图片/加农炮/Cannon19.webp' },
                { name: '二十一级加农炮', img: 'images/防御建筑图片/加农炮/Cannon21.webp' },
                { name: '二十二-二十八级加农炮', img: 'images/防御建筑图片/加农炮/Cannon22.webp' }
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