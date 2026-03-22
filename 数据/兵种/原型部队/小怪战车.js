window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['小怪战车'] = {
    name: '小怪战车',
    img: 'images/兵种/原型部队/Critter_Tank-0.webp',
    desc: '小怪战车在战场上可以源源不断地释放机械小怪，用数量淹没敌方的防御建筑并为部队提供有效的火力掩护。',
    // 小怪战车没有直射伤害，隐藏攻击加成计算器
    hideDmgCalc: true, 
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '24m' },
        { label: '移动速度', val: '慢/210' },
        { label: '释放距离', val: '超长/14.5' },
        { label: '释放间隔', val: '7.6s' }
    ],
    
    // 定制表头（将伤害列替换成了机械小怪数量）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每次释放小怪数</th>
                <th><img src="images/基础/Gold.webp">训练成本</th>
                <th><img src="images/基础/Menu_icon_research.webp">研究所等级</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Icon_resource_scrap.webp">解锁费用</th>
            </tr>
        </thead>
    `,

    // 定制每一行的渲染逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.critters)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.train)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.armoryLv)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${lv.unlock === '/' || lv.unlock === '0' ? '<span class="val-none">/</span>' : formatNum(lv.unlock)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑（只计算血量）
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
            // critters 数量受小怪等级影响，不受部队攻击雕像加成
        }));
    },

    // 小怪战车 等级数据表
    levels: [
        { lv: 28, hp: 3000, critters: 11, train: 193200, armoryLv: 28, time: '3d 3h', unlock: 20000 },
        { lv: 27, hp: 2800, critters: 10, train: 171600, armoryLv: 27, time: '2d 14h', unlock: 15300 },
        { lv: 26, hp: 2600, critters: 10, train: 152400, armoryLv: 26, time: '2d 4h', unlock: 11700 },
        { lv: 25, hp: 2500, critters: 9, train: 135400, armoryLv: 25, time: '1d 19h', unlock: 8900 },
        { lv: 24, hp: 2400, critters: 9, train: 120200, armoryLv: 24, time: '1d 12h', unlock: 6800 },
        { lv: 23, hp: 2300, critters: 8, train: 53400, armoryLv: 23, time: '1d 6h', unlock: 5200 },
        { lv: 22, hp: 2200, critters: 8, train: 47400, armoryLv: 22, time: '1d 1h', unlock: 4000 },
        { lv: 21, hp: 2100, critters: 7, train: 42100, armoryLv: 21, time: '21h', unlock: 3000 },
        { lv: 20, hp: 2000, critters: 7, train: 37400, armoryLv: 20, time: '17h', unlock: 2300 },
        { lv: 19, hp: 1900, critters: 6, train: 33200, armoryLv: 19, time: '15h', unlock: 1900 },
        { lv: 18, hp: 1800, critters: 6, train: 29500, armoryLv: 18, time: '13h', unlock: 1500 },
        { lv: 17, hp: 1700, critters: 5, train: 26200, armoryLv: 17, time: '11h', unlock: 1200 },
        { lv: 16, hp: 1600, critters: 5, train: 23300, armoryLv: 16, time: '10h', unlock: 1000 },
        { lv: 15, hp: 1500, critters: 5, train: 20700, armoryLv: 15, time: '9h', unlock: 810 },
        { lv: 14, hp: 1400, critters: 5, train: 18400, armoryLv: 14, time: '8h', unlock: 660 },
        { lv: 13, hp: 1300, critters: 4, train: 16300, armoryLv: 13, time: '7h', unlock: 530 },
        { lv: 12, hp: 1200, critters: 4, train: 14500, armoryLv: 12, time: '6h', unlock: 430 },
        { lv: 11, hp: 1100, critters: 4, train: 12900, armoryLv: 11, time: '5h', unlock: 350 },
        { lv: 10, hp: 1050, critters: 4, train: 11500, armoryLv: 10, time: '4h', unlock: 290 },
        { lv: 9, hp: 1000, critters: 3, train: 10200, armoryLv: 9, time: '4h', unlock: 250 },
        { lv: 8, hp: 950, critters: 3, train: 9100, armoryLv: 8, time: '4h', unlock: 210 },
        { lv: 7, hp: 900, critters: 3, train: 8100, armoryLv: 7, time: '3h', unlock: 180 },
        { lv: 6, hp: 850, critters: 3, train: 7200, armoryLv: 6, time: '3h', unlock: 160 },
        { lv: 5, hp: 800, critters: 3, train: 6400, armoryLv: 5, time: '3h', unlock: 140 },
        { lv: 4, hp: 750, critters: 3, train: 5700, armoryLv: 4, time: '2h', unlock: 120 },
        { lv: 3, hp: 700, critters: 3, train: 5100, armoryLv: 3, time: '2h', unlock: 100 },
        { lv: 2, hp: 650, critters: 3, train: 4500, armoryLv: 2, time: '2h', unlock: 90 },
        { lv: 1, hp: 600, critters: 3, train: 4000, armoryLv: 1, time: '/', unlock: '/' }
    ],

    warships: [
        { no: 1, lv: 12, cap: 28, token: '/', tech: 5 },
        { no: 2, lv: 14, cap: 34, token: '86,500', tech: 10 },
        { no: 3, lv: 16, cap: 40, token: '115,500', tech: 15 },
        { no: 4, lv: 18, cap: 46, token: '169,000', tech: 20 },
        { no: 5, lv: 22, cap: 52, token: '240,000', tech: 25 },
        { no: '合计', lv: '/', cap: '/', token: '611,000', tech: 75 }
    ]
};