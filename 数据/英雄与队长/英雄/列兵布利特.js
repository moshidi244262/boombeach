window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['列兵布利特'] = {
    name: '列兵布利特',
    img: 'images/英雄与队长/英雄/Pvt_Bullit.webp',
    desc: '布利特是一位强大的前排坦克英雄。他的天赋让他每次受到的伤害都受到严格限制，极大地提高了他在猛烈火力下的生存能力。',
    baseStats: [
        { label: '移动速度', val: '中等/230' },
        { label: '攻击范围', val: '近程/3.3' },
        { label: '进攻速度', val: '1s' },
        { label: '要求大本等级', val: '19' },
        { label: '英雄天赋', val: '疼痛忍耐(单次生命损失有上限)' }
    ],

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">伤害</th>
                <th title="单次承受的最大伤害上限"><img src="images/基础/GoldStar.webp">伤害极限</th>
                <th><img src="images/基础/Gold.webp">升级费用</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">要求大本</th>
            </tr>
        </thead>
    `,

    // 自定义计算器逻辑：保证“伤害极限(perDmg)”不吃攻击加成
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/'
            // perDmg 保持原样，因为它是天赋机制，不吃攻击雕像
        }));
    },

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.perDmg)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.cw)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    levels: [
        { lv: 14, hp: 49250, dmg: 1833, perDmg: 850, cw: 11080000, time: '2d 4h', diamond: 2696, ticket: 208, reqLv: 28 },
        { lv: 13, hp: 45600, dmg: 1674, perDmg: 900, cw: 10070000, time: '2d 1h', diamond: 2407, ticket: 196, reqLv: 27 },
        { lv: 12, hp: 42220, dmg: 1529, perDmg: 950, cw: 8814000, time: '1d 21h', diamond: 2301, ticket: 180, reqLv: 26 },
        { lv: 11, hp: 39100, dmg: 1396, perDmg: 1000, cw: 8324000, time: '1d 20h', diamond: 2216, ticket: 176, reqLv: 25 },
        { lv: 10, hp: 36090, dmg: 1276, perDmg: 1100, cw: 7834000, time: '1d 19h', diamond: 2129, ticket: 172, reqLv: 24 },
        { lv: 9, hp: 33350, dmg: 1164, perDmg: 1200, cw: 7344000, time: '1d 18h', diamond: 2041, ticket: 168, reqLv: 23 },
        { lv: 8, hp: 30850, dmg: 1060, perDmg: 1300, cw: 6858000, time: '1d 17h', diamond: 1953, ticket: 164, reqLv: 22 },
        { lv: 7, hp: 28560, dmg: 964, perDmg: 1400, cw: 6408000, time: '1d 16h', diamond: 1869, ticket: 160, reqLv: 22 },
        { lv: 6, hp: 26450, dmg: 876, perDmg: 1500, cw: 6408000, time: '1d 16h', diamond: 1869, ticket: 160, reqLv: 21 },
        { lv: 5, hp: 24490, dmg: 797, perDmg: 1600, cw: 6408000, time: '1d 16h', diamond: 1869, ticket: 160, reqLv: 21 },
        { lv: 4, hp: 22670, dmg: 724, perDmg: 1700, cw: 5751000, time: '1d 15h', diamond: 1750, ticket: 156, reqLv: 20 },
        { lv: 3, hp: 21000, dmg: 658, perDmg: 1800, cw: 5751000, time: '1d 15h', diamond: 1750, ticket: 156, reqLv: 20 },
        { lv: 2, hp: 19440, dmg: 598, perDmg: 1900, cw: 5751000, time: '1d 15h', diamond: 1750, ticket: 156, reqLv: 19 },
        { lv: 1, hp: 18000, dmg: 544, perDmg: 2000, cw: '/', time: '/', diamond: '/', ticket: '/', reqLv: 19 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">英雄技能详情</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
            <!-- 技能1 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Taunt.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">群体嘲讽</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">嘲讽范围内防御建筑，强制其攻击布利特，期间自身伤害极限降低。<br>(影响半径: 6, 持续时间: 8s)</div>
            </div>
            <!-- 技能2 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Energy_Drink.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">狂爆充能</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">喝下特制饮料，短时间内大幅提升移动速度和攻击速度，并恢复部分生命值。<br>(持续时间: 4s)</div>
            </div>
            <!-- 技能3 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Shock_Knuckles.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">震爆铁拳</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">猛击目标，造成伤害并震爆其后方的建筑。<br>(范围: 11.3, 溅射半径: 6)</div>
            </div>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">技能升级数据</h3>
        
        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">群体嘲讽</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>技能期间伤害极限</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>25</td><td>256</td><td>8d</td><td>12</td></tr>
                    <tr><td>6</td><td>50</td><td>128</td><td>5d 8h</td><td>7</td></tr>
                    <tr><td>5</td><td>100</td><td>64</td><td>2d 16h</td><td>6</td></tr>
                    <tr><td>4</td><td>150</td><td>32</td><td>1d 8h</td><td>5</td></tr>
                    <tr><td>3</td><td>200</td><td>16</td><td>16h</td><td>4</td></tr>
                    <tr><td>2</td><td>250</td><td>8</td><td>8h</td><td>3</td></tr>
                    <tr><td>1</td><td>300</td><td>/</td><td>/</td><td>1</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">狂爆充能</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>速度增加</th><th>生命值恢复</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>300%</td><td>50%</td><td>256</td><td>8d</td><td>14</td></tr>
                    <tr><td>6</td><td>275%</td><td>42%</td><td>128</td><td>5d 8h</td><td>8</td></tr>
                    <tr><td>5</td><td>250%</td><td>35%</td><td>64</td><td>2d 16h</td><td>7</td></tr>
                    <tr><td>4</td><td>225%</td><td>30%</td><td>32</td><td>1d 8h</td><td>6</td></tr>
                    <tr><td>3</td><td>200%</td><td>27%</td><td>16</td><td>16h</td><td>4</td></tr>
                    <tr><td>2</td><td>175%</td><td>23%</td><td>8</td><td>8h</td><td>3</td></tr>
                    <tr><td>1</td><td>150%</td><td>20%</td><td>/</td><td>/</td><td>2</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">震爆铁拳</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>伤害</th><th>休克时间</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>6</td><td>280</td><td>10s</td><td>128</td><td>5d 8h</td><td>9</td></tr>
                    <tr><td>5</td><td>260</td><td>9s</td><td>64</td><td>2d 16h</td><td>8</td></tr>
                    <tr><td>4</td><td>240</td><td>8s</td><td>32</td><td>1d 8h</td><td>7</td></tr>
                    <tr><td>3</td><td>220</td><td>7s</td><td>16</td><td>16h</td><td>5</td></tr>
                    <tr><td>2</td><td>200</td><td>6s</td><td>8</td><td>8h</td><td>4</td></tr>
                    <tr><td>1</td><td>180</td><td>5s</td><td>/</td><td>/</td><td>3</td></tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>序号</th><th>航母等级</th><th>群体嘲讽等级</th><th>狂爆充能等级</th><th>震爆铁拳等级</th><th>升级令牌</th><th>科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>5</td><td>8</td><td>6</td><td>6</td><td>5</td><td>1,330,000</td><td>25</td></tr>
                    <tr><td>4</td><td>7</td><td>6</td><td>5</td><td>4</td><td>600,000</td><td>20</td></tr>
                    <tr><td>3</td><td>6</td><td>5</td><td>4</td><td>3</td><td>272,500</td><td>15</td></tr>
                    <tr><td>2</td><td>4</td><td>3</td><td>3</td><td>4</td><td>225,500</td><td>10</td></tr>
                    <tr><td>1</td><td>2</td><td>1</td><td>1</td><td>/</td><td>/</td><td>5</td></tr>
                    <tr style="font-weight:bold; background:rgba(0,0,0,0.02);"><td colspan="5">合计</td><td style="color:var(--primary);">2,428,000</td><td>75</td></tr>
                </tbody>
            </table>
        </div>
    `
};