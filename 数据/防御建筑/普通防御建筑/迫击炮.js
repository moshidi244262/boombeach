window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['迫击炮'] = {
    name: '迫击炮',
    img: 'images/防御建筑/普通防御建筑/Mortar22.webp',
    desc: '迫击炮能对中远距离的目标造成范围伤害，其炮弹呈抛物线飞行，非常适合对付成群的步兵和火箭炮手。但它存在火力盲区，无法攻击近身的敌军。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '4-12' },
        { label: '攻击速度', val: '5s' },
        { label: '伤害类型', val: '溅射' },
        { label: '飞溅半径', val: '1.2' },
        { label: '攻击目标', val: '对地' }
    ],
    
    // 1. 定制表头（引入木材、石材、钢材及射击伤害）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
                <th><img src="images/基础/Wood.webp" onerror="this.src='images/大本营/Wood.webp'">木材</th>
                <th><img src="images/基础/Stone.webp" onerror="this.src='images/大本营/Stone.webp'">石材</th>
                <th><img src="images/基础/Iron.webp" onerror="this.src='images/大本营/Iron.webp'">钢材</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
                <th><img src="images/基础/Diamond.webp" onerror="this.src='images/大本营/Diamond.webp'">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp" onerror="this.src='images/大本营/TimeSaver.webp'">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/大本营/HQ_Icon.webp'">需要大本等级</th>
                <th><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/大本营/Icon_info_xp.webp'">经验</th>
            </tr>
        </thead>
    `,

    // 2. 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03); color:#b91c1c; font-weight:bold;">${formatNum(lv.perDmg)}</td>
                <td style="color:#a16207;">${formatNum(lv.cw)}</td>
                <td style="color:#4b5563;">${lv.cs === '/' ? '<span class="val-none">/</span>' : formatNum(lv.cs)}</td>
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

    // 迫击炮等级数据表 (30至1级倒序排列)
    levels: [
        { lv: 30, hp: 23700, dmg: 187, perDmg: 935, cw: 7320000, cs: 6640000, ci: 6560000, time: '2d 4h', diamond: 9740, ticket: 208, reqLv: 28, exp: 97 },
        { lv: 29, hp: 21800, dmg: 170, perDmg: 850, cw: 6650000, cs: 6040000, ci: 5960000, time: '2d 2h', diamond: 8948, ticket: 200, reqLv: 27, exp: 95 },
        { lv: 28, hp: 20000, dmg: 155, perDmg: 775, cw: 6050000, cs: 5490000, ci: 5420000, time: '2d', diamond: 8489, ticket: 192, reqLv: 26, exp: 93 },
        { lv: 27, hp: 18380, dmg: 141, perDmg: 705, cw: 5500000, cs: 4990000, ci: 4930000, time: '1d 22h', diamond: 7933, ticket: 184, reqLv: 25, exp: 91 },
        { lv: 26, hp: 16880, dmg: 132, perDmg: 660, cw: 5000000, cs: 4530000, ci: 4480000, time: '1d 20h', diamond: 7410, ticket: 176, reqLv: 24, exp: 89 },
        { lv: 25, hp: 15480, dmg: 123, perDmg: 615, cw: 4760000, cs: 4320000, ci: 4270000, time: '1d 18h', diamond: 7141, ticket: 168, reqLv: 24, exp: 87 },
        { lv: 24, hp: 14180, dmg: 114, perDmg: 570, cw: 4330000, cs: 3930000, ci: 3890000, time: '1d 16h', diamond: 6679, ticket: 160, reqLv: 23, exp: 85 },
        { lv: 23, hp: 12980, dmg: 105, perDmg: 525, cw: 4130000, cs: 3740000, ci: 3700000, time: '1d 14h', diamond: 6439, ticket: 152, reqLv: 23, exp: 83 },
        { lv: 22, hp: 11880, dmg: 96, perDmg: 480, cw: 3750000, cs: 3400000, ci: 3360000, time: '1d 12h', diamond: 6010, ticket: 144, reqLv: 22, exp: 81 },
        { lv: 21, hp: 10800, dmg: 87, perDmg: 435, cw: 3420000, cs: 3100000, ci: 3070000, time: '1d 10h', diamond: 5632, ticket: 136, reqLv: 21, exp: 79 },
        { lv: 20, hp: 9900, dmg: 80, perDmg: 400, cw: 3060000, cs: 2970000, ci: 2750000, time: '1d 8h', diamond: 5320, ticket: 128, reqLv: 20, exp: 77 },
        { lv: 19, hp: 9100, dmg: 72, perDmg: 360, cw: 2880000, cs: 2680000, ci: 2470000, time: '1d 4h', diamond: 5186, ticket: 112, reqLv: 20, exp: 76 },
        { lv: 18, hp: 8400, dmg: 66, perDmg: 330, cw: 2520000, cs: 2250000, ci: 1920000, time: '1d', diamond: 4403, ticket: 96, reqLv: 19, exp: 70 },
        { lv: 17, hp: 7700, dmg: 60, perDmg: 300, cw: 2170000, cs: 1980000, ci: 1300000, time: '20h', diamond: 3709, ticket: 80, reqLv: 18, exp: 67 },
        { lv: 16, hp: 7100, dmg: 54, perDmg: 270, cw: 1720000, cs: 1420000, ci: 900000, time: '18h', diamond: 3004, ticket: 72, reqLv: 17, exp: 64 },
        { lv: 15, hp: 6500, dmg: 49, perDmg: 245, cw: 1180000, cs: 1050000, ci: 460000, time: '16h', diamond: 2269, ticket: 64, reqLv: 16, exp: 61 },
        { lv: 14, hp: 6000, dmg: 45, perDmg: 225, cw: 810000, cs: 610000, ci: 224000, time: '14h', diamond: 1634, ticket: 56, reqLv: 15, exp: 52 },
        { lv: 13, hp: 5500, dmg: 41, perDmg: 205, cw: 460000, cs: 400000, ci: 110000, time: '12h', diamond: 1165, ticket: 48, reqLv: 14, exp: 44 },
        { lv: 12, hp: 5100, dmg: 37, perDmg: 185, cw: 320000, cs: 191000, ci: 54000, time: '10h', diamond: 827, ticket: 40, reqLv: 13, exp: 37 },
        { lv: 11, hp: 4600, dmg: 34, perDmg: 170, cw: 217000, cs: 102000, ci: 26700, time: '8h', diamond: 605, ticket: 32, reqLv: 12, exp: 31 },
        { lv: 10, hp: 4300, dmg: 31, perDmg: 155, cw: 140000, cs: 50000, ci: 14600, time: '5h', diamond: 440, ticket: 20, reqLv: 11, exp: 28 },
        { lv: 9, hp: 3900, dmg: 28, perDmg: 140, cw: 101000, cs: 25200, ci: 8200, time: '3h', diamond: 342, ticket: 12, reqLv: 10, exp: 26 },
        { lv: 8, hp: 3600, dmg: 25, perDmg: 125, cw: 63000, cs: 15000, ci: 4000, time: '2h', diamond: 253, ticket: 8, reqLv: 9, exp: 24 },
        { lv: 7, hp: 3300, dmg: 23, perDmg: 115, cw: 40000, cs: 8700, ci: '/', time: '1h 30m', diamond: 179, ticket: 6, reqLv: 8, exp: 20 },
        { lv: 6, hp: 3000, dmg: 21, perDmg: 105, cw: 23500, cs: 4700, ci: '/', time: '1h', diamond: 132, ticket: 4, reqLv: 7, exp: 18 },
        { lv: 5, hp: 2800, dmg: 19, perDmg: 95, cw: 15500, cs: 2730, ci: '/', time: '45m', diamond: 104, ticket: 3, reqLv: 6, exp: 16 },
        { lv: 4, hp: 2600, dmg: 17, perDmg: 85, cw: 11500, cs: '/', ci: '/', time: '30m', diamond: 78, ticket: 2, reqLv: 5, exp: 15 },
        { lv: 3, hp: 2370, dmg: 16, perDmg: 80, cw: 5900, cs: '/', ci: '/', time: '15m', diamond: 58, ticket: 1, reqLv: 4, exp: 13 },
        { lv: 2, hp: 2180, dmg: 14, perDmg: 70, cw: 2360, cs: '/', ci: '/', time: '15m', diamond: 34, ticket: 1, reqLv: 3, exp: 10 },
        { lv: 1, hp: 2000, dmg: 13, perDmg: 65, cw: 1180, cs: '/', ci: '/', time: '3s', diamond: 20, ticket: 1, reqLv: 3, exp: 7 }
    ],

    // 动态追加模块
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
                        ${[0,0,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 9, cap: 2, token: '/', tech: 5 },
                        { no: 2, lv: 12, cap: 3, token: '32,000', tech: 10 },
                        { no: 3, lv: 17, cap: 3, token: '68,500', tech: 15 },
                        { no: 4, lv: 20, cap: 4, token: '124,000', tech: 20 },
                        { no: 5, lv: 22, cap: 4, token: '180,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '404,500', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">迫击炮外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar1New.webp' },
                { name: '二级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar2New.webp' },
                { name: '三级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar3b.webp' },
                { name: '四级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar4.webp' },
                { name: '五级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar5.webp' },
                { name: '六级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar6b.webp' },
                { name: '七级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar7.webp' },
                { name: '八级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar8New.webp' },
                { name: '九-十级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar10.webp' },
                { name: '十一级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar11.webp' },
                { name: '十二级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar12.webp' },
                { name: '十三级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar13.webp' },
                { name: '十四-十五级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar14.webp' },
                { name: '十六-二十级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortarvs16.webp' },
                { name: '二十一级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar22.webp' },
                { name: '二十二-三十级迫击炮', img: 'images/防御建筑图片/迫击炮/Mortar22.webp' }
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