window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['机械飞爪'] = {
    name: '机械飞爪',
    img: 'images/防御建筑图片/机械飞爪/GrapplerIII.webp',
    desc: '机械飞爪是一种极其致命的战术型原型防御建筑。它具备极广的攻击范围，能够发射飞爪将远处的敌方单位强行拉拽到自身面前，配合周围密集的防御火力能瞬间瓦解敌方的关键部队。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '8-25' },
        { label: '攻击类型', val: '单体' },
        { label: '特殊技能', val: '抓住敌方单位并拉至飞爪处' }
    ],
    
    // ==========================================
    // 专属排版定制区块
    // ==========================================

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次伤害</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">攻击速度</th>
                <th><img src="images/基础/ModuleFuse.webp" onerror="this.src='images/大本营/Level.webp'">保险丝</th>
                <th><img src="images/基础/ModuleGear.webp" onerror="this.src='images/大本营/Level.webp'">齿轮</th>
                <th><img src="images/基础/ModuleRod.webp" onerror="this.src='images/大本营/Level.webp'">摇杆棒</th>
                <th><img src="images/基础/ModuleCapacitor.webp" onerror="this.src='images/大本营/Level.webp'">电容器</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">建造时间</th>
                <th><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/大本营/HQ_Icon.webp'">实验室等级</th>
            </tr>
        </thead>
    `,

    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">Ⅰ × ${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.perDmg)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03); color:#1f2937;">${lv.atkSpeed}</td>
                <td style="color:#8b5cf6;">${formatNum(lv.fuse)}</td>
                <td style="color:#f59e0b;">${formatNum(lv.gear)}</td>
                <td style="color:#64748b;">${formatNum(lv.rod)}</td>
                <td style="color:#10b981; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Math.round(item.perDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 'Ⅲ', hp: 35000, dmg: 40, perDmg: 120, atkSpeed: '3s', fuse: 4, gear: 4, rod: 4, cap: 3, time: '12h', reqLv: 4 },
        { lv: 'Ⅱ', hp: 25000, dmg: 30, perDmg: 120, atkSpeed: '4s', fuse: 3, gear: 3, rod: 3, cap: 3, time: '4h', reqLv: 3 },
        { lv: 'Ⅰ', hp: 20000, dmg: 24, perDmg: 120, atkSpeed: '5s', fuse: 3, gear: 3, rod: 3, cap: 0, time: '1h', reqLv: 1 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">各型号外观展示</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px;">
            ${[
                { name: '机械飞爪 Ⅰ 型', img: 'images/防御建筑图片/机械飞爪/GrapplerI.webp' },
                { name: '机械飞爪 Ⅱ 型', img: 'images/防御建筑图片/机械飞爪/GrapplerII.webp' },
                { name: '机械飞爪 Ⅲ 型', img: 'images/防御建筑图片/机械飞爪/GrapplerIII.webp' }
            ].map(imgObj => `
                <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                    <div class="card-img-box" style="height:100px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                        <img src="${imgObj.img}" alt="${imgObj.name}" style="max-width:100%; max-height:100%; object-fit:contain;">
                    </div>
                    <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">${imgObj.name}</div>
                </div>
            `).join('')}
        </div>
    `
};