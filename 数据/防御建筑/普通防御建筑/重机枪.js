window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['重机枪'] = {
    name: '重机枪',
    img: 'images/防御建筑图片/重机枪/MachineGun22.webp',
    desc: '重机枪能够疯狂地向附近区域扫射，距离越近，敌人受到的伤害越高。它是抵御步兵海和土著勇士（野人）冲锋的极佳屏障。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '9' },
        { label: '攻击速度', val: '0.1s' },
        { label: '伤害类型', val: '区域溅射(递减)' },
        { label: '攻击目标', val: '对地' }
    ],
    
    // 1. 定制表头（引入贴脸最大伤害）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th rowspan="2" style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th colspan="3" style="border-bottom:1px solid rgba(0,0,0,0.05); border-right:1px solid rgba(0,0,0,0.05);">攻击属性 (距离衰减)</th>
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
                <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">贴脸最大伤害</th>
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

    // 3. 定制计算器运算逻辑 (支持 perDmg1 计算)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Math.round(item.perDmg * (1 + dmgInput / 100)) : '/',
            perDmg1: item.perDmg1 !== '/' ? Math.round(item.perDmg1 * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 重机枪等级数据表 (24至1级倒序排列)
    levels: [
        { lv: 24, hp: 19800, dmg: 215, perDmg: 21, perDmg1: 538, cw: 5800000, cs: 5600000, ci: 5600000, time: '2d 6h', diamond: 8940, ticket: 216, reqLv: 28, exp: 96 },
        { lv: 23, hp: 18100, dmg: 195, perDmg: 19, perDmg1: 488, cw: 5200000, cs: 5000000, ci: 5000000, time: '2d', diamond: 8122, ticket: 192, reqLv: 27, exp: 90 },
        { lv: 22, hp: 16500, dmg: 177, perDmg: 17, perDmg1: 442, cw: 4700000, cs: 4500000, ci: 4500000, time: '1d 22h', diamond: 7450, ticket: 184, reqLv: 26, exp: 88 },
        { lv: 21, hp: 15000, dmg: 160, perDmg: 16, perDmg1: 400, cw: 4200000, cs: 4000000, ci: 4000000, time: '1d 16h', diamond: 6652, ticket: 160, reqLv: 25, exp: 86 },
        { lv: 20, hp: 13600, dmg: 145, perDmg: 14, perDmg1: 362, cw: 3700000, cs: 3500000, ci: 3500000, time: '1d 10h', diamond: 5820, ticket: 136, reqLv: 24, exp: 80 },
        { lv: 19, hp: 12300, dmg: 131, perDmg: 13, perDmg1: 327, cw: 3300000, cs: 3100000, ci: 3100000, time: '1d 4h', diamond: 5015, ticket: 112, reqLv: 22, exp: 76 },
        { lv: 18, hp: 11100, dmg: 119, perDmg: 11, perDmg1: 297, cw: 2900000, cs: 2700000, ci: 2700000, time: '1d', diamond: 4402, ticket: 96, reqLv: 20, exp: 70 },
        { lv: 17, hp: 10000, dmg: 108, perDmg: 10, perDmg1: 270, cw: 2500000, cs: 2300000, ci: 2300000, time: '22h', diamond: 4056, ticket: 88, reqLv: 19, exp: 67 },
        { lv: 16, hp: 9000, dmg: 98, perDmg: 9, perDmg1: 245, cw: 2200000, cs: 2000000, ci: 1500000, time: '18h', diamond: 3422, ticket: 72, reqLv: 18, exp: 64 },
        { lv: 15, hp: 8100, dmg: 89, perDmg: 8, perDmg1: 222, cw: 1900000, cs: 1600000, ci: 1000000, time: '16h', diamond: 2950, ticket: 64, reqLv: 17, exp: 60 },
        { lv: 14, hp: 7300, dmg: 80, perDmg: 8, perDmg1: 200, cw: 1600000, cs: 1300000, ci: 600000, time: '14h', diamond: 2445, ticket: 56, reqLv: 16, exp: 56 },
        { lv: 13, hp: 6600, dmg: 72, perDmg: 7, perDmg1: 180, cw: 1300000, cs: 1000000, ci: 300000, time: '12h', diamond: 2010, ticket: 48, reqLv: 15, exp: 52 },
        { lv: 12, hp: 6000, dmg: 65, perDmg: 6, perDmg1: 162, cw: 1000000, cs: 700000, ci: 150000, time: '10h', diamond: 1602, ticket: 40, reqLv: 14, exp: 48 },
        { lv: 11, hp: 5400, dmg: 59, perDmg: 5, perDmg1: 147, cw: 700000, cs: 400000, ci: 80000, time: '8h', diamond: 1125, ticket: 32, reqLv: 13, exp: 44 },
        { lv: 10, hp: 4900, dmg: 53, perDmg: 5, perDmg1: 132, cw: 450000, cs: 200000, ci: 40000, time: '6h', diamond: 810, ticket: 24, reqLv: 12, exp: 40 },
        { lv: 9, hp: 4400, dmg: 48, perDmg: 4, perDmg1: 120, cw: 250000, cs: 100000, ci: 15000, time: '4h', diamond: 505, ticket: 16, reqLv: 11, exp: 36 },
        { lv: 8, hp: 4000, dmg: 43, perDmg: 4, perDmg1: 107, cw: 140000, cs: 50000, ci: '/', time: '3h', diamond: 310, ticket: 12, reqLv: 10, exp: 32 },
        { lv: 7, hp: 3600, dmg: 39, perDmg: 3, perDmg1: 97, cw: 80000, cs: 20000, ci: '/', time: '2h', diamond: 195, ticket: 8, reqLv: 9, exp: 28 },
        { lv: 6, hp: 3300, dmg: 35, perDmg: 3, perDmg1: 87, cw: 50000, cs: 10000, ci: '/', time: '1h 30m', diamond: 135, ticket: 6, reqLv: 8, exp: 24 },
        { lv: 5, hp: 3000, dmg: 32, perDmg: 3, perDmg1: 80, cw: 30000, cs: 5000, ci: '/', time: '1h', diamond: 88, ticket: 4, reqLv: 7, exp: 20 },
        { lv: 4, hp: 2700, dmg: 29, perDmg: 2, perDmg1: 72, cw: 18000, cs: '/', ci: '/', time: '45m', diamond: 56, ticket: 3, reqLv: 6, exp: 16 },
        { lv: 3, hp: 2500, dmg: 26, perDmg: 2, perDmg1: 65, cw: 10000, cs: '/', ci: '/', time: '30m', diamond: 38, ticket: 2, reqLv: 5, exp: 12 },
        { lv: 2, hp: 2300, dmg: 23, perDmg: 2, perDmg1: 57, cw: 5000, cs: '/', ci: '/', time: '15m', diamond: 22, ticket: 1, reqLv: 4, exp: 8 },
        { lv: 1, hp: 2100, dmg: 21, perDmg: 2, perDmg1: 52, cw: 2000, cs: '/', ci: '/', time: '3s', diamond: 12, ticket: 1, reqLv: 3, exp: 4 }
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
                        ${[0,0,1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6].map(n => `<td>${n}</td>`).join('')}
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
                        { no: 1, lv: 5, cap: 2, token: '/', tech: 5 },
                        { no: 2, lv: 8, cap: 3, token: '24,000', tech: 10 },
                        { no: 3, lv: 12, cap: 4, token: '50,000', tech: 15 },
                        { no: 4, lv: 15, cap: 5, token: '102,000', tech: 20 },
                        { no: 5, lv: 18, cap: 6, token: '150,000', tech: 25 },
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

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">重机枪外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun1.webp' },
                { name: '二-三级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun2.webp' },
                { name: '四级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun4.webp' },
                { name: '五级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun5.webp' },
                { name: '六级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun6.webp' },
                { name: '七级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun7.webp' },
                { name: '八-九级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun8.webp' },
                { name: '十-十一级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun10.webp' },
                { name: '十二级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun12.webp' },
                { name: '十三级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun13.webp' },
                { name: '十四级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun14.webp' },
                { name: '十五级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun15.webp' },
                { name: '十六-十九级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun16.webp' },
                { name: '二十级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun20.webp' },
                { name: '二十一-二十二级重机枪', img: 'images/防御建筑图片/重机枪/MachineGun22.webp' }
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