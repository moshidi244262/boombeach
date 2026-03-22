window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['毁灭加农炮'] = {
    name: '毁灭加农炮',
    img: 'images/防御建筑图片/毁灭加农炮/DoomCannon3.webp',
    desc: '毁灭加农炮是一种极具破坏力的原型防御设施。它拥有极远的射程，发射的毁灭性光束能够对任何目标造成惊人的单发伤害（并附带微小范围的溅射），是坦克和烈焰战车的绝对克星。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '18' },
        { label: '进攻速度', val: '3.5s' },
        { label: '攻击类型', val: '溅射' },
        { label: '溅射半径', val: '0.75' },
        { label: '进攻目标', val: '对空，对地' }
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
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每次射击伤害</th>
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
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.perDmg)}</td>
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
        { lv: 'Ⅲ', hp: 35000, dmg: 4500, perDmg: 15750, fuse: 7, gear: 5, rod: 3, cap: 0, time: '12h', reqLv: 5 },
        { lv: 'Ⅱ', hp: 22500, dmg: 2500, perDmg: 8750, fuse: 6, gear: 4, rod: 2, cap: 0, time: '4h', reqLv: 3 },
        { lv: 'Ⅰ', hp: 15000, dmg: 1500, perDmg: 5250, fuse: 4, gear: 3, rod: 2, cap: 0, time: '1h', reqLv: 1 }
    ],

    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">各型号外观展示</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px;">
            ${[
                { name: '毁灭加农炮 Ⅰ 型', img: 'images/防御建筑图片/毁灭加农炮/DoomCannon1.webp' },
                { name: '毁灭加农炮 Ⅱ 型', img: 'images/防御建筑图片/毁灭加农炮/DoomCannon2.webp' },
                { name: '毁灭加农炮 Ⅲ 型', img: 'images/防御建筑图片/毁灭加农炮/DoomCannon3.webp' }
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