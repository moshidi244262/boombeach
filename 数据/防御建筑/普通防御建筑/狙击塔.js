window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['狙击塔'] = {
    name: '狙击塔',
    img: 'images/防御建筑图片/狙击塔/SniperTower22.webp',
    desc: '狙击塔是海岛奇兵中最基础也是最可靠的防御建筑。它拥有较远的射程和不错的单体伤害，无论是对付数量众多的步兵还是坚固的坦克都能发挥稳定的防御作用。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '12' },
        { label: '攻击速度', val: '1.4s' },
        { label: '伤害类型', val: '单体伤害' },
        { label: '攻击目标', val: '对空，对地' }
    ],
    
    // ==========================================
    // 专属排版定制区块 (自动覆盖 index.html 默认排版)
    // ==========================================

    // 1. 定制表头（引入木材、石材、钢材以及大本营需求等级）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/基础/Damage.webp">每次射击伤害</th>
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

    // 2. 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.perDmg)}</td>
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

    // 3. 定制计算器运算逻辑 (同步计算单次射击伤害)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 狙击塔等级数据表 (28至1级倒序排列)
    levels: [
        { lv: 28, hp: 16900, dmg: 537, perDmg: 751.8, cw: 8890000, cs: 8140000, ci: 7400000, time: '1d 16h', diamond: 10931, ticket: 164, reqLv: 28, exp: 78 },
        { lv: 27, hp: 15500, dmg: 488, perDmg: 683.2, cw: 7730000, cs: 7080000, ci: 6440000, time: '1d 13h', diamond: 9765, ticket: 152, reqLv: 27, exp: 76 },
        { lv: 26, hp: 14200, dmg: 444, perDmg: 621.6, cw: 6720000, cs: 6160000, ci: 5600000, time: '1d 12h', diamond: 8914, ticket: 144, reqLv: 26, exp: 74 },
        { lv: 25, hp: 13000, dmg: 404, perDmg: 565.6, cw: 5840000, cs: 5360000, ci: 4870000, time: '1d 10h', diamond: 8069, ticket: 136, reqLv: 25, exp: 72 },
        { lv: 24, hp: 11900, dmg: 368, perDmg: 515.2, cw: 4870000, cs: 4460000, ci: 4060000, time: '1d 8h', diamond: 7072, ticket: 128, reqLv: 24, exp: 70 },
        { lv: 23, hp: 10900, dmg: 335, perDmg: 469, cw: 4060000, cs: 3720000, ci: 3380000, time: '1d 6h', diamond: 6215, ticket: 120, reqLv: 23, exp: 68 },
        { lv: 22, hp: 10000, dmg: 296, perDmg: 414.4, cw: 3380000, cs: 3100000, ci: 2820000, time: '1d 4h', diamond: 5457, ticket: 112, reqLv: 22, exp: 66 },
        { lv: 21, hp: 9200, dmg: 269, perDmg: 376.6, cw: 2760000, cs: 2530000, ci: 2300000, time: '1d 2h', diamond: 4730, ticket: 104, reqLv: 21, exp: 66 },
        { lv: 20, hp: 8400, dmg: 245, perDmg: 343, cw: 2100000, cs: 2100000, ci: 1900000, time: '1d', diamond: 4145, ticket: 96, reqLv: 20, exp: 64 },
        { lv: 19, hp: 7800, dmg: 222, perDmg: 310.8, cw: 1650000, cs: 1500000, ci: 990000, time: '20h', diamond: 3083, ticket: 80, reqLv: 18, exp: 60 },
        { lv: 18, hp: 7100, dmg: 202, perDmg: 282.8, cw: 1320000, cs: 1090000, ci: 690000, time: '16h', diamond: 2506, ticket: 64, reqLv: 17, exp: 56 },
        { lv: 17, hp: 6600, dmg: 184, perDmg: 257.6, cw: 910000, cs: 810000, ci: 360000, time: '14h', diamond: 1908, ticket: 56, reqLv: 16, exp: 52 },
        { lv: 16, hp: 6000, dmg: 167, perDmg: 233.8, cw: 630000, cs: 480000, ci: 175000, time: '12h', diamond: 1383, ticket: 48, reqLv: 15, exp: 46 },
        { lv: 15, hp: 5500, dmg: 152, perDmg: 212.8, cw: 360000, cs: 315000, ci: 87000, time: '10h', diamond: 995, ticket: 40, reqLv: 14, exp: 40 },
        { lv: 14, hp: 5100, dmg: 138, perDmg: 193.2, cw: 255000, cs: 153000, ci: 44000, time: '8h', diamond: 708, ticket: 32, reqLv: 13, exp: 31 },
        { lv: 13, hp: 4700, dmg: 126, perDmg: 176.4, cw: 177000, cs: 83000, ci: 21800, time: '7h', diamond: 532, ticket: 28, reqLv: 12, exp: 28 },
        { lv: 12, hp: 4300, dmg: 114, perDmg: 159.6, cw: 115000, cs: 42000, ci: 12000, time: '6h', diamond: 389, ticket: 24, reqLv: 11, exp: 26 },
        { lv: 11, hp: 4000, dmg: 104, perDmg: 145.6, cw: 83000, cs: 20800, ci: 6700, time: '4h', diamond: 297, ticket: 16, reqLv: 10, exp: 24 },
        { lv: 10, hp: 3600, dmg: 94, perDmg: 131.6, cw: 52000, cs: 12300, ci: 3300, time: '2h', diamond: 218, ticket: 8, reqLv: 9, exp: 20 },
        { lv: 9, hp: 3300, dmg: 86, perDmg: 120.4, cw: 32000, cs: 7100, ci: '/', time: '1h30m', diamond: 156, ticket: 6, reqLv: 8, exp: 18 },
        { lv: 8, hp: 3100, dmg: 78, perDmg: 109.2, cw: 19100, cs: 3800, ci: '/', time: '1h', diamond: 110, ticket: 4, reqLv: 7, exp: 15 },
        { lv: 7, hp: 2800, dmg: 71, perDmg: 99.4, cw: 12500, cs: 2200, ci: '/', time: '45m', diamond: 90, ticket: 3, reqLv: 6, exp: 15 },
        { lv: 6, hp: 2600, dmg: 64, perDmg: 89.6, cw: 9300, cs: '/', ci: '/', time: '30m', diamond: 66, ticket: 2, reqLv: 5, exp: 13 },
        { lv: 5, hp: 2380, dmg: 59, perDmg: 82.6, cw: 4700, cs: '/', ci: '/', time: '15m', diamond: 46, ticket: 1, reqLv: 4, exp: 11 },
        { lv: 4, hp: 2190, dmg: 53, perDmg: 74.2, cw: 2070, cs: '/', ci: '/', time: '15m', diamond: 33, ticket: 1, reqLv: 4, exp: 10 },
        { lv: 3, hp: 2010, dmg: 48, perDmg: 67.2, cw: 760, cs: '/', ci: '/', time: '3s', diamond: 14, ticket: 1, reqLv: 3, exp: 5 },
        { lv: 2, hp: 1850, dmg: 44, perDmg: 61.6, cw: 200, cs: '/', ci: '/', time: '3s', diamond: 5, ticket: 1, reqLv: 3, exp: 2 },
        { lv: 1, hp: 1700, dmg: 40, perDmg: 56, cw: 100, cs: '/', ci: '/', time: '3s', diamond: 1, ticket: 1, reqLv: 1, exp: 1 }
    ],

    // ==========================================
    // 动态追加的模块 (外观图集、可用数量表、航母专属表)
    // ==========================================
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
                        ${[1,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 11, cap: 2, token: '/', tech: 5 },
                        { no: 2, lv: 14, cap: 3, token: '58,500', tech: 10 },
                        { no: 3, lv: 17, cap: 3, token: '77,500', tech: 15 },
                        { no: 4, lv: 20, cap: 4, token: '149,000', tech: 20 },
                        { no: 5, lv: 22, cap: 4, token: '180,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '465,000', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">狙击塔外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower_Lvl_1.webp' },
                { name: '二级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower2.webp' },
                { name: '三级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower3.webp' },
                { name: '四级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower4.webp' },
                { name: '五级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower5.webp' },
                { name: '六级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower6.webp' },
                { name: '七级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower7.webp' },
                { name: '八级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower8.webp' },
                { name: '九级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower9.webp' },
                { name: '十级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower10.webp' },
                { name: '十一级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower11.webp' },
                { name: '十二级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower12.webp' },
                { name: '十三级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower13.webp' },
                { name: '十四级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower14.webp' },
                { name: '十五级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower15.webp' },
                { name: '十六级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower16.webp' },
                { name: '十七级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower17.webp' },
                { name: '十八级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower18.webp' },
                { name: '十九-二十级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower19.webp' },
                { name: '二十一级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower21.webp' },
                { name: '二十二-二十八级狙击塔', img: 'images/防御建筑图片/狙击塔/SniperTower22.webp' }
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