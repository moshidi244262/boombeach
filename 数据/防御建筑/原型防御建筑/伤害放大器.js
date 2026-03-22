window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['伤害放大器'] = {
    name: '伤害放大器',
    img: 'images/防御建筑图片/伤害放大器/DamageAmplifierIII.webp',
    desc: '伤害放大器是一款辅助型原型建筑，虽然它自身无法进行攻击，但可以大幅度增加放置在其效果范围内的其他防御建筑的伤害输出。',
    // 隐藏攻击计算器（因为它没有基础攻击力）
    hideDmgCalc: true,
    
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '技能范围', val: '7.6' },
        { label: '技能效果', val: '增加附近防御建筑伤害' }
    ],
    
    // 定制表头（引入伤害增幅字段与原型模块成本）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/Damage.webp'">伤害增幅</th>
                <th><img src="images/基础/ModuleFuse.webp" onerror="this.src='images/ModuleFuse.webp'">保险丝</th>
                <th><img src="images/基础/ModuleGear.webp" onerror="this.src='images/ModuleGear.webp'">齿轮</th>
                <th><img src="images/基础/ModuleRod.webp" onerror="this.src='images/ModuleRod.webp'">摇杆棒</th>
                <th><img src="images/基础/ModuleCapacitor.webp" onerror="this.src='images/ModuleCapacitor.webp'">电容器</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/Stopwatch.webp'">建造时间</th>
                <th><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/WeaponLab5.webp'">需要武器实验室等级</th>
            </tr>
        </thead>
    `,

    // 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.boost}</td>
                <td style="color:#d97706;">${formatNum(lv.fuse)}</td>
                <td style="color:#4b5563;">${formatNum(lv.gear)}</td>
                <td style="color:#1f2937;">${formatNum(lv.rod)}</td>
                <td style="color:#0284c7; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 定制计算器运算逻辑 (仅计算生命值)
    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    // 伤害放大器等级数据表
    levels: [
        { lv: 3, hp: 60000, boost: '100%', fuse: 3, gear: 0, rod: 7, cap: 5, time: '12h', reqLv: 5 },
        { lv: 2, hp: 35000, boost: '75%', fuse: 2, gear: 0, rod: 6, cap: 4, time: '4h', reqLv: 3 },
        { lv: 1, hp: 20000, boost: '50%', fuse: 2, gear: 0, rod: 4, cap: 3, time: '1h', reqLv: 1 }
    ],

    // 动态追加的模块 (外观图集)
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">伤害放大器外观图片</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            ${[
                { name: '伤害放大器 Ⅰ', img: 'images/防御建筑图片/伤害放大器/DamageAmplifierI.webp' },
                { name: '伤害放大器 Ⅱ', img: 'images/防御建筑图片/伤害放大器/DamageAmplifierII.webp' },
                { name: '伤害放大器 Ⅲ', img: 'images/防御建筑图片/伤害放大器/DamageAmplifierIII.webp' }
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