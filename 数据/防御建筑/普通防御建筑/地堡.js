window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['地堡'] = {
    name: '地堡',
    img: 'images/防御建筑/普通防御建筑/Bunker_lvl01.webp',
    desc: '地堡是一座特殊的防御建筑，它可以驻扎你的部队，使它们不受法术的控制与伤害。当地堡被摧毁时，驻扎的部队将被释放并参与防守。',
    // 隐藏伤害计算器，地堡本身没有伤害，伤害来源于内部兵种
    hideDmgCalc: true,
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '取决于驻军' },
        { label: '攻击速度', val: '取决于驻军' },
        { label: '伤害类型', val: '取决于驻军' },
        { label: '飞溅半径', val: '取决于驻军' },
        { label: '特殊能力', val: '摧毁后生成部队' }
    ],
    
    // 1. 定制表头（引入伤害减免与部队容量参数）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Protect.webp" onerror="this.src='images/大本营/Protect.webp'">伤害减免</th>
                <th><img src="images/基础/TroopCapacity.webp" onerror="this.src='images/大本营/TroopCapacity.webp'">部队容量</th>
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
                <td style="color:#059669; font-weight:bold;">${lv.pt}</td>
                <td style="color:#2563eb; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.tc)}</td>
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

    // 3. 定制计算器运算逻辑 (只需计算生命值)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    // 地堡等级数据表 (12至1级倒序排列)
    levels: [
        { lv: 12, hp: 14300, pt: '60%', tc: 12, cw: 4600000, cs: 4600000, ci: 4600000, time: '1d 14h', diamond: 7286, ticket: 152, reqLv: 28, exp: 86 },
        { lv: 11, hp: 13000, pt: '55%', tc: 11, cw: 4000000, cs: 4000000, ci: 4000000, time: '1d 12h', diamond: 6599, ticket: 144, reqLv: 28, exp: 82 },
        { lv: 10, hp: 11790, pt: '50%', tc: 10, cw: 3500000, cs: 3500000, ci: 3500000, time: '1d 6h', diamond: 5955, ticket: 120, reqLv: 27, exp: 78 },
        { lv: 9, hp: 10718, pt: '45%', tc: 9, cw: 3050000, cs: 3050000, ci: 3050000, time: '1d 4h', diamond: 5294, ticket: 112, reqLv: 27, exp: 74 },
        { lv: 8, hp: 9744, pt: '40%', tc: 8, cw: 2650000, cs: 2650000, ci: 2650000, time: '22h', diamond: 4840, ticket: 88, reqLv: 26, exp: 70 },
        { lv: 7, hp: 8858, pt: '35%', tc: 7, cw: 2300000, cs: 2300000, ci: 2300000, time: '20h', diamond: 4384, ticket: 80, reqLv: 26, exp: 66 },
        { lv: 6, hp: 8053, pt: '30%', tc: 6, cw: 2000000, cs: 2000000, ci: 2000000, time: '18h', diamond: 3955, ticket: 72, reqLv: 26, exp: 62 },
        { lv: 5, hp: 7321, pt: '25%', tc: 5, cw: 1725000, cs: 1725000, ci: 1725000, time: '16h', diamond: 3559, ticket: 64, reqLv: 26, exp: 58 },
        { lv: 4, hp: 6655, pt: '20%', tc: 4, cw: 1500000, cs: 1500000, ci: 1500000, time: '14h', diamond: 3218, ticket: 56, reqLv: 26, exp: 54 },
        { lv: 3, hp: 6050, pt: '15%', tc: 3, cw: 1300000, cs: 1300000, ci: 1300000, time: '12h', diamond: 2901, ticket: 48, reqLv: 26, exp: 50 },
        { lv: 2, hp: 5500, pt: '10%', tc: 2, cw: 1150500, cs: 1150000, ci: 1150000, time: '10h', diamond: 2650, ticket: 40, reqLv: 26, exp: 46 },
        { lv: 1, hp: 5000, pt: '5%', tc: 1, cw: 1000000, cs: 1000000, ci: 1000000, time: '8h', diamond: '/', ticket: 32, reqLv: 26, exp: 42 }
    ],

    // 动态追加的模块 (地堡专属说明、可用数量表、航母专属表)
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
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
        
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">驻军能力明细</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="text-align:left; padding-left:16px;">驻扎部队</th>
                        <th>驻扎空间</th>
                        <th>所需费用 (黄金)</th>
                    </tr>
                </thead>
                <tbody>
                    ${[
                        { name: '步兵', sp: 1, cost: '1,000' },
                        { name: '重机枪手', sp: 4, cost: '800' },
                        { name: '火箭炮手', sp: 2, cost: '4,000' },
                        { name: '土著勇士', sp: 3, cost: '300' },
                        { name: '医师', sp: 5, cost: '100' },
                        { name: '投弹兵', sp: 6, cost: '1,500' },
                        { name: '极冻先锋', sp: 4, cost: '2,500' },
                        { name: '迫击炮手', sp: 8, cost: '13,000' },
                        { name: '激光突击兵', sp: 3, cost: '12,000' }
                    ].map(t => `
                    <tr>
                        <td style="text-align:left; padding-left:16px; font-weight:bold;">${t.name}</td>
                        <td style="color:var(--primary);">${t.sp}</td>
                        <td style="color:#ca8a04;">${t.cost}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>

        <div style="background:rgba(255,255,255,0.7); padding:20px; border-radius:16px; border:1px solid rgba(0,0,0,0.05); margin-top:24px;">
            <h4 style="color:#111827; margin-bottom:12px; display:flex; align-items:center;">
                <svg style="width:18px;height:18px;margin-right:6px;fill:var(--primary);" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                部队说明
            </h4>
            <ul style="color:#4b5563; font-size:0.9rem; line-height:1.6; padding-left:24px; margin-bottom:16px;">
                <li>医师只能治疗驻扎的部队，这意味着附近的另一个掩体已被摧毁时他们才会生效。</li>
                <li>土著勇士（野人）在驻军时不能攻击。掩体被摧毁后，他们将能够发动攻击。</li>
                <li>地堡能大幅提升射程：步兵、重机枪手增加50%；火箭炮手、极冻先锋、激光突击兵增加20%（不会影响最大光束范围）。</li>
            </ul>
            
            <h4 style="color:#111827; margin-bottom:12px; display:flex; align-items:center;">
                <svg style="width:18px;height:18px;margin-right:6px;fill:var(--primary);" viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                其他特性
            </h4>
            <ul style="color:#4b5563; font-size:0.9rem; line-height:1.6; padding-left:24px;">
                <li>碉堡是第一个在任何时候都不能被震爆、嘲讽或冻结的建筑。</li>
                <li>碉堡是唯一一个不会被伊娃斯巴克上尉遥控的非原型防御系统。</li>
                <li>这是第一座受到战舰武器伤害会按比例减免的建筑（具有面板上的伤害减免属性）。</li>
                <li>即使碉堡被摧毁，驻扎在里面的部队也会跳出来继续战斗。</li>
                <li>驻扎部队所需的费用来源于你的每小时基地黄金产量。</li>
            </ul>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table" style="min-width:500px;">
                <thead>
                    <tr>
                        <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">序号</th>
                        <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">航母等级</th>
                        <th><img src="images/基础/TroopCapacity.webp" onerror="this.src='images/大本营/TroopCapacity.webp'">储存数量</th>
                        <th><img src="images/基础/Icon_Upgrade_Token.webp" onerror="this.src='images/大本营/Icon_Upgrade_Token.webp'">升级令牌</th>
                        <th><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/大本营/Icon_info_xp.webp'">科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    ${[
                        { no: 1, lv: 1, cap: 1, token: '/', tech: 5 },
                        { no: 2, lv: 3, cap: 1, token: '30,000', tech: 10 },
                        { no: 3, lv: 4, cap: 3, token: '60,000', tech: 15 },
                        { no: 4, lv: 6, cap: 3, token: '100,000', tech: 20 },
                        { no: 5, lv: 8, cap: 4, token: '430,000', tech: 25 },
                        { no: '合计', lv: '/', cap: '/', token: '420,000', tech: 75 }
                    ].map(ws => `
                        <tr style="${ws.no === '合计' ? 'background:rgba(0,0,0,0.02); font-weight:bold;' : ''}">
                            <td>${ws.no}</td>
                            <td>${ws.lv}</td>
                            <td style="color:var(--primary); font-weight:bold;">${ws.cap}</td>
                            <td style="color:#ca8a04;">${ws.token}</td>
                            <td>${ws.tech}</td>
                        </tr>
                    `).join('')}
                    <tr>
                        <td colspan="5" style="color:#6b7280; font-size:0.85rem; padding:8px;">航母中需使用解锁兵种，且驻扎兵种等级随科技等级提升。</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">地堡外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一~三级地堡', img: 'images/防御建筑图片/地堡/Bunker_lvl01.webp' },
                { name: '四~六级地堡', img: 'images/防御建筑图片/地堡/Bunker_lvl02.webp' },
                { name: '七级地堡', img: 'images/防御建筑图片/地堡/Bunker_lvl03.webp' },
                { name: '八~十二级地堡', img: 'images/防御建筑图片/地堡/Bunker_lvl04.webp' }
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