import fs from 'fs-extra';
import path from 'path';
import { convertMarkdownToPdf } from './utils';
const markdown = `# Investment Research Report: Rheinmetall AG (RHM.DE)

**Date:** April 24, 2025  
**Analyst:** Consensus AI 
**Coverage:** Public Equity–Defense & Mobility  
**Ticker:** RHM.DE  
**Exchange:** XETRA (DAX)

---

## 1. Business Background

### 1.1 Company Overview

Founded in 1889 and headquartered at Rheinmetall Platz 1, Düsseldorf, Rheinmetall AG is a diversified, integrated technology group listed on Germany’s prime DAX index since March 20, 2023.

• **Revenues (FY 2023): €7.176 bn** (+12% y-o-y) [Annual Report 2023, p. 45]  
• **EBIT (FY 2023): €918 m** (margin 12.8%) [AR 2023, p. 47]  
• **Workforce:** 31,000+ employees across 107 sites (Dec 2024) [AR 2023, p. 12]  
• **Divisions (5):** Vehicle Systems Europe, Vehicle Systems International, Weapon & Ammunition, Electronic Solutions, Power Systems [AR 2023, p. 10]  
• **ESG Goal:** CO₂ neutrality by 2035 [AR 2023, p. 75]

### 1.2 Products & Services

#### Defence

- **Land Platforms:**  
  - *Armoured Fighting Vehicles:* Panther KF51 MBT; Puma and Lynx IFVs; Boxer 8×8 modular vehicle.  
  - *Tactical Wheeled:* HX logistics trucks (3,500+ delivered under Australia LAND 121) [Learning 2].  
  - *Specialty:* Caracal air-assault vehicle; wheeled self-propelled howitzers.

- **Weapon & Ammunition:**  
  - *Precision Munitions:* HERO loitering munitions.  
  - *Artillery:* 155 mm shells; munitions recovery (via Stascheit).  
  - *Backlog:* €8.24 bn nomination backlog (end 2023) [Learning 5].

- **Electronic Solutions:**  
  - *Fire Control:* GMARS precision-fires launcher (JV with Lockheed Martin).  
  - *Vehicle Electronics:* ADAS in-cabin systems; digital training modules.

#### Civilian Mobility & Industry

- **Hydrogen & E-Power:** Balance-of-plant solutions; power electronics.  
- **Thermal Management & Composites:** Lightweight materials for automotive and industrial applications.

### 1.3 Customers & Partners

- **Government Defence Agencies:** Bundeswehr (Germany), Royal Australian Navy, Hungarian Armed Forces.  
- **International Militaries:** Ukraine (Lynx IFV & TPz Fuchs production JV in Kyiv from 2024); Lithuania (155 mm ammo plant, €180 m, operational mid-2026).  
- **Private Security Firms** & **Strategic Partners:**  
  - *Lockheed Martin:* GMARS JV; GMARS Summit, Mar 31 2025 [Learning 3].  
  - *Indra:* MoU to upgrade Spanish Leopard 2E combat systems, Mar 12 2025 [Learning 8].  
  - *MAN:* 51% stake in Rheinmetall MAN Military Vehicles (RMMV).  
  - *MGCS Project Company GmbH:* 25% joint venture with KNDS (Mar 23 2025) to define Main Ground Combat System [Learning 7].

### 1.4 Revenue Model & Unique Positioning

- **Revenue Streams:** Offerings span high-margin defence contracts (software, systems, munitions) and cyclical civilian mobility projects.  
- **Competitive Moat:** 
  1. *Integrated Land Systems:* From hull development to electronics, ammunition, and after-sales.  2. *Scale & Backlog:* €55 bn order book (as of Apr 23 2025) [Learning 15].  3. *EU Footprint & “Buy European” Rules:* ≥65% value in EU/EEA or Ukraine enhances competitiveness [Learning 42].


---

## 2. Why Have the Stocks Risen?

Rheinmetall’s share price appreciated by **165.75% over 12 months** and **89.11% over 3 months** through Apr 23 2025 [Learning 18], significantly outperforming the DAX (+20.3%) and peer indices [Learning 14]. Key drivers:

1. **Post-Ukraine Defense Spending Surge:** German and allied procurements on Panther, Puma, Lynx, Leopard upgrades [Learning 4; 5].  
2. **Record Backlog Expansion:** From €38.3 bn (end 2023) to €55.0 bn (Apr 2025) [Learning 15].  
3. **Index Inclusion:** DAX promotion on Mar 20 2023 propelled passive inflows.  
4. **Margin Expansion:** Group margin rose from 12.0% in 2022 to 12.8% in 2023 and 15.2% in FY 2024 [Learning 15; 16].  
5. **Forward Guidance & Macro Tailwinds:** Management forecasts 25–30% sales growth in 2025 (€12.19 bn–€12.68 bn) with 15.5% margin, on EU’s €800 bn ReArm Europe Plan [Learning 41; 42].  
6. **Analyst Upgrades:** Consensus ‘Overweight/Buy’ with rising price targets [Learning 19].  

**Technical Signals:**  
- Short-term MA sell vs. long-term MA buy; pivot-top sell on Apr 15 2025 (–7.40%) [Learning 20].  
- Quant model forecasts ~121% upside in 3 months to €3,060–€3,429 (90% confidence) [Learning 20].


---

## 3. Management & Governance

### 3.1 Supervisory Board

Rheinmetall AG adheres to German codetermination (Mitbestimmung). Its 16-member Supervisory Board is split 50:50 between shareholder (8 seats) and employee (8 seats) representatives:

| Name                           | Role                     | Term      | Committee Roles                                   |
|--------------------------------|--------------------------|-----------|---------------------------------------------------|
| Ulrich Grillo (b.1959)         | Chairman                 | to 2025   | Chair of all 5 committees; external at E.ON SE [Learning 37] |
| Dr. Daniel Hay (b.1979)        | Deputy Chairman          | to 2027   | Member of Audit, Personnel & Remuneration, Strategy, Mediation [Learning 38] |
| Sigmar Gabriel (b.1959)        | Proposed X              | proposed  | Geopolitics network expertise [Learning 39]         |
| Prof. Dr. Sabrina Jeschke      | Proposed X              | proposed  | AI expertise [Learning 39]                         |
| Marc Tüngler                   | Shareholder Rep         | 2027      | Governance specialist [Learning 39]                |
| Saori Dubourg                  | Shareholder Rep         | 2027      | Sustainability expert [Learning 39]                |
| (8 Employee Reps)              | —                        | to 2027   | —                                                 |

**Governance Observations:**  
- 50:50 parity + neutral chair (Ulrich Grillo) may tilt control toward management (casting vote) [Learning 38; 39].  
- Potential conflict: Grillo’s E.ON seat vs. defence oversight [Learning 37].  
- Board refresh in 2024 introduced ESG-linked KPIs into exec remuneration; extended CEO Armin Papperger’s contract to 2029; appointed Klaus Neumann as CFO [Learning 39].

### 3.2 Executive Leadership

| Executive             | Position       | Background                              |
|-----------------------|----------------|-----------------------------------------|
| Armin Papperger       | CEO            | Engineering & Defence veteran; rearmament strategist; term extended to 2029 [Learning 39]. |
| Klaus Neumann         | CFO            | Former finance head; led Eurobond issuance. |
| (3 other segment heads)| CDO, COO, etc. | —                                       |

### 3.3 Culture & Employee Sentiment

- **Glassdoor (Spring 2025, 559 reviews):** Overall 3.5/5; Work/Life & DEI 3.7/5; Senior Management & Culture 3.2/5; complaints around leadership, transparency [Learning 33].  
- **Gender Rating Disparity:** Men 4.5/5 (n=13) vs. Women 2.4/5 (n=5) [Learning 34].  
- **North America Subsidiary (ARV):** Elimination of 9/80 schedule, PTO cuts; 1.0/5 rating; high turnover [Learning 35].  
- **Employer Branding:** Ranked Top 10 Most Attractive Employer for engineers in Germany (2024 Universum Survey) [Learning 36].

**Governance Risk:** Employee rep dominance may slow oversight; cultural issues in U.S. subsidiary pose reputational risk.


---

## 4. Core Business Analysis

### 4.1 Segment Revenue & Backlog (2020–2024)

| Division                     | 2020 (€ m) | 2021 | 2022   | 2023   | 2024F   | CAGR 20–23 | Margin 2023 | Backlog (end 2023) |
|------------------------------|-----------:|-----:|-------:|-------:|--------:|-----------:|------------:|-------------------:|
| Vehicle Systems Europe      | 1,820      | 2,110| 2,270  | 2,610  | 3,790   | +15%      | 12.4%      | —                  |
| Vehicle Systems International| —          | —    | —      | —      | —       | —         | —          | —                  |
| **Total Vehicle Systems**   | 1,820      | 2,110| 2,270  | 2,610  | 3,790   | +15%      | 12.4%      | —                  |
| Weapon & Ammunition         | —          | —    | 1,470  | 1,760  | 2,780   | n/a       | 23.0%      | €8.24 bn backlog  |
| Electronic Solutions        | 931        | 1,050| 1,120  | 1,320  | 1,730   | +42%      | 11.4%      | €2.18 bn backlog  |
| Power Systems               | —          | —    | —      | —      | —       | —         | —          | —                  |
| **Group Total**             | 3,551      | 4,160| 6,410  | 7,176  | 9,751   | +?        | 15.2%¹     | €55.0 bn (Apr 25)  |

¹FY 2024 margin. Source: Annual Reports 2021–2024; Apr 23 2025 trading update [Learning 15].

### 4.2 Vehicle Systems

- **Drivers:** €1 bn German/Dutch airborne vehicles; US XM30 IFV (€700 m); Hungary Lynx IFVs; 211 Boxer for Australia; Leopard 2 upgrades [Learning 4].  
- **2024 Forecast:** +45% revenue; margin expansion to ~13.5%.  
- **Strategy:** JV with KNDS for MGCS; expand U.S. IFV bid; local manufacturing in Australia (MASS assembly), Ukraine JV.

### 4.3 Weapon & Ammunition

- **2023 Performance:** €1.76 bn (+20% y-o-y); margin 23% [Learning 5].  
- **2024E:** +58% to €2.78 bn, driven by German framework (tank ammo €3.2 bn; artillery €1.4 bn) and €1.7 bn Ukraine orders.  
- **Capacity Expansion:** Unterlüß plant upgrade (from 200k to 350k shells p.a.) with €600 m capex [Learning 43].

### 4.4 Electronic Solutions

- **2023:** €1.32 bn (+42% since 2020); 11.4% margin [Learning 6].  
- **2024E:** €1.73 bn (+31%); backlog €2.18 bn.  
- **Highlights:** Skynex (~€700 m contract); C4I upgrades with Indra.

### 4.5 Power Systems

- **2023/24:** Modular e-power, hydrogen balance-of-plant. Revenue contribution ~5% of Group.  
- **Strategic Pivot:** Repurpose Berlin & Neuss auto plants for defence components (Feb 2025 announcement) [Learning 44].

### 4.6 Civil Mobility & Diversification

- **Thermal & Composites:** Steady mid-single digit growth; margin ~8%.  
- **Resilience:** Offsetting cyclical auto downturn with defence push; logistics-driven revenue deferral €250 m into 2025 [Learning 45].


---

## 5. Competitive Landscape & Industry Overview

### 5.1 Peers & Market Position

| Company                       | Market Cap (€ bn) | 1-Year TSR (%) | Key Strengths                        |
|-------------------------------|------------------:|---------------:|--------------------------------------|
| Rheinmetall AG (RHM.DE)       | 65.3              | +165.8         | Integrated land systems; backlog; DAX inclusion |
| Krauss-Maffei Wegmann (KNDS)  | Private JV        | —              | German-French cooperation (Leopard/Leclerc) |
| BAE Systems (BA.L)            | 46.0              | +35            | U.S. & UK defence; naval & air systems    |
| Lockheed Martin (LMT US)      | 120.0             | +28            | Aerospace; missiles; broad portfolio     |
| Elbit Systems (ESLT IL)       | 15.0              | +42            | C4ISR; loitering munitions; electronics |

Rheinmetall ranks among Europe’s top land-systems providers; its targeted share of EU defence investment aims to rise from 18% to 25% by 2030 [Learning 43].

### 5.2 Industry Trends & Tailwinds

1. **Post-2022 ReArmament Wave:** EU plans €800 bn (2025–2030) via Pact escape clause and SAFE loan facility [Learning 42].  
2. **NATO 3.5% GDP Target:** Germany potential constitutional change under Merz could unlock up to €400 bn to Rheinmetall (20–25% share) [Learning 41].  
3. **Localization & “Buy European”:** ≥65% domestic value rules strengthen incumbents [Learning 42].  
4. **Digitalization & AI:** Investments in C4I, networked systems, autonomous munitions.  
5. **U.S. Market Entry:** Target $2 bn U.S. revenues by 2027; Bradley successor competition.  
6. **Supply Chain & Capacity:** European consolidation (MGCS JV, plant expansions) to meet demand.

### 5.3 Key Risks in Industry

- **Budget Volatility:** Dependence on government spending cycles.  
- **Geopolitical Shocks:** Escalation in Ukraine; potential redirection of orders.  
- **Regulatory & Export Controls:** ITAR, EU Defence Procurement Directive.  
- **Competition:** from non-European suppliers if exemptions granted.


---

## 6. Financial Performance Analysis

### 6.1 Historical Growth & Profitability (2021–2024)

| Metric                   | 2021       | 2022       | 2023       | 2024       | 3-Year CAGR |
|--------------------------|-----------:|-----------:|-----------:|-----------:|------------:|
| Revenue (€ m)            | 6,410      | 6,410²     | 7,176      | 9,751      | +17.5%³     |
| Operating Result (€ m)   | 754        | 771        | 918        | 1,478      | +24.0%      |
| Op. Margin (%)           | 11.8       | 12.0       | 12.8       | 15.2       | +1.1pp      |
| Net Income (€ m)         | 500        | 600        | 804        | 1,150      | +31.7%      |
| ROE (%)                  | 15.0       | 17.2       | 22.1       | 24.5       | +3.0pp      |
| Leverage (Net Debt/EBITDA)| 1.8x      | 1.5x       | 1.2x       | 1.0x       | –0.8x       |

²Restated pre-Shriram adjustment [Learning 17].  ³From FY 2021 to FY 2024.

### 6.2 Balance Sheet & Cash Flow

- **Market Cap:** €65.3 bn (Apr 23 2025) [Learning 29].  
- **P/E (TTM):** 86.2x; **Forward P/E:** 46.5x; **PEG:** 1.09; **P/B:** 14.8x; **EV/EBITDA:** 34.7x [Learning 30].  
- **Dividend:** €8.10 proposed (yield 0.588%); rising from €2.00 (2021) to €8.10 (2025) [Learning 29].  
- **Free Cash Flow:** €850 m levered (TTM).  
- **Net Debt:** €1,020 m; net debt/EBITDA 1.0x.

### 6.3 Valuation & Technical Outlook

- **Premium Valuation:** Superior growth expectations vs. peers justify higher multiples but increase risk if guidance misses.  
- **Chart Technicals:** Support €1,265/€1,244; resistance €1,440 [Learning 20].  
- **Analyst Consensus:** Overweight/Buy; average PT ~€1,650 (Implied upside ~19%).


---

## 7. Investment Thesis & Risks

### 7.1 Bull Case & Catalysts

1. **Record Backlog & Forward Visibility:** €55 bn order book ensures multi-year revenue.  
2. **European ReArmament Wave:** Access to €800 bn EU facility + German budget expansion [Learning 42].  
3. **MGCS & Next-Gen Systems:** Leadership in Leopard/Leclerc replacement by 2040 via 25% MGCS stake [Learning 7].  
4. **Margin Leverage in Weapon & Ammunition:** 23% margin segment; capacity expansions driving profitability [Learning 5].  
5. **U.S. Market Entry:** Bradley successor bid, target $2 bn by 2027 [Learning 45].  
6. **ESG & Innovation Profile:** CO₂ neutrality, AI expertise via new board appointments.

### 7.2 Bear Case & Risks

1. **Valuation Stretch:** 86x P/E (TTM) leaves little room for disappointment.  
2. **Execution Risk:** Plant expansions, JV integrations (MGCS, Ukraine JV).  
3. **Budget Cuts:** Post-2026 defence reprioritisation; political shifts in Germany/EU.  
4. **Governance & Culture:** Glassdoor warnings; employee rep gridlock slowing decisions.  
5. **Supply Chain Constraints:** Raw material shortages for ammunition, semiconductors for electronics.

### 7.3 Conclusion & Recommendation

Rheinmetall stands at the epicenter of a major rearmament cycle with deep backlog, diversified product base, expanding margins, and strategic partnerships. While rich multiples pose risk, catalytic contracts (MGCS, U.S. IFV) and macro tailwinds underpin an *Overweight* recommendation, with €1,650 12-month price target (19% upside).

---

*Footnotes:*  Detailed citations correspond to internal learning IDs as provided by research database.  
*Disclaimer:* This report is for institutional clients only and does not constitute investment advice.


## Sources

- https://www.rheinmetall.com/en
- https://www.rheinmetall.com/en/company/about-rheinmetall
- https://canvasbusinessmodel.com/blogs/target-market/rheinmetall-target-market?srsltid=AfmBOooZAkDhbmDt5Ka6lY5ST3Iv95C3BcrIpbZXCSmCj3zJiruc9orK
- https://www.rheinmetall.com/en/products/overview
- https://en.wikipedia.org/wiki/Rheinmetall
- https://www.rheinmetall.com/en/products/mobility/overview
- https://www.rheinmetall.com/en/media/news-watch/news/2024/03/2024-03-14-rheinmetall-financial-figures-2023
- https://uk.marketscreener.com/quote/stock/RHEINMETALL-AG-436527/finances-segments/
- https://ir.rheinmetall.com/investor-relations/news/financial-reports/
- https://defence-industry.eu/rheinmetall-reports-record-sales-of-e9-75-billion-and-all-time-high-order-backlog-of-e55-billion-in-2024/
- https://www.rheinmetall.com/sitemap.site_1.xml
- https://www.rheinmetall.com/en/media/news-watch/news/2025/03/2025-03-13-indra-and-rheinmetall-continue-their-cooperation-on-the-leopard-2
- https://www.rheinmetall.com/en/media/news-watch/news/2025/01/2025-01-24-shareholder-agreement-signed-for-mgcs-project-company
- https://ir.rheinmetall.com/investor-relations/annual-general-meeting/
- https://ir.rheinmetall.com/
- https://www.marklines.com/statics/topSuppliers/img/pdf/rheinmetall-automotive_fy2023.pdf
- https://www.rheinmetall.com/Rheinmetall%20Group/Unternehmen/Gremien/Vorstand/Verguetung/Rheinmetall-Remuneration-Report-2023.pdf
- https://docs.publicnow.com/viewDoc.aspx?filename=40377%5CEXT%5C0402CE209C1E27BE0CCD59596FB5EBDF1F8C6E3A_E323F2DE4700FED5B11F30CA7960D1DFA3399C62.PDF
- https://ir.rheinmetall.com/investor-relations/news/presentations/
- https://www.vanslingerlandt.com/wp-content/uploads/2024/03/Rheinmetall-Annual-Report-2023.pdf
- https://www.annualreports.co.uk/HostedData/AnnualReportArchive/r/rheinmetall-ag_2022.pdf
- https://www.leonardo.com/documents/15646808/28608810/20250311_Leonardo+IndustrialPlan25-29_vSent.pdf?t=1741709587968
- https://stockinvest.us/stock/RHM.DE
- https://finance.yahoo.com/quote/RHM.DE/
- https://www.plus500.com/en-es/instruments/rhm.de/rheinmetall-share-price-explained~1
- https://www.morningstar.co.uk/uk/news/263346/european-defense-stocks-soared-then-slumped-are-they-still-a-buy.aspx
- https://ir.rheinmetall.com/investor-relations/share/share-price/
- https://au.finance.yahoo.com/quote/RHM.DE/news/
- https://www.morningstar.co.uk/uk/news/262281/european-defense-stocks-have-surged-are-they-still-a-buy.aspx
- https://www.marketscreener.com/quote/stock/RHEINMETALL-AG-436527/ratings/
- https://ir.rheinmetall.com/investor-relations/share/dividend/
- https://www.marketscreener.com/quote/stock/RHEINMETALL-AG-436527/news/Armaments-boom-drives-Rheinmetall-sales-dividend-increased-49306929/
- https://stockinvest.us/dividends/RNMBY
- https://simplywall.st/stocks/de/capital-goods/etr-rhm/rheinmetall-shares/dividend
- https://www.tipranks.com/stocks/de:rhm/dividends
- https://www.morningstar.co.uk/uk/news/262264/rheinmetall-sharply-higher-fair-value-on-defense-spending-boost.aspx
- https://www.rheinmetall.com/en/company/management/supervisory-board/representative-supervisory-board
- https://www.marketscreener.com/quote/stock/RHEINMETALL-AG-436527/news/Rheinmetall-Letter-to-the-shareholders-by-Ulrich-Grillo-Chairman-of-the-Supervisory-Board-of-Rhei-49485182/
- https://old.ekonom.ug.edu.pl/web/download.php?OpenFile=5032
- https://www.researchgate.net/publication/305379734_The_rise_and_fall_of_supervisory_codetermination_in_Germany
- https://www.annualreports.com/HostedData/AnnualReportArchive/v/OTC_VWAGY_2017.pdf
- https://www.rheinmetall.com/en/company/management/supervisory-board/biographies/biography-saori-dubourg
- https://www.rheinmetall.com/en/responsibility/esg-reporting
- https://www.meag.com/de/esg/medien/Proxy%20Voting%20Zwischenbericht%20Q2%202024inet.pdf
- https://www.rheinmetall.com/en/suppliers/sustainability
- https://www.artemisfunds.com/-/media/files/stewardship-and-esg/voting-policy-and-reports/artemis-voting-report-may-24.pdf
- https://www.lbbw-am.de/fileadmin/Corporate_Governance/Abstimmungen_2024.pdf
- https://www.glassdoor.com/Reviews/Rheinmetall-Reviews-E10472.htm
- https://www.glassdoor.com/Overview/Working-at-Rheinmetall-EI_IE10472.11,22.htm
- https://www.glassdoor.com/Reviews/Employee-Review-Rheinmetall-E10472-RVW46476041.htm
- https://www.glassdoor.com/Reviews/Rheinmetall-work-life-balance-Reviews-EI_IE10472.0,11_KH12,29.htm
- https://www.glassdoor.co.uk/Reviews/Employee-Review-Rheinmetall-E10472-RVW52570382.htm
- https://www.glassdoor.com.au/Reviews/Rheinmetall-great-culture-Reviews-EI_IE10472.0,11_KH12,25.htm
- https://www.glassdoor.com/Reviews/Employee-Review-Rheinmetall-E10472-RVW95825778.htm
- https://ebm.ekf.rs/wp-content/uploads/2025/02/EBM-2024.pdf
- https://www.reuters.com/business/aerospace-defense/rheinmetall-forecasts-2025-sales-jump-ukraine-war-us-decoupling-2025-03-12/
- https://universumglobal.com/resources/news-press/german-young-professional-rankings-2024/
- https://www.marketscreener.com/quote/stock/RHEINMETALL-AG-436527/news/Rheinmetall-forecasts-2025-sales-jump-on-Ukraine-war-US-decoupling-49307090/
- https://ec.europa.eu/commission/presscorner/detail/en/ip_25_793
- https://commission.europa.eu/topics/defence/future-european-defence_en
- https://delano.lu/article/eu-defence-could-hit-eu1trn-by-2030-rheinmetall-ceo
- https://www.whitecase.com/insight-alert/big-bang-european-commission-unveils-proposals-support-surge-defence-spending-reduce
- https://www.euronews.com/my-europe/2025/03/18/commission-to-propose-eu-wide-mechanism-to-pool-member-states-defence-orders
- https://blogs.cfainstitute.org/investor/2025/04/16/europe-rearms-what-defense-spending-means-for-markets/
- https://uk.finance.yahoo.com/news/rheinmetall-repurpose-two-german-factories-123003507.html
- https://en.defence-ua.com/industries/rheinmetall_will_diversify_two_car_component_plants_for_weapons_and_ammunition_production-13704.html
- https://english.news.cn/20250225/b6b106143fe34fc8852be613260eb860/c.html`;

async function testPdfConversion() {
    const reportDir = path.resolve(process.cwd(), 'reports');
    await fs.ensureDir(reportDir);

    const outputPath = path.join(reportDir, 'test-report.pdf');

    try {
        const pdfPath = await convertMarkdownToPdf(markdown, outputPath);
        console.log(`PDF 生成成功，文件路径: ${pdfPath}`);
    } catch (error) {
        console.error('PDF 生成失败:', error);
    }
}

testPdfConversion(); 