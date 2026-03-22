window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['火焰喷射器'] = {
    name: '火焰喷射器',
    img: 'images/防御建筑/普通防御建筑/Flamethrower19.webp',
    desc: '火焰喷射器拥有极快的攻击速度，是克制成群结队步兵的致命武器。它会对近距离的敌军喷射火焰，并在其停止喷射后继续对敌军造成持续的烧伤伤害。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '6.5' },
        { label: '攻击速度', val: '0.15s' },
        { label: '伤害类型', val: '溅射(半径1)' },
        { label: '特殊能力', val: '受到伤害后持续燃烧5秒' },
        { label: '攻击目标', val: '对地' }
    ],
    
    // 1. 定制表头（展示每秒伤害、每次伤害、残余烧伤伤害三项属性）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th colspan="3" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">攻击伤害属性</th>
                <th colspan="3" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">升级费用</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Diamond.webp" onerror="this.src='images/大本营/Diamond.webp'">秒钻花费</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/TimeSaver.webp" onerror="this.src='images/大本营/TimeSaver.webp'">省时卷</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/大本营/HQ_Icon.webp'">需要大本等级</th>
                <th rowspan="2"><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/大本营/Icon_info_xp.webp'">经验</th>
            </tr>
            <tr>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次伤害</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">残余烧伤</th>
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
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#b91c1c;">${formatNum(lv.perDmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03); color:#ea580c; font-weight:bold;">${formatNum(lv.perDmg1)}</td>
                <td style="color:#a16207;">${formatNum(lv.cw)}</td>
                <td style="color:#4b5563;">${formatNum(lv.cs)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ci)}</td>
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
            dmg: item.dmg !== '/' ? Number((item.dmg * (1 + dmgInput / 100)).toFixed(1)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/',
            perDmg1: item.perDmg1 !== '/' ? Number((item.perDmg1 * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 火焰喷射器等级数据表 (26至1级倒序排列)
    levels: [
        { lv: 26, hp: 19080, dmg: 766, perDmg: 127.7, perDmg1: 638.8, cw: 5670000, cs: 6670000, ci: 6170000, time: '1d 22h', diamond: 9008, ticket: 184, reqLv: 28, exp: 85 },
        { lv: 25, hp: 17530, dmg: 697.2, perDmg: 116.2, perDmg1: 581, cw: 5060000, cs: 5900000, ci: 5510000, time: '1d 20h', diamond: 8162, ticket: 176, reqLv: 27, exp: 83 },
        { lv: 24, hp: 16110, dmg: 633, perDmg: 105.6, perDmg1: 528, cw: 4520000, cs: 5320000, ci: 4920000, time: '1d 18h', diamond: 7641, ticket: 168, reqLv: 26, exp: 81 },
        { lv: 23, hp: 14810, dmg: 576, perDmg: 96, perDmg1: 480, cw: 4040000, cs: 4750000, ci: 4390000, time: '1d 16h', diamond: 7059, ticket: 160, reqLv: 25, exp: 79 },
        { lv: 22, hp: 13660, dmg: 526.8, perDmg: 87.8, perDmg1: 439, cw: 3600000, cs: 4240000, ci: 3920000, time: '1d 14h', diamond: 6506, ticket: 152, reqLv: 24, exp: 77 },
        { lv: 21, hp: 12560, dmg: 481.2, perDmg: 80.2, perDmg1: 401, cw: 3220000, cs: 3790000, ci: 3500000, time: '1d 12h', diamond: 6005, ticket: 144, reqLv: 23, exp: 75 },
        { lv: 20, hp: 11510, dmg: 439.2, perDmg: 73.2, perDmg1: 366, cw: 3040000, cs: 3570000, ci: 3300000, time: '1d 10h', diamond: 5755, ticket: 136, reqLv: 23, exp: 73 },
        { lv: 19, hp: 10560, dmg: 399.6, perDmg: 66.6, perDmg1: 333, cw: 2710000, cs: 3190000, ci: 2950000, time: '1d 8h', diamond: 5306, ticket: 128, reqLv: 22, exp: 71 },
        { lv: 18, hp: 9600, dmg: 363.6, perDmg: 60.6, perDmg1: 303, cw: 2370000, cs: 2790000, ci: 2580000, time: '1d 6h', diamond: 4822, ticket: 120, reqLv: 21, exp: 69 },
        { lv: 17, hp: 8900, dmg: 331.2, perDmg: 55.2, perDmg1: 276, cw: 2260000, cs: 2270000, ci: 2260000, time: '1d 4h', diamond: 4393, ticket: 112, reqLv: 20, exp: 67 },
        { lv: 16, hp: 8200, dmg: 301.2, perDmg: 50.2, perDmg1: 215, cw: 2140000, cs: 2140000, ci: 2130000, time: '1d', diamond: 4192, ticket: 96, reqLv: 20, exp: 64 },
        { lv: 15, hp: 7500, dmg: 273.6, perDmg: 45.6, perDmg1: 228, cw: 1920000, cs: 1870000, ci: 1470000, time: '22h', diamond: 3647, ticket: 88, reqLv: 19, exp: 61 },
        { lv: 14, hp: 6900, dmg: 248.4, perDmg: 41.4, perDmg1: 207, cw: 1710000, cs: 1560000, ci: 1020000, time: '20h', diamond: 3153, ticket: 80, reqLv: 18, exp: 60 },
        { lv: 13, hp: 6300, dmg: 225.6, perDmg: 37.6, perDmg1: 188, cw: 1400000, cs: 1150000, ci: 730000, time: '18h', diamond: 2618, ticket: 72, reqLv: 17, exp: 56 },
        { lv: 12, hp: 5800, dmg: 205.2, perDmg: 34.2, perDmg1: 171, cw: 1320000, cs: 1090000, ci: 690000, time: '16h', diamond: 2506, ticket: 64, reqLv: 17, exp: 56 },
        { lv: 11, hp: 5300, dmg: 187.2, perDmg: 31.2, perDmg1: 156, cw: 870000, cs: 780000, ci: 340000, time: '14h', diamond: 1849, ticket: 56, reqLv: 16, exp: 52 },
        { lv: 10, hp: 4900, dmg: 169.2, perDmg: 28.2, perDmg1: 141, cw: 620000, cs: 470000, ci: 172000, time: '12h', diamond: 1365, ticket: 48, reqLv: 15, exp: 46 },
        { lv: 9, hp: 4500, dmg: 154.8, perDmg: 25.8, perDmg1: 129, cw: 360000, cs: 315000, ci: 87000, time: '10h', diamond: 995, ticket: 40, reqLv: 14, exp: 40 },
        { lv: 8, hp: 4200, dmg: 140.4, perDmg: 23.4, perDmg1: 117, cw: 340000, cs: 295000, ci: 81000, time: '8h', diamond: 944, ticket: 32, reqLv: 14, exp: 37 },
        { lv: 7, hp: 3800, dmg: 127.2, perDmg: 21.2, perDmg1: 106, cw: 244000, cs: 147000, ci: 42000, time: '6h', diamond: 692, ticket: 24, reqLv: 13, exp: 31 },
        { lv: 6, hp: 3500, dmg: 116.4, perDmg: 19.4, perDmg1: 97, cw: 161000, cs: 76000, ci: 19800, time: '4h', diamond: 504, ticket: 16, reqLv: 12, exp: 28 },
        { lv: 5, hp: 3200, dmg: 105.6, perDmg: 17.6, perDmg1: 88, cw: 107000, cs: 39000, ci: 11200, time: '3h', diamond: 375, ticket: 12, reqLv: 11, exp: 26 },
        { lv: 4, hp: 3000, dmg: 96, perDmg: 16, perDmg1: 80, cw: 94000, cs: 34000, ci: 9800, time: '2h', diamond: 341, ticket: 8, reqLv: 11, exp: 24 },
        { lv: 3, hp: 2700, dmg: 97.6, perDmg: 14.6, perDmg1: 73, cw: 69000, cs: 17300, ci: 5600, time: '1h', diamond: 256, ticket: 4, reqLv: 10, exp: 22 },
        { lv: 2, hp: 2500, dmg: 79.2, perDmg: 13.2, perDmg1: 66, cw: 44000, cs: 10500, ci: 2800, time: '15m', diamond: 196, ticket: 1, reqLv: 9, exp: 20 },
        { lv: 1, hp: 2300, dmg: 72, perDmg: 12, perDmg1: 60, cw: 31500, cs: 7500, ci: 200, time: '3s', diamond: 154, ticket: 1, reqLv: 9, exp: 17 }
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
                        ${[0,0,0,0,0,0,0,0,1,1,2,2,2,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 2, lv: 9, cap: 3, token: '41,500', tech: 10 },
                        { no: 3, lv: 12, cap: 4, token: '74,000', tech: 15 },
                        { no: 4, lv: 16, cap: 5, token: '146,500', tech: 20 },
                        { no: 5, lv: 19, cap: 5, token: '195,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '457,000', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">火焰喷射器外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower1.webp' },
                { name: '二-四级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower2.webp' },
                { name: '五-六级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower5.webp' },
                { name: '七-八级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower7.webp' },
                { name: '九级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower9.webp' },
                { name: '十级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower10.webp' },
                { name: '十一级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower11.webp' },
                { name: '十二-十三级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower12.webp' },
                { name: '十四级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower14.webp' },
                { name: '十五-十七级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower15.webp' },
                { name: '十八级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower18.webp' },
                { name: '十九-二十六级火焰喷射器', img: 'images/防御建筑图片/火焰喷射器/Flamethrower19.webp' }
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