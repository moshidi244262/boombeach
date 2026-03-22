window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['震爆突击兵'] = {
    name: '震爆突击兵',
    img: 'images/兵种/原型部队/ShockaneerB.webp',
    desc: '震爆突击兵能发射连续的电击光束，随着等级提升，电击光束甚至能够产生传导延伸效果，对目标后方建筑造成连带伤害。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '4' },
        { label: '训练时间', val: '8m' },
        { label: '移动速度', val: '中等/250' },
        { label: '攻击范围', val: '中等/6' },
        { label: '攻击速度', val: '0.075s/2s重载' }, // 简化长文本展示
        { label: '瘫痪持续时间', val: '5s' }
    ],
    
    // 定制表头：专门展示特有的“光束延伸”
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/基础/Damage.webp">每次射击伤害</th>
                <th><img src="images/特殊建筑/螃蟹：减益建筑/Shield Pulser.webp" style="width:16px;height:16px;border-radius:4px;margin-right:4px;vertical-align:middle;">光束延伸</th>
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
                <td style="color:#0ea5e9; border-right:1px solid rgba(0,0,0,0.03);">${lv.extend}</td>
                <td style="color:#ca8a04;">${formatNum(lv.train)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.armoryLv)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${lv.unlock === '/' || lv.unlock === '0' ? '<span class="val-none">/</span>' : formatNum(lv.unlock)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑（光束延伸的概率/距离不受雕像影响）
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(3)) : '/'
        }));
    },

    // 震爆突击兵 等级数据表
    levels: [
        { lv: 28, hp: 2136, dmg: 8, perDmg: 8.175, extend: '2700%(7.168)', train: 161200, armoryLv: 28, time: '3d 3h', unlock: 15600 },
        { lv: 27, hp: 1960, dmg: 7, perDmg: 7.8, extend: '2600%(6.912)', train: 145400, armoryLv: 27, time: '2d 14h', unlock: 11900 },
        { lv: 26, hp: 1800, dmg: 7, perDmg: 7.425, extend: '2500%(6.656)', train: 131100, armoryLv: 26, time: '2d 4h', unlock: 9100 },
        { lv: 25, hp: 1652, dmg: 7, perDmg: 7.05, extend: '2400%(6.4)', train: 118200, armoryLv: 25, time: '1d 19h', unlock: 6900 },
        { lv: 24, hp: 1519, dmg: 6, perDmg: 6.75, extend: '2300%(6.144)', train: 106600, armoryLv: 24, time: '1d 12h', unlock: 5300 },
        { lv: 23, hp: 1395, dmg: 6, perDmg: 6.45, extend: '2200%(5.888)', train: 96100, armoryLv: 23, time: '1d 6h', unlock: 4000 },
        { lv: 22, hp: 1280, dmg: 6, perDmg: 6.15, extend: '2100%(5.632)', train: 86700, armoryLv: 22, time: '1d 1h', unlock: 3100 },
        { lv: 21, hp: 1174, dmg: 5, perDmg: 5.85, extend: '2000%(5.376)', train: 78200, armoryLv: 21, time: '21h', unlock: 2300 },
        { lv: 20, hp: 1077, dmg: 5, perDmg: 5.55, extend: '1900%(5.12)', train: 70500, armoryLv: 20, time: '17h', unlock: 1800 },
        { lv: 19, hp: 988, dmg: 5, perDmg: 5.25, extend: '1800%(4.864)', train: 63600, armoryLv: 19, time: '15h', unlock: 1500 },
        { lv: 18, hp: 907, dmg: 5, perDmg: 5.025, extend: '1700%(4.608)', train: 57400, armoryLv: 18, time: '13h', unlock: 1200 },
        { lv: 17, hp: 832, dmg: 4, perDmg: 4.8, extend: '1600%(4.352)', train: 51800, armoryLv: 17, time: '11h', unlock: 960 },
        { lv: 16, hp: 763, dmg: 4, perDmg: 4.575, extend: '1500%(4.096)', train: 46700, armoryLv: 16, time: '10h', unlock: 780 },
        { lv: 15, hp: 700, dmg: 4, perDmg: 4.35, extend: '1400%(3.84)', train: 42100, armoryLv: 15, time: '9h', unlock: 630 },
        { lv: 14, hp: 640, dmg: 4, perDmg: 4.125, extend: '1300%(3.584)', train: 38000, armoryLv: 14, time: '8h', unlock: 510 },
        { lv: 13, hp: 590, dmg: 3, perDmg: 3.9, extend: '1200%(3.328)', train: 34300, armoryLv: 13, time: '7h', unlock: 420 },
        { lv: 12, hp: 540, dmg: 3, perDmg: 3.75, extend: '1100%(3.072)', train: 30900, armoryLv: 12, time: '6h', unlock: 340 },
        { lv: 11, hp: 500, dmg: 3, perDmg: 3.6, extend: '1000%(2.816)', train: 27900, armoryLv: 11, time: '5h', unlock: 270 },
        { lv: 10, hp: 460, dmg: 3, perDmg: 3.45, extend: '900%(2.56)', train: 25200, armoryLv: 10, time: '4h', unlock: 220 },
        { lv: 9, hp: 420, dmg: 3, perDmg: 3.3, extend: '800%(2.304)', train: 22700, armoryLv: 9, time: '4h', unlock: 190 },
        { lv: 8, hp: 380, dmg: 3, perDmg: 3.15, extend: '700%(2.048)', train: 20500, armoryLv: 8, time: '4h', unlock: 170 },
        { lv: 7, hp: 350, dmg: 2, perDmg: 3, extend: '600%(1.792)', train: 18500, armoryLv: 7, time: '3h', unlock: 140 },
        { lv: 6, hp: 320, dmg: 2, perDmg: 2.85, extend: '500%(1.536)', train: 16700, armoryLv: 6, time: '3h', unlock: 120 },
        { lv: 5, hp: 300, dmg: 2, perDmg: 2.7, extend: '400%(1.28)', train: 15100, armoryLv: 5, time: '3h', unlock: 110 },
        { lv: 4, hp: 270, dmg: 2, perDmg: 2.55, extend: '300%(1.024)', train: 13600, armoryLv: 4, time: '2h', unlock: 90 },
        { lv: 3, hp: 250, dmg: 2, perDmg: 2.4, extend: '200%(0.768)', train: 12300, armoryLv: 3, time: '2h', unlock: 80 },
        { lv: 2, hp: 230, dmg: 2, perDmg: 2.325, extend: '100%(0.512)', train: 11100, armoryLv: 2, time: '2h', unlock: 70 },
        { lv: 1, hp: 210, dmg: 2, perDmg: 2.25, extend: '0%(0.256)', train: 10000, armoryLv: 1, time: '/', unlock: '/' }
    ],

    warships: [
        { no: 1, lv: 14, cap: 65, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 68, token: '127,000', tech: 10 },
        { no: 3, lv: 18, cap: 80, token: '153,500', tech: 15 },
        { no: 4, lv: 20, cap: 92, token: '198,500', tech: 20 },
        { no: 5, lv: 22, cap: 104, token: '240,000', tech: 25 },
        { no: '合计', lv: '/', cap: '/', token: '719,000', tech: 75 }
    ]
};