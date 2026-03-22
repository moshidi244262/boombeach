window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['烟雾弹'] = {
    name: '烟雾弹',
    img: 'images/战舰武器/常驻战舰武器/SmokeScreen.webp',
    desc: '烟雾弹能产生一片浓密的烟雾，掩护其中的部队免受攻击，但部队在烟雾内也无法开火。完美适用于绕后偷本等高级战术！',
    
    // 无血量无伤害，双双隐藏计算器
    hideHpCalc: true, 
    hideDmgCalc: true, 

    baseStats: [
        { label: '半径', val: '4.3' }
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
        { lv: 8, duration: '15s', gd: 5400000, mirc: 25, time: '1d 19h', diamond: 1717, ticket: 172, exp: 71 },
        { lv: 7, duration: '14s', gd: 4600000, mirc: 24, time: '1d 18h', diamond: 1566, ticket: 168, exp: 70 },
        { lv: 6, duration: '13s', gd: 3800000, mirc: 18, time: '1d 17h', diamond: 1407, ticket: 164, exp: 69 },
        { lv: 5, duration: '12s', gd: 3000000, mirc: 17, time: '1d 16h', diamond: 1242, ticket: 160, exp: 68 },
        { lv: 4, duration: '11s', gd: 2250000, mirc: 16, time: '1d 11h', diamond: 1044, ticket: 140, exp: 64 },
        { lv: 3, duration: '10s', gd: 1950000, mirc: 15, time: '1d 11h', diamond: 976, ticket: 140, exp: 64 },
        { lv: 2, duration: '9s', gd: 1350000, mirc: 14, time: '1d 8h', diamond: 807, ticket: 128, exp: 61 },
        { lv: 1, duration: '8s', gd: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
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
                    <tr><td>1</td><td>1</td><td style="color:#ca8a04;"><span class="val-none">/</span></td><td>5</td></tr>
                    <tr><td>2</td><td>2</td><td style="color:#ca8a04;">123,000</td><td>10</td></tr>
                    <tr><td>3</td><td>4</td><td style="color:#ca8a04;">149,000</td><td>15</td></tr>
                    <tr><td>4</td><td>5</td><td style="color:#ca8a04;">163,500</td><td>20</td></tr>
                    <tr><td>5</td><td>6</td><td style="color:#ca8a04;">180,000</td><td>25</td></tr>
                    <tr style="background:rgba(0,0,0,0.02); font-weight:bold;">
                        <td colspan="2">合计</td><td style="color:#ca8a04;">615,500</td><td>75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};