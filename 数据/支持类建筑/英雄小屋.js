window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['英雄小屋'] = {
    name: '英雄小屋',
    img: 'images/支持类建筑/英雄小屋/HeroHut1.webp',
    desc: '英雄小屋是英雄们休息和康复的地方。您可以在这里招募并切换不同的英雄出战。',
    baseStats: [
        { label: '建筑类型', val: '支持类建筑' },
        { label: '特有功能', val: '解锁与切换英雄' }
    ],
    
    // 隐藏计算器（建筑无血量与伤害成长属性）
    hideDmgCalc: true,
    hideHpCalc: true,

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Wood.webp" onerror="this.src='images/基础/wenhao.webp'">重建费用(木)</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/基础/wenhao.webp'">重建时间</th>
                <th><img src="images/基础/Diamond.webp" onerror="this.src='images/基础/wenhao.webp'">秒钻花费</th>
                <th><img src="images/基础/TimeSaver.webp" onerror="this.src='images/基础/wenhao.webp'">省时卷</th>
                <th><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/基础/wenhao.webp'">大本要求</th>
                <th><img src="images/基础/Icon_info_xp.webp" onerror="this.src='images/基础/wenhao.webp'">经验</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="color:#a16207; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cw)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.diamond)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.ticket)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.reqLv)}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.exp)}</td>
            </tr>
        `;
    },

    levels: [
        { cw: 6500, time: '5s', diamond: 22, ticket: 1, reqLv: 4, exp: 1 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">英雄小屋外观</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                <div class="card-img-box" style="height:80px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                    <img src="images/支持类建筑/英雄小屋/HeroHut1.webp" alt="英雄小屋" style="max-width:100%; max-height:100%; object-fit:contain;">
                </div>
                <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">英雄小屋</div>
            </div>
        </div>
    `
};

// 为兼容主页面 index.html 里面的命名 "英雄小屋"，建立对象引用映射
window.GameDataDB['英雄小屋'] = window.GameDataDB['英雄小屋'];