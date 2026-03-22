window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['超级土著勇士'] = {
    name: '超级土著勇士',
    img: 'images/战舰武器/临时战舰武器/Super_Warrior.webp',
    desc: '作为限时出现的超级兵种，超级土著勇士不仅拥有惊人的生命力，攻击时能大幅恢复自身生命，还能对目标造成范围冻结和减速效果。',
    baseStats: [
        { label: '移动速度', val: '快速/400' },
        { label: '进攻速度', val: '0.8s' },
        { label: '攻击范围', val: '0.9' },
        { label: '冻结减速', val: '50%' },
        { label: '冻结时间', val: '5.0s' }
    ],
    
    // 显示生命和伤害计算器
    hideHpCalc: false,
    hideDmgCalc: false,

    // 定制化表头，包含 DPS、DPH 以及 每次攻击治疗
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/基础/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/基础/Damage.webp'">伤害(秒伤)</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/基础/Damage.webp'">每次伤害</th>
                <th><img src="images/基础/Heal_Iconr.webp" onerror="this.src='images/基础/Heal_Iconr.webp'">每次攻击治疗</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/Menu_icon_research.webp'">研究所等级</th>
            </tr>
        </thead>
    `,

    // 专属渲染模板，适配不同列高亮
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dph)}</td>
                <td style="color:#16a34a; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.heal)}</td>
                <td>${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 专属计算逻辑：确保 DPS (dmg) 和 每次伤害 (dph) 都能受到雕像攻击加成
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            // 每次伤害保留一位小数
            dph: item.dph !== '/' ? Number((item.dph * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 等级数据
    levels: [
        { lv: 23, hp: 32500, dmg: 3000, dph: 2400, heal: 1000, reqLv: 30 },
        { lv: 22, hp: 29600, dmg: 2810, dph: 2248, heal: 930, reqLv: 29 },
        { lv: 21, hp: 26900, dmg: 2626, dph: 2100.8, heal: 870, reqLv: 28 },
        { lv: 20, hp: 24460, dmg: 2455, dph: 1964, heal: 810, reqLv: 27 },
        { lv: 19, hp: 22240, dmg: 2295, dph: 1836, heal: 350, reqLv: 26 },
        { lv: 18, hp: 20220, dmg: 2145, dph: 1716, heal: 350, reqLv: 25 },
        { lv: 17, hp: 18380, dmg: 2005, dph: 1604, heal: 350, reqLv: 24 },
        { lv: 16, hp: 16710, dmg: 1874, dph: 1499.2, heal: 350, reqLv: 23 },
        { lv: 15, hp: 15190, dmg: 1753, dph: 1402.4, heal: 350, reqLv: 22 },
        { lv: 14, hp: 13810, dmg: 1639, dph: 1311.2, heal: 350, reqLv: 21 },
        { lv: 13, hp: 12550, dmg: 1531, dph: 1224.8, heal: 350, reqLv: 20 },
        { lv: 12, hp: 11410, dmg: 1431, dph: 1144.8, heal: 350, reqLv: 19 },
        { lv: 11, hp: 10370, dmg: 1338, dph: 1070.4, heal: 350, reqLv: 18 },
        { lv: 10, hp: 9430, dmg: 1250, dph: 1000, heal: 350, reqLv: 17 },
        { lv: 9, hp: 8570, dmg: 1168, dph: 934.4, heal: 350, reqLv: 16 },
        { lv: 8, hp: 7790, dmg: 1092, dph: 873.6, heal: 350, reqLv: 15 },
        { lv: 7, hp: 7090, dmg: 1020, dph: 816, heal: 350, reqLv: 14 },
        { lv: 6, hp: 6440, dmg: 954, dph: 763.2, heal: 350, reqLv: 13 },
        { lv: 5, hp: 5860, dmg: 891, dph: 712.8, heal: 350, reqLv: 12 },
        { lv: 4, hp: 5320, dmg: 833, dph: 666.4, heal: 350, reqLv: 11 },
        { lv: 3, hp: 4840, dmg: 779, dph: 623.2, heal: 350, reqLv: 10 },
        { lv: 2, hp: 4400, dmg: 728, dph: 582.4, heal: 350, reqLv: 9 },
        { lv: 1, hp: 4000, dmg: 680, dph: 544, heal: 350, reqLv: 8 }
    ],

    // 航母数据（由 index.html 自动解析）
    warships: [
        { no: 5, lv: 16, cap: '/', token: 165000, tech: 25 },
        { no: 4, lv: 14, cap: '/', token: 632000, tech: 20 },
        { no: 3, lv: 12, cap: '/', token: 255000, tech: 15 },
        { no: 2, lv: 10, cap: '/', token: 135000, tech: 10 },
        { no: 1, lv: 8, cap: '/', token: '/', tech: 5 }
    ],

    // 附属的战舰能量消耗表格
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">战舰能量消耗表</h3>
        <div class="table-container" style="max-width: 500px;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);">部署次数</th>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Ammo.webp" onerror="this.src='images/基础/Ammo.webp'">本次能量成本</th>
                        <th><img src="images/基础/Ammo.webp" onerror="this.src='images/基础/Ammo.webp'">累计消耗能量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">1</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">8</td>
                        <td style="color:#4b5563;">8</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">2</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">13</td>
                        <td style="color:#4b5563;">21</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">18</td>
                        <td style="color:#4b5563;">39</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">23</td>
                        <td style="color:#4b5563;">62</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">28</td>
                        <td style="color:#4b5563;">90</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};