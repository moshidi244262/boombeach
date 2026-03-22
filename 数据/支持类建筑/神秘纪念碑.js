window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['神秘纪念碑'] = {
    name: '神秘纪念碑',
    img: 'images/支持类建筑/神秘纪念碑/MysticalMonument9.webp',
    desc: '神秘纪念碑记录着您的丰功伟绩。升级它可以获得各种增益加成。<br><span style="color:#6b7280;font-size:0.85rem;">（由于神秘纪念碑升级机制非常特殊，下方表格仅展示基础木石钢开销，2~700级的其他材料自选开销与加成效果已在下方独立列出）</span>',
    baseStats: [
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有能力', val: '随机增益加成' }
    ],
    
    // 隐藏计算器
    hideHpCalc: true,
    hideDmgCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp">等级</th>
                <th><img src="images/基础/Wood.webp">木材</th>
                <th><img src="images/基础/Stone.webp">石材</th>
                <th><img src="images/基础/Iron.webp">钢材</th>
                <th><img src="images/基础/Stopwatch.webp">升级时间</th>
                <th><img src="images/基础/Diamond.webp">秒钻</th>
                <th><img src="images/基础/TimeSaver.webp">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp">大本要求</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td style="color:#a16207;">${lv.cw}</td>
                <td style="color:#4b5563;">${lv.cs}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${lv.ci}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.diamond}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.ticket}</td>
                <td style="color:var(--primary); font-weight:bold;">${lv.reqLv}</td>
            </tr>
        `;
    },

    levels: [
        { lv: '1', cw: '1,000,000', cs: '1,000,000', ci: '1,000,000', time: '8h', diamond: 119, ticket: 32, reqLv: 20 },
        { lv: '2~700', cw: '6,000,000', cs: '5,000,000', ci: '3,000,000', time: '8h', diamond: 119, ticket: 32, reqLv: '无' }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">各等级可用数量</h3>
        <div class="table-container">
            <table class="data-table" style="min-width: max-content;">
                <thead>
                    <tr>
                        <th style="padding:12px 16px; border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/HQ_Icon.webp" style="vertical-align:middle;margin-right:4px;">司令部等级</th>
                        ${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map(l => `<th style="min-width:40px;">${l}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:bold; color:var(--primary); border-right:1px solid rgba(0,0,0,0.03);">最大建造数量</td>
                        ${[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 1,1,1,1,1,1,1,1,1].map(n => `<td>${n}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">2~700级 可选升级材料消耗（选择其一/20钻刷新一次）</h3>
        <div class="table-container">
            <table class="data-table" style="text-align: left; line-height: 1.8;">
                <tbody>
                    <tr>
                        <td style="width:120px; font-weight:bold; background:rgba(0,0,0,0.02);">常规资源类</td>
                        <td>
                            金币 7,000,000 <br>
                            木材 6,000,000 <br>
                            石材 5,000,000 (可刷新为40个) <br>
                            钢材 3,000,000 (可刷新为25个)
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; background:rgba(0,0,0,0.02);">货币与券类</td>
                        <td>
                            钻石 500 <br>
                            原型币 15,000 <br>
                            商人卷 30 <br>
                            英雄券 60 <br>
                            迷彩券 200 <br>
                            建筑币 1 <br>
                            邪恶币 5,000
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; background:rgba(0,0,0,0.02);">雕像与原型类</td>
                        <td>
                            各种水晶 250 (或大水晶30) <br>
                            极品药 20 <br>
                            原型保险丝 30 <br>
                            原型齿轮 30 <br>
                            原型摇杆棒 30 <br>
                            原型电容器 30
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; background:rgba(0,0,0,0.02);">其他道具</td>
                        <td>
                            加速卷 200 <br>
                            研究蓝图 1 <br>
                            建筑蓝图 1
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">神秘纪念碑加成列表</h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px;">升级神秘纪念碑可以提供随机加成，在某些升级里保证加成。</p>
        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>加成名称</th>
                        <th>单词加成百分比</th>
                        <th>最大可获次数</th>
                        <th>最大可能百分比</th>
                        <th>纪念碑最低等级要求</th>
                    </tr>
                </thead>
                <tbody>
                    ${[
                        { name: '黄金生产', pct: '3%', count: 5, maxPct: '15%', req: 0 },
                        { name: '木材生产', pct: '3%', count: 6, maxPct: '18%', req: 0 },
                        { name: '石材生产', pct: '3%', count: 6, maxPct: '18%', req: 0 },
                        { name: '钢材生产', pct: '3%', count: 6, maxPct: '18%', req: 0 },
                        { name: '资源生产', pct: '2%', count: 5, maxPct: '10%', req: 0 },
                        { name: '加快建造速度', pct: '2%', count: 5, maxPct: '10%', req: 200 },
                        { name: '加快军械库升级速度', pct: '2%', count: 5, maxPct: '10%', req: 200 },
                        { name: '加快雕像制造速度', pct: '2%', count: 5, maxPct: '10%', req: 100 },
                        { name: '神像品质加成', pct: '1%', count: 1, maxPct: '1%', req: 200 },
                        { name: '深度潜水奖励品质', pct: '1%', count: 6, maxPct: '6%', req: 0 }
                    ].map(b => `
                        <tr>
                            <td style="font-weight:bold;">${b.name}</td>
                            <td style="color:var(--primary);">${b.pct}</td>
                            <td>${b.count}</td>
                            <td style="color:#16a34a; font-weight:bold;">${b.maxPct}</td>
                            <td>${b.req}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">神秘纪念碑外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '一级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument1.webp' },
                { name: '二~九十九级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument2.webp' },
                { name: '一百~一百九十九级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument3.webp' },
                { name: '两百~两百九十九级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument4.webp' },
                { name: '三百~三百九十九级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument5.webp' },
                { name: '四百~四百九十九级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument6.webp' },
                { name: '五百~五百九十九级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument7.webp' },
                { name: '六百~六百九十九级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument8.webp' },
                { name: '七百级', img: 'images/支持类建筑/神秘纪念碑/MysticalMonument9.webp' }
            ].map(imgObj => `
                <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                    <div class="card-img-box" style="height:80px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                        <img src="${imgObj.img}" alt="${imgObj.name}" style="max-width:100%; max-height:100%; object-fit:contain;">
                    </div>
                    <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">${imgObj.name}</div>
                </div>
            `).join('')}
        </div>
    `
};