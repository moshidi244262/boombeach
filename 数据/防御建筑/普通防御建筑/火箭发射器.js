window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['火箭发射器'] = {
    name: '火箭发射器',
    img: 'images/防御建筑/普通防御建筑/RocketLauncher14.webp',
    desc: '火箭发射器是对付步兵以及炮妹等脆皮人海战术的终极防御建筑。它会在超远距离外发射密集的火箭群，造成巨大的范围性毁灭打击。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '8-25' },
        { label: '攻击速度', val: '5s间隔(0.35s齐射)' },
        { label: '伤害类型', val: '溅射伤害(1.8)' },
        { label: '攻击目标', val: '对空，对地' }
    ],
    
    // 1. 定制表头（展示每秒伤害、射击伤害、齐射伤害三项参数）
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
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">射击伤害</th>
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">齐射伤害</th>
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
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03); color:#991b1b; font-weight:bold;">${formatNum(lv.perDmg1)}</td>
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

    // 3. 定制计算器运算逻辑 (支持生命值及三种伤害指标的同步加成计算)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(2)) : '/',
            perDmg1: item.perDmg1 !== '/' ? Number((item.perDmg1 * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 火箭发射器等级数据表 (20至1级倒序排列)
    levels: [
        { lv: 20, hp: 22160, dmg: 117, perDmg: 131.95, perDmg1: 791.7, cw: 11000000, cs: 8430000, ci: 10230000, time: '1d 22h', diamond: 12909, ticket: 184, reqLv: 28, exp: 84 },
        { lv: 19, hp: 20240, dmg: 107, perDmg: 120.4, perDmg1: 722.4, cw: 9610000, cs: 8200000, ci: 8900000, time: '1d 20h', diamond: 11608, ticket: 176, reqLv: 27, exp: 82 },
        { lv: 18, hp: 18480, dmg: 97, perDmg: 110.85, perDmg1: 665.1, cw: 8360000, cs: 7130000, ci: 7750000, time: '1d 18h', diamond: 10536, ticket: 168, reqLv: 26, exp: 80 },
        { lv: 17, hp: 16880, dmg: 89, perDmg: 100.45, perDmg1: 602.7, cw: 7270000, cs: 6200000, ci: 6000000, time: '1d 16h', diamond: 9551, ticket: 160, reqLv: 25, exp: 78 },
        { lv: 16, hp: 15480, dmg: 82, perDmg: 92.75, perDmg1: 556.5, cw: 6060000, cs: 5170000, ci: 5620000, time: '1d 14h', diamond: 8375, ticket: 152, reqLv: 24, exp: 76 },
        { lv: 15, hp: 14180, dmg: 75, perDmg: 85.4, perDmg1: 512.4, cw: 5050000, cs: 4310000, ci: 4680000, time: '1d 12h', diamond: 7350, ticket: 144, reqLv: 23, exp: 74 },
        { lv: 14, hp: 12980, dmg: 69, perDmg: 78.4, perDmg1: 470.4, cw: 4210000, cs: 3590000, ci: 3900000, time: '1d 10h', diamond: 6452, ticket: 136, reqLv: 21, exp: 72 },
        { lv: 13, hp: 11800, dmg: 63, perDmg: 71.4, perDmg1: 428.4, cw: 2470000, cs: 2470000, ci: 2460000, time: '1d 8h', diamond: 4692, ticket: 128, reqLv: 20, exp: 70 },
        { lv: 12, hp: 10700, dmg: 57, perDmg: 64.75, perDmg1: 388.5, cw: 2060000, cs: 2060000, ci: 2050000, time: '1d 4h', diamond: 4115, ticket: 112, reqLv: 20, exp: 64 },
        { lv: 11, hp: 9800, dmg: 52, perDmg: 59.15, perDmg1: 354.9, cw: 1920000, cs: 1870000, ci: 1470000, time: '1d', diamond: 3665, ticket: 96, reqLv: 19, exp: 61 },
        { lv: 10, hp: 9000, dmg: 47, perDmg: 53.55, perDmg1: 321.3, cw: 1850000, cs: 1800000, ci: 1420000, time: '20h', diamond: 3540, ticket: 80, reqLv: 19, exp: 61 },
        { lv: 9, hp: 8200, dmg: 43, perDmg: 48.65, perDmg1: 291.9, cw: 1480000, cs: 1350000, ci: 890000, time: '18h', diamond: 2850, ticket: 72, reqLv: 18, exp: 56 },
        { lv: 8, hp: 7500, dmg: 39, perDmg: 44.45, perDmg1: 266.7, cw: 1210000, cs: 1000000, ci: 630000, time: '16h', diamond: 2368, ticket: 64, reqLv: 17, exp: 54 },
        { lv: 7, hp: 6900, dmg: 35, perDmg: 40.25, perDmg1: 241.5, cw: 850000, cs: 760000, ci: 330000, time: '14h', diamond: 1818, ticket: 56, reqLv: 16, exp: 50 },
        { lv: 6, hp: 6300, dmg: 32, perDmg: 36.75, perDmg1: 220.5, cw: 760000, cs: 680000, ci: 298000, time: '12h', diamond: 1678, ticket: 48, reqLv: 16, exp: 48 },
        { lv: 5, hp: 5700, dmg: 29, perDmg: 33.25, perDmg1: 199.5, cw: 540000, cs: 410000, ci: 149000, time: '10h', diamond: 1238, ticket: 40, reqLv: 15, exp: 42 },
        { lv: 4, hp: 5200, dmg: 27, perDmg: 30.45, perDmg1: 182.7, cw: 314000, cs: 274000, ci: 76000, time: '8h', diamond: 827, ticket: 32, reqLv: 14, exp: 34 },
        { lv: 3, hp: 4800, dmg: 24, perDmg: 27.65, perDmg1: 165.9, cw: 275000, cs: 240000, ci: 66000, time: '7h', diamond: 816, ticket: 28, reqLv: 14, exp: 34 },
        { lv: 2, hp: 4400, dmg: 22, perDmg: 25.2, perDmg1: 151.2, cw: 198000, cs: 119000, ci: 34000, time: '6h', diamond: 597, ticket: 24, reqLv: 13, exp: 28 },
        { lv: 1, hp: 4000, dmg: 20, perDmg: 22.75, perDmg1: 136.5, cw: 142000, cs: 85000, ci: 24300, time: '3s', diamond: 484, ticket: 1, reqLv: 13, exp: 24 }
    ],

    // 动态追加模块 (可用数量、航母数据、图鉴)
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,3,3,3,4,4,4,4].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 6, cap: 1, token: '/', tech: 5 },
                        { no: 2, lv: 8, cap: 2, token: '250,000', tech: 10 },
                        { no: 3, lv: 10, cap: 3, token: '500,000', tech: 15 },
                        { no: 4, lv: 12, cap: 3, token: '1,235,000', tech: 20 },
                        { no: 5, lv: 14, cap: 4, token: '1,800,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '3,785,000', tech: 75 }
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

    <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">火箭发射器外观图片</h3>
    <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
        ${[
            { name: '一级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher1.webp' },
            { name: '二级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher2.webp' },
            { name: '三-四级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher3.webp' },
            { name: '五级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher5.webp' },
            { name: '六级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher6.webp' },
            { name: '七-十二级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher7.webp' },
            { name: '十三级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher13.webp' },
            { name: '十四-二十级火箭发射器', img: 'images/防御建筑图片/火箭发射器/RocketLauncher14.webp' }
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