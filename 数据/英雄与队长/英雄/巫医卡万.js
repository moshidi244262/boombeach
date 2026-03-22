window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['巫医卡万'] = {
    name: '巫医卡万',
    img: 'images/英雄与队长/英雄/Dr_Kavan.webp',
    desc: '巫医卡万是一位强大的战地医疗支援英雄，他利用水晶能量治愈部队，并能提供减伤护盾或召唤亡者重返战场。',
    baseStats: [
        { label: '移动速度', val: '中等/270' },
        { label: '攻击范围', val: '近程/3-6' },
        { label: '治愈速度', val: '0.6s' },
        { label: '要求大本等级', val: '7' },
        { label: '英雄天赋', val: '先祖之赐(伤害减免)' },
        { label: '持续时间', val: '6s' }
    ],

    // 隐藏攻击计算器，因为治疗和减伤通常不吃攻击加成
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Heal_Iconr.webp">每秒治疗</th>
                <th><img src="images/基础/GoldStar.webp">伤害减少</th>
                <th><img src="images/基础/Gold.webp">升级费用</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">要求大本</th>
            </tr>
        </thead>
    `,

    // 卡万特有计算逻辑：只计算血量
    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td style="color:#16a34a; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.perDmg}</td>
                <td style="color:#ca8a04;">${formatNum(lv.cw)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    levels: [
        { lv: 23, hp: 3380, dmg: 105, perDmg: '15.00%', cw: 11090000, time: '2d 2h', diamond: 2683, ticket: 360, reqLv: 28 },
        { lv: 22, hp: 3410, dmg: 100, perDmg: '14.30%', cw: 10080000, time: '2d', diamond: 2407, ticket: 352, reqLv: 27 },
        { lv: 21, hp: 3160, dmg: 95, perDmg: '13.60%', cw: 8745000, time: '1d 21h', diamond: 2290, ticket: 340, reqLv: 26 },
        { lv: 20, hp: 2970, dmg: 90, perDmg: '13.00%', cw: 8328000, time: '1d 19h', diamond: 2209, ticket: 172, reqLv: 25 },
        { lv: 19, hp: 2610, dmg: 85, perDmg: '12.00%', cw: 6858000, time: '1d 17h', diamond: 1953, ticket: 164, reqLv: 22 },
        { lv: 18, hp: 2150, dmg: 70, perDmg: '10.00%', cw: 6408000, time: '1d 16h', diamond: 1869, ticket: 160, reqLv: 22 },
        { lv: 17, hp: 2030, dmg: 67, perDmg: '9.80%', cw: 5751000, time: '1d 15h', diamond: 1750, ticket: 156, reqLv: 21 },
        { lv: 16, hp: 1920, dmg: 65, perDmg: '9.50%', cw: 4815000, time: '1d 12h', diamond: 1599, ticket: 144, reqLv: 20 },
        { lv: 15, hp: 1810, dmg: 62, perDmg: '9.20%', cw: 4815000, time: '1d 12h', diamond: 1559, ticket: 144, reqLv: 19 },
        { lv: 14, hp: 1710, dmg: 60, perDmg: '8.90%', cw: 4230000, time: '1d 11h', diamond: 1445, ticket: 140, reqLv: 18 },
        { lv: 13, hp: 1610, dmg: 58, perDmg: '8.60%', cw: 3420000, time: '1d 8h', diamond: 163, ticket: 128, reqLv: 17 },
        { lv: 12, hp: 1520, dmg: 55, perDmg: '8.30%', cw: 3420000, time: '1d 8h', diamond: 1263, ticket: 128, reqLv: 16 },
        { lv: 11, hp: 1430, dmg: 53, perDmg: '8.00%', cw: 2520000, time: '1d 5h', diamond: 1051, ticket: 116, reqLv: 16 },
        { lv: 10, hp: 1350, dmg: 51, perDmg: '7.70%', cw: 1800000, time: '1d 2h', diamond: 868, ticket: 104, reqLv: 15 },
        { lv: 9, hp: 1280, dmg: 49, perDmg: '7.40%', cw: 1800000, time: '1d 2h', diamond: 868, ticket: 104, reqLv: 14 },
        { lv: 8, hp: 1200, dmg: 47, perDmg: '7.10%', cw: 1377000, time: '23h', diamond: 740, ticket: 92, reqLv: 13 },
        { lv: 7, hp: 1130, dmg: 46, perDmg: '6.80%', cw: 945000, time: '21h', diamond: 610, ticket: 84, reqLv: 12 },
        { lv: 6, hp: 1070, dmg: 44, perDmg: '6.50%', cw: 759000, time: '19h', diamond: 538, ticket: 76, reqLv: 11 },
        { lv: 5, hp: 1010, dmg: 42, perDmg: '6.20%', cw: 759600, time: '19h', diamond: 538, ticket: 76, reqLv: 10 },
        { lv: 4, hp: 950, dmg: 40, perDmg: '5.90%', cw: 535500, time: '17h', diamond: 451, ticket: 68, reqLv: 9 },
        { lv: 3, hp: 900, dmg: 39, perDmg: '5.60%', cw: 360000, time: '15h', diamond: 377, ticket: 60, reqLv: 8 },
        { lv: 2, hp: 850, dmg: 36, perDmg: '5.30%', cw: 360000, time: '15h', diamond: 377, ticket: 60, reqLv: 7 },
        { lv: 1, hp: 800, dmg: 36, perDmg: '5.00%', cw: '/', time: '/', diamond: '/', ticket: '/', reqLv: 7 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">英雄技能详情</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
            <!-- 技能1 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Crystal_Critters.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">晶簇小怪</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">释放晶簇小怪持续治疗受伤的部队。<br>(小怪寿命: 15s, 治疗速度: 0.4s)</div>
            </div>
            <!-- 技能2 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Ice_Shields.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">寒冰护盾</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">在英雄及其周围的部队身上生成一层寒冰护盾，抵挡一定量伤害。<br>(影响半径: 10)</div>
            </div>
            <!-- 技能3 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Second_Wind.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">亡者召唤</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">复活一定人口数量已阵亡的部队。如果没有阵亡部队，则召唤步兵。</div>
            </div>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">技能升级数据</h3>
        
        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">晶簇小怪 (生命值: 2500, 每秒治疗: 30)</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>生物部署</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>20</td><td>256</td><td>8d</td><td>21</td></tr>
                    <tr><td>6</td><td>15</td><td>128</td><td>5d 8h</td><td>18</td></tr>
                    <tr><td>5</td><td>12</td><td>64</td><td>2d 16h</td><td>11</td></tr>
                    <tr><td>4</td><td>10</td><td>32</td><td>1d 8h</td><td>9</td></tr>
                    <tr><td>3</td><td>8</td><td>16</td><td>16h</td><td>7</td></tr>
                    <tr><td>2</td><td>6</td><td>8</td><td>8h</td><td>4</td></tr>
                    <tr><td>1</td><td>4</td><td>/</td><td>/</td><td>1</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">寒冰护盾</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>护盾持续时间</th><th>护盾生命值</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>12s</td><td>800</td><td>256</td><td>8d</td><td>23</td></tr>
                    <tr><td>6</td><td>11s</td><td>600</td><td>128</td><td>5d 8h</td><td>19</td></tr>
                    <tr><td>5</td><td>10s</td><td>460</td><td>64</td><td>2d 16h</td><td>16</td></tr>
                    <tr><td>4</td><td>9.5s</td><td>380</td><td>32</td><td>1d 8h</td><td>12</td></tr>
                    <tr><td>3</td><td>9s</td><td>300</td><td>16</td><td>16h</td><td>8</td></tr>
                    <tr><td>2</td><td>8.5s</td><td>220</td><td>8</td><td>8h</td><td>5</td></tr>
                    <tr><td>1</td><td>8s</td><td>140</td><td>/</td><td>/</td><td>2</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">亡者召唤</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>复活人口</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>6</td><td>24</td><td>128</td><td>5d 8h</td><td>17</td></tr>
                    <tr><td>5</td><td>16</td><td>64</td><td>2d 16h</td><td>17</td></tr>
                    <tr><td>4</td><td>14</td><td>32</td><td>1d 8h</td><td>13</td></tr>
                    <tr><td>3</td><td>12</td><td>16</td><td>16h</td><td>9</td></tr>
                    <tr><td>2</td><td>10</td><td>8</td><td>8h</td><td>6</td></tr>
                    <tr><td>1</td><td>8</td><td>/</td><td>/</td><td>3</td></tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>序号</th><th>航母等级</th><th>晶簇小怪等级</th><th>寒冰护盾等级</th><th>亡者召唤等级</th><th>升级令牌</th><th>科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>5</td><td>19</td><td>6</td><td>6</td><td>6</td><td>225,000</td><td>25</td></tr>
                    <tr><td>4</td><td>17</td><td>5</td><td>5</td><td>6</td><td>186,000</td><td>20</td></tr>
                    <tr><td>3</td><td>14</td><td>5</td><td>4</td><td>4</td><td>139,500</td><td>15</td></tr>
                    <tr><td>2</td><td>10</td><td>4</td><td>3</td><td>3</td><td>95,500</td><td>10</td></tr>
                    <tr><td>1</td><td>6</td><td>2</td><td>2</td><td>2</td><td>/</td><td>5</td></tr>
                    <tr style="font-weight:bold; background:rgba(0,0,0,0.02);"><td colspan="5">合计</td><td style="color:var(--primary);">646,000</td><td>75</td></tr>
                </tbody>
            </table>
        </div>
    `
};