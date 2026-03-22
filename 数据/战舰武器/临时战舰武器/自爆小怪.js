window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['自爆小怪'] = {
    name: '自爆小怪',
    img: 'images/战舰武器/临时战舰武器/Explosive_Drones.webp',
    desc: '向指定位置部署一群自爆小怪。它们会迅速冲向敌方建筑，并在接触或被摧毁时产生破坏性的爆炸。',
    baseStats: [
        { label: '小怪数量', val: '5' },
        { label: '移动速度', val: '快速/400' },
        { label: '待命时间', val: '2.0s' },
        { label: '爆炸半径', val: '0.1' }
    ],
    
    // 显示生命值和伤害计算器
    hideHpCalc: false,
    hideDmgCalc: false,

    // 定制化表头
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/Level.webp'">等级</th>
                <th><img src="images/基础/Hitpoint.webp" onerror="this.src='images/基础/Hitpoint.webp'">生命值</th>
                <th><img src="images/基础/Damage.webp" onerror="this.src='images/基础/Damage.webp'">爆炸损伤</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/Menu_icon_research.webp'">研究所等级</th>
            </tr>
        </thead>
    `,

    // 专属渲染模板
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td class="${hlType === 'dmg' ? 'calc-highlight-dmg' : ''}" style="color:#dc2626; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.dmg)}</td>
                <td>${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 属性加成计算逻辑
    calculateData: function(originalData, hpInput, dmgInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/',
            dmg: item.dmg !== '/' ? Math.round(item.dmg * (1 + dmgInput / 100)) : '/'
        }));
    },

    // 等级数据（从高到低倒序）
    levels: [
        { lv: 23, hp: 820, dmg: 4070, reqLv: 30 },
        { lv: 22, hp: 740, dmg: 3701, reqLv: 29 },
        { lv: 21, hp: 670, dmg: 3365, reqLv: 28 },
        { lv: 20, hp: 610, dmg: 3059, reqLv: 27 },
        { lv: 19, hp: 550, dmg: 2781, reqLv: 26 },
        { lv: 18, hp: 500, dmg: 2528, reqLv: 25 },
        { lv: 17, hp: 460, dmg: 2298, reqLv: 24 },
        { lv: 16, hp: 420, dmg: 2089, reqLv: 23 },
        { lv: 15, hp: 380, dmg: 1899, reqLv: 22 },
        { lv: 14, hp: 350, dmg: 1726, reqLv: 21 },
        { lv: 13, hp: 310, dmg: 1569, reqLv: 20 },
        { lv: 12, hp: 290, dmg: 1427, reqLv: 19 },
        { lv: 11, hp: 260, dmg: 1297, reqLv: 18 },
        { lv: 10, hp: 240, dmg: 1179, reqLv: 17 },
        { lv: 9, hp: 210, dmg: 1072, reqLv: 16 },
        { lv: 8, hp: 190, dmg: 974, reqLv: 15 },
        { lv: 7, hp: 180, dmg: 886, reqLv: 14 },
        { lv: 6, hp: 160, dmg: 805, reqLv: 13 },
        { lv: 5, hp: 150, dmg: 732, reqLv: 12 },
        { lv: 4, hp: 130, dmg: 666, reqLv: 11 },
        { lv: 3, hp: 120, dmg: 605, reqLv: 10 },
        { lv: 2, hp: 110, dmg: 550, reqLv: 9 },
        { lv: 1, hp: 100, dmg: 500, reqLv: 8 }
    ],

    // 航母数据（从高到低倒序）
    warships: [
        { no: 5, lv: 16, cap: '/', token: 165000, tech: 25 },
        { no: 4, lv: 14, cap: '/', token: 632000, tech: 20 },
        { no: 3, lv: 12, cap: '/', token: 255000, tech: 15 },
        { no: 2, lv: 10, cap: '/', token: 135000, tech: 10 },
        { no: 1, lv: 8, cap: '/', token: '/', tech: 5 }
    ],

    // 附属的战舰能量消耗表格
    extraHtml: `
        <h3 style="margin-top:32px; margin-bottom:16px; color:#1f2937;">战舰能量消耗表</h3>
        <div class="table-container" style="max-width: 500px;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);">部署次数</th>
                        <th style="border-right:1px solid rgba(0,0,0,0.05);"><img src="images/基础/Ammo.webp" onerror="this.src='images/基础/Ammo.webp'">本次能量成本</th>
                        <th><img src="images/基础/Ammo.webp" onerror="this.src='images/基础/Ammo.webp'">累计消耗能量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">1</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#4b5563;">5</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">2</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">10</td>
                        <td style="color:#4b5563;">15</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">15</td>
                        <td style="color:#4b5563;">30</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">20</td>
                        <td style="color:#4b5563;">50</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">25</td>
                        <td style="color:#4b5563;">75</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};