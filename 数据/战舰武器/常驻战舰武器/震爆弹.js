window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['震爆弹'] = {
    name: '震爆弹',
    img: 'images/战舰武器/常驻战舰武器/Shock_Bomb.webp',
    desc: '震爆弹可以暂时冻结目标区域内的所有建筑，使其无法攻击。是掩护部队强行突破或摧毁关键防御的利器！',
    
    hideHpCalc: true,
    hideDmgCalc: true, 

    baseStats: [
        { label: '震爆半径', val: '3.2' }
    ],

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Stopwatch.webp">持续时间</th>
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
                <td style="color:#16a34a; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.duration}</td>
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
        { lv: 8, duration: '12s', gd: 7300000, mirc: 27, time: '3d 1h', diamond: 2097, ticket: 292, exp: 93 },
        { lv: 7, duration: '11s', gd: 5500000, mirc: 23, time: '2d 17h', diamond: 1890, ticket: 260, exp: 87 },
        { lv: 6, duration: '10s', gd: 3700000, mirc: 18, time: '2d 9h', diamond: 1501, ticket: 228, exp: 81 },
        { lv: 5, duration: '9s', gd: 2180000, mirc: 15, time: '2d 1h', diamond: 1132, ticket: 196, exp: 76 },
        { lv: 4, duration: '8s', gd: 880000, mirc: 11, time: '1d 6h', diamond: 668, ticket: 120, exp: 60 },
        { lv: 3, duration: '7s', gd: 245000, mirc: 7, time: '21h', diamond: 389, ticket: 84, exp: 47 },
        { lv: 2, duration: '6s', gd: 66000, mirc: 4, time: '8h', diamond: 178, ticket: 32, exp: 30 },
        { lv: 1, duration: '5s', gd: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
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
                    <tr><td>1</td><td>2</td><td style="color:#ca8a04;"><span class="val-none">/</span></td><td>5</td></tr>
                    <tr><td>2</td><td>3</td><td style="color:#ca8a04;">146,000</td><td>10</td></tr>
                    <tr><td>3</td><td>4</td><td style="color:#ca8a04;">161,000</td><td>15</td></tr>
                    <tr><td>4</td><td>5</td><td style="color:#ca8a04;">177,500</td><td>20</td></tr>
                    <tr><td>5</td><td>6</td><td style="color:#ca8a04;">195,000</td><td>25</td></tr>
                    <tr style="background:rgba(0,0,0,0.02); font-weight:bold;">
                        <td colspan="2">合计</td><td style="color:#ca8a04;">679,500</td><td>75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};