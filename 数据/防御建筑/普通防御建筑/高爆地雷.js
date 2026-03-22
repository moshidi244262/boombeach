window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['高爆地雷'] = {
    name: '高爆地雷',
    img: 'images/防御建筑/普通防御建筑/BoomMinec.webp',
    desc: '高爆地雷拥有极高的单体爆破伤害，专门用于应对坦克、机甲等高生命值的装甲部队。布置在关键路径上能发挥奇效。',
    // 隐藏生命值计算器，因为地雷只有伤害
    hideHpCalc: true,
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '1×1' },
        { label: '触发半径', val: '1.3' },
        { label: '伤害半径', val: '1.35' },
        { label: '触发延迟', val: '0.25s' },
        { label: '伤害类型', val: '单体高额溅射' },
        { label: '攻击目标', val: '对地' }
    ],
    
    // 1. 定制表头（引入黄金升级成本和建造成本木材）
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

    // 3. 定制计算器运算逻辑 (仅计算伤害加成)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 高爆地雷等级数据表 (24至1级倒序排列)
    levels: [
        { lv: 24, dmg: 9000, upgG: 9000000, time: '2d 4h', buildW: 17000, diamond: 2380, ticket: 208, reqLv: 28, exp: 88 },
        { lv: 23, dmg: 8257, upgG: 8000000, time: '2d 2h', buildW: 15000, diamond: 2094, ticket: 200, reqLv: 27, exp: 86 },
        { lv: 22, dmg: 7575, upgG: 7000000, time: '2d', buildW: 13000, diamond: 2020, ticket: 192, reqLv: 26, exp: 84 },
        { lv: 21, dmg: 6950, upgG: 5980000, time: '1d 22h', buildW: 11700, diamond: 1842, ticket: 184, reqLv: 25, exp: 82 },
        { lv: 20, dmg: 6390, upgG: 5040000, time: '1d 20h', buildW: 10400, diamond: 1662, ticket: 176, reqLv: 24, exp: 80 },
        { lv: 19, dmg: 5870, upgG: 4280000, time: '1d 18h', buildW: 9100, diamond: 1506, ticket: 168, reqLv: 23, exp: 78 },
        { lv: 18, dmg: 5388, upgG: 3700000, time: '1d 16h', buildW: 7800, diamond: 1379, ticket: 160, reqLv: 22, exp: 76 },
        { lv: 17, dmg: 4942, upgG: 3300000, time: '1d 4h', buildW: 6500, diamond: 1286, ticket: 152, reqLv: 21, exp: 74 },
        { lv: 16, dmg: 4530, upgG: 3080000, time: '1d 12h', buildW: 5000, diamond: 1225, ticket: 144, reqLv: 20, exp: 72 },
        { lv: 15, dmg: 4148, upgG: 3000000, time: '1d 12h', buildW: 3900, diamond: 1211, ticket: 144, reqLv: 19, exp: 71 },
        { lv: 14, dmg: 3794, upgG: 2560000, time: '1d 10h', buildW: 2800, diamond: 1103, ticket: 136, reqLv: 18, exp: 69 },
        { lv: 13, dmg: 3467, upgG: 2130000, time: '1d 9h', buildW: 2000, diamond: 998, ticket: 132, reqLv: 17, exp: 68 },
        { lv: 12, dmg: 3164, upgG: 2070000, time: '1d 9h', buildW: 1400, diamond: 985, ticket: 132, reqLv: 17, exp: 68 },
        { lv: 11, dmg: 2883, upgG: 1520000, time: '1d 5h', buildW: 1000, diamond: 825, ticket: 116, reqLv: 16, exp: 64 },
        { lv: 10, dmg: 2623, upgG: 980000, time: '1d 5h', buildW: 700, diamond: 686, ticket: 116, reqLv: 15, exp: 64 },
        { lv: 9, dmg: 2383, upgG: 950000, time: '1d 2h', buildW: 480, diamond: 654, ticket: 104, reqLv: 14, exp: 61 },
        { lv: 8, dmg: 2160, upgG: 690000, time: '21h', buildW: 340, diamond: 536, ticket: 84, reqLv: 13, exp: 54 },
        { lv: 7, dmg: 1954, upgG: 370000, time: '21h', buildW: 240, diamond: 435, ticket: 84, reqLv: 12, exp: 54 },
        { lv: 6, dmg: 1763, upgG: 286000, time: '18h', buildW: 170, diamond: 377, ticket: 72, reqLv: 11, exp: 50 },
        { lv: 5, dmg: 1586, upgG: 276000, time: '14h', buildW: 120, diamond: 336, ticket: 56, reqLv: 10, exp: 45 },
        { lv: 4, dmg: 1422, upgG: 266000, time: '13h', buildW: 80, diamond: 321, ticket: 52, reqLv: 9, exp: 43 },
        { lv: 3, dmg: 1270, upgG: 193000, time: '13h', buildW: 50, diamond: 293, ticket: 52, reqLv: 8, exp: 43 },
        { lv: 2, dmg: 1130, upgG: 94000, time: '11h', buildW: 33, diamond: 229, ticket: 44, reqLv: 7, exp: 40 },
        { lv: 1, dmg: 1000, upgG: '/', time: '/', buildW: 20, diamond: '/', ticket: '/', reqLv: 7, exp: '/' }
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
                        ${[0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,10,10,11,11].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 4, cap: 4, token: '/', tech: 5 },
                        { no: 2, lv: 8, cap: 6, token: '29,000', tech: 10 },
                        { no: 3, lv: 12, cap: 8, token: '56,500', tech: 15 },
                        { no: 4, lv: 16, cap: 10, token: '103,500', tech: 20 },
                        { no: 5, lv: 18, cap: 12, token: '150,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '339,000', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">高爆地雷外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '高爆地雷', img: 'images/防御建筑图片/高爆地雷/BoomMinec.webp' }
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