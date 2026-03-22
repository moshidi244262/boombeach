window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['弹雨战车'] = {
    name: '弹雨战车',
    img: 'images/兵种/原型部队/RainMaker.webp',
    desc: '弹雨战车可以从极远的距离发射密集的火箭弹幕，造成巨大破坏。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '24m' },
        { label: '移动速度', val: '慢/150' },
        { label: '攻击范围', val: '超长/17' },
        { label: '攻击速度', val: '10s齐射' }, // 缩写便于UI展示
        { label: '弹片数量', val: '5' }
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
            dmg: item.dmg !== '/' ? Number((item.dmg * (1 + dmgInput / 100)).toFixed(2)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 弹雨战车 等级数据表
    levels: [
        { lv: 28, hp: 3000, dmg: 1324.53, perDmg: 585, train: 193200, armoryLv: 28, time: '3d 3h', unlock: 20000 },
        { lv: 27, hp: 2800, dmg: 1208.15, perDmg: 537.6, train: 171600, armoryLv: 27, time: '2d 14h', unlock: 15300 },
        { lv: 26, hp: 2600, dmg: 1114.87, perDmg: 494.2, train: 152400, armoryLv: 26, time: '2d 4h', unlock: 11700 },
        { lv: 25, hp: 2500, dmg: 1028.38, perDmg: 454.2, train: 135400, armoryLv: 25, time: '1d 23h', unlock: 8900 },
        { lv: 24, hp: 2400, dmg: 944.11, perDmg: 417.4, train: 120200, armoryLv: 24, time: '1d 12h', unlock: 6800 },
        { lv: 23, hp: 2300, dmg: 868.53, perDmg: 383.6, train: 53400, armoryLv: 23, time: '1d 6h', unlock: 5200 },
        { lv: 22, hp: 2200, dmg: 797.4, perDmg: 352.6, train: 47400, armoryLv: 22, time: '1d 1h', unlock: 4000 },
        { lv: 21, hp: 2100, dmg: 733.09, perDmg: 324.2, train: 42100, armoryLv: 21, time: '21h', unlock: 3000 },
        { lv: 20, hp: 2000, dmg: 674.72, perDmg: 298, train: 37400, armoryLv: 20, time: '17h', unlock: 2300 },
        { lv: 19, hp: 1900, dmg: 619, perDmg: 273.8, train: 33200, armoryLv: 19, time: '15h', unlock: 1900 },
        { lv: 18, hp: 1800, dmg: 569.66, perDmg: 251.6, train: 29500, armoryLv: 18, time: '13h', unlock: 1500 },
        { lv: 17, hp: 1700, dmg: 523.92, perDmg: 231.4, train: 26200, armoryLv: 17, time: '11h', unlock: 1200 },
        { lv: 16, hp: 1600, dmg: 481.34, perDmg: 212.6, train: 23300, armoryLv: 16, time: '10h', unlock: 1000 },
        { lv: 15, hp: 1500, dmg: 441.51, perDmg: 195.4, train: 20700, armoryLv: 15, time: '9h', unlock: 810 },
        { lv: 14, hp: 1400, dmg: 406.64, perDmg: 179.6, train: 18400, armoryLv: 14, time: '8h', unlock: 660 },
        { lv: 13, hp: 1300, dmg: 373.58, perDmg: 165, train: 16300, armoryLv: 13, time: '7h', unlock: 530 },
        { lv: 12, hp: 1200, dmg: 343.71, perDmg: 151.8, train: 14500, armoryLv: 12, time: '6h', unlock: 430 },
        { lv: 11, hp: 1100, dmg: 315.63, perDmg: 139.4, train: 12900, armoryLv: 11, time: '5h', unlock: 350 },
        { lv: 10, hp: 1050, dmg: 290.26, perDmg: 128.2, train: 11500, armoryLv: 10, time: '4h', unlock: 290 },
        { lv: 9, hp: 1000, dmg: 266.71, perDmg: 117.8, train: 10200, armoryLv: 9, time: '4h', unlock: 250 },
        { lv: 8, hp: 950, dmg: 244.04, perDmg: 108.2, train: 9100, armoryLv: 8, time: '4h', unlock: 210 },
        { lv: 7, hp: 900, dmg: 225.51, perDmg: 99.6, train: 8100, armoryLv: 7, time: '3h', unlock: 180 },
        { lv: 6, hp: 850, dmg: 206.95, perDmg: 91.4, train: 7200, armoryLv: 6, time: '3h', unlock: 160 },
        { lv: 5, hp: 800, dmg: 190.19, perDmg: 84, train: 6400, armoryLv: 5, time: '3h', unlock: 140 },
        { lv: 4, hp: 750, dmg: 174.79, perDmg: 77.2, train: 5700, armoryLv: 4, time: '2h', unlock: 120 },
        { lv: 3, hp: 700, dmg: 160.75, perDmg: 71, train: 5100, armoryLv: 3, time: '2h', unlock: 100 },
        { lv: 2, hp: 650, dmg: 147.63, perDmg: 65.2, train: 4500, armoryLv: 2, time: '2h', unlock: 90 },
        { lv: 1, hp: 600, dmg: 135.85, perDmg: 60, train: 4000, armoryLv: 1, time: '/', unlock: '/' }
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