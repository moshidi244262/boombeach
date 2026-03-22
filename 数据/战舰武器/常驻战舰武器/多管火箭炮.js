window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['多管火箭炮'] = {
    name: '多管火箭炮',
    img: 'images/战舰武器/常驻战舰武器/Barrage.webp',
    desc: '多管火箭炮能向目标区域连续发射多枚火箭弹。它的散布范围较广，非常适合清理大片聚集的低血量建筑或大范围的地雷！',
    
    // 隐藏计算器：多管火箭炮伤害固定，不受神像加成
    hideHpCalc: true,
    hideDmgCalc: true, 

    baseStats: [
        { label: '冲击半径', val: '3' },
        { label: '单个导弹爆炸半径', val: '1.49' },
        { label: '对部队爆炸半径', val: '1.8' },
        { label: '射弹数量', val: '15' }
    ],
    
    // ==========================================
    // 专属排版定制区块
    // ==========================================

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Damage.webp">单个导弹伤害</th>
                <th><img src="images/基础/Damage.webp">总伤害</th>
                <th><img src="images/基础/Gold.webp">升级成本</th>
                <th><img src="images/基础/Menu_icon_research.webp">研究所</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/Icon_info_xp.webp">经验</th>
            </tr>
        </thead>
    `,

    // 移除了加成高亮逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td style="color:#b91c1c; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.totalDmg)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.gd)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.mirc)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    // 直接返回原始数据
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({ ...item }));
    },

    levels: [
        { lv: 24, dmg: 1880, totalDmg: 23700, gd: 10500000, mirc: 28, time: '3d 19h', diamond: 2866, ticket: 364, exp: 109 },
        { lv: 23, dmg: 1450, totalDmg: 21750, gd: 10000000, mirc: 27, time: '3d 17h', diamond: 2601, ticket: 356, exp: 107 },
        { lv: 22, dmg: 1330, totalDmg: 19950, gd: 9500000, mirc: 26, time: '3d 15h', diamond: 2672, ticket: 348, exp: 105 },
        { lv: 21, dmg: 1221, totalDmg: 18315, gd: 9000000, mirc: 25, time: '3d 13h', diamond: 2599, ticket: 340, exp: 103 },
        { lv: 20, dmg: 1134, totalDmg: 17010, gd: 8500000, mirc: 24, time: '3d 11h', diamond: 2504, ticket: 332, exp: 101 },
        { lv: 19, dmg: 1047, totalDmg: 15705, gd: 8000000, mirc: 23, time: '3d 9h', diamond: 2415, ticket: 324, exp: 99 },
        { lv: 18, dmg: 960, totalDmg: 14400, gd: 7500000, mirc: 22, time: '3d 7h', diamond: 2319, ticket: 316, exp: 97 },
        { lv: 17, dmg: 873, totalDmg: 13095, gd: 7000000, mirc: 21, time: '3d 5h', diamond: 2225, ticket: 308, exp: 95 },
        { lv: 16, dmg: 794, totalDmg: 11910, gd: 6400000, mirc: 20, time: '3d 3h', diamond: 2111, ticket: 300, exp: 93 },
        { lv: 15, dmg: 722, totalDmg: 10830, gd: 5600000, mirc: 19, time: '3d 1h', diamond: 1959, ticket: 292, exp: 92 },
        { lv: 14, dmg: 656, totalDmg: 9840, gd: 4800000, mirc: 18, time: '2d 22h', diamond: 1797, ticket: 280, exp: 90 },
        { lv: 13, dmg: 596, totalDmg: 8940, gd: 4500000, mirc: 17, time: '2d 19h', diamond: 1723, ticket: 268, exp: 88 },
        { lv: 12, dmg: 542, totalDmg: 8130, gd: 4000000, mirc: 17, time: '2d 19h', diamond: 1630, ticket: 268, exp: 88 },
        { lv: 11, dmg: 493, totalDmg: 7395, gd: 3600000, mirc: 16, time: '2d 12h', diamond: 1504, ticket: 240, exp: 83 },
        { lv: 10, dmg: 448, totalDmg: 6720, gd: 3140000, mirc: 15, time: '2d 12h', diamond: 1413, ticket: 240, exp: 83 },
        { lv: 9, dmg: 407, totalDmg: 6105, gd: 2280000, mirc: 14, time: '2d 6h', diamond: 1188, ticket: 216, exp: 80 },
        { lv: 8, dmg: 370, totalDmg: 5550, gd: 1900000, mirc: 13, time: '1d 20h', diamond: 1031, ticket: 176, exp: 71 },
        { lv: 7, dmg: 337, totalDmg: 5055, gd: 1680000, mirc: 12, time: '1d 20h', diamond: 981, ticket: 176, exp: 71 },
        { lv: 6, dmg: 306, totalDmg: 4590, gd: 1230000, mirc: 11, time: '1d 13h', diamond: 817, ticket: 148, exp: 66 },
        { lv: 5, dmg: 278, totalDmg: 4170, gd: 900000, mirc: 10, time: '1d 8h', diamond: 689, ticket: 128, exp: 59 },
        { lv: 4, dmg: 253, totalDmg: 3795, gd: 800000, mirc: 9, time: '1d 4h', diamond: 628, ticket: 112, exp: 56 },
        { lv: 3, dmg: 230, totalDmg: 3450, gd: 640000, mirc: 8, time: '1d 4h', diamond: 582, ticket: 112, exp: 56 },
        { lv: 2, dmg: 209, totalDmg: 3135, gd: 360000, mirc: 7, time: '1d 1h', diamond: 466, ticket: 100, exp: 52 },
        { lv: 1, dmg: 190, totalDmg: 2850, gd: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
    ],

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
                    <tr><td>1</td><td>5</td><td style="color:#ca8a04;"><span class="val-none">/</span></td><td>5</td></tr>
                    <tr><td>2</td><td>9</td><td style="color:#ca8a04;">76,500</td><td>10</td></tr>
                    <tr><td>3</td><td>12</td><td style="color:#ca8a04;">101,500</td><td>15</td></tr>
                    <tr><td>4</td><td>15</td><td style="color:#ca8a04;">875,000</td><td>20</td></tr>
                    <tr><td>5</td><td>18</td><td style="color:#ca8a04;">1,350,000</td><td>25</td></tr>
                    <tr style="background:rgba(0,0,0,0.02); font-weight:bold;">
                        <td colspan="2">合计</td><td style="color:#ca8a04;">2,403,000</td><td>75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};