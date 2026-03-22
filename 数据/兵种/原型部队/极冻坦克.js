window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['极冻坦克'] = {
    name: '极冻坦克',
    img: 'images/兵种/原型部队/CryoTank_01.webp',
    desc: '极冻坦克拥有厚重的装甲，它的攻击虽然伤害不高，但是可以发射冷冻光束大幅减缓敌方建筑的攻击和移动速度。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '14' },
        { label: '训练时间', val: '24m' },
        { label: '移动速度', val: '慢/180' },
        { label: '攻击范围', val: '10' },
        { label: '冻结持续时间', val: '50%' }
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
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(2)) : '/'
        }));
    },

    // 极冻坦克 等级数据表
    levels: [
        { lv: 28, hp: 3000, dmg: 720, perDmg: 53.97, train: 136000, armoryLv: 28, time: '3d 3h', unlock: 13300 },
        { lv: 27, hp: 2800, dmg: 686, perDmg: 51.42, train: 121200, armoryLv: 27, time: '2d 14h', unlock: 10200 },
        { lv: 26, hp: 2600, dmg: 653, perDmg: 48.95, train: 108000, armoryLv: 26, time: '2d 4h', unlock: 7800 },
        { lv: 25, hp: 2500, dmg: 622, perDmg: 46.63, train: 96200, armoryLv: 25, time: '1d 19h', unlock: 5900 },
        { lv: 24, hp: 2400, dmg: 593, perDmg: 44.45, train: 85800, armoryLv: 24, time: '1d 12h', unlock: 4500 },
        { lv: 23, hp: 2300, dmg: 564, perDmg: 42.28, train: 38200, armoryLv: 23, time: '1d 6h', unlock: 3500 },
        { lv: 22, hp: 2200, dmg: 538, perDmg: 40.33, train: 34000, armoryLv: 22, time: '1d 1h', unlock: 2600 },
        { lv: 21, hp: 2100, dmg: 512, perDmg: 38.38, train: 30300, armoryLv: 21, time: '21h', unlock: 2000 },
        { lv: 20, hp: 2000, dmg: 488, perDmg: 36.58, train: 27000, armoryLv: 20, time: '17h', unlock: 1500 },
        { lv: 19, hp: 1900, dmg: 464, perDmg: 34.78, train: 24100, armoryLv: 19, time: '15h', unlock: 1200 },
        { lv: 18, hp: 1800, dmg: 442, perDmg: 33.13, train: 21500, armoryLv: 18, time: '13h', unlock: 1000 },
        { lv: 17, hp: 1700, dmg: 421, perDmg: 31.56, train: 19200, armoryLv: 17, time: '11h', unlock: 820 },
        { lv: 16, hp: 1600, dmg: 401, perDmg: 30.06, train: 17100, armoryLv: 16, time: '10h', unlock: 670 },
        { lv: 15, hp: 1500, dmg: 382, perDmg: 28.64, train: 15200, armoryLv: 15, time: '9h', unlock: 540 },
        { lv: 14, hp: 1400, dmg: 364, perDmg: 27.29, train: 13500, armoryLv: 14, time: '8h', unlock: 440 },
        { lv: 13, hp: 1300, dmg: 347, perDmg: 26.01, train: 12000, armoryLv: 13, time: '7h', unlock: 360 },
        { lv: 12, hp: 1200, dmg: 330, perDmg: 24.74, train: 10700, armoryLv: 12, time: '6h', unlock: 290 },
        { lv: 11, hp: 1100, dmg: 314, perDmg: 23.54, train: 9500, armoryLv: 11, time: '5h', unlock: 230 },
        { lv: 10, hp: 1050, dmg: 299, perDmg: 22.41, train: 8500, armoryLv: 10, time: '4h', unlock: 190 },
        { lv: 9, hp: 1000, dmg: 285, perDmg: 21.36, train: 7600, armoryLv: 9, time: '4h', unlock: 160 },
        { lv: 8, hp: 950, dmg: 271, perDmg: 20.31, train: 6800, armoryLv: 8, time: '4h', unlock: 140 },
        { lv: 7, hp: 900, dmg: 259, perDmg: 19.42, train: 6100, armoryLv: 7, time: '3h', unlock: 120 },
        { lv: 6, hp: 850, dmg: 246, perDmg: 18.44, train: 5400, armoryLv: 6, time: '3h', unlock: 110 },
        { lv: 5, hp: 800, dmg: 235, perDmg: 17.62, train: 4800, armoryLv: 5, time: '3h', unlock: 90 },
        { lv: 4, hp: 750, dmg: 223, perDmg: 16.72, train: 4300, armoryLv: 4, time: '2h', unlock: 80 },
        { lv: 3, hp: 700, dmg: 213, perDmg: 15.97, train: 3800, armoryLv: 3, time: '2h', unlock: 70 },
        { lv: 2, hp: 650, dmg: 203, perDmg: 15.22, train: 3400, armoryLv: 2, time: '2h', unlock: 60 },
        { lv: 1, hp: 600, dmg: 193, perDmg: 14.48, train: 3000, armoryLv: 1, time: '/', unlock: '/' }
    ],

    warships: [
        { no: 1, lv: 14, cap: 224, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 272, token: '86,500', tech: 10 },
        { no: 3, lv: 18, cap: 320, token: '115,500', tech: 15 },
        { no: 4, lv: 20, cap: 368, token: '169,000', tech: 20 },
        { no: 5, lv: 22, cap: 416, token: '240,000', tech: 25 },
        { no: '合计', lv: '/', cap: '/', token: '611,000', tech: 75 }
    ]
};