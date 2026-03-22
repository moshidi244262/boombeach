window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['高压喷火器'] = {
    name: '高压喷火器',
    img: 'images/防御建筑图片/高压喷火器/HotPotIII.webp',
    desc: '高压喷火器是一种强大的原型防御建筑。它不仅拥有极高的攻击速度和溅射伤害，还会对目标施加持续燃烧的残余伤害效果，是对付步兵、野人等密集兵种的致命武器。',
    // 基础属性网格
    baseStats: [
        { label: '建筑面积', val: '3×3' },
        { label: '攻击范围', val: '8.5' },
        { label: '进攻速度', val: '0.15s' },
        { label: '攻击类型', val: '溅射' },
        { label: '溅射半径', val: '2' },
        { label: '特殊技能', val: '伤害持续5秒' }
    ],
    
    // ==========================================
    // 专属排版定制区块
    // ==========================================

    // 1. 定制表头（引入原型材料及专属伤害列）
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/大本营/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/大本营/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">每秒伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">烧伤伤害</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/大本营/Damage.webp'">合计残余伤害</th>
                <th><img src="images/基础/ModuleFuse.webp" onerror="this.src='images/大本营/Level.webp'">保险丝</th>
                <th><img src="images/基础/ModuleGear.webp" onerror="this.src='images/大本营/Level.webp'">齿轮</th>
                <th><img src="images/基础/ModuleRod.webp" onerror="this.src='images/大本营/Level.webp'">摇杆棒</th>
                <th><img src="images/基础/ModuleCapacitor.webp" onerror="this.src='images/大本营/Level.webp'">电容器</th>
                <th><img src="images/基础/Stopwatch.webp" onerror="this.src='images/大本营/Stopwatch.webp'">建造时间</th>
                <th><img src="images/基础/HQ_Icon.webp" onerror="this.src='images/大本营/HQ_Icon.webp'">实验室等级</th>
            </tr>
        </thead>
    `,

    // 2. 定制每一行的填充逻辑
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">Ⅰ × ${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.dmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}">${formatNum(lv.burnDmg)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.totalBurnDmg)}</td>
                <td style="color:#8b5cf6;">${formatNum(lv.fuse)}</td>
                <td style="color:#f59e0b;">${formatNum(lv.gear)}</td>
                <td style="color:#64748b;">${formatNum(lv.rod)}</td>
                <td style="color:#10b981; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.cap)}</td>
                <td style="border-right:1px solid rgba(0,0,0,0.03);">${lv.time}</td>
                <td style="color:var(--primary); font-weight:bold;">${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 3. 定制计算器运算逻辑 (同步计算每秒、烧伤、残余伤害)
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/',
            burnDmg: item.burnDmg !== '/' ? Math.round(item.burnDmg * (1 + dmgInput / 100)) : '/',
            totalBurnDmg: item.totalBurnDmg !== '/' ? Math.round(item.totalBurnDmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 高压喷火器等级数据表 (倒序排列)
    levels: [
        { lv: 'Ⅲ', hp: 25000, dmg: 1800, burnDmg: 300, totalBurnDmg: 1500, fuse: 0, gear: 7, rod: 5, cap: 3, time: '12h', reqLv: 4 },
        { lv: 'Ⅱ', hp: 15000, dmg: 1020, burnDmg: 170, totalBurnDmg: 850, fuse: 0, gear: 6, rod: 4, cap: 2, time: '4h', reqLv: 3 },
        { lv: 'Ⅰ', hp: 10000, dmg: 600, burnDmg: 100, totalBurnDmg: 500, fuse: 0, gear: 4, rod: 3, cap: 2, time: '1h', reqLv: 1 }
    ],

    // ==========================================
    // 动态追加的模块 (外观图集)
    // ==========================================
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">各型号外观展示</h3>
        <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px;">
            ${[
                { name: '高压喷火器 Ⅰ 型', img: 'images/防御建筑图片/高压喷火器/HotPotI.webp' },
                { name: '高压喷火器 Ⅱ 型', img: 'images/防御建筑图片/高压喷火器/HotPotII.webp' },
                { name: '高压喷火器 Ⅲ 型', img: 'images/防御建筑图片/高压喷火器/HotPotIII.webp' }
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