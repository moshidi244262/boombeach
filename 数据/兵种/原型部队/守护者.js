window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['守护者'] = {
    name: '守护者',
    img: 'images/兵种/原型部队/Villager17b.webp',
    desc: '守护者能为部队提供一层强大的水晶护盾，能够抵御一定的伤害，保护部队在战场上的生存。',
    // 基础属性
    baseStats: [
        { label: '单位大小', val: '6' },
        { label: '训练时间', val: '10m' },
        { label: '工厂训练时间', val: '30m' },
        { label: '移动速度', val: '快速 (270)' },
        { label: '攻击范围', val: '中 (3)' },
        { label: '攻击速度', val: '4s' },
        { label: '水晶盾持续时间', val: '不掉不灭' }
    ],

    hideDmgCalc: true, // 隐藏攻击力计算器

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">水晶盾生命值</th>
                <th><img src="images/基础/Gold.webp" onerror="this.src='images/大本营/Gold.webp'">训练成本</th>
                <th><img src="images/基础/Icon_resource_scrap.webp" onerror="this.src='images/大本营/Icon_resource_scrap.webp'">升级费用/解锁币</th>
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
                <td style="color:#2563eb; font-weight:500;">${formatNum(lv.shieldHp)}</td>
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
        { lv: 28, hp: 2133, shieldHp: 328, train: 75100, mirc: 28, time: '3d 3h', upg: 13300 },
        { lv: 27, hp: 1970, shieldHp: 298, train: 65600, mirc: 27, time: '2d 14h', upg: 10200 },
        { lv: 26, hp: 1820, shieldHp: 271, train: 57300, mirc: 26, time: '2d 4h', upg: 7800 },
        { lv: 25, hp: 1681, shieldHp: 246, train: 50100, mirc: 25, time: '1d 19h', upg: 5900 },
        { lv: 24, hp: 1553, shieldHp: 224, train: 43800, mirc: 24, time: '1d 12h', upg: 4500 },
        { lv: 23, hp: 1434, shieldHp: 204, train: 38300, mirc: 23, time: '1d 6h', upg: 3500 },
        { lv: 22, hp: 1325, shieldHp: 185, train: 33500, mirc: 22, time: '1d 1h', upg: 2600 },
        { lv: 21, hp: 1223, shieldHp: 168, train: 29300, mirc: 21, time: '21h', upg: 2000 },
        { lv: 20, hp: 1130, shieldHp: 153, train: 25600, mirc: 20, time: '17h', upg: 1500 },
        { lv: 19, hp: 1044, shieldHp: 139, train: 22400, mirc: 19, time: '15h', upg: 1200 },
        { lv: 18, hp: 964, shieldHp: 126, train: 19600, mirc: 18, time: '13h', upg: 1000 },
        { lv: 17, hp: 891, shieldHp: 115, train: 17100, mirc: 17, time: '11h', upg: 820 },
        { lv: 16, hp: 823, shieldHp: 104, train: 14900, mirc: 16, time: '10h', upg: 670 },
        { lv: 15, hp: 760, shieldHp: 95, train: 13000, mirc: 15, time: '9h', upg: 540 },
        { lv: 14, hp: 702, shieldHp: 86, train: 11400, mirc: 14, time: '8h', upg: 440 },
        { lv: 13, hp: 648, shieldHp: 78, train: 10000, mirc: 13, time: '7h', upg: 360 },
        { lv: 12, hp: 599, shieldHp: 71, train: 8700, mirc: 12, time: '6h', upg: 290 },
        { lv: 11, hp: 553, shieldHp: 65, train: 7600, mirc: 11, time: '5h', upg: 230 },
        { lv: 10, hp: 511, shieldHp: 59, train: 6600, mirc: 10, time: '4h', upg: 190 },
        { lv: 9, hp: 472, shieldHp: 54, train: 5800, mirc: 9, time: '4h', upg: 160 },
        { lv: 8, hp: 436, shieldHp: 49, train: 5100, mirc: 8, time: '4h', upg: 140 },
        { lv: 7, hp: 403, shieldHp: 44, train: 4500, mirc: 7, time: '3h', upg: 120 },
        { lv: 6, hp: 372, shieldHp: 40, train: 3900, mirc: 6, time: '3h', upg: 110 },
        { lv: 5, hp: 343, shieldHp: 36, train: 3400, mirc: 5, time: '3h', upg: 90 },
        { lv: 4, hp: 317, shieldHp: 33, train: 3000, mirc: 4, time: '2h', upg: 80 },
        { lv: 3, hp: 293, shieldHp: 30, train: 2600, mirc: 3, time: '2h', upg: 70 },
        { lv: 2, hp: 271, shieldHp: 27, train: 2300, mirc: 2, time: '2h', upg: 60 },
        { lv: 1, hp: 250, shieldHp: 25, train: 2000, mirc: 1, time: '0', upg: 0 }
    ],

    warships: [
        { no: 1, lv: 14, cap: 45, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 55, token: 98000, tech: 10 },
        { no: 3, lv: 18, cap: 64, token: 118500, tech: 15 },
        { no: 4, lv: 20, cap: 74, token: 169000, tech: 20 },
        { no: 5, lv: 22, cap: 84, token: 225000, tech: 25 }
    ]
};