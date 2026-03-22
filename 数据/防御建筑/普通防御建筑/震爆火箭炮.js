window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['震爆火箭炮'] = {
    name: '震爆火箭炮',
    img: 'images/防御建筑/普通防御建筑/ShockLauncher8.webp',
    desc: '震爆火箭炮发射的炮弹不仅能造成范围伤害，还能让敌军在短时间内瘫痪，是遏制敌方高输出部队（如野人、炮妹）的核心防御武器。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '4-18' },
        { label: '攻击速度', val: '5s' },
        { label: '伤害类型', val: '溅射' },
        { label: '飞溅半径', val: '3' },
        { label: '特殊能力', val: '固定部队' },
        { label: '攻击目标', val: '对地' }
    ],
    
    // 1. 定制表头（引入射击伤害和特有的震爆时间）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th colspan="3" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">攻击属性</th>
                <th colspan="3" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">升级费用</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Diamond.webp" onerror="this.src='images/大本营/Diamond.webp'">秒钻花费</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/TimeSaver.webp" onerror="this.src='images/大本营/TimeSaver.webp'">省时卷</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/大本营/HQ_Icon.webp'">需要大本等级</th>
                <th rowspan="2"><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/大本营/Icon_info_xp.webp'">经验</th>
            </tr>
            <tr>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Protect.webp" onerror="this.src='images/大本营/Protect.webp'">震爆时间</th>
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
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#b91c1c; font-weight:bold;">${formatNum(lv.perDmg)}</td>
                <td style="color:#0284c7; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.stun}s</td>
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
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Math.round(item.perDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 震爆火箭炮等级数据表 (12至1级倒序排列)
    levels: [
        { lv: 12, hp: 19900, dmg: 36, perDmg: 180, stun: 3.6, cw: 7000000, cs: 7630000, ci: 8250000, time: '1d 19h', diamond: 10331, ticket: 176, reqLv: 27, exp: 43 },
        { lv: 11, hp: 18100, dmg: 32, perDmg: 160, stun: 3.4, cw: 5400000, cs: 5870000, ci: 6350000, time: '1d 16h', diamond: 8653, ticket: 160, reqLv: 25, exp: 41 },
        { lv: 10, hp: 16500, dmg: 29, perDmg: 145, stun: 3.2, cw: 4320000, cs: 4700000, ci: 5080000, time: '1d 14h', diamond: 7384, ticket: 152, reqLv: 21, exp: 39 },
        { lv: 9, hp: 15000, dmg: 26, perDmg: 130, stun: 3.0, cw: 3300000, cs: 3300000, ci: 3300000, time: '1d 12h', diamond: 5774, ticket: 144, reqLv: 20, exp: 37 },
        { lv: 8, hp: 13600, dmg: 23, perDmg: 115, stun: 2.8, cw: 2880000, cs: 2880000, ci: 2870000, time: '1d 6h', diamond: 5203, ticket: 120, reqLv: 20, exp: 36 },
        { lv: 7, hp: 12400, dmg: 21, perDmg: 105, stun: 2.6, cw: 2470000, cs: 2470000, ci: 2460000, time: '1d', diamond: 4627, ticket: 96, reqLv: 20, exp: 32 },
        { lv: 6, hp: 11300, dmg: 19, perDmg: 95, stun: 2.4, cw: 2040000, cs: 1980000, ci: 1560000, time: '20h', diamond: 3780, ticket: 80, reqLv: 19, exp: 28 },
        { lv: 5, hp: 10200, dmg: 17, perDmg: 85, stun: 2.2, cw: 1670000, cs: 1620000, ci: 1270000, time: '18h', diamond: 3279, ticket: 72, reqLv: 19, exp: 25 },
        { lv: 4, hp: 9300, dmg: 15, perDmg: 75, stun: 2.0, cw: 1480000, cs: 1350000, ci: 890000, time: '14h', diamond: 2812, ticket: 56, reqLv: 18, exp: 24 },
        { lv: 3, hp: 8470, dmg: 14, perDmg: 70, stun: 1.8, cw: 1150000, cs: 1050000, ci: 690000, time: '12h', diamond: 2358, ticket: 48, reqLv: 18, exp: 22 },
        { lv: 2, hp: 7700, dmg: 13, perDmg: 65, stun: 1.6, cw: 940000, cs: 780000, ci: 490000, time: '10h', diamond: 1951, ticket: 40, reqLv: 17, exp: 20 },
        { lv: 1, hp: 7000, dmg: 12, perDmg: 60, stun: 1.4, cw: 810000, cs: 670000, ci: 420000, time: '8h', diamond: 1747, ticket: 32, reqLv: 17, exp: 18 }
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 2, cap: 1, token: '/', tech: 5 },
                        { no: 2, lv: 4, cap: 1, token: '106,000', tech: 10 },
                        { no: 3, lv: 6, cap: 1, token: '179,500', tech: 15 },
                        { no: 4, lv: 8, cap: 2, token: '434,000', tech: 20 },
                        { no: 5, lv: 10, cap: 2, token: '525,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '1,244,500', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">震爆火箭炮外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/ShockLauncher1.webp' },
                { name: '二级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/ShockLauncher2-NEW.webp' },
                { name: '三级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/ShockLauncher2.webp' },
                { name: '四级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/ShockLauncher3.webp' },
                { name: '五级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/Shock_launcher_level5-0.webp' },
                { name: '六级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/ShockLauncher6-0.webp' },
                { name: '七级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/ShockLauncher7.webp' },
                { name: '八~十二级震爆火箭炮', img: 'images/防御建筑图片/震爆火箭炮/ShockLauncher8.webp' }
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