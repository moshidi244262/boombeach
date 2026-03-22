window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['西瓜炮手'] = {
    name: '西瓜炮手',
    img: 'images/兵种/原型部队/Melon_BombardierB.webp',
    desc: '西瓜炮手不仅拥有超长射程，丢出的西瓜还能在落地时炸开，对周围一小片区域的建筑造成溅射伤害。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '8' },
        { label: '训练时间', val: '15m' },
        { label: '移动速度', val: '中等/200' },
        { label: '攻击范围', val: '超长/12' },
        { label: '攻击速度', val: '2.2s' },
        { label: '飞溅半径', val: '1格' } // 西瓜炮手特有属性
    ],
    
    // 定制表头：增加了一列“弹片伤害”
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/基础/Damage.webp">每次射击伤害</th>
                <th><img src="images/基础/Damage.webp">弹片伤害</th>
                <th><img src="images/基础/Gold.webp">训练成本</th>
                <th><img src="images/基础/Menu_icon_research.webp">研究所等级</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Icon_resource_scrap.webp">解锁费用</th>
            </tr>
        </thead>
    `,

    // 定制每一行的渲染逻辑（包含特有的弹片伤害列）
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.perDmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#ef4444; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.splashDmg)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.train)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.armoryLv)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${lv.unlock === '/' || lv.unlock === '0' ? '<span class="val-none">/</span>' : formatNum(lv.unlock)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑（需要同时加成计算 弹片伤害 splashDmg）
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Number((item.perDmg * (1 + dmgInput / 100)).toFixed(1)) : '/',
            splashDmg: item.splashDmg !== '/' ? Number((item.splashDmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 西瓜炮手 等级数据表
    levels: [
        { lv: 28, hp: 600, dmg: 5868, perDmg: 3227.4, splashDmg: 3227.4, train: 126900, armoryLv: 28, time: '3d 3h', unlock: 20000 },
        { lv: 27, hp: 575, dmg: 5532, perDmg: 3042.6, splashDmg: 3042.6, train: 117200, armoryLv: 27, time: '2d 14h', unlock: 15300 },
        { lv: 26, hp: 550, dmg: 5216, perDmg: 2868.8, splashDmg: 2868.8, train: 108200, armoryLv: 26, time: '2d 4h', unlock: 11700 },
        { lv: 25, hp: 540, dmg: 4920, perDmg: 2706, splashDmg: 2706, train: 99900, armoryLv: 25, time: '1d 19h', unlock: 8900 },
        { lv: 24, hp: 530, dmg: 4640, perDmg: 2552, splashDmg: 2552, train: 92300, armoryLv: 24, time: '1d 12h', unlock: 6800 },
        { lv: 23, hp: 520, dmg: 4372, perDmg: 2404.6, splashDmg: 2404.6, train: 85200, armoryLv: 23, time: '1d 6h', unlock: 5200 },
        { lv: 22, hp: 510, dmg: 4124, perDmg: 2268.2, splashDmg: 2268.2, train: 78800, armoryLv: 22, time: '1d 1h', unlock: 4000 },
        { lv: 21, hp: 500, dmg: 3888, perDmg: 2138.4, splashDmg: 2138.4, train: 72800, armoryLv: 21, time: '21h', unlock: 3000 },
        { lv: 20, hp: 490, dmg: 3668, perDmg: 2017.4, splashDmg: 2017.4, train: 67200, armoryLv: 20, time: '17h', unlock: 2300 },
        { lv: 19, hp: 480, dmg: 3456, perDmg: 1900.8, splashDmg: 1900.8, train: 41400, armoryLv: 19, time: '15h', unlock: 1900 },
        { lv: 18, hp: 470, dmg: 3260, perDmg: 1793, splashDmg: 1793, train: 38200, armoryLv: 18, time: '13h', unlock: 1500 },
        { lv: 17, hp: 460, dmg: 3072, perDmg: 1689.6, splashDmg: 1689.6, train: 35300, armoryLv: 17, time: '11h', unlock: 1200 },
        { lv: 16, hp: 450, dmg: 2900, perDmg: 1595, splashDmg: 1595, train: 32600, armoryLv: 16, time: '10h', unlock: 1000 },
        { lv: 15, hp: 440, dmg: 2732, perDmg: 1502.6, splashDmg: 1502.6, train: 30100, armoryLv: 15, time: '9h', unlock: 810 },
        { lv: 14, hp: 430, dmg: 2576, perDmg: 1416.8, splashDmg: 1416.8, train: 27800, armoryLv: 14, time: '8h', unlock: 660 },
        { lv: 13, hp: 420, dmg: 2428, perDmg: 1335.4, splashDmg: 1335.4, train: 25700, armoryLv: 13, time: '7h', unlock: 530 },
        { lv: 12, hp: 410, dmg: 2292, perDmg: 1260.6, splashDmg: 1260.6, train: 23700, armoryLv: 12, time: '6h', unlock: 430 },
        { lv: 11, hp: 400, dmg: 2160, perDmg: 1188, splashDmg: 1188, train: 21900, armoryLv: 11, time: '5h', unlock: 350 },
        { lv: 10, hp: 390, dmg: 2036, perDmg: 1119.8, splashDmg: 1119.8, train: 20200, armoryLv: 10, time: '4h', unlock: 290 },
        { lv: 9, hp: 380, dmg: 1920, perDmg: 1056, splashDmg: 1056, train: 18700, armoryLv: 9, time: '4h', unlock: 250 },
        { lv: 8, hp: 370, dmg: 1812, perDmg: 996.6, splashDmg: 996.6, train: 17300, armoryLv: 8, time: '4h', unlock: 210 },
        { lv: 7, hp: 360, dmg: 1708, perDmg: 939.4, splashDmg: 939.4, train: 16000, armoryLv: 7, time: '3h', unlock: 180 },
        { lv: 6, hp: 350, dmg: 1612, perDmg: 886.6, splashDmg: 886.6, train: 14800, armoryLv: 6, time: '3h', unlock: 160 },
        { lv: 5, hp: 340, dmg: 1520, perDmg: 836, splashDmg: 836, train: 13700, armoryLv: 5, time: '3h', unlock: 140 },
        { lv: 4, hp: 330, dmg: 1432, perDmg: 787.6, splashDmg: 787.6, train: 12700, armoryLv: 4, time: '2h', unlock: 120 },
        { lv: 3, hp: 320, dmg: 1348, perDmg: 741.4, splashDmg: 741.4, train: 11700, armoryLv: 3, time: '2h', unlock: 100 },
        { lv: 2, hp: 310, dmg: 1272, perDmg: 699.6, splashDmg: 699.6, train: 10800, armoryLv: 2, time: '2h', unlock: 90 },
        { lv: 1, hp: 300, dmg: 1200, perDmg: 660, splashDmg: 660, train: 10000, armoryLv: 1, time: '/', unlock: '/' }
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