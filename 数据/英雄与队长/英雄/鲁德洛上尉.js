window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['鲁德洛上尉'] = {
    name: '鲁德洛上尉',
    img: 'images/英雄与队长/英雄/cpt_ruddero.webp',
    desc: '鲁德洛上尉是一位远程支援型英雄，擅长利用多种空中载具和远程打击手段为部队提供火力掩护和战术支持。',
    baseStats: [
        { label: '移动速度', val: '快/500' },
        { label: '攻击范围', val: '远程/9' },
        { label: '进攻速度', val: '0.25s' },
        { label: '要求大本等级', val: '24' },
        { label: '英雄天赋', val: '僚机' },
        { label: '释放数量', val: '2' },
        { label: '数量上限', val: '6' }
    ],
    
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/基础/Gold.webp">升级费用</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">要求大本</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td style="color:#ca8a04;">${formatNum(lv.cw)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    levels: [
        { lv: 18, hp: 3480, dmg: 802, cw: 10240000, time: '2d 16h', diamond: 2972, ticket: 256, reqLv: 28 },
        { lv: 17, hp: 3220, dmg: 757, cw: 9600000, time: '2d 12h', diamond: 2528, ticket: 240, reqLv: 27 },
        { lv: 16, hp: 2980, dmg: 714, cw: 8444000, time: '2d 8h', diamond: 2319, ticket: 224, reqLv: 26 },
        { lv: 15, hp: 2770, dmg: 674, cw: 7430000, time: '2d 4h', diamond: 2127, ticket: 208, reqLv: 25 },
        { lv: 14, hp: 2580, dmg: 636, cw: 6537000, time: '2d', diamond: 1953, ticket: 192, reqLv: 24 },
        { lv: 13, hp: 2400, dmg: 600, cw: 5570000, time: '1d 22h', diamond: 1801, ticket: 184, reqLv: 24 },
        { lv: 12, hp: 2230, dmg: 567, cw: 5060000, time: '1d 20h', diamond: 1665, ticket: 176, reqLv: 24 },
        { lv: 11, hp: 2070, dmg: 535, cw: 4450000, time: '1d 18h', diamond: 1537, ticket: 168, reqLv: 24 },
        { lv: 10, hp: 1930, dmg: 505, cw: 3920000, time: '1d 16h', diamond: 1421, ticket: 160, reqLv: 24 },
        { lv: 9, hp: 1790, dmg: 476, cw: 3448000, time: '1d 14h', diamond: 1315, ticket: 152, reqLv: 24 },
        { lv: 8, hp: 1670, dmg: 450, cw: 3033000, time: '1d 12h', diamond: 1216, ticket: 144, reqLv: 24 },
        { lv: 7, hp: 1550, dmg: 424, cw: 2670000, time: '1d 10h', diamond: 1125, ticket: 136, reqLv: 24 },
        { lv: 6, hp: 1440, dmg: 401, cw: 2350000, time: '1d 8h', diamond: 1040, ticket: 128, reqLv: 24 },
        { lv: 5, hp: 1340, dmg: 378, cw: 2066000, time: '1d 6h', diamond: 962, ticket: 120, reqLv: 24 },
        { lv: 4, hp: 1240, dmg: 357, cw: 1818000, time: '1d 4h', diamond: 889, ticket: 112, reqLv: 24 },
        { lv: 3, hp: 1160, dmg: 337, cw: 1600000, time: '1d 2h', diamond: 821, ticket: 104, reqLv: 24 },
        { lv: 2, hp: 1080, dmg: 318, cw: 1600000, time: '1d', diamond: 804, ticket: 96, reqLv: 24 },
        { lv: 1, hp: 1000, dmg: 300, cw: '/', time: '/', diamond: '/', ticket: '/', reqLv: 24 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">英雄技能详情</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
            <!-- 技能1 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/ReleaseFlyDrones.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">僚机突击</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">召唤无人机协助攻击，无人机具有独立的生命值和伤害。</div>
            </div>
            <!-- 技能2 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Bombardment.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">地毯轰炸</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">召唤范围伤害 (范围: 11.3, 伤害半径: 6)。</div>
            </div>
            <!-- 技能3 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/LaunchSeekers.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">追踪发射</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">发射追踪弹 (范围: 50, 伤害半径: 0.01)。</div>
            </div>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">技能升级数据</h3>
        
        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">僚机突击</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>生物等级</th><th>血量</th><th>伤害</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>7</td><td>600</td><td>244</td><td>256</td><td>8d</td><td>17</td></tr>
                    <tr><td>6</td><td>6</td><td>500</td><td>210</td><td>128</td><td>5d 8h</td><td>15</td></tr>
                    <tr><td>5</td><td>5</td><td>420</td><td>181</td><td>64</td><td>2d 16h</td><td>12</td></tr>
                    <tr><td>4</td><td>4</td><td>350</td><td>156</td><td>32</td><td>1d 8h</td><td>9</td></tr>
                    <tr><td>3</td><td>3</td><td>290</td><td>135</td><td>16</td><td>16h</td><td>6</td></tr>
                    <tr><td>2</td><td>2</td><td>240</td><td>116</td><td>8</td><td>8h</td><td>3</td></tr>
                    <tr><td>1</td><td>1</td><td>200</td><td>100</td><td>/</td><td>/</td><td>1</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">地毯轰炸</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>期间</th><th>伤害</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>6</td><td>1500</td><td>5.5</td><td>128</td><td>5d 8h</td><td>16</td></tr>
                    <tr><td>5</td><td>1000</td><td>5</td><td>64</td><td>2d 16h</td><td>13</td></tr>
                    <tr><td>4</td><td>675</td><td>4.5</td><td>32</td><td>1d 8h</td><td>10</td></tr>
                    <tr><td>3</td><td>450</td><td>4</td><td>16</td><td>16h</td><td>7</td></tr>
                    <tr><td>2</td><td>300</td><td>3.5</td><td>8</td><td>8h</td><td>4</td></tr>
                    <tr><td>1</td><td>200</td><td>3</td><td>/</td><td>/</td><td>1</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">追踪发射</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>生物等级</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>6</td><td>6</td><td>128</td><td>5d 8h</td><td>17</td></tr>
                    <tr><td>5</td><td>5</td><td>64</td><td>2d 16h</td><td>14</td></tr>
                    <tr><td>4</td><td>4</td><td>32</td><td>1d 8h</td><td>11</td></tr>
                    <tr><td>3</td><td>3</td><td>16</td><td>16h</td><td>8</td></tr>
                    <tr><td>2</td><td>2</td><td>8</td><td>8h</td><td>5</td></tr>
                    <tr><td>1</td><td>1</td><td>/</td><td>/</td><td>2</td></tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>序号</th><th>航母等级</th><th>僚机突击等级</th><th>地毯轰炸等级</th><th>追踪发射等级</th><th>升级令牌</th><th>科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>5</td><td>16</td><td>6</td><td>6</td><td>5</td><td>1,250,000</td><td>25</td></tr>
                    <tr><td>4</td><td>11</td><td>5</td><td>5</td><td>2</td><td>448,000</td><td>20</td></tr>
                    <tr><td>3</td><td>8</td><td>4</td><td>4</td><td>1</td><td>186,500</td><td>15</td></tr>
                    <tr><td>2</td><td>6</td><td>4</td><td>3</td><td>/</td><td>154,000</td><td>10</td></tr>
                    <tr><td>1</td><td>4</td><td>3</td><td>2</td><td>/</td><td>/</td><td>5</td></tr>
                    <tr style="font-weight:bold; background:rgba(0,0,0,0.02);"><td colspan="5">合计</td><td style="color:var(--primary);">2,038,500</td><td>75</td></tr>
                </tbody>
            </table>
        </div>
    `
};