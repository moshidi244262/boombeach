window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['小怪发射器'] = {
    name: '小怪发射器',
    img: 'images/防御建筑/普通防御建筑/Critter_Launcher_08_to_16-removebg-preview.webp',
    desc: '小怪发射器能定期发射机器小怪，这些小怪不仅能对敌军造成微量伤害，更能极好地分散敌军的火力，是防御体系中极佳的干扰与消耗性建筑。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '10' },
        { label: '攻击速度', val: '2s' },
        { label: '伤害类型', val: '生物' },
        { label: '特殊能力', val: '生成机器小怪' },
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

    // 小怪发射器等级数据表 (19至1级倒序排列)
    levels: [
        { lv: 19, hp: 15100, dmg: 183, perDmg: 366, cw: 6600000, cs: 6600000, ci: 6600000, time: '2d 8h', diamond: 9528, ticket: 228, reqLv: 28, exp: 97 },
        { lv: 18, hp: 14300, dmg: 168, perDmg: 336, cw: 6200000, cs: 6100000, ci: 6200000, time: '2d 3h', diamond: 8909, ticket: 208, reqLv: 27, exp: 95 },
        { lv: 17, hp: 13500, dmg: 154, perDmg: 308, cw: 5900000, cs: 5800000, ci: 5800000, time: '2d', diamond: 8670, ticket: 192, reqLv: 26, exp: 93 },
        { lv: 16, hp: 12700, dmg: 141, perDmg: 282, cw: 5600000, cs: 5500000, ci: 5450000, time: '1d 22h', diamond: 8333, ticket: 184, reqLv: 25, exp: 91 },
        { lv: 15, hp: 12200, dmg: 132, perDmg: 264, cw: 5200000, cs: 5350000, ci: 5132000, time: '1d 20h', diamond: 8016, ticket: 176, reqLv: 24, exp: 89 },
        { lv: 14, hp: 11700, dmg: 123, perDmg: 246, cw: 5100000, cs: 5220000, ci: 5090000, time: '1d 18h', diamond: 7902, ticket: 168, reqLv: 24, exp: 87 },
        { lv: 13, hp: 11200, dmg: 114, perDmg: 228, cw: 4970000, cs: 4700000, ci: 4350000, time: '1d 16h', diamond: 7375, ticket: 160, reqLv: 23, exp: 85 },
        { lv: 12, hp: 10700, dmg: 105, perDmg: 210, cw: 4800000, cs: 4540000, ci: 4100000, time: '1d 14h', diamond: 7144, ticket: 152, reqLv: 23, exp: 83 },
        { lv: 11, hp: 10200, dmg: 96, perDmg: 192, cw: 4560000, cs: 4150000, ci: 3840000, time: '1d 12h', diamond: 6792, ticket: 144, reqLv: 22, exp: 81 },
        { lv: 10, hp: 9700, dmg: 87, perDmg: 174, cw: 4300000, cs: 3980000, ci: 3700000, time: '1d 10h', diamond: 6562, ticket: 136, reqLv: 21, exp: 79 },
        { lv: 9, hp: 9200, dmg: 80, perDmg: 160, cw: 4010000, cs: 3700000, ci: 3510000, time: '1d 8h', diamond: 6253, ticket: 128, reqLv: 20, exp: 77 },
        { lv: 8, hp: 8700, dmg: 72, perDmg: 144, cw: 3750000, cs: 3400000, ci: 3360000, time: '1d 4h', diamond: 5946, ticket: 112, reqLv: 20, exp: 76 },
        { lv: 7, hp: 8200, dmg: 66, perDmg: 132, cw: 3420000, cs: 3100000, ci: 3070000, time: '1d', diamond: 5550, ticket: 96, reqLv: 19, exp: 70 },
        { lv: 6, hp: 7700, dmg: 60, perDmg: 120, cw: 3060000, cs: 2970000, ci: 2750000, time: '20h', diamond: 5174, ticket: 80, reqLv: 18, exp: 67 },
        { lv: 5, hp: 7200, dmg: 54, perDmg: 108, cw: 3060000, cs: 2970000, ci: 2000000, time: '18h', diamond: 5156, ticket: 72, reqLv: 17, exp: 64 },
        { lv: 4, hp: 6700, dmg: 49, perDmg: 98, cw: 2880000, cs: 2680000, ci: 1000000, time: '16h', diamond: 4826, ticket: 64, reqLv: 16, exp: 61 },
        { lv: 3, hp: 6200, dmg: 45, perDmg: 90, cw: 2300000, cs: 2250000, ci: 400000, time: '14h', diamond: 4225, ticket: 56, reqLv: 15, exp: 52 },
        { lv: 2, hp: 5700, dmg: 41, perDmg: 82, cw: 2170000, cs: 1980000, ci: 400000, time: '12h', diamond: 3633, ticket: 48, reqLv: 15, exp: 44 },
        { lv: 1, hp: 5200, dmg: 38, perDmg: 76, cw: 1700000, cs: 1000000, ci: 200000, time: '30m', diamond: 14, ticket: 2, reqLv: 14, exp: 36 }
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,3,3,3,3,4,4,4,4,4,4].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 5, cap: 1, token: '/', tech: 5 },
                        { no: 2, lv: 7, cap: 2, token: '93,000', tech: 10 },
                        { no: 3, lv: 9, cap: 2, token: '202,000', tech: 15 },
                        { no: 4, lv: 10, cap: 3, token: '342,000', tech: 20 },
                        { no: 5, lv: 11, cap: 3, token: '510,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '1,147,000', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">小怪发射器外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级小怪发射器', img: 'images/防御建筑图片/小怪发射器/Critter_Launcher_01_v2-removebg-preview.webp' },
                { name: '二-三级小怪发射器', img: 'images/防御建筑图片/小怪发射器/Critter_Launcher_02_03-removebg-preview.webp' },
                { name: '四-五级小怪发射器', img: 'images/防御建筑图片/小怪发射器/Critter_Launcher_04_05-removebg-preview.webp' },
                { name: '六-七级小怪发射器', img: 'images/防御建筑图片/小怪发射器/Critter_Launcher_06_07-removebg-preview.webp' },
                { name: '八-十九级小怪发射器', img: 'images/防御建筑图片/小怪发射器/Critter_Launcher_08_to_16-removebg-preview.webp' }
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