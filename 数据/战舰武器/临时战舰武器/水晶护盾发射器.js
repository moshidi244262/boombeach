window.GameDataDB = window.GameDataDB || {};

window.GameDataDB['水晶护盾发射器'] = {
    name: '水晶护盾发射器',
    img: 'images/战舰武器/临时战舰武器/Crystal_Shield_Projector.webp',
    desc: '在战场上部署一个持久的水晶护盾发射器，它能源源不断地为处于其范围内的己方部队提供护盾，抵挡受到的伤害。',
    baseStats: [
        { label: '保护范围', val: '10' },
        { label: '持续时间', val: '∞(不伤不灭)' },
        { label: '所属分类', val: '临时战舰武器' }
    ],
    
    // 显示生命值（防护盾）计算器，隐藏伤害计算器
    hideHpCalc: false,
    hideDmgCalc: true,

    // 定制化表头
    tableHeadersHtml: `
        <thead>
            <tr>
                <th><img src="images/基础/Level.webp" onerror="this.src='images/基础/Level.webp'">等级</th>
                <th><img src="images/基础/Protect.webp" onerror="this.src='images/基础/Protect.webp'">防护盾点数</th>
                <th><img src="images/基础/Menu_icon_research.webp" onerror="this.src='images/基础/Menu_icon_research.webp'">研究所等级</th>
            </tr>
        </thead>
    `,

    // 专属渲染模板
    renderRowTemplate: function(lv, hlType, formatNum) {
        return `
            <tr>
                <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${lv.lv}</td>
                <td class="${hlType === 'hp' ? 'calc-highlight-hp' : ''}" style="color:#16a34a; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">${formatNum(lv.hp)}</td>
                <td>${formatNum(lv.reqLv)}</td>
            </tr>
        `;
    },

    // 护盾加成计算逻辑（基于输入 HP 的加成按键进行映射）
    calculateData: function(originalData, hpInput) {
        return originalData.map(item => ({
            ...item,
            hp: item.hp !== '/' ? Math.round(item.hp * (1 + hpInput / 100)) : '/'
        }));
    },

    // 等级数据（从高到低倒序）
    levels: [
        { lv: 21, hp: 650, reqLv: 28 },
        { lv: 20, hp: 600, reqLv: 27 },
        { lv: 19, hp: 550, reqLv: 26 },
        { lv: 18, hp: 525, reqLv: 25 },
        { lv: 17, hp: 500, reqLv: 24 },
        { lv: 16, hp: 475, reqLv: 23 },
        { lv: 15, hp: 450, reqLv: 22 },
        { lv: 14, hp: 425, reqLv: 21 },
        { lv: 13, hp: 400, reqLv: 20 },
        { lv: 12, hp: 375, reqLv: 19 },
        { lv: 11, hp: 350, reqLv: 18 },
        { lv: 10, hp: 325, reqLv: 17 },
        { lv: 9, hp: 300, reqLv: 16 },
        { lv: 8, hp: 275, reqLv: 15 },
        { lv: 7, hp: 250, reqLv: 14 },
        { lv: 6, hp: 225, reqLv: 13 },
        { lv: 5, hp: 200, reqLv: 12 },
        { lv: 4, hp: 175, reqLv: 11 },
        { lv: 3, hp: 150, reqLv: 10 },
        { lv: 2, hp: 125, reqLv: 9 },
        { lv: 1, hp: 100, reqLv: 8 }
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
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">14</td>
                        <td style="color:#4b5563;">19</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">3</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">23</td>
                        <td style="color:#4b5563;">42</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">4</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">32</td>
                        <td style="color:#4b5563;">74</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">5</td>
                        <td style="color:#9333ea; font-weight:bold; border-right:1px solid rgba(0,0,0,0.03);">41</td>
                        <td style="color:#4b5563;">115</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};