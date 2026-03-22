window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['火炮'] = {
    name: '火炮',
    img: 'images/战舰武器/常驻战舰武器/Artillery_new.webp',
    desc: '火炮可以向岛上的任意目标发射一枚强大的炮弹。在进攻时，将其用来摧毁关键的防御建筑，或是引爆危险的地雷区都是绝佳的选择！',
    
    // 隐藏计算器：火炮伤害固定，不受神像加成
    hideHpCalc: true,
    hideDmgCalc: true, 

    // 基础属性网格（只保留火炮特有的范围数据）
    baseStats: [
        { label: '爆炸半径', val: '0.49' },
        { label: '对部队的爆炸半径', val: '1.5' }
    ],
    
    // ==========================================
    // 专属排版定制区块
    // ==========================================

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Damage.webp">伤害</th>
                <th><img src="images/基础/Gold.webp">升级成本</th>
                <th><img src="images/基础/Menu_icon_research.webp">研究所</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/Icon_info_xp.webp">经验</th>
            </tr>
        </thead>
    `,

    // 移除了排版中的加成高亮逻辑，直接渲染原数据
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.gd)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.mirc)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    // 直接返回原始数据，不再附加伤害计算
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({ ...item }));
    },

    // 火炮等级数据表 (28至1级倒序排列)
    levels: [
        { lv: 28, dmg: 10520, gd: 9500000, mirc: 28, time: '2d 23h', diamond: 2585, ticket: 284, exp: 91 },
        { lv: 27, dmg: 9652, gd: 8700000, mirc: 27, time: '2d 21h', diamond: 2303, ticket: 276, exp: 89 },
        { lv: 26, dmg: 8855, gd: 8000000, mirc: 26, time: '2d 19h', diamond: 2314, ticket: 268, exp: 87 },
        { lv: 25, dmg: 8124, gd: 7400000, mirc: 25, time: '2d 17h', diamond: 2214, ticket: 260, exp: 85 },
        { lv: 24, dmg: 7504, gd: 6900000, mirc: 24, time: '2d 15h', diamond: 2116, ticket: 252, exp: 85 },
        { lv: 23, dmg: 6884, gd: 6400000, mirc: 23, time: '2d 13h', diamond: 2018, ticket: 244, exp: 85 },
        { lv: 22, dmg: 6264, gd: 5900000, mirc: 21, time: '2d 11h', diamond: 1919, ticket: 236, exp: 85 },
        { lv: 21, dmg: 5644, gd: 5400000, mirc: 20, time: '2d 9h', diamond: 1816, ticket: 228, exp: 83 },
        { lv: 20, dmg: 5084, gd: 4700000, mirc: 19, time: '2d 8h', diamond: 1682, ticket: 224, exp: 81 },
        { lv: 19, dmg: 4580, gd: 4000000, mirc: 18, time: '2d 5h', diamond: 1534, ticket: 212, exp: 79 },
        { lv: 18, dmg: 4127, gd: 3400000, mirc: 17, time: '2d 3h', diamond: 1401, ticket: 204, exp: 77 },
        { lv: 17, dmg: 3718, gd: 3040000, mirc: 16, time: '1d 22h', diamond: 1291, ticket: 184, exp: 73 },
        { lv: 16, dmg: 3349, gd: 2640000, mirc: 15, time: '1d 22h', diamond: 1210, ticket: 184, exp: 73 },
        { lv: 15, dmg: 3017, gd: 1920000, mirc: 14, time: '1d 18h', diamond: 1021, ticket: 168, exp: 70 },
        { lv: 14, dmg: 2718, gd: 1600000, mirc: 13, time: '1d 9h', diamond: 877, ticket: 132, exp: 62 },
        { lv: 13, dmg: 2449, gd: 1410000, mirc: 12, time: '1d 9h', diamond: 829, ticket: 132, exp: 62 },
        { lv: 12, dmg: 2206, gd: 1030000, mirc: 11, time: '1d 4h', diamond: 691, ticket: 112, exp: 57 },
        { lv: 11, dmg: 1988, gd: 760000, mirc: 10, time: '1d', diamond: 583, ticket: 96, exp: 51 },
        { lv: 10, dmg: 1791, gd: 680000, mirc: 9, time: '22h', diamond: 543, ticket: 88, exp: 48 },
        { lv: 9, dmg: 1613, gd: 580000, mirc: 8, time: '22h', diamond: 512, ticket: 88, exp: 48 },
        { lv: 8, dmg: 1453, gd: 400000, mirc: 7, time: '19h', diamond: 427, ticket: 76, exp: 45 },
        { lv: 7, dmg: 1309, gd: 252000, mirc: 6, time: '15h', diamond: 337, ticket: 60, exp: 40 },
        { lv: 6, dmg: 1180, gd: 150000, mirc: 5, time: '11h', diamond: 255, ticket: 44, exp: 34 },
        { lv: 5, dmg: 1063, gd: 88000, mirc: 4, time: '7h', diamond: 182, ticket: 28, exp: 28 },
        { lv: 4, dmg: 957, gd: 44000, mirc: 3, time: '5h', diamond: 127, ticket: 20, exp: 24 },
        { lv: 3, dmg: 862, gd: 20900, mirc: 2, time: '3h', diamond: 81, ticket: 12, exp: 17 },
        { lv: 2, dmg: 777, gd: 10400, mirc: 1, time: '2h', diamond: 56, ticket: 8, exp: 14 },
        { lv: 1, dmg: 700, gd: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],

    // 动态追加的模块 (航母专属数据表)
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table" style="min-width:500px;">
                <thead>
                    <tr>
                        <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">序号</th>
                        <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">航母等级</th>
                        <th><img src="images/基础/Icon_Upgrade_Token.webp" onerror="this.src='images/大本营/Icon_Upgrade_Token.webp'">升级令牌</th>
                        <th><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/大本营/Icon_info_xp.webp'">科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>8</td><td style="color:#ca8a04;"><span class="val-none">/</span></td><td>5</td></tr>
                    <tr><td>2</td><td>12</td><td style="color:#ca8a04;">69,500</td><td>10</td></tr>
                    <tr><td>3</td><td>16</td><td style="color:#ca8a04;">101,500</td><td>15</td></tr>
                    <tr><td>4</td><td>18</td><td style="color:#ca8a04;">525,000</td><td>20</td></tr>
                    <tr><td>5</td><td>22</td><td style="color:#ca8a04;">1,200,000</td><td>25</td></tr>
                    <tr style="background:rgba(0,0,0,0.02); font-weight:bold;">
                        <td colspan="2">合计</td><td style="color:#ca8a04;">1,896,000</td><td>75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};