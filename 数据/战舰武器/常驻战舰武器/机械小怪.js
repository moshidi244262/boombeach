window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['机械小怪'] = {
    name: '机械小怪',
    img: 'images/战舰武器/常驻战舰武器/CrittersIcon.webp',
    desc: '发射一个装满机械小怪的铁盒！这些机器小帮手会在战场上分散敌人的火力，并啃食周围的防御建筑，吸引火力的同时也能造成一定的破坏。',
    
    // 移除了 hideDmgCalc：因为机械小怪的本体受生命和攻击加成，需要显示计算器

    baseStats: [
        { label: '移动速度', val: '400' },
        { label: '小怪血量', val: '400' },
        { label: '小怪伤害', val: '135' },
        { label: '攻击范围', val: '90' },
        { label: '攻击速度', val: '0.5s' }
    ],

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/TroopCapacity.webp">小怪部署</th>
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
                <td style="color:var(--primary); font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.count)}</td>
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
        // 1. 获取小怪原始的固定基础数值
        const baseHp = 400;
        const baseDmg = 135;
        
        // 2. 计算加成后的新数值
        const newHp = Math.round(baseHp * (1 + (hpInput || 0) / 100));
        const newDmg = Math.round(baseDmg * (1 + (dmgInput || 0) / 100));

        // 3. 将新数值更新回 DB 数据源中（应对重渲染）
        const dbEntry = window.GameDataDB['机械小怪'];
        if (dbEntry && dbEntry.baseStats) {
            dbEntry.baseStats.forEach(stat => {
                if (stat.label === '小怪血量') stat.val = newHp.toString();
                if (stat.label === '小怪伤害') stat.val = newDmg.toString();
            });
        }

        // 4. 动态在页面上更新上方网格图的 DOM 元素以反映数据
        if (typeof document !== 'undefined') {
            setTimeout(() => {
                const updateStatDOM = (labelText, newValue, isBuffed) => {
                    // 遍历所有文本节点查找对应的 label 文本
                    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                    let node;
                    while (node = walker.nextNode()) {
                        if (node.nodeValue.trim() === labelText) {
                            let labelEl = node.parentElement;
                            let valEl = labelEl.previousElementSibling;
                            
                            // 针对嵌套结构，尝试找父级的兄弟节点
                            if (!valEl && labelEl.parentElement) {
                                valEl = labelEl.parentElement.previousElementSibling;
                            }
                            
                            if (valEl) {
                                // 查找到对应的数值节点后进行文本替换和标红高亮处理
                                let target = valEl;
                                while (target.firstElementChild) { target = target.firstElementChild; }
                                target.textContent = newValue;
                                target.style.color = isBuffed ? '#dc2626' : ''; // 红色高亮
                                target.style.fontWeight = isBuffed ? 'bold' : '';
                            }
                        }
                    }
                };
                
                // 执行更新
                updateStatDOM('小怪血量', newHp, hpInput > 0);
                updateStatDOM('小怪伤害', newDmg, dmgInput > 0);
            }, 0);
        }

        // 5. 小怪等级只影响部署数量，数量本身不受神像影响，故表格数据返回原样即可
        return originalData.map(item => ({ ...item }));
    },

    levels: [
        { lv: 13, count: 18, gd: 10400000, mirc: 28, time: '4d 18h', diamond: 2988, ticket: 504, exp: 108 },
        { lv: 12, count: 17, gd: 10000000, mirc: 27, time: '4d 12h', diamond: 2689, ticket: 480, exp: 104 },
        { lv: 11, count: 16, gd: 9600000, mirc: 26, time: '4d 6h', diamond: 2779, ticket: 432, exp: 100 },
        { lv: 10, count: 15, gd: 9200000, mirc: 25, time: '4d', diamond: 2697, ticket: 384, exp: 96 },
        { lv: 9, count: 14, gd: 8800000, mirc: 24, time: '3d 18h', diamond: 2596, ticket: 360, exp: 96 },
        { lv: 8, count: 13, gd: 8400000, mirc: 23, time: '3d 12h', diamond: 2495, ticket: 336, exp: 92 },
        { lv: 7, count: 12, gd: 8000000, mirc: 20, time: '3d 6h', diamond: 2396, ticket: 312, exp: 88 },
        { lv: 6, count: 11, gd: 7800000, mirc: 20, time: '3d', diamond: 2324, ticket: 288, exp: 84 },
        { lv: 5, count: 10, gd: 7400000, mirc: 20, time: '2d 18h', diamond: 2220, ticket: 264, exp: 81 },
        { lv: 4, count: 9, gd: 7000000, mirc: 19, time: '2d 12h', diamond: 2113, ticket: 240, exp: 77 },
        { lv: 3, count: 8, gd: 6600000, mirc: 19, time: '2d 8h', diamond: 2018, ticket: 224, exp: 74 },
        { lv: 2, count: 7, gd: 5300000, mirc: 19, time: '2d 2h', diamond: 1751, ticket: 200, exp: 70 },
        { lv: 1, count: 6, gd: '/', mirc: '/', time: '/', diamond: '/', ticket: '/', exp: '/' }
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
                    <tr><td>2</td><td>2</td><td style="color:#ca8a04;">130,500</td><td>10</td></tr>
                    <tr><td>3</td><td>4</td><td style="color:#ca8a04;">158,000</td><td>15</td></tr>
                    <tr><td>4</td><td>5</td><td style="color:#ca8a04;">173,500</td><td>20</td></tr>
                    <tr><td>5</td><td>7</td><td style="color:#ca8a04;">210,000</td><td>25</td></tr>
                    <tr style="background:rgba(0,0,0,0.02); font-weight:bold;">
                        <td colspan="2">合计</td><td style="color:#ca8a04;">672,000</td><td>75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};