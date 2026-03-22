window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['地雷'] = {
    name: '地雷',
    img: 'images/防御建筑/普通防御建筑/Mine_1.webp',
    desc: '地雷是一种基本的隐蔽爆炸陷阱，对踩踏到它的敌军部队造成范围伤害。善用排雷技巧和火力掩护是避开地雷的关键。',
    // 隐藏生命值计算器，因为地雷只有伤害
    hideHpCalc: true,
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '1×1' },
        { label: '触发半径', val: '1.5' },
        { label: '伤害半径', val: '3' },
        { label: '触发延迟', val: '1s' },
        { label: '伤害类型', val: '溅射伤害' },
        { label: '攻击目标', val: '对地' }
    ],
    
    // 1. 定制表头（地雷需要升级黄金和建造成本木材）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
                <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">升级成本</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
                <th><img src="images/基础/Wood.webp" onerror="this.src='images/大本营/Wood.webp'">建造成本</th>
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
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#dc2626; font-weight:bold;">${formatNum(lv.dmg)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.upgG)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:#a16207;">${formatNum(lv.buildW)}</td>
                <td>${formatNum(lv.diamond)}</td>
                <td>${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    // 3. 定制计算器运算逻辑 (地雷只有攻击力加成)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 地雷等级数据表 (28至1级倒序排列)
    levels: [
        { lv: 28, dmg: 521, upgG: 5200000, time: '1d 16h', buildW: 80000, diamond: 1661, ticket: 160, reqLv: 28, exp: 76 },
        { lv: 27, dmg: 474, upgG: 5000000, time: '1d 14h', buildW: 75000, diamond: 1517, ticket: 152, reqLv: 27, exp: 74 },
        { lv: 26, dmg: 431, upgG: 4800000, time: '1d 12h', buildW: 65000, diamond: 1549, ticket: 144, reqLv: 26, exp: 72 },
        { lv: 25, dmg: 392, upgG: 4600000, time: '1d 10h', buildW: 65000, diamond: 1506, ticket: 136, reqLv: 25, exp: 70 },
        { lv: 24, dmg: 358, upgG: 4400000, time: '1d 8h', buildW: 54000, diamond: 1451, ticket: 128, reqLv: 24, exp: 68 },
        { lv: 23, dmg: 326, upgG: 4200000, time: '1d 6h', buildW: 44000, diamond: 1399, ticket: 120, reqLv: 23, exp: 66 },
        { lv: 22, dmg: 296, upgG: 4000000, time: '1d 4h', buildW: 35000, diamond: 1345, ticket: 112, reqLv: 21, exp: 64 },
        { lv: 21, dmg: 269, upgG: 3800000, time: '1d 2h', buildW: 27000, diamond: 1289, ticket: 104, reqLv: 20, exp: 62 },
        { lv: 20, dmg: 245, upgG: 3700000, time: '1d 1h', buildW: 20000, diamond: 1258, ticket: 100, reqLv: 19, exp: 60 },
        { lv: 19, dmg: 222, upgG: 3600000, time: '1d', buildW: 14000, diamond: 1233, ticket: 96, reqLv: 18, exp: 58 },
        { lv: 18, dmg: 202, upgG: 3600000, time: '23h', buildW: 10000, diamond: 1224, ticket: 92, reqLv: 17, exp: 57 },
        { lv: 17, dmg: 184, upgG: 3050000, time: '21h', buildW: 7000, diamond: 1095, ticket: 84, reqLv: 16, exp: 53 },
        { lv: 16, dmg: 167, upgG: 2550000, time: '21h', buildW: 5000, diamond: 992, ticket: 84, reqLv: 15, exp: 53 },
        { lv: 15, dmg: 152, upgG: 1880000, time: '19h', buildW: 3900, diamond: 823, ticket: 76, reqLv: 14, exp: 50 },
        { lv: 14, dmg: 138, upgG: 1220000, time: '15h', buildW: 2800, diamond: 628, ticket: 60, reqLv: 13, exp: 45 },
        { lv: 13, dmg: 126, upgG: 1190000, time: '15h', buildW: 2000, diamond: 619, ticket: 60, reqLv: 12, exp: 45 },
        { lv: 12, dmg: 114, upgG: 870000, time: '13h', buildW: 1400, diamond: 514, ticket: 48, reqLv: 11, exp: 42 },
        { lv: 11, dmg: 104, upgG: 470000, time: '10h', buildW: 1000, diamond: 363, ticket: 40, reqLv: 10, exp: 37 },
        { lv: 10, dmg: 94, upgG: 370000, time: '9h', buildW: 700, diamond: 319, ticket: 36, reqLv: 9, exp: 36 },
        { lv: 9, dmg: 86, upgG: 360000, time: '9h', buildW: 480, diamond: 316, ticket: 36, reqLv: 8, exp: 36 },
        { lv: 8, dmg: 78, upgG: 216000, time: '8h', buildW: 340, diamond: 267, ticket: 32, reqLv: 7, exp: 33 },
        { lv: 7, dmg: 71, upgG: 169000, time: '6h', buildW: 240, diamond: 107, ticket: 24, reqLv: 6, exp: 30 },
        { lv: 6, dmg: 64, upgG: 123000, time: '5h', buildW: 170, diamond: 175, ticket: 20, reqLv: 5, exp: 24 },
        { lv: 5, dmg: 59, upgG: 60000, time: '3h', buildW: 120, diamond: 111, ticket: 12, reqLv: 4, exp: 20 },
        { lv: 4, dmg: 53, upgG: 29900, time: '2h', buildW: 80, diamond: 75, ticket: 8, reqLv: 3, exp: 17 },
        { lv: 3, dmg: 48, upgG: 13600, time: '1h', buildW: 50, diamond: 42, ticket: 4, reqLv: 2, exp: 14 },
        { lv: 2, dmg: 44, upgG: 5300, time: '1h', buildW: 33, diamond: 33, ticket: 4, reqLv: 1, exp: 10 },
        { lv: 1, dmg: 40, upgG: '/', time: '/', buildW: 20, diamond: '/', ticket: '/', reqLv: 1, exp: '/' }
    ],

    // 动态追加模块 (可用数量、航母数据)
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
                        ${[0,3,3,6,6,9,9,12,12,12,15,15,15,18,18,18,21,21,21,24,24,24,24,24,24,27,27,27].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 8, cap: 5, token: '/', tech: 5 },
                        { no: 2, lv: 10, cap: 10, token: '23,000', tech: 10 },
                        { no: 3, lv: 12, cap: 15, token: '41,500', tech: 15 },
                        { no: 4, lv: 16, cap: 20, token: '81,500', tech: 20 },
                        { no: 5, lv: 22, cap: 25, token: '180,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '326,000', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">地雷外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '地雷', img: 'images/防御建筑图片/地雷/Mine_1.webp' }
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