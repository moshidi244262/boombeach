window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['震爆地雷'] = {
    name: '震爆地雷',
    img: 'images/防御建筑/普通防御建筑/ShockMinec.webp',
    desc: '震爆地雷不仅能对触发它的敌人造成少量伤害，更关键的是能在一定区域内引发强力电磁脉冲，使踩中区域的敌军短时间内瘫痪。',
    // 隐藏生命值计算器，地雷没有生命值
    hideHpCalc: true,
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '1×1' },
        { label: '触发半径', val: '1.5' },
        { label: '伤害半径', val: '3.5' },
        { label: '触发延迟', val: '0s' },
        { label: '伤害类型', val: '区域眩晕+微伤' },
        { label: '攻击目标', val: '对地' }
    ],
    
    // 1. 定制表头（地雷引入震爆时间、升级金币、建造木材等专属属性）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
                <th><img src="images/基础/Protect.webp" onerror="this.src='images/大本营/Protect.webp'">震爆时间</th>
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
                <td style="color:#0284c7; font-weight:bold;">${lv.stun}s</td>
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

    // 震爆地雷等级数据表 (6至1级倒序排列)
    levels: [
        { lv: 6, dmg: 48, stun: 3.5, upgG: 6100000, time: '2d', buildW: 30000, diamond: 1950, ticket: 192, reqLv: 25, exp: 76 },
        { lv: 5, dmg: 42, stun: 3.1, upgG: 5000000, time: '1d 16h', buildW: 24000, diamond: 1720, ticket: 160, reqLv: 23, exp: 72 },
        { lv: 4, dmg: 37, stun: 2.7, upgG: 4100000, time: '1d 12h', buildW: 18000, diamond: 1540, ticket: 144, reqLv: 21, exp: 68 },
        { lv: 3, dmg: 32, stun: 2.3, upgG: 3200000, time: '1d 4h', buildW: 12000, diamond: 1320, ticket: 112, reqLv: 19, exp: 60 },
        { lv: 2, dmg: 28, stun: 1.9, upgG: 2100000, time: '21h', buildW: 8000, diamond: 1150, ticket: 84, reqLv: 17, exp: 54 },
        { lv: 1, dmg: 24, stun: 1.5, upgG: '/', time: '/', buildW: 5000, diamond: '/', ticket: '/', reqLv: 15, exp: '/' }
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,4,4,5,6,6,6,7,7].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 2, cap: 3, token: '/', tech: 5 },
                        { no: 2, lv: 4, cap: 4, token: '22,000', tech: 10 },
                        { no: 3, lv: 5, cap: 5, token: '48,000', tech: 15 },
                        { no: 4, lv: 6, cap: 6, token: '92,000', tech: 20 },
                        { no: '合计', lv: '/', cap: '/', token: '162,000', tech: 75 }
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">震爆地雷外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '震爆地雷', img: 'images/防御建筑图片/震爆地雷/ShockMinec.webp' }
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