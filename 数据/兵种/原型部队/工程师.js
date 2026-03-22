window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['工程师'] = {
    name: '工程师',
    img: 'images/兵种/原型部队/Turret_Engineer_2.webp',
    desc: '工程师自身并不具备攻击能力，而是通过在战场上快速部署炮塔来为部队提供火力支援或吸引防御火力。',
    // 基础属性
    baseStats: [
        { label: '训练时间', val: '10m' },
        { label: '工厂训练时间', val: '10m' },
        { label: '自身行动范围', val: '8.2' },
        { label: '炮塔攻击速度', val: '3.5s' },
        { label: '炮塔攻击范围', val: '9.8' }
    ],

    hideDmgCalc: true, // 隐藏攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th>部署炮塔速度</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">部署炮塔生命值</th>
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
                <td style="color:#0284c7;">${lv.deploySpeed}</td>
                <td style="font-weight:500;">${formatNum(lv.turretHp)}</td>
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
        { lv: 28, hp: 2285, deploySpeed: '5.4s', turretHp: 1850, train: 68900, mirc: 28, time: '3d 3h', upg: 13300 },
        { lv: 27, hp: 2097, deploySpeed: '5.5s', turretHp: 1850, train: 61200, mirc: 27, time: '2d 14h', upg: 10200 },
        { lv: 26, hp: 1924, deploySpeed: '5.6s', turretHp: 1850, train: 54500, mirc: 26, time: '2d 4h', upg: 7800 },
        { lv: 25, hp: 1772, deploySpeed: '5.7s', turretHp: 1850, train: 48500, mirc: 25, time: '1d 19h', upg: 5900 },
        { lv: 24, hp: 1630, deploySpeed: '5.8s', turretHp: 1850, train: 43100, mirc: 24, time: '1d 12h', upg: 4500 },
        { lv: 23, hp: 1498, deploySpeed: '5.9s', turretHp: 1850, train: 38300, mirc: 23, time: '1d 6h', upg: 3500 },
        { lv: 22, hp: 1376, deploySpeed: '6.0s', turretHp: 1850, train: 34100, mirc: 22, time: '1d 1h', upg: 2600 },
        { lv: 21, hp: 1264, deploySpeed: '6.1s', turretHp: 1850, train: 30300, mirc: 21, time: '21h', upg: 2000 },
        { lv: 20, hp: 1162, deploySpeed: '6.2s', turretHp: 1850, train: 27000, mirc: 20, time: '17h', upg: 1500 },
        { lv: 19, hp: 1068, deploySpeed: '6.3s', turretHp: 1850, train: 16000, mirc: 19, time: '15h', upg: 1200 },
        { lv: 18, hp: 982, deploySpeed: '6.4s', turretHp: 1850, train: 14200, mirc: 18, time: '13h', upg: 1000 },
        { lv: 17, hp: 902, deploySpeed: '6.5s', turretHp: 1850, train: 12600, mirc: 17, time: '11h', upg: 820 },
        { lv: 16, hp: 829, deploySpeed: '6.6s', turretHp: 1850, train: 11200, mirc: 16, time: '10h', upg: 670 },
        { lv: 15, hp: 762, deploySpeed: '6.7s', turretHp: 1850, train: 10000, mirc: 15, time: '9h', upg: 540 },
        { lv: 14, hp: 701, deploySpeed: '6.8s', turretHp: 1850, train: 8900, mirc: 14, time: '8h', upg: 440 },
        { lv: 13, hp: 644, deploySpeed: '6.9s', turretHp: 1850, train: 7900, mirc: 13, time: '7h', upg: 360 },
        { lv: 12, hp: 594, deploySpeed: '7.0s', turretHp: 1850, train: 7000, mirc: 12, time: '6h', upg: 290 },
        { lv: 11, hp: 547, deploySpeed: '7.1s', turretHp: 1850, train: 6200, mirc: 11, time: '5h', upg: 230 },
        { lv: 10, hp: 504, deploySpeed: '7.2s', turretHp: 1850, train: 5500, mirc: 10, time: '4h', upg: 190 },
        { lv: 9, hp: 465, deploySpeed: '7.3s', turretHp: 1850, train: 4900, mirc: 9, time: '4h', upg: 160 },
        { lv: 8, hp: 428, deploySpeed: '7.4s', turretHp: 1850, train: 4400, mirc: 8, time: '4h', upg: 140 },
        { lv: 7, hp: 395, deploySpeed: '7.5s', turretHp: 1850, train: 3900, mirc: 7, time: '3h', upg: 120 },
        { lv: 6, hp: 364, deploySpeed: '7.6s', turretHp: 1850, train: 3500, mirc: 6, time: '3h', upg: 110 },
        { lv: 5, hp: 335, deploySpeed: '7.7s', turretHp: 1850, train: 3100, mirc: 5, time: '3h', upg: 90 },
        { lv: 4, hp: 309, deploySpeed: '7.8s', turretHp: 1850, train: 2800, mirc: 4, time: '2h', upg: 80 },
        { lv: 3, hp: 285, deploySpeed: '7.9s', turretHp: 1850, train: 2500, mirc: 3, time: '2h', upg: 70 },
        { lv: 2, hp: 263, deploySpeed: '8.0s', turretHp: 1850, train: 2200, mirc: 2, time: '2h', upg: 60 },
        { lv: 1, hp: 242, deploySpeed: '8.1s', turretHp: 1850, train: 2000, mirc: 1, time: '0', upg: 0 }
    ],

    warships: [
        { no: 1, lv: 14, cap: 45, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 55, token: 98000, tech: 10 },
        { no: 3, lv: 18, cap: 64, token: 118500, tech: 15 },
        { no: 4, lv: 20, cap: 74, token: 169000, tech: 20 },
        { no: 5, lv: 22, cap: 84, token: 225000, tech: 25 }
    ]
};