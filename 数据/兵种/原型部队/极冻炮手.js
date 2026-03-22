window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['极冻炮手'] = {
    name: '极冻炮手',
    img: 'images/兵种/原型部队/Cryobombardier.webp',
    desc: '极冻炮手能从超远距离发射冷冻炸弹，在造成伤害的同时还能减缓敌方防御建筑的攻击速度。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '8' },
        { label: '训练时间', val: '15m' },
        { label: '移动速度', val: '中等/200' },
        { label: '攻击范围', val: '超长/12' },
        { label: '攻击速度', val: '2.2s' }
    ],
    
    // 定制表头
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/基础/Damage.webp">每次射击伤害</th>
                <th><img src="images/基础/Gold.webp">训练成本</th>
                <th><img src="images/基础/Menu_icon_research.webp">研究所等级</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Icon_resource_scrap.webp">解锁/升级费用</th>
            </tr>
        </thead>
    `,

    // 定制每一行的渲染逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.perDmg)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.train)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.armoryLv)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${lv.unlock === '/' || lv.unlock === '0' ? '<span class="val-none">/</span>' : formatNum(lv.unlock)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 极冻炮手 等级数据表
    levels: [
        { lv: 28, hp: 590, dmg: 1690, perDmg: 3718, train: 126900, armoryLv: 28, time: '3d 3h', unlock: 15600 },
        { lv: 27, hp: 570, dmg: 1500, perDmg: 3300, train: 117200, armoryLv: 27, time: '2d 14h', unlock: 11900 },
        { lv: 26, hp: 550, dmg: 1330, perDmg: 2926, train: 108200, armoryLv: 26, time: '2d 4h', unlock: 9100 },
        { lv: 25, hp: 540, dmg: 1200, perDmg: 2640, train: 99900, armoryLv: 25, time: '1d 19h', unlock: 6900 },
        { lv: 24, hp: 530, dmg: 1050, perDmg: 2310, train: 92300, armoryLv: 24, time: '1d 12h', unlock: 5300 },
        { lv: 23, hp: 520, dmg: 940, perDmg: 2068, train: 85200, armoryLv: 23, time: '1d 6h', unlock: 4000 },
        { lv: 22, hp: 510, dmg: 830, perDmg: 1826, train: 78800, armoryLv: 22, time: '1d 1h', unlock: 3100 },
        { lv: 21, hp: 500, dmg: 740, perDmg: 1628, train: 72800, armoryLv: 21, time: '21h', unlock: 2300 },
        { lv: 20, hp: 490, dmg: 660, perDmg: 1452, train: 67200, armoryLv: 20, time: '17h', unlock: 1800 },
        { lv: 19, hp: 480, dmg: 590, perDmg: 1298, train: 41400, armoryLv: 19, time: '15h', unlock: 1500 },
        { lv: 18, hp: 470, dmg: 520, perDmg: 1144, train: 38200, armoryLv: 18, time: '13h', unlock: 1200 },
        { lv: 17, hp: 460, dmg: 460, perDmg: 1012, train: 35300, armoryLv: 17, time: '11h', unlock: 960 },
        { lv: 16, hp: 450, dmg: 410, perDmg: 902, train: 32600, armoryLv: 16, time: '10h', unlock: 780 },
        { lv: 15, hp: 440, dmg: 370, perDmg: 814, train: 30100, armoryLv: 15, time: '9h', unlock: 630 },
        { lv: 14, hp: 430, dmg: 330, perDmg: 726, train: 27800, armoryLv: 14, time: '8h', unlock: 510 },
        { lv: 13, hp: 420, dmg: 290, perDmg: 638, train: 25700, armoryLv: 13, time: '7h', unlock: 420 },
        { lv: 12, hp: 410, dmg: 260, perDmg: 572, train: 23700, armoryLv: 12, time: '6h', unlock: 340 },
        { lv: 11, hp: 400, dmg: 230, perDmg: 506, train: 21900, armoryLv: 11, time: '5h', unlock: 270 },
        { lv: 10, hp: 390, dmg: 200, perDmg: 440, train: 20200, armoryLv: 10, time: '4h', unlock: 220 },
        { lv: 9, hp: 380, dmg: 180, perDmg: 396, train: 18700, armoryLv: 9, time: '4h', unlock: 190 },
        { lv: 8, hp: 370, dmg: 160, perDmg: 352, train: 17300, armoryLv: 8, time: '4h', unlock: 170 },
        { lv: 7, hp: 360, dmg: 140, perDmg: 308, train: 16000, armoryLv: 7, time: '3h', unlock: 140 },
        { lv: 6, hp: 350, dmg: 130, perDmg: 286, train: 14800, armoryLv: 6, time: '3h', unlock: 120 },
        { lv: 5, hp: 340, dmg: 115, perDmg: 253, train: 13700, armoryLv: 5, time: '3h', unlock: 110 },
        { lv: 4, hp: 330, dmg: 100, perDmg: 220, train: 12700, armoryLv: 4, time: '2h', unlock: 90 },
        { lv: 3, hp: 320, dmg: 90, perDmg: 198, train: 11700, armoryLv: 3, time: '2h', unlock: 80 },
        { lv: 2, hp: 310, dmg: 80, perDmg: 176, train: 10800, armoryLv: 2, time: '2h', unlock: 70 },
        { lv: 1, hp: 300, dmg: 70, perDmg: 154, train: 10000, armoryLv: 1, time: '/', unlock: '/' }
    ],

    warships: [
        { no: 1, lv: 14, cap: 28, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 34, token: '135,500', tech: 10 },
        { no: 3, lv: 18, cap: 40, token: '164,000', tech: 15 },
        { no: 4, lv: 20, cap: 46, token: '198,500', tech: 20 },
        { no: 5, lv: 22, cap: 52, token: '270,000', tech: 25 },
        { no: '合计', lv: '/', cap: '/', token: '768,000', tech: 75 }
    ]
};