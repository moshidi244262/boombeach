window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['震爆投弹兵'] = {
    name: '震爆投弹兵',
    img: 'images/兵种/原型部队/Stunner.webp',
    desc: '震爆投弹兵投掷的爆炸物不仅能对建筑造成伤害，还能在短时间内冻结敌方防御武器，为大部队的推进提供强大的控制掩护。',
    // 基础属性网格
    baseStats: [
        { label: '单位大小', val: '5' },
        { label: '训练时间', val: '15m' },
        { label: '移动速度', val: '中等/250' },
        { label: '攻击范围', val: '超长/8' },
        { label: '攻击速度', val: '11.5s' }
    ],
    
    // 定制表头：专门展示震爆时长的专有列
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/战舰武器/常驻战舰武器/Shock_Bomb.webp" style="width:16px;height:16px;border-radius:4px;margin-right:4px;vertical-align:middle;">震爆时长</th>
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
                <td style="color:#0ea5e9; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.stunTime}</td>
                <td style="color:#ca8a04;">${formatNum(lv.train)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.armoryLv)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === '0' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${lv.unlock === '/' || lv.unlock === '0' ? '<span class="val-none">/</span>' : formatNum(lv.unlock)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑（震爆时长不受雕像加成影响）
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Number((item.dmg * (1 + dmgInput / 100)).toFixed(1)) : '/'
        }));
    },

    // 震爆投弹兵 等级数据表
    levels: [
        { lv: 28, hp: 1202, dmg: 12.8, stunTime: '12.5s', train: 99900, armoryLv: 18, time: '3d 3h', unlock: 13300 },
        { lv: 27, hp: 1134, dmg: 12.8, stunTime: '12s', train: 89400, armoryLv: 17, time: '2d 14h', unlock: 10200 },
        { lv: 26, hp: 1070, dmg: 12.8, stunTime: '11.5s', train: 80000, armoryLv: 16, time: '2d 4h', unlock: 7800 },
        { lv: 25, hp: 1010, dmg: 12.8, stunTime: '11.25s', train: 71600, armoryLv: 15, time: '1d 23h', unlock: 5900 },
        { lv: 24, hp: 956, dmg: 12.8, stunTime: '11s', train: 64100, armoryLv: 14, time: '1d 12h', unlock: 4500 },
        { lv: 23, hp: 904, dmg: 12.8, stunTime: '10.5s', train: 57400, armoryLv: 13, time: '1d 6h', unlock: 3500 },
        { lv: 22, hp: 854, dmg: 12.8, stunTime: '10.25s', train: 51400, armoryLv: 12, time: '1d 1h', unlock: 2600 },
        { lv: 21, hp: 806, dmg: 12.8, stunTime: '10s', train: 46000, armoryLv: 11, time: '21h', unlock: 2000 },
        { lv: 20, hp: 760, dmg: 12.8, stunTime: '9.75s', train: 41200, armoryLv: 10, time: '17h', unlock: 1500 },
        { lv: 19, hp: 720, dmg: 12.8, stunTime: '9.5s', train: 36900, armoryLv: 9, time: '15h', unlock: 1200 },
        { lv: 18, hp: 680, dmg: 12.8, stunTime: '9.25s', train: 33000, armoryLv: 8, time: '13h', unlock: 1000 },
        { lv: 17, hp: 638, dmg: 12.8, stunTime: '9s', train: 29500, armoryLv: 7, time: '11h', unlock: 820 },
        { lv: 16, hp: 602, dmg: 12.8, stunTime: '8.75s', train: 26400, armoryLv: 6, time: '10h', unlock: 670 },
        { lv: 15, hp: 568, dmg: 12.8, stunTime: '8.5s', train: 23600, armoryLv: 5, time: '9h', unlock: 540 },
        { lv: 14, hp: 536, dmg: 12.8, stunTime: '8.25s', train: 21100, armoryLv: 4, time: '8h', unlock: 440 },
        { lv: 13, hp: 506, dmg: 12.8, stunTime: '8s', train: 18900, armoryLv: 3, time: '7h', unlock: 360 },
        { lv: 12, hp: 477, dmg: 12.8, stunTime: '7.75s', train: 16900, armoryLv: 2, time: '6h', unlock: 290 },
        { lv: 11, hp: 450, dmg: 12.8, stunTime: '7.5s', train: 15100, armoryLv: 1, time: '5h', unlock: 230 },
        { lv: 10, hp: 425, dmg: 12.8, stunTime: '7.25s', train: 13500, armoryLv: 1, time: '4h', unlock: 190 },
        { lv: 9, hp: 400, dmg: 12.8, stunTime: '7s', train: 12100, armoryLv: 1, time: '4h', unlock: 160 },
        { lv: 8, hp: 378, dmg: 12.8, stunTime: '6.75s', train: 10800, armoryLv: 1, time: '4h', unlock: 140 },
        { lv: 7, hp: 356, dmg: 12.8, stunTime: '6.5s', train: 9700, armoryLv: 1, time: '3h', unlock: 120 },
        { lv: 6, hp: 336, dmg: 12.8, stunTime: '6.25s', train: 8700, armoryLv: 1, time: '3h', unlock: 110 },
        { lv: 5, hp: 317, dmg: 12.8, stunTime: '6s', train: 7800, armoryLv: 1, time: '3h', unlock: 90 },
        { lv: 4, hp: 299, dmg: 12.8, stunTime: '5.75s', train: 7000, armoryLv: 1, time: '2h', unlock: 80 },
        { lv: 3, hp: 282, dmg: 12.8, stunTime: '5.5s', train: 6300, armoryLv: 1, time: '2h', unlock: 70 },
        { lv: 2, hp: 266, dmg: 12.8, stunTime: '5.25s', train: 5600, armoryLv: 1, time: '2h', unlock: 60 },
        { lv: 1, hp: 251, dmg: 12.8, stunTime: '5s', train: 5000, armoryLv: 1, time: '/', unlock: '/' }
    ],

    warships: [
        { no: 1, lv: 14, cap: 28, token: '/', tech: 5 },
        { no: 2, lv: 16, cap: 34, token: '89,000', tech: 10 },
        { no: 3, lv: 18, cap: 40, token: '108,000', tech: 15 },
        { no: 4, lv: 20, cap: 46, token: '153,500', tech: 20 },
        { no: 5, lv: 22, cap: 52, token: '225,000', tech: 25 },
        { no: '合计', lv: '/', cap: '/', token: '575,500', tech: 75 }
    ]
};