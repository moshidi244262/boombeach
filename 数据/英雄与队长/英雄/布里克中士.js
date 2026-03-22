window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['布里克中士'] = {
    name: '布里克中士',
    img: 'images/英雄与队长/英雄/Sgt_Brick.webp',
    desc: '布里克中士是一位出色的辅助与爆发型英雄。她能够鼓舞部队士气，提供防御加成，并使用集束榴弹造成成吨的范围伤害。',
    baseStats: [
        { label: '移动速度', val: '中等/220' },
        { label: '攻击范围', val: '中程/7.2' },
        { label: '进攻速度', val: '0.075s' },
        { label: '要求大本等级', val: '4' },
        { label: '英雄天赋', val: '榴弹狂人' }
    ],

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/基础/Damage.webp">单发伤害</th>
                <th><img src="images/基础/GoldStar.webp">榴弹伤害</th>
                <th><img src="images/基础/Gold.webp">升级费用</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">要求大本</th>
            </tr>
        </thead>
    `,

    // 布里克特有计算逻辑：单发伤害和榴弹伤害也受攻击神像加成
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? (item.perDmg * (1 + dmgInput / 100)).toFixed(2) : '/',
            perDmg1: item.perDmg1 !== '/' ? Math.round(item.perDmg1 * (1 + dmgInput / 100)) : '/'
        }));
    },

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${lv.perDmg}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.perDmg1)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.cw)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    levels: [
        { lv: 27, hp: 7670, dmg: 1274, perDmg: 95.7, perDmg1: 2600, cw: 11313000, time: '2d 4h', diamond: 2727, ticket: 208, reqLv: 28 },
        { lv: 26, hp: 7100, dmg: 1170, perDmg: 87.75, perDmg1: 2390, cw: 10285000, time: '2d 1h', diamond: 2447, ticket: 196, reqLv: 27 },
        { lv: 25, hp: 6580, dmg: 1070, perDmg: 80.25, perDmg1: 2190, cw: 9310000, time: '1d 23h', diamond: 2390, ticket: 188, reqLv: 26 },
        { lv: 24, hp: 6090, dmg: 982, perDmg: 73.65, perDmg1: 2010, cw: 8500000, time: '1d 21h', diamond: 2249, ticket: 180, reqLv: 25 },
        { lv: 23, hp: 5560, dmg: 900, perDmg: 67.5, perDmg1: 1850, cw: 7690000, time: '1d 19h', diamond: 2107, ticket: 172, reqLv: 22 },
        { lv: 22, hp: 5030, dmg: 814, perDmg: 61.05, perDmg1: 1670, cw: 6900000, time: '1d 17h', diamond: 1960, ticket: 164, reqLv: 22 },
        { lv: 21, hp: 4660, dmg: 740, perDmg: 55.5, perDmg1: 1550, cw: 5780000, time: '1d 15h', diamond: 1757, ticket: 56, reqLv: 21 },
        { lv: 20, hp: 4320, dmg: 673, perDmg: 50.46, perDmg1: 1430, cw: 5080000, time: '1d 13h', diamond: 1615, ticket: 148, reqLv: 20 },
        { lv: 19, hp: 4000, dmg: 612, perDmg: 45.9, perDmg1: 1320, cw: 4100000, time: '1d 10h', diamond: 1412, ticket: 136, reqLv: 19 },
        { lv: 18, hp: 3700, dmg: 556, perDmg: 41.7, perDmg1: 1220, cw: 4100000, time: '1d 10h', diamond: 1412, ticket: 136, reqLv: 18 },
        { lv: 17, hp: 3430, dmg: 505, perDmg: 37.87, perDmg1: 1130, cw: 3020000, time: '1d 7h', diamond: 1173, ticket: 124, reqLv: 17 },
        { lv: 16, hp: 3170, dmg: 459, perDmg: 34.42, perDmg1: 1040, cw: 2160000, time: '1d 3h', diamond: 958, ticket: 108, reqLv: 16 },
        { lv: 15, hp: 2940, dmg: 418, perDmg: 31.35, perDmg1: 960, cw: 2160000, time: '1d 3h', diamond: 958, ticket: 108, reqLv: 16 },
        { lv: 14, hp: 2720, dmg: 380, perDmg: 28.5, perDmg1: 890, cw: 2160000, time: '1d 3h', diamond: 958, ticket: 108, reqLv: 15 },
        { lv: 13, hp: 2520, dmg: 345, perDmg: 25.87, perDmg1: 820, cw: 1652000, time: '1d 1h', diamond: 823, ticket: 100, reqLv: 14 },
        { lv: 12, hp: 2330, dmg: 314, perDmg: 23.55, perDmg1: 760, cw: 1134000, time: '22h', diamond: 669, ticket: 88, reqLv: 13 },
        { lv: 11, hp: 2160, dmg: 285, perDmg: 21.31, perDmg1: 700, cw: 912000, time: '20h', diamond: 590, ticket: 80, reqLv: 12 },
        { lv: 10, hp: 2000, dmg: 259, perDmg: 19.42, perDmg1: 650, cw: 912000, time: '20h', diamond: 590, ticket: 80, reqLv: 11 },
        { lv: 9, hp: 1850, dmg: 236, perDmg: 17.7, perDmg1: 600, cw: 643000, time: '18h', diamond: 495, ticket: 72, reqLv: 10 },
        { lv: 8, hp: 1710, dmg: 214, perDmg: 16.05, perDmg1: 560, cw: 643000, time: '18h', diamond: 495, ticket: 72, reqLv: 10 },
        { lv: 7, hp: 1590, dmg: 195, perDmg: 14.62, perDmg1: 510, cw: 432000, time: '16h', diamond: 411, ticket: 64, reqLv: 9 },
        { lv: 6, hp: 1470, dmg: 177, perDmg: 13.27, perDmg1: 470, cw: 248000, time: '13h', diamond: 315, ticket: 52, reqLv: 8 },
        { lv: 5, hp: 1360, dmg: 161, perDmg: 12.07, perDmg1: 440, cw: 156000, time: '11h', diamond: 258, ticket: 44, reqLv: 7 },
        { lv: 4, hp: 1260, dmg: 146, perDmg: 10.95, perDmg1: 410, cw: 82000, time: '9h', diamond: 201, ticket: 36, reqLv: 6 },
        { lv: 3, hp: 1170, dmg: 133, perDmg: 9.97, perDmg1: 370, cw: 38000, time: '7h', diamond: 147, ticket: 28, reqLv: 5 },
        { lv: 2, hp: 1080, dmg: 121, perDmg: 9.07, perDmg1: 350, cw: 25000, time: '6h', diamond: 125, ticket: 24, reqLv: 4 },
        { lv: 1, hp: 1000, dmg: 110, perDmg: 8.25, perDmg1: 320, cw: '/', time: '/', diamond: '/', ticket: '/', reqLv: 4 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">英雄技能详情</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
            <!-- 技能1 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Cluster_Grenade.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">集束榴弹</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">布里克中士向目标投掷一枚会分裂出 16 块弹片的集束榴弹，造成大范围伤害。</div>
            </div>
            <!-- 技能2 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Iron_Will.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">钢铁意志</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">使范围内的部队受到的伤害大幅度减少。<br>(影响半径: 10, 持续时间: 7.5s)</div>
            </div>
            <!-- 技能3 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Battle_Orders.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">战斗怒吼</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">鼓舞范围内的部队，使其移动速度和攻击伤害得到显著提升。<br>(影响半径: 10, 持续时间: 7.5s)</div>
            </div>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">技能升级数据</h3>
        
        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">集束榴弹 (弹片数: 16)</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>初始伤害</th><th>弹片伤害</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>9,036</td><td>904</td><td>256</td><td>8d</td><td>26</td></tr>
                    <tr><td>6</td><td>6,454</td><td>646</td><td>128</td><td>5d 8h</td><td>22</td></tr>
                    <tr><td>5</td><td>4,580</td><td>458</td><td>64</td><td>2d 16h</td><td>16</td></tr>
                    <tr><td>4</td><td>3,017</td><td>302</td><td>32</td><td>1d 8h</td><td>12</td></tr>
                    <tr><td>3</td><td>1,988</td><td>199</td><td>16</td><td>16h</td><td>8</td></tr>
                    <tr><td>2</td><td>1,309</td><td>131</td><td>8</td><td>8h</td><td>4</td></tr>
                    <tr><td>1</td><td>862</td><td>87</td><td>/</td><td>/</td><td>1</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">钢铁意志</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>伤害减少</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>74%</td><td>256</td><td>8d</td><td>24</td></tr>
                    <tr><td>6</td><td>68%</td><td>128</td><td>5d 8h</td><td>19</td></tr>
                    <tr><td>5</td><td>60%</td><td>64</td><td>2d 16h</td><td>17</td></tr>
                    <tr><td>4</td><td>57%</td><td>32</td><td>1d 8h</td><td>13</td></tr>
                    <tr><td>3</td><td>55%</td><td>16</td><td>16h</td><td>9</td></tr>
                    <tr><td>2</td><td>53%</td><td>8</td><td>8h</td><td>4</td></tr>
                    <tr><td>1</td><td>50%</td><td>/</td><td>/</td><td>2</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">战斗怒吼</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>速度增加</th><th>伤害增加</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>6</td><td>60%</td><td>30%</td><td>128</td><td>5d 8h</td><td>23</td></tr>
                    <tr><td>5</td><td>50%</td><td>25%</td><td>64</td><td>2d 16h</td><td>18</td></tr>
                    <tr><td>4</td><td>47%</td><td>22%</td><td>32</td><td>1d 8h</td><td>14</td></tr>
                    <tr><td>3</td><td>45%</td><td>19%</td><td>16</td><td>16h</td><td>10</td></tr>
                    <tr><td>2</td><td>42%</td><td>17%</td><td>8</td><td>8h</td><td>6</td></tr>
                    <tr><td>1</td><td>40%</td><td>15%</td><td>/</td><td>/</td><td>3</td></tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>序号</th><th>航母等级</th><th>集束榴弹等级</th><th>钢铁意志等级</th><th>战斗怒吼等级</th><th>升级令牌</th><th>科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>5</td><td>23</td><td>6</td><td>6</td><td>6</td><td>270,000</td><td>25</td></tr>
                    <tr><td>4</td><td>20</td><td>5</td><td>6</td><td>5</td><td>203,000</td><td>20</td></tr>
                    <tr><td>3</td><td>17</td><td>5</td><td>5</td><td>4</td><td>152,500</td><td>15</td></tr>
                    <tr><td>2</td><td>14</td><td>4</td><td>4</td><td>4</td><td>114,500</td><td>10</td></tr>
                    <tr><td>1</td><td>10</td><td>3</td><td>3</td><td>3</td><td>/</td><td>5</td></tr>
                    <tr style="font-weight:bold; background:rgba(0,0,0,0.02);"><td colspan="5">合计</td><td style="color:var(--primary);">740,000</td><td>75</td></tr>
                </tbody>
            </table>
        </div>
    `
};