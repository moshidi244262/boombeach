window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['震爆器'] = {
    name: '震爆器',
    img: 'images/防御建筑图片/震爆器/ShockBlasterIII.webp',
    desc: '震爆器是一种非常致命的原型武器，它以2.5秒为间隔进行30连发齐射。被命中的敌军不仅会受到巨额伤害，还会陷入短暂的休克瘫痪状态，是防御大量敌军进攻的绝佳利器。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '18' },
        { label: '进攻速度', val: '2.5秒间隔齐射30次' },
        { label: '攻击类型', val: '单体 + 眩晕' },
        { label: '进攻目标', val: '对空，对地' }
    ],
    
    // 定制表头（引入原型模块成本、齐射伤害、休克时间）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/Damage.webp'">每次射击伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/Damage.webp'">齐射总伤害</th>
                <th><img src="images/基础/Stun.webp" onerror="this.src='images/Stun.webp'">休克持续时间</th>
                <th><img src="images/基础/ModuleFuse.webp" onerror="this.src='images/ModuleFuse.webp'">保险丝</th>
                <th><img src="images/基础/ModuleGear.webp" onerror="this.src='images/ModuleGear.webp'">齿轮</th>
                <th><img src="images/基础/ModuleRod.webp" onerror="this.src='images/ModuleRod.webp'">摇杆棒</th>
                <th><img src="images/基础/ModuleCapacitor.webp" onerror="this.src='images/ModuleCapacitor.webp'">电容器</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/Stopwatch.webp'">建造时间</th>
                <th><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/WeaponLab5.webp'">武器实验室等级</th>
            </tr>
        </thead>
    `,

    // 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.perDmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#b91c1c; font-weight:bold;">${formatNum(lv.volleyDmg)}</td>
                <td style="color:#1f2937; border-right:1px solid rgba(0,0,0,0.03);">${lv.shockTime}</td>
                <td style="color:#d97706;">${formatNum(lv.fuse)}</td>
                <td style="color:#4b5563;">${formatNum(lv.gear)}</td>
                <td style="color:#1f2937;">${formatNum(lv.rod)}</td>
                <td style="color:#0284c7; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑 (额外增加齐射伤害计算)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            perDmg: item.perDmg !== '/' ? Math.round(item.perDmg * (1 + dmgInput / 100)) : '/',
            volleyDmg: item.volleyDmg !== '/' ? Math.round(item.volleyDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 震爆器等级数据表 (倒序排列)
    levels: [
        { lv: 3, hp: 35000, dmg: 896, perDmg: 144, volleyDmg: 4320, shockTime: '1s', fuse: 10, gear: 5, rod: 0, cap: 0, time: '12h', reqLv: 4 },
        { lv: 2, hp: 22500, dmg: 647, perDmg: 104, volleyDmg: 3120, shockTime: '0.8s', fuse: 9, gear: 3, rod: 0, cap: 0, time: '4h', reqLv: 2 },
        { lv: 1, hp: 15000, dmg: 398, perDmg: 64, volleyDmg: 1920, shockTime: '0.6s', fuse: 6, gear: 3, rod: 0, cap: 0, time: '1h', reqLv: 1 }
    ],

    // 动态追加的模块 (外观图集)
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">震爆器外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '震爆器 Ⅰ', img: 'images/防御建筑图片/震爆器/ShockBlasterI.webp' },
                { name: '震爆器 Ⅱ', img: 'images/防御建筑图片/震爆器/ShockBlasterII.webp' },
                { name: '震爆器 Ⅲ', img: 'images/防御建筑图片/震爆器/ShockBlasterIII.webp' }
            ].map(imgObj => `
                <div class="data-card" style="padding:12px; background:rgba(255,255,255,0.7); border:1px solid rgba(0,0,0,0.05); border-radius:12px;">
                    <div class="card-img-box" style="height:80px; margin-bottom:8px; display:flex; justify-content:center; align-items:center;">
                        <img src="${imgObj.img}" alt="${imgObj.name}" style="max-width:100%; max-height:100%; object-fit:contain;" onerror="this.src='images/Prototypeweapon/${imgObj.img.split('/').pop()}'">
                    </div>
                    <div class="card-title" style="font-size:0.85rem; font-weight:600; white-space:normal; line-height:1.2;">${imgObj.name}</div>
                </div>
            `).join('')}
        </div>
    `
};