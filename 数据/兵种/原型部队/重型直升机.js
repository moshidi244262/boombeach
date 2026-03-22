window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['重型直升机'] = {
    name: '重型直升机',
    img: 'images/兵种/原型部队/Heavy_Choppa.webp',
    desc: '重型直升机在战场上空盘旋，不仅生命值极高，还能持续发射致命火箭。作为原型部队，它的存在时间有限，但能给敌人带来毁灭性打击。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '30m' },
        { label: '工厂训练时间', val: '1h' },
        { label: '移动速度', val: '快速/350' },
        { label: '攻击范围', val: '5.5-10' },
        { label: '攻击速度', val: '0.1s' }
    ],
    
    // ==========================================
    // 专属排版定制区块 (自动覆盖 index.html 默认排版)
    // ==========================================

    // 1. 定制表头（少了省时卷和秒钻，多了一个单次伤害）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
                <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">训练成本</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/大本营/Menu_icon_research.webp'">研究所</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
                <th><img src="images/基础/Icon_resource_scrap.webp" onerror="this.src='images/大本营/Icon_resource_scrap.webp'">升级费用/解锁币</th>
            </tr>
        </thead>
    `,

    // 2. 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold;">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.perDmg)}</td>
                <td>${formatNum(lv.train)}</td>
                <td>${formatNum(lv.mirc)}</td>
                <td>${lv.time === '0' || lv.time === '/' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:#ca8a04;">${formatNum(lv.upg)}</td>
            </tr>
        `;
    },

    // 3. 定制计算器运算逻辑 (因为有专属的 perDmg，需要告知计算器如何同步计算它)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 核心升级数据
    levels: [
        { lv: 1, hp: 11000, dmg: 100, perDmg: 10, train: 4000, mirc: 1, time: '0', upg: 0 },
        { lv: 2, hp: 11440, dmg: 110, perDmg: 11, train: 4500, mirc: 2, time: '2h', upg: 90 },
        { lv: 3, hp: 11900, dmg: 120, perDmg: 12, train: 5100, mirc: 3, time: '2h', upg: 100 },
        { lv: 4, hp: 12380, dmg: 125, perDmg: 12.5, train: 5700, mirc: 4, time: '2h', upg: 120 },
        { lv: 5, hp: 12880, dmg: 130, perDmg: 13, train: 6400, mirc: 5, time: '3h', upg: 140 },
        { lv: 6, hp: 13400, dmg: 135, perDmg: 13.5, train: 7200, mirc: 6, time: '3h', upg: 160 },
        { lv: 7, hp: 13940, dmg: 140, perDmg: 14, train: 8100, mirc: 7, time: '3h', upg: 180 },
        { lv: 8, hp: 14500, dmg: 150, perDmg: 15, train: 9100, mirc: 8, time: '4h', upg: 210 },
        { lv: 9, hp: 15080, dmg: 155, perDmg: 15.5, train: 10200, mirc: 9, time: '4h', upg: 250 },
        { lv: 10, hp: 15680, dmg: 165, perDmg: 16.5, train: 11500, mirc: 10, time: '4h', upg: 290 },
        { lv: 11, hp: 16310, dmg: 170, perDmg: 17, train: 12900, mirc: 11, time: '5h', upg: 350 },
        { lv: 12, hp: 16960, dmg: 180, perDmg: 18, train: 14500, mirc: 12, time: '6h', upg: 430 },
        { lv: 13, hp: 17640, dmg: 190, perDmg: 19, train: 16300, mirc: 13, time: '7h', upg: 530 },
        { lv: 14, hp: 18350, dmg: 200, perDmg: 20, train: 18400, mirc: 14, time: '8h', upg: 660 },
        { lv: 15, hp: 19080, dmg: 210, perDmg: 21, train: 20700, mirc: 15, time: '9h', upg: 810 },
        { lv: 16, hp: 19840, dmg: 220, perDmg: 22, train: 23300, mirc: 16, time: '10h', upg: 1000 },
        { lv: 17, hp: 20630, dmg: 230, perDmg: 23, train: 26200, mirc: 17, time: '11h', upg: 1200 },
        { lv: 18, hp: 21460, dmg: 240, perDmg: 24, train: 29500, mirc: 18, time: '13h', upg: 1500 },
        { lv: 19, hp: 22320, dmg: 250, perDmg: 25, train: 33200, mirc: 19, time: '15h', upg: 1900 },
        { lv: 20, hp: 23210, dmg: 260, perDmg: 26, train: 37400, mirc: 20, time: '17h', upg: 2300 },
        { lv: 21, hp: 24140, dmg: 275, perDmg: 27.5, train: 42100, mirc: 21, time: '21h', upg: 3000 },
        { lv: 22, hp: 25110, dmg: 290, perDmg: 29, train: 47400, mirc: 22, time: '1d 1h', upg: 4000 },
        { lv: 23, hp: 26110, dmg: 300, perDmg: 30, train: 53400, mirc: 23, time: '1d 6h', upg: 5200 },
        { lv: 24, hp: 27150, dmg: 315, perDmg: 31.5, train: 120200, mirc: 24, time: '1d 12h', upg: 6800 },
        { lv: 25, hp: 28240, dmg: 330, perDmg: 33, train: 135400, mirc: 25, time: '1d 19h', upg: 8900 },
        { lv: 26, hp: 29370, dmg: 350, perDmg: 35, train: 152400, mirc: 26, time: '2d 4h', upg: 11700 },
        { lv: 27, hp: 30540, dmg: 365, perDmg: 36.5, train: 171600, mirc: 27, time: '2d 14h', upg: 15300 },
        { lv: 28, hp: 31760, dmg: 380, perDmg: 38, train: 193200, mirc: 28, time: '3d 3h', upg: 20000 }
    ],

    // 航母数据表
    warships: [
        { no: 1, lv: 14, cap: 11, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 13, token: 135500, tech: 10 },
        { no: 3, lv: 18, cap: 15, token: 164000, tech: 15 },
        { no: 4, lv: 20, cap: 18, token: 198500, tech: 20 },
        { no: 5, lv: 22, cap: 20, token: 270000, tech: 25 },
        { no: '合计', lv: '/', cap: '/', token: 768000, tech: 75 }
    ],

    // ==========================================
    // 追加纯静态表格（由于原txt中的"原数据表"无特殊排版要求，直接作为额外HTML片段注入页面最底部）
    // ==========================================
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">原数据表</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                        <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                        <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">伤害</th>
                        <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
                        <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">训练成本</th>
                        <th><img src="images/基础/Icon_resource_scrap.webp" onerror="this.src='images/大本营/Icon_resource_scrap.webp'">升级费用/解锁币</th>
                    </tr>
                </thead>
                <tbody>
                    ${[
                        { lv: 1, hp: 10225, dmg: 70, perDmg: 7, train: 12000, upg: 195 },
                        { lv: 2, hp: 10720, dmg: 80, perDmg: 8, train: 13000, upg: 200 },
                        { lv: 3, hp: 11200, dmg: 90, perDmg: 9, train: 14000, upg: 205 },
                        { lv: 4, hp: 11700, dmg: 100, perDmg: 10, train: 15000, upg: 210 },
                        { lv: 5, hp: 12300, dmg: 110, perDmg: 11, train: 16000, upg: 215 },
                        { lv: 6, hp: 12900, dmg: 120, perDmg: 12, train: 17000, upg: 220 },
                        { lv: 7, hp: 13500, dmg: 130, perDmg: 13, train: 18000, upg: 225 },
                        { lv: 8, hp: 14050, dmg: 140, perDmg: 14, train: 19000, upg: 230 },
                        { lv: 9, hp: 14750, dmg: 150, perDmg: 15, train: 20000, upg: 235 },
                        { lv: 10, hp: 15420, dmg: 160, perDmg: 16, train: 25000, upg: 240 },
                        { lv: 11, hp: 16100, dmg: 170, perDmg: 17, train: 30000, upg: 245 },
                        { lv: 12, hp: 16800, dmg: 180, perDmg: 18, train: 35000, upg: 250 },
                        { lv: 13, hp: 17555, dmg: 190, perDmg: 19, train: 40000, upg: 350 },
                        { lv: 14, hp: 18300, dmg: 200, perDmg: 20, train: 45000, upg: 450 },
                        { lv: 15, hp: 19100, dmg: 210, perDmg: 21, train: 50000, upg: 550 },
                        { lv: 16, hp: 19900, dmg: 220, perDmg: 22, train: 55000, upg: 650 },
                        { lv: 17, hp: 20750, dmg: 230, perDmg: 23, train: 60000, upg: 750 },
                        { lv: 18, hp: 21650, dmg: 245, perDmg: 24.5, train: 65000, upg: 850 },
                        { lv: 19, hp: 22500, dmg: 255, perDmg: 25.5, train: 70000, upg: 950 },
                        { lv: 20, hp: 23400, dmg: 265, perDmg: 26.5, train: 75000, upg: 1050 },
                        { lv: 21, hp: 24300, dmg: 275, perDmg: 27.5, train: 80000, upg: 1150 },
                        { lv: 22, hp: 25250, dmg: 290, perDmg: 29, train: 85000, upg: 1250 },
                        { lv: 23, hp: 26200, dmg: 305, perDmg: 30.5, train: 90000, upg: 1350 },
                        { lv: 24, hp: 27200, dmg: 320, perDmg: 32, train: 95000, upg: 1450 },
                        { lv: 25, hp: 28060, dmg: 335, perDmg: 33.5, train: 100000, upg: 1500 },
                        { lv: 26, hp: 29000, dmg: 350, perDmg: 35, train: 105000, upg: 1500 },
                        { lv: 27, hp: 30160, dmg: 373, perDmg: 37.3, train: 110000, upg: 1500 },
                        { lv: 28, hp: 31370, dmg: 398, perDmg: 39.8, train: 115000, upg: 1500 }
                    ].map(row => `
                        <tr>
                            <td style="font-weight:bold;">${row.lv}</td>
                            <td>${Number(row.hp).toLocaleString()}</td>
                            <td>${Number(row.dmg).toLocaleString()}</td>
                            <td>${Number(row.perDmg).toLocaleString()}</td>
                            <td>${Number(row.train).toLocaleString()}</td>
                            <td style="color:#ca8a04;">${Number(row.upg).toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
};