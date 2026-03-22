window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['巨型加农炮'] = {
    name: '巨型加农炮',
    img: 'images/防御建筑/普通防御建筑/Boom_Cannon16new.webp',
    desc: '巨型加农炮是重型装甲的克星！它拥有极远的射程和毁灭性的单体伤害，每一次开火都能对坦克、机甲等高生命值部队造成重创。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '14' },
        { label: '攻击速度', val: '4s' },
        { label: '伤害类型', val: '单体' },
        { label: '攻击目标', val: '对空，对地' }
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

    // 巨型加农炮等级数据表 (22至1级倒序排列)
    levels: [
        { lv: 22, hp: 25450, dmg: 2130, perDmg: 8520, cw: 10250000, cs: 11050000, ci: 9430000, time: '2d 12h', diamond: 13032, ticket: 240, reqLv: 28, exp: 86 },
        { lv: 21, hp: 23140, dmg: 1940, perDmg: 7760, cw: 8900000, cs: 9610000, ci: 8200000, time: '2d 8h', diamond: 11608, ticket: 224, reqLv: 27, exp: 84 },
        { lv: 20, hp: 21040, dmg: 1760, perDmg: 7040, cw: 7750000, cs: 8360000, ci: 7130000, time: '2d 4h', diamond: 10605, ticket: 208, reqLv: 26, exp: 82 },
        { lv: 19, hp: 19130, dmg: 1600, perDmg: 6400, cw: 6740000, cs: 7270000, ci: 6200000, time: '1d 22h', diamond: 9595, ticket: 184, reqLv: 25, exp: 80 },
        { lv: 18, hp: 17530, dmg: 1460, perDmg: 5840, cw: 5620000, cs: 6060000, ci: 5170000, time: '1d 20h', diamond: 8421, ticket: 176, reqLv: 24, exp: 78 },
        { lv: 17, hp: 16030, dmg: 1330, perDmg: 5320, cw: 4680000, cs: 5050000, ci: 4310000, time: '1d 18h', diamond: 7395, ticket: 168, reqLv: 23, exp: 76 },
        { lv: 16, hp: 14630, dmg: 1210, perDmg: 4840, cw: 3900000, cs: 4210000, ci: 3590000, time: '1d 16h', diamond: 6498, ticket: 160, reqLv: 22, exp: 74 },
        { lv: 15, hp: 13300, dmg: 1100, perDmg: 4400, cw: 3200000, cs: 3460000, ci: 2940000, time: '1d 14h', diamond: 5662, ticket: 152, reqLv: 21, exp: 72 },
        { lv: 14, hp: 12100, dmg: 1000, perDmg: 4000, cw: 2470000, cs: 2470000, ci: 2460000, time: '1d 12h', diamond: 4724, ticket: 144, reqLv: 20, exp: 70 },
        { lv: 13, hp: 11000, dmg: 910, perDmg: 3640, cw: 2260000, cs: 2270000, ci: 2260000, time: '1d 6h', diamond: 4410, ticket: 120, reqLv: 20, exp: 67 },
        { lv: 12, hp: 10000, dmg: 827, perDmg: 3308, cw: 2040000, cs: 1980000, ci: 1560000, time: '1d', diamond: 3816, ticket: 96, reqLv: 19, exp: 63 },
        { lv: 11, hp: 9100, dmg: 752, perDmg: 3008, cw: 1810000, cs: 1650000, ci: 1080000, time: '20h', diamond: 3296, ticket: 80, reqLv: 18, exp: 61 },
        { lv: 10, hp: 8300, dmg: 684, perDmg: 2736, cw: 1650000, cs: 1500000, ci: 990000, time: '16h', diamond: 3083, ticket: 64, reqLv: 18, exp: 60 },
        { lv: 9, hp: 7500, dmg: 622, perDmg: 2488, cw: 1350000, cs: 1110000, ci: 700000, time: '14h', diamond: 2555, ticket: 56, reqLv: 17, exp: 58 },
        { lv: 8, hp: 6800, dmg: 565, perDmg: 2260, cw: 950000, cs: 850000, ci: 370000, time: '12h', diamond: 1976, ticket: 48, reqLv: 16, exp: 54 },
        { lv: 7, hp: 6200, dmg: 514, perDmg: 2056, cw: 850000, cs: 760000, ci: 330000, time: '10h', diamond: 1818, ticket: 40, reqLv: 16, exp: 50 },
        { lv: 6, hp: 5600, dmg: 467, perDmg: 1868, cw: 610000, cs: 460000, ci: 168000, time: '8h', diamond: 1353, ticket: 32, reqLv: 15, exp: 44 },
        { lv: 5, hp: 5100, dmg: 425, perDmg: 1700, cw: 350000, cs: 308000, ci: 85000, time: '6h', diamond: 975, ticket: 24, reqLv: 14, exp: 40 },
        { lv: 4, hp: 4700, dmg: 386, perDmg: 1544, cw: 255000, cs: 153000, ci: 44000, time: '4h', diamond: 708, ticket: 16, reqLv: 13, exp: 31 },
        { lv: 3, hp: 4200, dmg: 351, perDmg: 1404, cw: 198000, cs: 119000, ci: 34000, time: '2h', diamond: 609, ticket: 8, reqLv: 13, exp: 28 },
        { lv: 2, hp: 3850, dmg: 319, perDmg: 1276, cw: 141000, cs: 66000, ci: 17300, time: '1h', diamond: 456, ticket: 4, reqLv: 12, exp: 26 },
        { lv: 1, hp: 3500, dmg: 290, perDmg: 1160, cw: 121000, cs: 57000, ci: 14900, time: '3s', diamond: 409, ticket: 1, reqLv: 12, exp: 24 }
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,3,3,3,4,5,5,5,6,6,6,6].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 8, cap: 2, token: '/', tech: 5 },
                        { no: 2, lv: 10, cap: 3, token: '89,000', tech: 10 },
                        { no: 3, lv: 12, cap: 4, token: '173,500', tech: 15 },
                        { no: 4, lv: 14, cap: 4, token: '210,000', tech: 20 },
                        { no: 5, lv: 16, cap: 4, token: '243,500', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '716,000', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">巨型加农炮外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon1new.webp' },
                { name: '二级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon2new.webp' },
                { name: '三级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon3new.webp' },
                { name: '四级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon4new.webp' },
                { name: '五级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon5new.webp' },
                { name: '六级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon6new.webp' },
                { name: '七级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon7new.webp' },
                { name: '八级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon8new.webp' },
                { name: '九级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon9new.webp' },
                { name: '十级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon10new.webp' },
                { name: '十一级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon11new.webp' },
                { name: '十二级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon12new.webp' },
                { name: '十三-十四级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon13new.webp' },
                { name: '十五级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon15new.webp' },
                { name: '十六-二十二级巨型加农炮', img: 'images/防御建筑图片/巨型加农炮/Boom_Cannon16new.webp' }
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