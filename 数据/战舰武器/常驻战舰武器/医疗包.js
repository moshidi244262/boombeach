window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['医疗包'] = {
    name: '医疗包',
    img: 'images/战舰武器/常驻战舰武器/Medkit.webp',
    desc: '医疗包可以在一段时间内持续恢复范围内部队的生命值。在部队顶着火力推进或踩到地雷时，丢一个医疗包能有效减少伤亡。',
    
    hideHpCalc: true,
    hideDmgCalc: true, 

    baseStats: [],

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Heal_Iconr.webp">脉冲治疗</th>
                <th><img src="images/基础/Heal_Iconr.webp">每秒治疗</th>
                <th><img src="images/基础/Heal_Iconr.webp">合计治疗</th>
                <th><img src="images/基础/Gold.webp">升级成本</th>
                <th><img src="images/基础/Menu_icon_research.webp">研究所</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/Icon_info_xp.webp">经验</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:#16a34a; font-weight:bold;">${formatNum(lv.pulse)}</td>
                <td style="color:#16a34a; font-weight:bold;">${formatNum(lv.perSec)}</td>
                <td style="color:#16a34a; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.total)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.gd)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.mirc)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' || lv.time === 'NaN' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({ ...item }));
    },

    levels: [
        { lv: 28, pulse: 64, perSec: 213.3, total: 1600, gd: 9600000, mirc: 28, time: '3d 18h', diamond: 2705, ticket: 360, exp: 108 },
        { lv: 27, pulse: 60, perSec: 200, total: 1500, gd: 9000000, mirc: 27, time: '3d 16h', diamond: 2444, ticket: 352, exp: 106 },
        { lv: 26, pulse: 56, perSec: 186.6, total: 1400, gd: 8500000, mirc: 26, time: '3d 14h', diamond: 2509, ticket: 344, exp: 104 },
        { lv: 25, pulse: 52, perSec: 173.3, total: 1300, gd: 8100000, mirc: 25, time: '3d 12h', diamond: 2448, ticket: 336, exp: 102 },
        { lv: 24, pulse: 49, perSec: 163.3, total: 1225, gd: 7600000, mirc: 24, time: '3d 10h', diamond: 2356, ticket: 328, exp: 100 },
        { lv: 23, pulse: 46, perSec: 153.3, total: 1150, gd: 7100000, mirc: 23, time: '3d 8h', diamond: 2261, ticket: 320, exp: 98 },
        { lv: 22, pulse: 43, perSec: 143.3, total: 1075, gd: 6600000, mirc: 21, time: '3d 6h', diamond: 2165, ticket: 312, exp: 96 },
        { lv: 21, pulse: 40, perSec: 133.3, total: 1000, gd: 6100000, mirc: 20, time: '3d 4h', diamond: 2067, ticket: 304, exp: 94 },
        { lv: 20, pulse: 37, perSec: 123.3, total: 925, gd: 5300000, mirc: 19, time: '3d 1h', diamond: 1906, ticket: 292, exp: 92 },
        { lv: 19, pulse: 34, perSec: 113.3, total: 850, gd: 4500000, mirc: 18, time: '2d 22h', diamond: 1743, ticket: 280, exp: 90 },
        { lv: 18, pulse: 31, perSec: 103.3, total: 775, gd: 3800000, mirc: 17, time: '2d 19h', diamond: 1590, ticket: 268, exp: 88 },
        { lv: 17, pulse: 29, perSec: 96.6, total: 726, gd: 3400000, mirc: 16, time: '2d 22h', diamond: 1463, ticket: 240, exp: 83 },
        { lv: 16, pulse: 27, perSec: 90, total: 675, gd: 2970000, mirc: 15, time: '2d 12h', diamond: 1376, ticket: 240, exp: 83 },
        { lv: 15, pulse: 25, perSec: 83.3, total: 625, gd: 2160000, mirc: 14, time: '2d 6h', diamond: 1162, ticket: 216, exp: 80 },
        { lv: 14, pulse: 23, perSec: 76.6, total: 575, gd: 1800000, mirc: 13, time: '1d 20h', diamond: 1009, ticket: 176, exp: 71 },
        { lv: 13, pulse: 21, perSec: 70, total: 525, gd: 1590000, mirc: 12, time: '1d 20h', diamond: 959, ticket: 176, exp: 71 },
        { lv: 12, pulse: 19, perSec: 63.3, total: 475, gd: 1160000, mirc: 11, time: '1d 13h', diamond: 799, ticket: 148, exp: 66 },
        { lv: 11, pulse: 17, perSec: 56.6, total: 425, gd: 850000, mirc: 10, time: '1d 8h', diamond: 674, ticket: 128, exp: 59 },
        { lv: 10, pulse: 16, perSec: 53.3, total: 400, gd: 760000, mirc: 9, time: '1d 4h', diamond: 616, ticket: 112, exp: 56 },
        { lv: 9, pulse: 15, perSec: 50, total: 375, gd: 650000, mirc: 8, time: '1d 4h', diamond: 584, ticket: 112, exp: 56 },
        { lv: 8, pulse: 14, perSec: 46.6, total: 350, gd: 450000, mirc: 7, time: '1d 1h', diamond: 495, ticket: 100, exp: 52 },
        { lv: 7, pulse: 13, perSec: 43.3, total: 325, gd: 284000, mirc: 6, time: '19h', diamond: 386, ticket: 76, exp: 45 },
        { lv: 6, pulse: 12, perSec: 40, total: 300, gd: 168000, mirc: 5, time: '14h', diamond: 293, ticket: 56, exp: 38 },
        { lv: 5, pulse: 11, perSec: 36.6, total: 275, gd: 99000, mirc: 4, time: '9h', diamond: 211, ticket: 36, exp: 33 },
        { lv: 4, pulse: 10, perSec: 33.3, total: 250, gd: 50000, mirc: 3, time: '7h', diamond: 156, ticket: 28, exp: 26 },
        { lv: 3, pulse: 9, perSec: 30, total: 225, gd: 23800, mirc: 2, time: '4h', diamond: 99, ticket: 16, exp: 20 },
        { lv: 2, pulse: 8, perSec: 26.6, total: 200, gd: 12100, mirc: 1, time: '3h', diamond: 73, ticket: 12, exp: 17 },
        { lv: 1, pulse: 7, perSec: 23.3, total: 175, gd: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
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
                    <tr><td>1</td><td>8</td><td style="color:#ca8a04;"><span class="val-none">/</span></td><td>5</td></tr>
                    <tr><td>2</td><td>12</td><td style="color:#ca8a04;">58,000</td><td>10</td></tr>
                    <tr><td>3</td><td>16</td><td style="color:#ca8a04;">84,500</td><td>15</td></tr>
                    <tr><td>4</td><td>18</td><td style="color:#ca8a04;">102,500</td><td>20</td></tr>
                    <tr><td>5</td><td>22</td><td style="color:#ca8a04;">150,000</td><td>25</td></tr>
                    <tr style="background:rgba(0,0,0,0.02); font-weight:bold;">
                        <td colspan="2">合计</td><td style="color:#ca8a04;">395,000</td><td>75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};