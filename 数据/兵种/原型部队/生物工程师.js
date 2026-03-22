window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['生物工程师'] = {
    name: '生物工程师',
    img: 'images/兵种/原型部队/Critter_Engineer.webp',
    desc: '生物工程师自身不具备直接的攻击能力，但能够在战场上源源不断地生产机械小怪，以此来干扰敌方防御建筑并为部队提供有效的支援。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '8' },
        { label: '训练时间', val: '10m' },
        { label: '工厂训练时间', val: '10m' },
        { label: '移动速度', val: '中等 (170)' },
        { label: '初始造物速度', val: '5.6s' }
    ],

    hideDmgCalc: true, // 隐藏攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">生产时间</th>
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
                <td style="color:#0284c7; font-weight:500;">${lv.sh}</td>
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
        { lv: 28, hp: 2286, sh: '4.3s', train: 68900, mirc: 28, time: '3d 3h', upg: 15600 },
        { lv: 27, hp: 2097, sh: '4.4s', train: 61200, mirc: 27, time: '2d 14h', upg: 11900 },
        { lv: 26, hp: 1924, sh: '4.5s', train: 54500, mirc: 26, time: '2d 4h', upg: 9100 },
        { lv: 25, hp: 1772, sh: '4.6s', train: 48500, mirc: 25, time: '1d 19h', upg: 6900 },
        { lv: 24, hp: 1630, sh: '4.7s', train: 43100, mirc: 24, time: '1d 12h', upg: 5300 },
        { lv: 23, hp: 1498, sh: '4.8s', train: 38300, mirc: 23, time: '1d 6h', upg: 4000 },
        { lv: 22, hp: 1376, sh: '4.9s', train: 34100, mirc: 22, time: '1d 1h', upg: 3100 },
        { lv: 21, hp: 1264, sh: '5s', train: 30300, mirc: 21, time: '21h', upg: 2300 },
        { lv: 20, hp: 1162, sh: '5.1s', train: 27000, mirc: 20, time: '17h', upg: 1800 },
        { lv: 19, hp: 1068, sh: '5.2s', train: 16000, mirc: 19, time: '15h', upg: 1500 },
        { lv: 18, hp: 982, sh: '5.3s', train: 14200, mirc: 18, time: '13h', upg: 1200 },
        { lv: 17, hp: 902, sh: '5.4s', train: 12600, mirc: 17, time: '11h', upg: 960 },
        { lv: 16, hp: 829, sh: '5.5s', train: 11200, mirc: 16, time: '10h', upg: 780 },
        { lv: 15, hp: 762, sh: '5.6s', train: 10000, mirc: 15, time: '9h', upg: 630 },
        { lv: 14, hp: 701, sh: '5.7s', train: 8900, mirc: 14, time: '8h', upg: 510 },
        { lv: 13, hp: 644, sh: '5.8s', train: 7900, mirc: 13, time: '7h', upg: 420 },
        { lv: 12, hp: 592, sh: '5.9s', train: 7000, mirc: 12, time: '6h', upg: 340 },
        { lv: 11, hp: 544, sh: '6s', train: 6200, mirc: 11, time: '5h', upg: 270 },
        { lv: 10, hp: 500, sh: '6.1s', train: 5500, mirc: 10, time: '4h', upg: 220 },
        { lv: 9, hp: 460, sh: '6.2s', train: 4900, mirc: 9, time: '4h', upg: 190 },
        { lv: 8, hp: 422, sh: '6.3s', train: 4400, mirc: 8, time: '4h', upg: 170 },
        { lv: 7, hp: 388, sh: '6.4s', train: 3900, mirc: 7, time: '3h', upg: 140 },
        { lv: 6, hp: 357, sh: '6.5s', train: 3500, mirc: 6, time: '3h', upg: 120 },
        { lv: 5, hp: 328, sh: '6.6s', train: 3100, mirc: 5, time: '3h', upg: 110 },
        { lv: 4, hp: 302, sh: '6.7s', train: 2800, mirc: 4, time: '2h', upg: 90 },
        { lv: 3, hp: 277, sh: '6.8s', train: 2500, mirc: 3, time: '2h', upg: 80 },
        { lv: 2, hp: 255, sh: '6.9s', train: 2200, mirc: 2, time: '2h', upg: 70 },
        { lv: 1, hp: 234, sh: '7s', train: 2000, mirc: 1, time: '0', upg: 0 }
    ],

    warships: [
        { no: 1, lv: 14, cap: 45, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 55, token: '98,000', tech: 10 },
        { no: 3, lv: 18, cap: 64, token: '118,500', tech: 15 },
        { no: 4, lv: 20, cap: 74, token: '169,000', tech: 20 },
        { no: 5, lv: 22, cap: 84, token: '225,000', tech: 25 }
    ]
};