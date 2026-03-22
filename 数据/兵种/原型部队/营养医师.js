window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['营养医师'] = {
    name: '营养医师',
    img: 'images/兵种/原型部队/Drvitamin2.webp',
    desc: '营养医师通过抛洒特制的维生素来治疗并强化友军，能够为范围内的友军提供额外的状态增益。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '5' },
        { label: '训练时间', val: '10m' },
        { label: '工厂训练时间', val: '10m' },
        { label: '移动速度', val: '中等 (270)' },
        { label: '治疗范围', val: '短 (5)' },
        { label: '治愈速度', val: '1.2s' },
        { label: '治愈类型', val: '泼洒' },
        { label: '维生素持续', val: '5s' }
    ],

    hideDmgCalc: true, // 隐藏攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Heal_Iconr.webp" onerror="this.src='images/大本营/Heal_Iconr.webp'">每秒治疗</th>
                <th>特殊状态 (%)<br><span style="font-size:0.75rem; color:#6b7280; font-weight:normal;">减伤 | 攻击 | 加速</span></th>
                <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">训练成本</th>
                <th><img src="images/基础/Icon_resource_scrap.webp" onerror="this.src='images/大本营/Icon_resource_scrap.webp'">升级费用</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/大本营/Menu_icon_research.webp'">研究所</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">升级时间</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold;">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td style="color:#16a34a; font-weight:500;">${formatNum(lv.heal)}</td>
                <td style="font-size:0.85rem; color:#4b5563; font-weight:500; letter-spacing: 0.5px;">${lv.buff}</td>
                <td>${formatNum(lv.train)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.upg)}</td>
                <td>${formatNum(lv.mirc)}</td>
                <td>${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 28, hp: 2283, heal: 44, buff: '56 | 36 | 56', train: 119200, mirc: 28, time: '3d 3h', upg: 13300 },
        { lv: 27, hp: 2098, heal: 42, buff: '55 | 35 | 55', train: 106000, mirc: 27, time: '2d 14h', upg: 10200 },
        { lv: 26, hp: 1928, heal: 40, buff: '54 | 34 | 54', train: 94300, mirc: 26, time: '2d 4h', upg: 7800 },
        { lv: 25, hp: 1772, heal: 38, buff: '53 | 33 | 53', train: 83900, mirc: 25, time: '1d 19h', upg: 5900 },
        { lv: 24, hp: 1630, heal: 36, buff: '52 | 32 | 52', train: 74600, mirc: 24, time: '1d 12h', upg: 4500 },
        { lv: 23, hp: 1498, heal: 34, buff: '51 | 31 | 51', train: 66300, mirc: 23, time: '1d 6h', upg: 3500 },
        { lv: 22, hp: 1376, heal: 33, buff: '50 | 30 | 50', train: 59000, mirc: 22, time: '1d 1h', upg: 2600 },
        { lv: 21, hp: 1264, heal: 31, buff: '49 | 29 | 49', train: 52500, mirc: 21, time: '21h', upg: 2000 },
        { lv: 20, hp: 1162, heal: 30, buff: '48 | 28 | 48', train: 46700, mirc: 20, time: '17h', upg: 1500 },
        { lv: 19, hp: 1068, heal: 28, buff: '47 | 27 | 47', train: 41500, mirc: 19, time: '15h', upg: 1200 },
        { lv: 18, hp: 982, heal: 27, buff: '46 | 26 | 46', train: 36900, mirc: 18, time: '13h', upg: 1000 },
        { lv: 17, hp: 902, heal: 26, buff: '45 | 25 | 45', train: 32800, mirc: 17, time: '11h', upg: 820 },
        { lv: 16, hp: 829, heal: 24, buff: '44 | 24 | 44', train: 29200, mirc: 16, time: '10h', upg: 670 },
        { lv: 15, hp: 762, heal: 23, buff: '43 | 23 | 43', train: 26000, mirc: 15, time: '9h', upg: 540 },
        { lv: 14, hp: 701, heal: 22, buff: '42 | 22 | 42', train: 23100, mirc: 14, time: '8h', upg: 440 },
        { lv: 13, hp: 644, heal: 21, buff: '41 | 21 | 41', train: 20500, mirc: 13, time: '7h', upg: 360 },
        { lv: 12, hp: 592, heal: 20, buff: '40 | 20 | 40', train: 18200, mirc: 12, time: '6h', upg: 290 },
        { lv: 11, hp: 544, heal: 19, buff: '39 | 19 | 39', train: 16200, mirc: 11, time: '5h', upg: 230 },
        { lv: 10, hp: 500, heal: 18, buff: '38 | 18 | 38', train: 14400, mirc: 10, time: '4h', upg: 190 },
        { lv: 9, hp: 460, heal: 17, buff: '37 | 17 | 37', train: 12800, mirc: 9, time: '4h', upg: 160 },
        { lv: 8, hp: 422, heal: 16, buff: '36 | 16 | 36', train: 11400, mirc: 8, time: '4h', upg: 140 },
        { lv: 7, hp: 388, heal: 16, buff: '35 | 15 | 35', train: 10100, mirc: 7, time: '3h', upg: 120 },
        { lv: 6, hp: 357, heal: 15, buff: '34 | 14 | 34', train: 9000, mirc: 6, time: '3h', upg: 110 },
        { lv: 5, hp: 328, heal: 14, buff: '33 | 13 | 33', train: 8000, mirc: 5, time: '3h', upg: 90 },
        { lv: 4, hp: 301, heal: 14, buff: '32 | 12 | 32', train: 7100, mirc: 4, time: '2h', upg: 80 },
        { lv: 3, hp: 277, heal: 13, buff: '31 | 11 | 31', train: 6300, mirc: 3, time: '2h', upg: 70 },
        { lv: 2, hp: 255, heal: 12, buff: '30 | 10 | 30', train: 5600, mirc: 2, time: '2h', upg: 60 },
        { lv: 1, hp: 234, heal: 12, buff: '29 | 9 | 29', train: 5000, mirc: 1, time: '0', upg: 0 }
    ],

    warships: [
        { no: 1, lv: 14, cap: 45, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 55, token: 98000, tech: 10 },
        { no: 3, lv: 18, cap: 64, token: 118500, tech: 15 },
        { no: 4, lv: 20, cap: 74, token: 169000, tech: 20 },
        { no: 5, lv: 22, cap: 84, token: 225000, tech: 25 }
    ]
};