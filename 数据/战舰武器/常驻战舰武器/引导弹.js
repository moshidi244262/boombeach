window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['引导弹'] = {
    name: '引导弹',
    img: 'images/战舰武器/常驻战舰武器/Flare.webp',
    desc: '引导弹可以引导你的部队前往指定位置或攻击特定目标。巧妙地使用引导弹绕开敌人的重火力网，是走向胜利的关键！',
    
    hideHpCalc: true,
    hideDmgCalc: true, 

    baseStats: [], // 引导弹无特殊基础属性说明

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
        { lv: 7, duration: '30s', gd: 4200000, mirc: 18, time: '1d 17h', diamond: 1484, ticket: 164, exp: 69 },
        { lv: 6, duration: '25s', gd: 2600000, mirc: 15, time: '1d 11h', diamond: 1120, ticket: 140, exp: 64 },
        { lv: 5, duration: '20s', gd: 1080000, mirc: 12, time: '1d 2h', diamond: 689, ticket: 104, exp: 54 },
        { lv: 4, duration: '15s', gd: 350000, mirc: 9, time: '17h', diamond: 390, ticket: 68, exp: 43 },
        { lv: 3, duration: '11s', gd: 105000, mirc: 5, time: '8h', diamond: 203, ticket: 32, exp: 30 },
        { lv: 2, duration: '8s', gd: 6300, mirc: 1, time: '2h', diamond: 52, ticket: 8, exp: 14 },
        { lv: 1, duration: '6s', gd: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
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
                    <tr><td>2</td><td>2</td><td style="color:#ca8a04;">84,000</td><td>10</td></tr>
                    <tr><td>3</td><td>3</td><td style="color:#ca8a04;">92,000</td><td>15</td></tr>
                    <tr><td>4</td><td>5</td><td style="color:#ca8a04;">111,500</td><td>20</td></tr>
                    <tr><td>5</td><td>7</td><td style="color:#ca8a04;">135,000</td><td>25</td></tr>
                    <tr style="background:rgba(0,0,0,0.02); font-weight:bold;">
                        <td colspan="2">合计</td><td style="color:#ca8a04;">442,500</td><td>75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};