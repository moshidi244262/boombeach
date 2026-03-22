window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['伊娃斯巴克上尉'] = {
    name: '伊娃斯巴克上尉',
    img: 'images/英雄与队长/英雄/Cpt_Everspark.webp',
    desc: '伊娃斯巴克上尉擅长机械与爆破，她能不断释放机器小怪分散火力，并能利用高爆炸弹和远程控制改变战局。',
    baseStats: [
        { label: '移动速度', val: '中等/270' },
        { label: '攻击范围', val: '远程/10.5' },
        { label: '进攻速度', val: '0.8秒' },
        { label: '要求大本等级', val: '15' },
        { label: '英雄天赋', val: '机器人主宰' },
        { label: '数量上限', val: '12' }
    ],

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Hitpoint.webp">生命值</th>
                <th><img src="images/基础/Damage.webp">每秒伤害</th>
                <th><img src="images/基础/Damage.webp">每次射击伤害</th>
                <th><img src="images/基础/GoldStar.webp">召唤频率</th>
                <th><img src="images/基础/Gold.webp">升级费用</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">要求大本</th>
            </tr>
        </thead>
    `,

    // 伊娃斯巴克特有计算逻辑：每秒伤害和每次射击伤害受攻击加成
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? parseFloat((item.perDmg * (1 + dmgInput / 100)).toFixed(2)) : '/'
            // perDmg1 是召唤频率时间(字符串如 '5.5s')，不需要计算加成
        }));
    },

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.perDmg)}</td>
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.perDmg1}</td>
                <td style="color:#ca8a04;">${formatNum(lv.cw)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time === '/' ? '<span class="val-none">/</span>' : lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    levels: [
        { lv: 19, hp: 4230, dmg: 1023, perDmg: 818, perDmg1: '3.8s', cw: 12220000, time: '2d 12h', diamond: 2917, ticket: 416, reqLv: 28 },
        { lv: 18, hp: 3990, dmg: 965, perDmg: 772, perDmg1: '3.8s', cw: 11110000, time: '2d 12h', diamond: 2595, ticket: 416, reqLv: 27 },
        { lv: 17, hp: 3760, dmg: 911, perDmg: 728.8, perDmg1: '3.9s', cw: 9960000, time: '2d 1h', diamond: 2504, ticket: 392, reqLv: 26 },
        { lv: 16, hp: 3550, dmg: 859, perDmg: 687.2, perDmg1: '4s', cw: 9180000, time: '1d 23h', diamond: 2371, ticket: 188, reqLv: 25 },
        { lv: 15, hp: 3370, dmg: 812, perDmg: 649.6, perDmg1: '4.1s', cw: 8400000, time: '1d 21h', diamond: 2234, ticket: 180, reqLv: 24 },
        { lv: 14, hp: 3190, dmg: 767, perDmg: 613.6, perDmg1: '4.2s', cw: 7620000, time: '1d 19h', diamond: 2097, ticket: 172, reqLv: 23 },
        { lv: 13, hp: 3020, dmg: 724, perDmg: 579.2, perDmg1: '4.3s', cw: 6840000, time: '1d 17h', diamond: 1949, ticket: 164, reqLv: 22 },
        { lv: 12, hp: 2850, dmg: 683, perDmg: 546.4, perDmg1: '4.4s', cw: 6380000, time: '1d 17h', diamond: 1873, ticket: 164, reqLv: 21 },
        { lv: 11, hp: 2690, dmg: 645, perDmg: 516, perDmg1: '4.5s', cw: 5920000, time: '1d 15h', diamond: 1781, ticket: 156, reqLv: 20 },
        { lv: 10, hp: 2530, dmg: 608, perDmg: 486.4, perDmg1: '4.6s', cw: 5486000, time: '1d 15h', diamond: 1704, ticket: 156, reqLv: 19 },
        { lv: 9, hp: 2390, dmg: 574, perDmg: 459.2, perDmg1: '4.7s', cw: 4880000, time: '1d 13h', diamond: 1580, ticket: 148, reqLv: 19 },
        { lv: 8, hp: 2260, dmg: 541, perDmg: 432.8, perDmg1: '4.8s', cw: 4066000, time: '1d 10h', diamond: 1406, ticket: 136, reqLv: 18 },
        { lv: 7, hp: 2130, dmg: 511, perDmg: 408.8, perDmg1: '4.9s', cw: 3680000, time: '1d 10h', diamond: 1330, ticket: 136, reqLv: 18 },
        { lv: 6, hp: 2010, dmg: 482, perDmg: 385.6, perDmg1: '5s', cw: 2996000, time: '1d 10h', diamond: 1193, ticket: 136, reqLv: 17 },
        { lv: 5, hp: 1890, dmg: 454, perDmg: 363.2, perDmg1: '5.1s', cw: 2140000, time: '1d 7h', diamond: 985, ticket: 124, reqLv: 17 },
        { lv: 4, hp: 1790, dmg: 429, perDmg: 343.2, perDmg1: '5.2s', cw: 1637000, time: '1d 3h', diamond: 836, ticket: 108, reqLv: 16 },
        { lv: 3, hp: 1690, dmg: 404, perDmg: 323.2, perDmg1: '5.3s', cw: 1124000, time: '1d 3h', diamond: 710, ticket: 108, reqLv: 16 },
        { lv: 2, hp: 1590, dmg: 382, perDmg: 305.6, perDmg1: '5.4s', cw: 903000, time: '1d 3h', diamond: 649, ticket: 108, reqLv: 15 },
        { lv: 1, hp: 1500, dmg: 360, perDmg: 288, perDmg1: '5.5s', cw: '/', time: '/', diamond: '/', ticket: '/', reqLv: 15 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">英雄技能详情</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
            <!-- 技能1 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Critter_Swarm.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">机器小怪出击</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">直接放出多只机器小怪骚扰并攻击敌方防御建筑。<br>(小怪伤害: 135, 小怪血量: 400)</div>
            </div>
            <!-- 技能2 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Explosive_Charges.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">高爆炸弹</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">向最近的防御建筑投掷高爆炸弹，造成毁灭性打击并伴随弹片溅射伤害。</div>
            </div>
            <!-- 技能3 -->
            <div class="data-card" style="padding:16px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px; text-align:left;">
                <div style="display:flex; align-items:center; margin-bottom:12px;">
                    <img src="images/英雄与队长/英雄/Universal_Remote.webp" style="width:48px; height:48px; margin-right:12px; background:#fff; border-radius:8px; padding:4px;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--primary);">远程控制</div>
                </div>
                <div style="font-size:0.85rem; color:#4b5563;">短暂黑入一座敌方防御建筑控制系统，大幅强化其攻击力并让其攻击周围敌军。<br>(策反时间: 15s)</div>
            </div>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">技能升级数据</h3>
        
        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">机器小怪出击</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>生物部署</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>20</td><td>256</td><td>8d</td><td>16</td></tr>
                    <tr><td>6</td><td>18</td><td>128</td><td>5d 8h</td><td>13</td></tr>
                    <tr><td>5</td><td>16</td><td>64</td><td>2d 16h</td><td>11</td></tr>
                    <tr><td>4</td><td>14</td><td>32</td><td>1d 8h</td><td>9</td></tr>
                    <tr><td>3</td><td>12</td><td>16</td><td>16h</td><td>7</td></tr>
                    <tr><td>2</td><td>10</td><td>8</td><td>8h</td><td>4</td></tr>
                    <tr><td>1</td><td>8</td><td>/</td><td>/</td><td>1</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">高爆炸弹</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>初始伤害</th><th>弹片伤害</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>7</td><td>20,000</td><td>11,400</td><td>256</td><td>8d</td><td>27</td></tr>
                    <tr><td>6</td><td>15,800</td><td>8,400</td><td>128</td><td>5d 8h</td><td>14</td></tr>
                    <tr><td>5</td><td>13,800</td><td>7,400</td><td>64</td><td>2d 16h</td><td>12</td></tr>
                    <tr><td>4</td><td>11,800</td><td>6,400</td><td>32</td><td>1d 8h</td><td>10</td></tr>
                    <tr><td>3</td><td>9,800</td><td>5,400</td><td>16</td><td>16h</td><td>8</td></tr>
                    <tr><td>2</td><td>7,800</td><td>4,400</td><td>8</td><td>8h</td><td>5</td></tr>
                    <tr><td>1</td><td>5,800</td><td>3,400</td><td>/</td><td>/</td><td>2</td></tr>
                </tbody>
            </table>
        </div>

        <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">远程控制</h4>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>等级</th><th>伤害奖励</th><th>冷却时间</th><th>升级费用</th><th>升级时间</th><th>英雄等级需要</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>6</td><td>225%</td><td>0.6s</td><td>128</td><td>5d 8h</td><td>14</td></tr>
                    <tr><td>5</td><td>200%</td><td>0.7s</td><td>64</td><td>2d 16h</td><td>13</td></tr>
                    <tr><td>4</td><td>175%</td><td>0.8s</td><td>32</td><td>1d 8h</td><td>11</td></tr>
                    <tr><td>3</td><td>150%</td><td>0.9s</td><td>16</td><td>16h</td><td>9</td></tr>
                    <tr><td>2</td><td>125%</td><td>1s</td><td>8</td><td>8h</td><td>6</td></tr>
                    <tr><td>1</td><td>100%</td><td>1.1s</td><td>/</td><td>/</td><td>3</td></tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">航母专属数据</h3>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>序号</th><th>航母等级</th><th>机器小怪出击</th><th>高爆炸弹</th><th>远程控制</th><th>升级令牌</th><th>科技等级</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>5</td><td>13</td><td>5</td><td>5</td><td>5</td><td>1,250,000</td><td>25</td></tr>
                    <tr><td>4</td><td>11</td><td>5</td><td>4</td><td>4</td><td>448,000</td><td>20</td></tr>
                    <tr><td>3</td><td>8</td><td>3</td><td>3</td><td>2</td><td>186,500</td><td>15</td></tr>
                    <tr><td>2</td><td>6</td><td>2</td><td>2</td><td>2</td><td>154,000</td><td>10</td></tr>
                    <tr><td>1</td><td>4</td><td>2</td><td>1</td><td>1</td><td>/</td><td>5</td></tr>
                    <tr style="font-weight:bold; background:rgba(0,0,0,0.02);"><td colspan="5">合计</td><td style="color:var(--primary);">2,038,500</td><td>75</td></tr>
                </tbody>
            </table>
        </div>
    `
};