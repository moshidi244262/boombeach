window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['投放式炮塔'] = {
    name: '投放式炮塔',
    img: 'images/战舰武器/临时战舰武器/Deployable_Turret.webp',
    desc: '直接通过战舰空投到战场上的临时炮塔。它可以在敌后提供火力支援，分散敌方防御建筑的注意力。',
    baseStats: [
        { label: '进攻速度', val: '3.5s' },
        { label: '攻击范围', val: '8.2' },
        { label: '所属分类', val: '临时战舰武器' }
    ],
    
    // 显示生命值和伤害计算器
    hideHpCalc: false,
    hideDmgCalc: false,

    // 定制化表头 (包含 秒伤 和 每次伤害)
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/基础/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/基础/Damage.webp'">伤害(秒伤)</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/基础/Damage.webp'">每次伤害</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/Menu_icon_research.webp'">研究所等级</th>
            </tr>
        </thead>
    `,

    // 专属渲染模板，适配不同列的高亮
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dph)}</td>
                <td>${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 属性加成计算逻辑：DPS (dmg) 和 每次伤害 (dph) 同步受到攻击力加成
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            // 每次伤害根据原始数值计算，保留一位小数
            dph: item.dph !== '/' ? Number((item.dph * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 等级数据（从高到低倒序）
    levels: [
        { lv: 23, hp: 40000, dmg: 1130, dph: 3955, reqLv: 30 },
        { lv: 22, hp: 36620, dmg: 1030, dph: 3605, reqLv: 29 },
        { lv: 21, hp: 33600, dmg: 940, dph: 3290, reqLv: 28 },
        { lv: 20, hp: 30830, dmg: 855, dph: 2992.5, reqLv: 27 },
        { lv: 19, hp: 28280, dmg: 777, dph: 2719.5, reqLv: 26 },
        { lv: 18, hp: 25940, dmg: 706, dph: 2471, reqLv: 25 },
        { lv: 17, hp: 23800, dmg: 642, dph: 2247, reqLv: 24 },
        { lv: 16, hp: 21850, dmg: 585, dph: 2047.5, reqLv: 23 },
        { lv: 15, hp: 20050, dmg: 532, dph: 1862, reqLv: 22 },
        { lv: 14, hp: 18390, dmg: 483, dph: 1690.5, reqLv: 21 },
        { lv: 13, hp: 16880, dmg: 439, dph: 1536.5, reqLv: 20 },
        { lv: 12, hp: 15480, dmg: 399, dph: 1396.5, reqLv: 19 },
        { lv: 11, hp: 14200, dmg: 363, dph: 1270.5, reqLv: 18 },
        { lv: 10, hp: 13030, dmg: 330, dph: 1155, reqLv: 17 },
        { lv: 9, hp: 11960, dmg: 300, dph: 1050, reqLv: 16 },
        { lv: 8, hp: 10970, dmg: 273, dph: 955.5, reqLv: 15 },
        { lv: 7, hp: 10060, dmg: 248, dph: 868, reqLv: 14 },
        { lv: 6, hp: 9230, dmg: 225, dph: 787.5, reqLv: 13 },
        { lv: 5, hp: 8470, dmg: 205, dph: 717.5, reqLv: 12 },
        { lv: 4, hp: 7770, dmg: 186, dph: 651, reqLv: 11 },
        { lv: 3, hp: 7130, dmg: 169, dph: 591.5, reqLv: 10 },
        { lv: 2, hp: 6540, dmg: 154, dph: 539, reqLv: 9 },
        { lv: 1, hp: 6000, dmg: 140, dph: 490, reqLv: 8 }
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
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#4b5563;">5</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">2</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">10</td>
                        <td style="color:#4b5563;">15</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">15</td>
                        <td style="color:#4b5563;">30</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">20</td>
                        <td style="color:#4b5563;">50</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">25</td>
                        <td style="color:#4b5563;">75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};