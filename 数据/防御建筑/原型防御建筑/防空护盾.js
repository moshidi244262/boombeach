window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['防空护盾'] = {
    name: '防空护盾',
    img: 'images/防御建筑图片/防空护盾/SkyShieldIII.webp',
    desc: '防空护盾是一种纯粹的原型防御装置。它能在其周围投射一个具有独立血量的保护罩，任何敌方战舰武器攻击(如火炮、多管等)落在护盾内都会优先被护盾阻挡吸收。',
    // 隐藏攻击力计算器 (防空护盾没有攻击力)
    hideDmgCalc: true,
    
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '防护范围', val: '6' },
        { label: '特殊技能', val: '周边建立防御盾，以抵抗战舰武器' }
    ],
    
    // ==========================================
    // 专属排版定制区块
    // ==========================================

    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">护盾生命值</th>
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
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03); color:#16a34a; font-weight:bold;">${formatNum(lv.shieldHp)}</td>
                <td style="color:#8b5cf6;">${formatNum(lv.fuse)}</td>
                <td style="color:#f59e0b;">${formatNum(lv.gear)}</td>
                <td style="color:#64748b;">${formatNum(lv.rod)}</td>
                <td style="color:#10b981; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 防空护盾生命加成同时作用于本体hp和护盾shieldHp
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            shieldHp: item.shieldHp !== '/' ? Math.round(item.shieldHp * (1 + hpInput / 100)) : '/'
        }));
    },

    levels: [
        { lv: 'Ⅲ', hp: 60000, shieldHp: 40000, fuse: 0, gear: 0, rod: 10, cap: 5, time: '12h', reqLv: 5 },
        { lv: 'Ⅱ', hp: 35000, shieldHp: 30000, fuse: 0, gear: 0, rod: 9, cap: 3, time: '4h', reqLv: 4 },
        { lv: 'Ⅰ', hp: 20000, shieldHp: 20000, fuse: 0, gear: 0, rod: 6, cap: 3, time: '1h', reqLv: 1 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">各型号外观展示</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px;">
            ${[
                { name: '防空护盾 Ⅰ 型', img: 'images/防御建筑图片/防空护盾/SkyShieldI.webp' },
                { name: '防空护盾 Ⅱ 型', img: 'images/防御建筑图片/防空护盾/SkyShieldII.webp' },
                { name: '防空护盾 Ⅲ 型', img: 'images/防御建筑图片/防空护盾/SkyShieldIII.webp' }
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