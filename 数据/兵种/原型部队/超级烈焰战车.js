window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['超级烈焰战车'] = {
    name: '超级烈焰战车',
    img: 'images/兵种/原型部队/Incinerator2.webp',
    desc: '超级烈焰战车是极其恐怖的移动堡垒，能够喷射出致命的火焰燃烧大片敌人，即使在被摧毁时也会产生灾难性的爆炸伤害。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '17' },
        { label: '训练时间', val: '25m' },
        { label: '工厂训练时间', val: '50m' },
        { label: '移动速度', val: '中等 (230)' },
        { label: '攻击范围', val: '中等 (3-7)' },
        { label: '攻击速度', val: '0.5s' }
    ],

    hideDmgCalc: false, // 启用攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">残余烧伤伤害</th>
                <th><img src="images/基础/Damagetype.webp" onerror="this.src='images/大本营/Damagetype.webp'">死亡伤害</th>
                <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">训练成本</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/大本营/Menu_icon_research.webp'">研究所</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
                <th><img src="images/基础/Icon_resource_scrap.webp" onerror="this.src='images/大本营/Icon_resource_scrap.webp'">升级费用</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold;">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#dc2626;">${formatNum(lv.perDmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#f97316;">${formatNum(lv.burn)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#b91c1c; font-weight:500;">${formatNum(lv.deathDmg)}</td>
                <td>${formatNum(lv.train)}</td>
                <td>${formatNum(lv.mirc)}</td>
                <td>${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:#ca8a04;">${formatNum(lv.upg)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Number((item.dmg * (1 + dmgInput / 100)).toFixed(2)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/',
            burn: item.burn !== '/' ? Math.round(item.burn * (1 + dmgInput / 100)) : '/',
            deathDmg: item.deathDmg !== '/' ? Math.round(item.deathDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 28, hp: 146000, dmg: 2123.79, perDmg: 1504.1, burn: 5013, deathDmg: 13100, train: 95000, mirc: 28, time: '3d 3h', upg: 15600 },
        { lv: 27, hp: 134000, dmg: 1948.28, perDmg: 1379.8, burn: 4599, deathDmg: 11900, train: 85000, mirc: 27, time: '2d 14h', upg: 11900 },
        { lv: 26, hp: 123000, dmg: 1787.31, perDmg: 1265.8, burn: 4219, deathDmg: 10800, train: 80000, mirc: 26, time: '2d 4h', upg: 9100 },
        { lv: 25, hp: 114000, dmg: 1639.61, perDmg: 1161.2, burn: 3871, deathDmg: 9850, train: 75000, mirc: 25, time: '1d 19h', upg: 6900 },
        { lv: 24, hp: 105000, dmg: 1504.06, perDmg: 1065.2, burn: 3551, deathDmg: 8955, train: 70000, mirc: 24, time: '1d 12h', upg: 5300 },
        { lv: 23, hp: 96500, dmg: 1380.37, perDmg: 977.6, burn: 3258, deathDmg: 8140, train: 65000, mirc: 23, time: '1d 6h', upg: 4000 },
        { lv: 22, hp: 89000, dmg: 1266.28, perDmg: 896.8, burn: 2989, deathDmg: 7400, train: 60000, mirc: 22, time: '1d 1h', upg: 3100 },
        { lv: 21, hp: 82000, dmg: 1161.23, perDmg: 822.4, burn: 2742, deathDmg: 6275, train: 55000, mirc: 21, time: '21h', upg: 2300 },
        { lv: 20, hp: 75500, dmg: 1065.64, perDmg: 754.7, burn: 2516, deathDmg: 6155, train: 50000, mirc: 20, time: '17h', upg: 1800 },
        { lv: 19, hp: 70000, dmg: 977.95, perDmg: 692.6, burn: 2308, deathDmg: 5560, train: 47000, mirc: 19, time: '15h', upg: 1500 },
        { lv: 18, hp: 64200, dmg: 896.48, perDmg: 634.9, burn: 2117, deathDmg: 5055, train: 44000, mirc: 18, time: '13h', upg: 1200 },
        { lv: 17, hp: 59000, dmg: 823.34, perDmg: 583.1, burn: 1943, deathDmg: 4595, train: 42000, mirc: 17, time: '11h', upg: 960 },
        { lv: 16, hp: 54500, dmg: 754.57, perDmg: 534.4, burn: 1782, deathDmg: 4177, train: 40000, mirc: 16, time: '10h', upg: 780 },
        { lv: 15, hp: 50000, dmg: 692.59, perDmg: 490.5, burn: 1635, deathDmg: 3797, train: 38000, mirc: 15, time: '9h', upg: 630 },
        { lv: 14, hp: 46300, dmg: 635.4, perDmg: 450.0, burn: 1500, deathDmg: 3452, train: 36000, mirc: 14, time: '8h', upg: 510 },
        { lv: 13, hp: 42700, dmg: 582.73, perDmg: 412.7, burn: 1376, deathDmg: 3138, train: 34000, mirc: 13, time: '7h', upg: 420 },
        { lv: 12, hp: 39300, dmg: 535.29, perDmg: 379.1, burn: 1263, deathDmg: 2853, train: 32000, mirc: 12, time: '6h', upg: 340 },
        { lv: 11, hp: 36300, dmg: 490.81, perDmg: 347.6, burn: 1158, deathDmg: 2594, train: 30000, mirc: 11, time: '5h', upg: 270 },
        { lv: 10, hp: 33400, dmg: 450.57, perDmg: 319.1, burn: 1063, deathDmg: 2358, train: 28000, mirc: 10, time: '4h', upg: 220 },
        { lv: 9, hp: 30800, dmg: 413.01, perDmg: 292.5, burn: 975, deathDmg: 2143, train: 26000, mirc: 9, time: '4h', upg: 190 },
        { lv: 8, hp: 28400, dmg: 378.84, perDmg: 268.3, burn: 894, deathDmg: 1948, train: 24000, mirc: 8, time: '4h', upg: 170 },
        { lv: 7, hp: 26200, dmg: 347.63, perDmg: 246.2, burn: 821, deathDmg: 1771, train: 22000, mirc: 7, time: '3h', upg: 140 },
        { lv: 6, hp: 24100, dmg: 319.25, perDmg: 226.1, burn: 753, deathDmg: 1610, train: 20000, mirc: 6, time: '3h', upg: 120 },
        { lv: 5, hp: 22200, dmg: 292.57, perDmg: 207.2, burn: 691, deathDmg: 1464, train: 18000, mirc: 5, time: '3h', upg: 110 },
        { lv: 4, hp: 20500, dmg: 268.70, perDmg: 190.3, burn: 634, deathDmg: 1331, train: 16000, mirc: 4, time: '2h', upg: 90 },
        { lv: 3, hp: 18900, dmg: 245.97, perDmg: 174.2, burn: 581, deathDmg: 1210, train: 14000, mirc: 3, time: '2h', upg: 80 },
        { lv: 2, hp: 17400, dmg: 226.06, perDmg: 160.1, burn: 533, deathDmg: 1100, train: 12000, mirc: 2, time: '2h', upg: 70 },
        { lv: 1, hp: 16000, dmg: 207.28, perDmg: 146.8, burn: 489, deathDmg: 1000, train: 10000, mirc: 1, time: '0', upg: 0 }
    ],

    warships: [
        { no: 1, lv: 12, cap: 11, token: '/', tech: 5 },
        { no: 2, lv: 14, cap: 13, token: '135,500', tech: 10 },
        { no: 3, lv: 16, cap: 15, token: '164,000', tech: 15 },
        { no: 4, lv: 18, cap: 18, token: '198,500', tech: 20 },
        { no: 5, lv: 22, cap: 20, token: '270,000', tech: 25 }
    ]
};