/**
 * VIKK Eksamitöö Abirakendus
 * IT-süsteemide nooremspetsialist, EKR tase 4
 * Baseerub neljal ametlikul dokumendil
 */

// ==================== ANDMED ====================
const DATA = {
    timeline: [
        { id: 't1', date: '2027-12-14', title: 'Eksamitöö kavand valmis', desc: 'Saata koolipoolsele juhendajale, praktikapoolsele juhendajale ja osakonnajuhatajale', milestone: true },
        { id: 't2', date: '2028-03-17', title: 'Eelkaitsmine koos praktika kaitsmisega', desc: 'Esimene tagasiside tööle ja kaitsmisele. Kaitsekõne ja esitluse esimene versioon peab olema valmis.', milestone: true },
        { id: 't3', date: '2028-04-05', title: 'Teema kinnitamine käskkirjaga', desc: 'Teema registreeritud Tahvelis. Peale seda teemat enam muuta ei tohi.', milestone: true },
        { id: 't4', date: '2028-04-19', title: 'Saada töö juhendajale', desc: 'Viimaste soovituste saamiseks enne lõplikku esitamist', milestone: true },
        { id: 't5', date: '2028-04-30', title: 'Lõplik versioon esitatud', desc: 'Digiallkirjastatud PDF + praktilise töö .zip. Viimane päev!', milestone: true },
        { id: 't6', date: '2028-06-03', title: 'Eksamitöö kaitsmine', desc: 'Lõplik kaitsmine komisjoni ees', milestone: true }
    ],
    structure: [
        { id: 's1', title: 'Tiitelleht', required: true, hint: 'VIKK nimetus, eriala, autor, pealkiri suurtähtedega, töö liik, juhendaja, koht ja aasta. Tiitellehel 16pt.' },
        { id: 's2', title: 'Autentsuse deklaratsioon (Lisa 1)', required: true, hint: 'Digiallkirjastatud (juhendaja + autor). Paberil allkirjastamine pole vajalik.' },
        { id: 's3', title: 'Sisukord', required: true, hint: 'Automaatselt genereeritud Wordis. Kõik pealkirjad ja alapealkirjad.' },
        { id: 's4', title: 'Mõistete ja lühendite loetelu', required: false, hint: 'Vajadusel, tähestikulises järjekorras, koos selgitustega.' },
        { id: 's5', title: 'Sissejuhatus', required: true, hint: '5-10% töö mahust (ca 1-2 lk). Teema valiku põhjendus, eesmärk, ülesanded, allikad, ülesehitus. Tulemusi ei tooda!' },
        { id: 's6', title: 'Teoreetiline osa', required: true, hint: 'Hetkeolukord, olemasolevad seadmed/tarkvara, tehnoloogiate ülevaade, tegevus- ja ajakava.' },
        { id: 's7', title: 'Praktilise osa kirjeldus ja põhjendus', required: true, hint: 'Lahenduse loomine, testimine, juurutamine. Dokumenteeri tegevused.' },
        { id: 's8', title: 'Kokkuvõte', required: true, hint: 'Kuni 1 lk. Uut infot ei tohi lisada. Peavad selguma eesmärk ja tulemused.' },
        { id: 's9', title: 'Kasutatud allikate loetelu', required: true, hint: 'Vähemalt 5 asjakohast allikat. Wikipedia ja AI pole asjakohased. Viitamine VIKK juhendi järgi.' },
        { id: 's10', title: 'Lisad', required: false, hint: 'Vajadusel. Iga lisa uuelt lehelt. Viidata tekstis.' },
        { id: 's11', title: 'Summary (inglise keeles)', required: true, hint: 'Kuni 1 lk. Ei ole otsetõlge! Sisaldab kõiki osi lühendatult.' }
    ],
    criteria: [
        { id: 'c1', title: 'Vastavus teemale ja erialale', min: 'Töö peab olema seotud arvutisüsteemide ja -taristu haldamisega', competency: 'B.3.1 Projekti kavandamine', tips: 'Vali teema, mis baseerub reaalsel vajadusel organisatsioonis. Arvuta riistvara, süsteemide ja taristu haldamine.' },
        { id: 'c2', title: 'Praktiline kasutatavus', min: 'Konkreetse sihtgrupi või kliendi olemasolu, reaalne vajadus', competency: 'B.3.1 Projekti kavandamine', tips: 'Määra selgelt, kellele lahendus on mõeldud. Kasutaja vajadus peab olema tõendatud.' },
        { id: 'c3', title: 'Töö maht, töövahendid ja -võtted', min: 'Maht vähemalt 156 tundi, sobivad vahendid ja töövõtted', competency: 'B.3.2, B.3.3, B.3.4', tips: 'Dokumenteeri ajakulu. Vali vahendid põhjendatult. Kasuta automaatpaigaldust, monitooringut, testiplaane.' },
        { id: 'c4', title: 'Teoreetilise osa sisu ja vormistus', min: 'Loogiline struktuur, osad vastavad min nõuetele', competency: 'B.3.4 Dokumenteerimine', tips: 'Hierarhiline numeratsioon (1, 1.1). Viita allikatele tekstis. Püsi VIKK vormistusnõuetes.' },
        { id: 'c5', title: 'Erialane terminoloogia ja keelekasutus', min: 'Arusaadav erialane terminoloogia, dokumenteerimine vastab min nõuetele', competency: 'B.3.4 Dokumenteerimine', tips: 'Kasuta sulgudes ingliskeelseid termineid. Kood: Courier New või Consolas. Korrektne eesti keel.' },
        { id: 'c6', title: 'Kasutatud allikate loetelu', min: 'Vähemalt 5 asjakohast allikat', competency: 'B.3.1 Kavandamine', tips: 'Wikipedia ja AI pole allikad. Viita tekstis: (Autor, aasta, lk). Loetelus tähestikulises järjekorras.' },
        { id: 'c7', title: 'Praktilise lahenduse kvaliteet', min: 'Demonstreeritud, osaliselt testitud, vastab parimatele praktikatele', competency: 'B.3.2, B.3.3, B.3.4', tips: 'Testiplaan, testimisaruanded, paigaldusjuhend, turvatestid. Demonstreeri toimivust.' },
        { id: 'c8', title: 'Jätkusuutlikkus ja arendusvõimalused', min: 'Selgitatud vastavus kaasaegsetele tehnoloogiatele, arendusvõimalused', competency: 'B.3.1, B.3.12', tips: 'Võrdle alternatiivseid lahendusi. Selgita ISKE vastavust. Edasiarendusplaan.' },
        { id: 'c9', title: 'Retsensendi arvamus', min: 'Retsensent peab olema eriala spetsialist', competency: 'Üldoskused', tips: 'Vali retsensent varakult. Vasta 3 küsimusele argumenteeritult. Ära vaidle, kaitse seisukohti.' },
        { id: 'c10', title: 'Töö kaitsmine', min: 'Oskab selgitada lahendust, vastab rahuldavalt enamikule küsimustele', competency: 'Üldoskused', tips: 'Harjuta kaitsekõnet (max 8 min: 5+3). Korrektne riietus. Kõva alus paberil. Pliiats, mitte sõrm!' }
    ],
    competencies: [
        { id: 'comp1', code: 'B.3.1', title: 'IT-taristu arendamine', indicators: ['Sisend võtmekasutajate määratlemisele', 'Lahenduse kavandamine parimate praktikate järgi', 'Tehniliste võimaluste valik', 'Ressursivajaduse hindamine testkeskkonnast lähtudes', 'Lahenduse väljatöötamise selgitamine tellijale'] },
        { id: 'comp2', code: 'B.3.2', title: 'Süsteemide haldamine ja paigaldamine', indicators: ['Tarkvara/riistvara ühilduvuse kontroll', 'Süsteemide paigaldamine juhendite järgi', 'Majutuskeskkonna planeerimine', 'Automaat- ja masspaigaldusvahendid', 'Rutiinsed hooldustegevused', 'Süsteemi talitluspidevuse tagamine (varundamine, monitooring)'] },
        { id: 'comp3', code: 'B.3.3', title: 'Testimine', indicators: ['Testiplaani koostamine', 'Testide koostamine (võimalusel automatiseerimine)', 'Tulemuste dokumenteerimine', 'Sisend parendusteks'] },
        { id: 'comp4', code: 'B.3.4', title: 'Dokumentatsiooni koostamine', indicators: ['Tehtud töö ja tulemuse dokumenteerimine', 'Juhendite ja teadmusbaasi artiklite koostamine', 'Asjakohaste tööriistade kasutamine'] },
        { id: 'comp5', code: 'B.3.5', title: 'Kasutajatugi', indicators: ['Pöördumiste registreerimine ja jälgimine', 'Suhtlus kasutajaga (juhised, klienditeenindus)', 'Asjaolude väljaselgitamine ja vea ulatuse määramine'] },
        { id: 'comp6', code: 'B.3.6', title: 'Muudatuste tugi', indicators: ['Muudatuste halduse protsessi järgimine', 'Sisend muudatuse taotlusele', 'Plaani järgimine ja taastamine ebaõnnestumisel', 'Osapoolte teavitamine'] },
        { id: 'comp7', code: 'B.3.7', title: 'Teenuse osutamine', indicators: ['Teenustasemelepingu järgimine', 'Jõudluse ja töökindluse monitooring', 'Kõrvalekallete registreerimine', 'Ennetavad meetmed'] },
        { id: 'comp8', code: 'B.3.8', title: 'Probleemihaldus', indicators: ['Probleemi tuvastamine korduvatest intsidentidest', 'Probleemi registreerimine', 'Juurpõhjuse analüüs', 'Ajutise lahenduse leidmine', 'Lõpliku lahenduse otsimine'] },
        { id: 'comp9', code: 'B.3.9', title: 'Juhendamine ja personali arendus', indicators: ['Lõppkasutajate ja kolleegide juhendamine', 'Eneseanalüüs ja koolitusvajaduse määratlemine'] },
        { id: 'comp10', code: 'B.3.10', title: 'Suhted tarnijate ja klientidega', indicators: ['Teenuste vastavuse hindamine', 'Tehnilise kirjelduse koostamine', 'Klienditeeninduse tava järgimine'] },
        { id: 'comp11', code: 'B.3.11', title: 'Projekti ja riski haldamine', indicators: ['Meeskonnaliikme rolli täitmine', 'Plaani realistlikkuse hindamine', 'Tööaja mahtu hindamine', 'Riskide maandamise ettepanekud'] },
        { id: 'comp12', code: 'B.3.12', title: 'Infoturbe haldamine', indicators: ['Infoturbepoliitika järgimine', 'Ettepanekud ajakohastamiseks', 'Turvaintsidentide tuvastamine ja teavitamine', 'Krüpteerimise ja räsimise rakendamine', 'ISKE etalonturbe süsteemi kooskõla'] }
    ],
    formatting: [
        { id: 'f1', rule: 'Formaat A4, prinditakse ühepoolselt', category: 'Üldine' },
        { id: 'f2', rule: 'Kirjatüüp Times New Roman, suurus 12pt (tiitellehel 16pt)', category: 'Üldine' },
        { id: 'f3', rule: 'Reavahe 1,5', category: 'Üldine' },
        { id: 'f4', rule: 'Tekst joondatakse vasakule ja paremale (rööpjoondus)', category: 'Üldine' },
        { id: 'f5', rule: 'Servad: vasak 3,0 cm, parem 1,5 cm, üles/alla 2,5 cm', category: 'Üldine' },
        { id: 'f6', rule: 'Leheküljenumber allserva keskele', category: 'Üldine' },
        { id: 'f7', rule: 'Nummerdamine algab tiitellehest, tiitellehele numbrit ei trükita', category: 'Üldine' },
        { id: 'f8', rule: 'Iga iseseisev osa algab uuelt lehelt', category: 'Üldine' },
        { id: 'f9', rule: 'Peatükk: 16pt, paks, suurtähed, vasakule joondatud', category: 'Pealkirjad' },
        { id: 'f10', rule: 'Alapeatükk: 14pt, paks, kaldkiri (Italic), esisuurtäht, vasakule', category: 'Pealkirjad' },
        { id: 'f11', rule: 'Pealkirjade lõppu punkti ei panda, sõnu ei poolitata', category: 'Pealkirjad' },
        { id: 'f12', rule: 'Hierarhilised numbrid: 1., 1.1., 1.1.1.', category: 'Pealkirjad' },
        { id: 'f13', rule: 'Maht 20-30 lk (max 35 lk + lisad)', category: 'Maht' },
        { id: 'f14', rule: 'Sissejuhatus 5-10% mahust (ca 1-2 lk)', category: 'Maht' },
        { id: 'f15', rule: 'Kokkuvõte kuni 1 lk', category: 'Maht' },
        { id: 'f16', rule: 'Summary kuni 1 lk', category: 'Maht' },
        { id: 'f17', rule: 'Kood: Courier New või Consolas, selgelt eristuv', category: 'Kood' },
        { id: 'f18', rule: 'Tabelid nummerdatud, pealkirjastatud, allikas viidatud', category: 'Tabelid/Joonised' },
        { id: 'f19', rule: 'Joonised nummerdatud, pealkirjastatud, allikas viidatud', category: 'Tabelid/Joonised' },
        { id: 'f20', rule: 'Viitamine tekstis: (Autor, aasta, lk) või (Autor, et al., aasta, lk)', category: 'Viitamine' },
        { id: 'f21', rule: 'Tsitaat jutumärkides ja kaldkirjas', category: 'Viitamine' },
        { id: 'f22', rule: 'Loetelud: araabia numbrid, tähed või punktid', category: 'Vormistus' }
    ],
    aiGuidelines: [
        { title: 'Dokumenteeri TI kasutamine', text: 'Töös peab olema selgelt välja toodud, kuidas ja millises ulatuses TI-d kasutati. Dokumenteeri sissejuhatuses või sobivas kohas.' },
        { title: 'Kasuta sihipäraselt', text: 'TI-d võib kasutada ideede genereerimiseks või veateadete analüüsiks, mitte aga asendada täielikult oma analüütilist mõtlemist või loovust.' },
        { title: 'Kontrolli fakte', text: 'Kontrolli TI-ga saadud fakte ja andmeid usaldusväärsetest allikatest. TI-d ei ole lubatud kasutada fakti allikana.' },
        { title: 'Hinda kriitiliselt', text: 'Ära pimesi kopeeri TI sisu. Peab analüüsima ja kohandama. Kui genereeritud kood jääb arusaamatuks, tee see endale selgeks või eemalda.' },
        { title: 'Oska selgitada', text: 'Töö kaitsmisel pead suutma tõestada täielikku kursisolekut töö sisuga, sealhulgas TI abil genereeritud osade puhul.' }
    ],
    defense: {
        speechParts: [
            { part: 'Pöördumine', text: '"Austatud eksamitööde kaitsmise komisjoni esimees, liikmed, juhendaja, retsensent, kaasõpilased"' },
            { part: 'Enese tutvustamine', text: 'Kes olen, mis erialal õpin' },
            { part: 'Töö teema', text: 'Lühidalt teema ja selle täpsustus' },
            { part: 'Töö eesmärk', text: 'Põhiprobleemi kirjeldus, teostatud ülesanded, uuringud' },
            { part: 'Põhilised tulemused', text: 'Kuidas sai tehtud? Mis tulemused? Probleemsed kohad ja lahendused.' },
            { part: 'Järeldused ja ettepanekud', text: 'Edasiarendamise võimalused' },
            { part: 'Kokkuvõte', text: 'Lühike kokkuvõte' },
            { part: 'Tänamine', text: 'Juhendajate ja retsensendi tänamine' }
        ],
        tips: [
            'Kõne pikkus kokku 8 minutit (soovitus: 5 min kõne + 3 min praktilise töö demonstratsioon)',
            'Koosta kõne kirjalikult ja harjuta mitu korda ette',
            'Kasuta visuaale (PowerPoint) – näitlikusta',
            'Kõne tekst kõval alusel (nt paksem A5 paber, dokumendikaaned). Lahtised A4 pole soovitatavad.',
            'Riietus peab olema korrektne (ülikond, lips / tagasihoidlik kostüüm)',
            'Osuta pliiatsiga, mitte sõrmega',
            'Seisa alati näoga kuulajate poole, ära vaata üle õla esitluse poole',
            'Kõne tekst EI TOHI olla telefonis!',
            'Vasta retsensendi küsimustele argumenteeritult',
            'Ära vaidle komisjonile/retsensendile vastu – kaitse oma seisukohti',
            'Kui ei tea vastust: "Minu töös ei puutunud antud problemaatikaga kokku ja seetõttu ei saa põhjalikult vastata"'
        ]
    }
};

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Ülevaade', icon: '📊' },
    { id: 'timeline', label: 'Ajakava', icon: '📅' },
    { id: 'structure', label: 'Struktuur', icon: '📋' },
    { id: 'criteria', label: 'Hindamiskriteeriumid', icon: '✅' },
    { id: 'competencies', label: 'Kompetentsid', icon: '🎯' },
    { id: 'formatting', label: 'Vormistus', icon: '📝' },
    { id: 'hours', label: 'Tunniarvestus', icon: '⏱️' },
    { id: 'ai', label: 'TI Kasutamine', icon: '🤖' },
    { id: 'defense', label: 'Kaitsmine', icon: '🎓' },
    { id: 'review', label: 'Ülevaatus', icon: '🔍' },
    { id: 'aiAnalysis', label: 'AI Analüüs', icon: '🧠' },
    { id: 'guide', label: 'Juhend', icon: '📖' }
];

// ==================== OLEK ====================
let state = loadState();
let currentView = 'dashboard';

function loadState() {
    try {
        const raw = localStorage.getItem('vikk_eksamitoo_state');
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
        timelineChecks: {},
        structureChecks: {},
        criteriaRatings: {},
        competencyChecks: {},
        formattingChecks: {},
        aiNotes: '',
        aiDeclared: false,
        hours: [],
        notes: '',
        lastThesis: '',
        aiAnalysisResult: null,
        aiProvider: localStorage.getItem('ai_provider') || 'gemini',
        aiApiUrl: localStorage.getItem('ai_api_url') || ''
    };
}

function saveState() {
    localStorage.setItem('vikk_eksamitoo_state', JSON.stringify(state));
    updateProgress();
}

// ==================== NAVIGATSIOON ====================
function init() {
    renderNav();
    renderView('dashboard');
    updateProgress();
    updateDaysBadge();
}

function renderNav() {
    const nav = document.getElementById('main-nav');
    nav.innerHTML = NAV_ITEMS.map(item => `
        <div class="nav-item ${item.id === currentView ? 'active' : ''}" data-view="${item.id}" onclick="navigate('${item.id}')">
            <span>${item.icon}</span>
            <span>${item.label}</span>
        </div>
    `).join('');
}

function navigate(view) {
    currentView = view;
    renderNav();
    renderView(view);
    document.getElementById('page-title').textContent = NAV_ITEMS.find(n => n.id === view).label;
}

// ==================== RENDERDAMINE ====================
function renderView(view) {
    const content = document.getElementById('content');
    switch (view) {
        case 'dashboard': content.innerHTML = renderDashboard(); break;
        case 'timeline': content.innerHTML = renderTimeline(); break;
        case 'structure': content.innerHTML = renderStructure(); break;
        case 'criteria': content.innerHTML = renderCriteria(); break;
        case 'competencies': content.innerHTML = renderCompetencies(); break;
        case 'formatting': content.innerHTML = renderFormatting(); break;
        case 'hours': content.innerHTML = renderHours(); break;
        case 'ai': content.innerHTML = renderAI(); break;
        case 'defense': content.innerHTML = renderDefense(); break;
        case 'review': content.innerHTML = renderReview(); break;
        case 'aiAnalysis': content.innerHTML = renderAIAnalysis(); break;
        case 'guide': content.innerHTML = renderGuide(); break;
    }
}

// ----- Ülevaade -----
function renderDashboard() {
    const totalHours = state.hours.reduce((s, h) => s + h.hours, 0);
    const structDone = Object.values(state.structureChecks).filter(Boolean).length;
    const structTotal = DATA.structure.filter(s => s.required).length;
    const timelineDone = Object.values(state.timelineChecks).filter(Boolean).length;
    const criteriaDone = Object.keys(state.criteriaRatings).length;
    const daysUntil = getDaysUntilDefense();

    return `
        <div class="grid grid-4 mb-3">
            <div class="card stat">
                <div class="stat-value ${totalHours >= 156 ? 'success' : totalHours >= 100 ? 'warning' : 'danger'}">${totalHours}</div>
                <div class="stat-label">Tegutud tunde<br>(eesmärk: 156h)</div>
                <div class="progress-bar"><div class="progress-bar-fill ${totalHours >= 156 ? '' : totalHours >= 100 ? 'warning' : 'danger'}" style="width:${Math.min(100, totalHours/156*100)}%"></div></div>
            </div>
            <div class="card stat">
                <div class="stat-value ${daysUntil > 30 ? 'success' : daysUntil > 14 ? 'warning' : 'danger'}">${daysUntil}</div>
                <div class="stat-label">Päeva kaitsmiseni<br>(03.06.2028)</div>
            </div>
            <div class="card stat">
                <div class="stat-value ${structDone >= structTotal ? 'success' : 'warning'}">${structDone}/${structTotal}</div>
                <div class="stat-label">Kohustuslikku osa<br>tehtud</div>
            </div>
            <div class="card stat">
                <div class="stat-value ${criteriaDone >= 10 ? 'success' : 'warning'}">${criteriaDone}/10</div>
                <div class="stat-label">Kriteeriumit<br>hinnatud</div>
            </div>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <h3><span class="icon">📅</span> Järgmised tähtajad</h3>
                <div class="timeline">
                    ${DATA.timeline.filter((t, i) => !state.timelineChecks[t.id] || i < 3).slice(0, 4).map(t => {
                        const done = state.timelineChecks[t.id];
                        const isPast = new Date(t.date) < new Date();
                        return `
                        <div class="timeline-item ${done ? 'done' : isPast ? 'current' : ''}">
                            <div class="timeline-date">${formatDate(t.date)}</div>
                            <div class="timeline-title">${t.title}</div>
                            <div class="timeline-desc">${t.desc}</div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            <div class="card">
                <h3><span class="icon">📝</span> Kiirülevaade</h3>
                <div class="alert alert-info">
                    <strong>Märkus:</strong> Kontrolli regulaarselt kõiki alasid. Miinimumkriteeriumid peavad kõik olema täidetud vähemalt minimaalsel tasemel, et eksamitöö vastu võetaks.
                </div>
                <p class="text-muted text-small mb-2">Hindamiskriteeriumite täitmine:</p>
                ${DATA.criteria.map(c => {
                    const r = state.criteriaRatings[c.id] || 0;
                    const color = r >= 4 ? 'var(--success)' : r >= 3 ? 'var(--warning)' : r > 0 ? 'var(--danger)' : 'var(--border)';
                    return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${color};"></div>
                        <span style="flex:1;">${c.title}</span>
                        <span style="font-weight:700;color:${color};">${r > 0 ? r + '/5' : '—'}</span>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `;
}

// ----- Ajakava -----
function renderTimeline() {
    return `
        <div class="card mb-2">
            <h3>📅 Eksamitöö ajakava 2027/28</h3>
            <div class="timeline">
                ${DATA.timeline.map(t => {
                    const done = state.timelineChecks[t.id];
                    const isPast = new Date(t.date) < new Date();
                    const days = Math.ceil((new Date(t.date) - new Date()) / (1000 * 60 * 60 * 24));
                    return `
                    <div class="timeline-item ${done ? 'done' : isPast ? 'current' : ''} ${t.milestone ? 'milestone' : ''}">
                        <div class="timeline-date">${formatDate(t.date)} ${!done && days > 0 ? `(${days} päeva)` : ''}</div>
                        <div class="timeline-title">${t.title}</div>
                        <div class="timeline-desc">${t.desc}</div>
                        <div class="timeline-actions">
                            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;">
                                <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleTimeline('${t.id}')">
                                <span>${done ? 'Tehtud' : 'Märgi tehtuks'}</span>
                            </label>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `;
}

// ----- Struktuur -----
function renderStructure() {
    return `
        <div class="card">
            <h3>📋 Nõutud dokumendi struktuur</h3>
            <div class="alert alert-warning">
                Eksamitöö peab sisaldama järgmisi osasid kindlas järjekorras. Kohustuslikud osad on märgitud.
            </div>
            <ul class="checklist">
                ${DATA.structure.map(s => {
                    const checked = state.structureChecks[s.id];
                    return `
                    <li>
                        <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleStructure('${s.id}')">
                        <div class="check-content">
                            <div class="check-title ${checked ? 'done' : ''}">${s.title} ${s.required ? '<span style="color:var(--danger);font-size:11px;">*KOHUSTUSLIK</span>' : ''}</div>
                            <div class="check-desc">${s.hint}</div>
                        </div>
                    </li>`;
                }).join('')}
            </ul>
        </div>
    `;
}

// ----- Kriteeriumid -----
function renderCriteria() {
    return `
        <div class="card mb-2">
            <h3>✅ Hindamiskriteeriumid (10 tk)</h3>
            <div class="alert alert-info">
                <strong>NB!</strong> Kõik kriteeriumid peavad olema täidetud vähemalt minimaalsel tasemel. Miinimum ei tähenda "minimaalselt", vaid "vähemalt". Kui komisjon leiab, et allikas pole asjakohane, kriteerium ei täitu.
            </div>
        </div>
        ${DATA.criteria.map(c => {
            const rating = state.criteriaRatings[c.id] || 0;
            return `
            <div class="criteria-item">
                <div class="criteria-header">
                    <div>
                        <div class="criteria-title">${c.id.replace('c','')}. ${c.title}</div>
                        <div class="criteria-meta">Kompetents: ${c.competency} | Miinimum: ${c.min}</div>
                    </div>
                </div>
                <div class="criteria-rating">
                    ${[1,2,3,4,5].map(n => `
                        <button class="rating-btn ${rating === n ? 'active' : ''} ${n <= 2 ? 'bad' : n === 3 ? 'warn' : ''}" 
                            onclick="rateCriteria('${c.id}', ${n})" title="${n}/5">${n}</button>
                    `).join('')}
                </div>
                <div class="criteria-tips">
                    <strong>Soovitus:</strong> ${c.tips}
                </div>
            </div>`;
        }).join('')}
    `;
}

// ----- Kompetentsid -----
function renderCompetencies() {
    return `
        <div class="card mb-2">
            <h3>🎯 IT-süsteemide nooremspetsialisti kompetentsid</h3>
            <div class="alert alert-info">
                Eksamitööga peavad olema tõendatud kõik järgmised kompetentsid (kutsestandard B.3). Märgi, millised tegevused sinu töös kompetentsi tõendavad.
            </div>
        </div>
        ${DATA.competencies.map(comp => {
            const checks = state.competencyChecks[comp.id] || [];
            return `
            <div class="comp-item">
                <div class="comp-header">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <span class="comp-code">${comp.code}</span>
                        <span class="comp-title">${comp.title}</span>
                    </div>
                    <span style="font-size:12px;color:var(--text-muted);">${checks.length}/${comp.indicators.length}</span>
                </div>
                <div class="comp-indicators">
                    ${comp.indicators.map((ind, i) => {
                        const checked = checks.includes(i);
                        return `
                        <label class="${checked ? 'checked' : ''}">
                            <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleCompetency('${comp.id}', ${i})">
                            ${ind}
                        </label>`;
                    }).join('')}
                </div>
            </div>`;
        }).join('')}
    `;
}

// ----- Vormistus -----
function renderFormatting() {
    const byCat = {};
    DATA.formatting.forEach(f => {
        if (!byCat[f.category]) byCat[f.category] = [];
        byCat[f.category].push(f);
    });
    return `
        <div class="card">
            <h3>📝 Vormistusnõuded (VIKK õpilastööde juhend)</h3>
            <div class="alert alert-warning">
                Töö esitatakse PDF-ina. Praktiline osa (.zip) saadetakse koos eksamitööga priit.paap@vikk.ee.
            </div>
            ${Object.entries(byCat).map(([cat, items]) => `
                <h4 style="margin:16px 0 8px;font-size:14px;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px;">${cat}</h4>
                <ul class="checklist">
                    ${items.map(f => `
                        <li>
                            <input type="checkbox" ${state.formattingChecks[f.id] ? 'checked' : ''} onchange="toggleFormat('${f.id}')">
                            <div class="check-content">
                                <div class="check-title ${state.formattingChecks[f.id] ? 'done' : ''}">${f.rule}</div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            `).join('')}
        </div>
    `;
}

// ----- Tunniarvestus -----
function renderHours() {
    const total = state.hours.reduce((s, h) => s + h.hours, 0);
    const remaining = Math.max(0, 156 - total);
    return `
        <div class="card mb-2">
            <h3>⏱️ Tunniarvestus (eesmärk: 156 tundi)</h3>
            <div class="grid grid-3 mb-2">
                <div class="stat">
                    <div class="stat-value ${total >= 156 ? 'success' : 'warning'}">${total}h</div>
                    <div class="stat-label">Tegutud</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${remaining}h</div>
                    <div class="stat-label">Puudu</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${state.hours.length}</div>
                    <div class="stat-label">Kirjet</div>
                </div>
            </div>
            <div class="progress-bar mb-2"><div class="progress-bar-fill ${total >= 156 ? '' : total >= 100 ? 'warning' : 'danger'}" style="width:${Math.min(100, total/156*100)}%"></div></div>
        </div>
        <div class="card">
            <h3>Lisa uus kirje</h3>
            <div class="hour-log">
                <input type="date" id="h-date" value="${new Date().toISOString().split('T')[0]}">
                <input type="number" id="h-hours" placeholder="Tunde" min="0" max="24" step="0.5">
                <input type="text" id="h-desc" placeholder="Tegevuse kirjeldus">
                <button class="btn" onclick="addHour()">Lisa</button>
            </div>
            <div class="hour-entries">
                ${state.hours.length === 0 ? '<p class="text-muted text-small">Kirjeid pole veel lisatud.</p>' : 
                    state.hours.slice().reverse().map((h, idx) => `
                    <div class="hour-entry">
                        <span><strong>${h.date}</strong> — ${h.desc} <span style="color:var(--primary);">(${h.hours}h)</span></span>
                        <button onclick="removeHour(${state.hours.length - 1 - idx})">&times;</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ----- TI Kasutamine -----
function renderAI() {
    return `
        <div class="card mb-2">
            <h3>🤖 Tehisintellekti kasutamise juhend</h3>
            <div class="alert alert-warning">
                TI kasutamine on lubatud, kuid peab olema <strong>dokumenteeritud</strong> ja <strong>kriitiliselt hinnatud</strong>. Varjatud TI kasutus võib tähendada eksamitöö tagasi lükkamist.
            </div>
            ${DATA.aiGuidelines.map(g => `
                <div style="padding:12px;border:1px solid var(--border);border-radius:8px;margin-bottom:10px;">
                    <div style="font-weight:700;font-size:14px;margin-bottom:4px;">${g.title}</div>
                    <div style="font-size:13px;color:var(--text-muted);">${g.text}</div>
                </div>
            `).join('')}
        </div>
        <div class="card">
            <h3>TI kasutuse deklaratsioon</h3>
            <p class="text-muted text-small mb-2">Kirjuta siia, kuidas ja millises ulatuses kasutasid töös tehisintellekti. See tekst aitab sul koostada töö sissejuhatuse vastava osa.</p>
            <textarea class="ai-textarea" onchange="state.aiNotes=this.value;saveState();" placeholder="Näide: Kasutasin ChatGPT-d ideede genereerimiseks...">${state.aiNotes || ''}</textarea>
            <label style="display:flex;align-items:center;gap:8px;margin-top:12px;cursor:pointer;">
                <input type="checkbox" ${state.aiDeclared ? 'checked' : ''} onchange="state.aiDeclared=this.checked;saveState();">
                <span>Olen dokumenteerinud TI kasutuse töös</span>
            </label>
        </div>
    `;
}

// ----- Kaitsmine -----
function renderDefense() {
    return `
        <div class="grid grid-2">
            <div class="card">
                <h3><span class="icon">🎓</span> Kaitsekõne struktuur</h3>
                <div class="timeline">
                    ${DATA.defense.speechParts.map((p, i) => `
                        <div class="timeline-item">
                            <div class="timeline-title">${i+1}. ${p.part}</div>
                            <div class="timeline-desc">${p.text}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="card">
                <h3><span class="icon">💡</span> Nõuanded esinemiseks</h3>
                <ul class="checklist">
                    ${DATA.defense.tips.map((t, i) => `
                        <li>
                            <input type="checkbox" ${state.structureChecks['def_'+i] ? 'checked' : ''} onchange="toggleStructure('def_${i}')">
                            <div class="check-content">
                                <div class="check-title ${state.structureChecks['def_'+i] ? 'done' : ''}">${t}</div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

// ==================== TEGEVUSED ====================
function toggleTimeline(id) {
    state.timelineChecks[id] = !state.timelineChecks[id];
    saveState();
    renderView('timeline');
}

function toggleStructure(id) {
    state.structureChecks[id] = !state.structureChecks[id];
    saveState();
    renderView(currentView);
}

function rateCriteria(id, val) {
    if (state.criteriaRatings[id] === val) {
        delete state.criteriaRatings[id];
    } else {
        state.criteriaRatings[id] = val;
    }
    saveState();
    renderView('criteria');
}

function toggleCompetency(compId, idx) {
    if (!state.competencyChecks[compId]) state.competencyChecks[compId] = [];
    const arr = state.competencyChecks[compId];
    const pos = arr.indexOf(idx);
    if (pos > -1) arr.splice(pos, 1); else arr.push(idx);
    saveState();
    renderView('competencies');
}

function toggleFormat(id) {
    state.formattingChecks[id] = !state.formattingChecks[id];
    saveState();
    renderView('formatting');
}

function addHour() {
    const date = document.getElementById('h-date').value;
    const hours = parseFloat(document.getElementById('h-hours').value);
    const desc = document.getElementById('h-desc').value.trim();
    if (!date || !hours || !desc) return alert('Täida kõik väljad!');
    state.hours.push({ date, hours, desc });
    saveState();
    renderView('hours');
}

function removeHour(idx) {
    state.hours.splice(idx, 1);
    saveState();
    renderView('hours');
}

// ==================== ABIKESKUSED ====================
function updateProgress() {
    // Calculate overall progress
    const checks = [
        Object.values(state.timelineChecks).filter(Boolean).length / DATA.timeline.length,
        Object.values(state.structureChecks).filter(Boolean).length / DATA.structure.length,
        Object.keys(state.criteriaRatings).length / DATA.criteria.length,
        Object.values(state.competencyChecks).reduce((s, arr) => s + arr.length, 0) / DATA.competencies.reduce((s, c) => s + c.indicators.length, 0),
        Object.values(state.formattingChecks).filter(Boolean).length / DATA.formatting.length
    ];
    const avg = Math.round(checks.reduce((a, b) => a + b, 0) / checks.length * 100);
    document.getElementById('sidebar-progress').setAttribute('stroke-dasharray', `${avg}, 100`);
    document.getElementById('sidebar-progress-text').textContent = `${avg}%`;
}

function updateDaysBadge() {
    const days = getDaysUntilDefense();
    const el = document.getElementById('days-badge');
    if (days <= 0) el.textContent = 'Kaitsmine toimub täna või on möödas';
    else el.textContent = `${days} päeva kaitsmiseni`;
}

function getDaysUntilDefense() {
    const defense = new Date('2028-06-03');
    const now = new Date();
    return Math.ceil((defense - now) / (1000 * 60 * 60 * 24));
}

function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('et-EE', { day: 'numeric', month: 'long', year: 'numeric' });
}

function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vikk_eksamitoo_seis_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = JSON.parse(e.target.result);
            if (confirm('See asendab olemasolevad andmed. Kas oled kindel?')) {
                state = data;
                saveState();
                renderView(currentView);
                alert('Andmed imporditud!');
            }
        } catch (err) {
            alert('Viga faili lugemisel!');
        }
    };
    reader.readAsText(file);
    input.value = '';
}

// ----- Ülevaatus -----
function renderReview() {
    return `
        <div class="card mb-2">
            <h3>🔍 Eksamitöö automaatülevaatus</h3>
            <div class="alert alert-info">
                Kopeeri oma eksamitöö tekst siia ja kliki <strong>Analüüsi</strong>. Süsteem kontrollib teksti VIKK juhendi, hindamiskriteeriumide ja kompetentsinõuete vastu.
                <br><strong>NB!</strong> See on automaatne kontroll – asendab osaliselt, kuid ei asenda juhendaja ja retsensendi hinnangut.
            </div>
            <textarea class="ai-textarea" id="thesis-input" style="min-height:300px;" placeholder="Kleebi siia oma eksamitöö kogu tekst...">${state.lastThesis || ''}</textarea>
            <div class="mt-2">
                <button class="btn btn-success" onclick="runAnalysis()">🔍 Analüüsi tööd</button>
                <button class="btn btn-secondary" onclick="clearAnalysis()">Tühjenda</button>
            </div>
        </div>
        <div id="analysis-results"></div>
    `;
}

function runAnalysis() {
    const text = document.getElementById('thesis-input').value;
    state.lastThesis = text;
    saveState();
    const results = analyzeThesis(text);
    document.getElementById('analysis-results').innerHTML = renderAnalysisResults(results);
}

function clearAnalysis() {
    document.getElementById('thesis-input').value = '';
    document.getElementById('analysis-results').innerHTML = '';
    state.lastThesis = '';
    saveState();
}

function analyzeThesis(text) {
    if (!text || text.trim().length < 200) {
        return { error: 'Tekst on liiga lühike analüüsimiseks. Kopeeri sisse vähemalt terve eksamitöö osa.' };
    }

    const lines = text.split(/\n/).map(l => l.trim()).filter(l => l.length > 0);
    const lower = text.toLowerCase();

    const hasSection = (patterns) => lines.some(l => patterns.some(p => p.test(l)));

    const sections = {
        sissejuhatus: hasSection([/^1\.?\s*sissejuhatus/i, /^\s*sissejuhatus\s*$/i]),
        kokkuvote: hasSection([/kokkuvõte/i, /^.*kokkuvõte.*$/im]),
        summary: hasSection([/^summary/i, /inglisekeelne\s+kokkuvõte/i]),
        allikad: hasSection([/kasutatud\s+allikad/i, /allikate\s+loetelu/i, /viited/i, /kirjandus/i]),
        autentsus: hasSection([/autentsus/i, /autori\s+deklaratsioon/i]),
        teooria: hasSection([/teoreetiline\s+osa/i, /teooria/i]),
        praktiline: hasSection([/praktiline\s+osa/i, /lahenduse\s+loomine/i, /rakenduse\s+loomine/i]),
        lisad: hasSection([/^lisa\s*\d/i, /lisad/i]),
    };

    const mentionsAI = /(tehisintellekt|chatgpt|gpt-4|gpt-3|openai|claude|gemini|copilot|midjourney|\bai\b|ti\s+)/i.test(text);
    const hasAIDecl = /(ti\s*kasutamine|tehisintellekti\s*kasutamine|kasutasin\s*chatgpt|ai\s*deklaratsioon|ti-d\s*kasutasin)/i.test(text);

    let sourceCount = 0;
    const sourcePatterns = [
        /[A-ZÄÖÜÕ][a-zäöüõ]+\s*,\s*[A-ZÄÖÜÕ]\.\s*\(\d{4}\)/g,
        /[A-ZÄÖÜÕ][a-zäöüõ]+,\s*[A-ZÄÖÜÕ]\.?\s+et\s+al\./gi,
        /^\d+\.\s+[A-ZÄÖÜÕ]/gm
    ];
    const sourcesFound = new Set();
    sourcePatterns.forEach(p => {
        const matches = text.match(p);
        if (matches) matches.forEach(m => sourcesFound.add(m));
    });
    sourceCount = sourcesFound.size;

    const estimatedPages = Math.round(text.length / 1800);

    const checks = {
        eesmark: /(eesmärk|eesmark|eesmärgid|eesmargid)/i.test(text),
        ulesanded: /(ülesanne|ulesanne|ülesanded|ulesanded)/i.test(text),
        ajakava: /(ajakava|tegevuskava|tegevusplaan)/i.test(text),
        eelarve: /(eelarve|maht\s*\d+\s*tundi|156\s*tundi)/i.test(text),
        testimine: /(testimine|testisin|testiplaan|testid|testimisel)/i.test(text),
        paigaldus: /(paigaldus|juurutamine|juurutasin|paigaldasin|deploy)/i.test(text),
        turvalisus: /(turvalisus|infoturbe|krüpteerimine|räsimine|ISKE|iso.27000|turvatest)/i.test(text),
        eneseanalüüs: /(eneseanalüüs|eneseanaluus|omadused|puudused|reflekteerimine)/i.test(text),
        edasiarendus: /(edasiarendus|jätkusuutlikkus|jatkusuutlikkus|alternatiivne|tulevikus|arenguvõimal)/i.test(text),
        klient: /(klient|kasutaja|sihtgrupp|tellij|tööandja|organisatsioon)/i.test(text),
        meeskond: /(meeskond|tiim|kaaslase|juhendaja)/i.test(text),
        terminoloogia: /(\(inglise\s+keel| inglise\s+keels|\( ingl|\(en\)|\(en:\s)/i.test(text),
        tabel: /(tabel\s*\d|joonis\s*\d)/i.test(text),
        kood: /(kood|koodilõik|funktsioon|script|konfiguratsioon|käsk|command)/i.test(text),
    };

    const critical = [];
    const warnings = [];
    const positives = [];

    if (!sections.sissejuhatus) critical.push('Puudub <strong>Sissejuhatus</strong> või see pole korrektselt pealkirjastatud.');
    if (!sections.kokkuvote) critical.push('Puudub <strong>Kokkuvõte</strong>.');
    if (!sections.summary) critical.push('Puudub ingliskeelne <strong>Summary</strong>.');
    if (!sections.allikad) critical.push('Puudub <strong>Kasutatud allikate loetelu</strong> või see pole leitav.');
    if (!sections.autentsus) critical.push('Puudub <strong>Autentsuse deklaratsioon</strong>.');
    if (!sections.praktiline) critical.push('Puudub <strong>Praktilise osa kirjeldus</strong>.');
    if (sourceCount < 5) critical.push(`Allikaid on liiga vähe: leitud ~${sourceCount}, nõutud vähemalt 5. Wikipedia ja TI ei loe!`);
    if (!checks.eesmark) critical.push('Puudub töö <strong>eesmärgi</strong> sõnastus.');

    if (mentionsAI && !hasAIDecl) critical.push('Töös mainitakse tehisintellekti, kuid puudub <strong>TI kasutuse deklaratsioon</strong> (nõutud sissejuhatuses või eraldi alaosas).');

    if (estimatedPages < 15) warnings.push(`Teksti maht on hinnanguliselt ~${estimatedPages} lehekülge. Miinimum on 20 lk (soovituslikult 25-30).`);
    if (estimatedPages > 40) warnings.push(`Teksti maht on hinnanguliselt ~${estimatedPages} lehekülge. Maksimum on 35 lk + lisad.`);
    if (!sections.teooria) warnings.push('Ei leitud selget <strong>teoreetilise osa</strong> peatükki.');
    if (!sections.lisad && text.length > 30000) warnings.push('Töömahu järgi võiks kaaluda lisade lisamist.');
    if (!checks.ulesanded) warnings.push('Ei leitud <strong>ülesannete</strong> loetelu.');
    if (!checks.ajakava) warnings.push('Ei leitud <strong>tegevus- või ajakava</strong>.');
    if (!checks.testimine) warnings.push('Ei leitud <strong>testimise</strong> kirjeldust (kriteerium B.3.3).');
    if (!checks.paigaldus) warnings.push('Ei leitud <strong>juurutamise/paigaldamise</strong> kirjeldust (kriteerium B.3.2).');
    if (!checks.turvalisus) warnings.push('Ei leitud <strong>infoturbe</strong> või turvatestide mainimist (kriteerium B.3.12).');
    if (!checks.edasiarendus) warnings.push('Ei leitud <strong>edasiarendusvõimaluste</strong> kirjeldust.');
    if (!checks.eneseanalüüs) warnings.push('Puudub <strong>eneseanalüüs</strong>.');
    if (!checks.terminoloogia) warnings.push('Ei leitud <strong>ingliskeelseid termineid</strong> sulgudes. Nõutud erialane terminoloogia!');
    if (!checks.tabel) warnings.push('Ei leitud <strong>tabeleid ega jooniseid</strong>. Kasuta visualiseerimist!');

    if (sections.sissejuhatus) positives.push('Sissejuhatus on olemas.');
    if (sections.kokkuvote) positives.push('Kokkuvõte on olemas.');
    if (sections.summary) positives.push('Ingliskeelne summary on olemas.');
    if (sections.allikad && sourceCount >= 5) positives.push(`Allikate loetelu on olemas (~${sourceCount} allikat).`);
    if (sections.autentsus) positives.push('Autentsuse deklaratsioon on olemas.');
    if (checks.eesmark) positives.push('Töö eesmärk on sõnastatud.');
    if (checks.testimine) positives.push('Testimine on kirjeldatud.');
    if (checks.paigaldus) positives.push('Juurutamine/paigaldamine on kirjeldatud.');
    if (checks.turvalisus) positives.push('Infoturbe aspektid on käsitletud.');
    if (checks.edasiarendus) positives.push('Edasiarendusvõimalused on kirjeldatud.');
    if (checks.klient) positives.push('Klient/sihtgrupp on defineeritud.');
    if (checks.ajakava) positives.push('Tegevus- või ajakava on olemas.');
    if (estimatedPages >= 20 && estimatedPages <= 35) positives.push(`Töömahu hinnang (~${estimatedPages} lk) jääb soovituslikku vahemikku.`);
    if (mentionsAI && hasAIDecl) positives.push('TI kasutamine on deklareeritud.');

    return { critical, warnings, positives, estimatedPages, sourceCount, sections, checks };
}

function renderAnalysisResults(r) {
    if (r.error) {
        return `<div class="card"><div class="alert alert-warning">${r.error}</div></div>`;
    }

    const critHtml = r.critical.length ? r.critical.map(i => `<div class="alert alert-danger" style="background:#fee2e2;color:#991b1b;border:1px solid #fecaca;">🔴 ${i}</div>`).join('') : '<div class="alert alert-success">✅ Kriitilisi puudusi ei leitud!</div>';

    const warnHtml = r.warnings.length ? r.warnings.map(i => `<div class="alert alert-warning">🟡 ${i}</div>`).join('') : '<div class="alert alert-success">✅ Tähelepanekuid ei ole!</div>';

    const posHtml = r.positives.length ? r.positives.map(i => `<div class="alert alert-success">🟢 ${i}</div>`).join('') : '';

    return `
        <div class="grid grid-2">
            <div class="card">
                <h3>📊 Analüüsi tulemused</h3>
                <div class="stat-value">${r.estimatedPages}</div>
                <div class="stat-label">Hinnanguline lehekülgede arv</div>
                <div class="stat-value" style="margin-top:12px;">${r.sourceCount}</div>
                <div class="stat-label">Tuvastatud allikaid</div>
            </div>
            <div class="card">
                <h3>📋 Struktuuri kontroll</h3>
                ${Object.entries(r.sections).map(([name, found]) => `
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${found ? 'var(--success)' : 'var(--danger)'}"></div>
                        <span style="flex:1;text-transform:capitalize;">${name}</span>
                        <span style="font-weight:700;color:${found ? 'var(--success)' : 'var(--danger)'}">${found ? 'OK' : 'Puudub'}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="card mt-2">
            <h3>🔴 Kriitilised puudused (${r.critical.length})</h3>
            ${critHtml}
        </div>

        <div class="card mt-2">
            <h3>🟡 Tähelepanekud (${r.warnings.length})</h3>
            ${warnHtml}
        </div>

        ${posHtml ? `
        <div class="card mt-2">
            <h3>🟢 Positiivsed (${r.positives.length})</h3>
            ${posHtml}
        </div>` : ''}
    `;
}

// ----- Juhend -----
function renderGuide() {
    return `
        <div class="card mb-2">
            <h3>📖 Kuidas seda rakendust kasutada?</h3>
            <div class="alert alert-info">
                Kõik andmed salvestuvad <strong>automaatselt</strong> brauserisse. Saad rakenduse sulgeda ja hiljem uuesti avada – midagi ei kao. Kui vahetad arvutit, kasuta paremas ülanurgas <strong>Expordi / Impordi</strong> nuppe.
            </div>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <h3><span class="icon">1️⃣</span> Planeerimine</h3>
                <ul class="checklist">
                    <li><strong>📅 Ajakava</strong> – vaata tähtpäevi ja märgi tehtud etapid</li>
                    <li><strong>📋 Struktuur</strong> – planeeri dokumendi osad ja märgi, mis on valmis</li>
                    <li><strong>🎯 Kompetentsid</strong> – mõtle läbi, milliseid B.3 kompetentse su töö tõendab</li>
                </ul>
            </div>
            <div class="card">
                <h3><span class="icon">2️⃣</span> Kirjutamise ajal</h3>
                <ul class="checklist">
                    <li><strong>⏱️ Tunniarvestus</strong> – logi regulaarselt tunde (eesmärk 156h)</li>
                    <li><strong>🤖 TI Kasutamine</strong> – kui kasutad AI-d, dokumenteeri see kohe</li>
                    <li><strong>✅ Hindamiskriteeriumid</strong> – vaata, kas su töö vastab kõigile 10 kriteeriumile</li>
                </ul>
            </div>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <h3><span class="icon">3️⃣</span> Enne esitamist</h3>
                <ul class="checklist">
                    <li><strong>🔍 Ülevaatus</strong> – kleepi valmis töö tekst ja vaata, mis puudu on</li>
                    <li><strong>📝 Vormistus</strong> – mine läbi VIKK vormistusnõuete nimekiri</li>
                    <li><strong>🎓 Kaitsmine</strong> – harjuta kõnet (max 8 min) ja tee märked</li>
                </ul>
            </div>
            <div class="card">
                <h3><span class="icon">4️⃣</span> Nipid</h3>
                <ul class="checklist">
                    <li>Kõik muudatused salvestuvad <strong>automaatselt</strong></li>
                    <li>Andmete varundamiseks kasuta <strong>Expordi</strong> nuppu</li>
                    <li>Rakendus töötab ilma internettita</li>
                    <li>Kasuta brauseris <strong>Chrome, Edge või Firefox</strong></li>
                </ul>
            </div>
        </div>

        <div class="card mt-2">
            <h3>📊 Menüüde selgitus</h3>
            <table>
                <tr><th>Ikoon</th><th>Nimi</th><th>Mida teeb?</th></tr>
                <tr><td>📊</td><td>Ülevaade</td><td>Progress, tunnid, päevad kaitsmiseni, kriteeriumite kiirülevaade</td></tr>
                <tr><td>📅</td><td>Ajakava</td><td>6 tähtpäeva 2027/28 – märgi tehtud ja jälgi, mitu päeva jäänud</td></tr>
                <tr><td>📋</td><td>Struktuur</td><td>11 nõutud dokumendi osa – kohustuslikud ja valikulised</td></tr>
                <tr><td>✅</td><td>Hindamiskriteeriumid</td><td>10 kriteeriumit skaalal 1–5 – veendu, et kõik on miinimumtasemel</td></tr>
                <tr><td>🎯</td><td>Kompetentsid</td><td>12 kompetentsi (B.3.1–B.3.12) tegevusnäitajatega</td></tr>
                <tr><td>📝</td><td>Vormistus</td><td>22 VIKK vormistusnõuet – A4, fondid, viitamine, tabelid jne</td></tr>
                <tr><td>⏱️</td><td>Tunniarvestus</td><td>156 tunni logimine kuupäeva, tundide ja kirjeldusega</td></tr>
                <tr><td>🤖</td><td>TI Kasutamine</td><td>TI kasutamise 5 nõuet + deklaratsiooni tekstikast</td></tr>
                <tr><td>🎓</td><td>Kaitsmine</td><td>Kaitsekõne 8-osaline struktuur + 11 esinemisnõuannet</td></tr>
                <tr><td>🔍</td><td>Ülevaatus</td><td>Kleebi töö tekst – süsteem leiab puudused ja annab soovitusi</td></tr>
                <tr><td>🧠</td><td>AI Analüüs</td><td>Kasuta Google Gemini või OpenAI-d töö sügavamaks hindamiseks skaalal 0–30</td></tr>
            </table>
        </div>

        <div class="card mt-2">
            <h3>🔴 Kriitilised meelespead</h3>
            <div class="alert alert-danger">Töö maht peab olema <strong>vähemalt 156 tundi</strong></div>
            <div class="alert alert-danger">Allikaid peab olema <strong>vähemalt 5</strong> (Wikipedia ja AI ei loe)</div>
            <div class="alert alert-danger">Kõik 10 hindamiskriteeriumit peavad olema täidetud <strong>vähemalt miinimumtasemel</strong></div>
            <div class="alert alert-danger">TI kasutamine peab olema <strong>dokumenteeritud</strong> töös</div>
            <div class="alert alert-danger">Töö esitatakse <strong>PDF-ina</strong>, praktiline osa <strong>.zip</strong> konteineris</div>
            <div class="alert alert-danger">Kaitsmise kuupäev: <strong>03.06.2028</strong></div>
        </div>
    `;
}

// ==================== AI ANALÜÜS ====================

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderAIAnalysis() {
    return `
        <div class="card mb-2">
            <h3>🧠 AI-põhine eksamitöö analüüs</h3>
            <div class="alert alert-info">
                <strong>Tähelepanu!</strong> See funktsioon saadab sinu teksti Google Gemini või OpenAI serverisse analüüsimiseks. Ära sisesta tundlikku infot. Tulemus põhineb AI mudeli hinnangul – see ei asenda juhendaja või retsensendi otsust.
            </div>
            <div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;flex-wrap:wrap;">
                <div>
                    <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px;">Teenusepakkuja</label>
                    <select id="ai-provider" style="padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;background:var(--surface);color:var(--text);font-family:inherit;"
                        onchange="state.aiProvider=this.value;localStorage.setItem('ai_provider',this.value);">
                        <option value="gemini" ${state.aiProvider === 'gemini' ? 'selected' : ''}>Google Gemini (tasuta)</option>
                        <option value="openai" ${state.aiProvider === 'openai' ? 'selected' : ''}>OpenAI GPT-4o-mini</option>
                    </select>
                </div>
                <div style="flex:1;min-width:200px;">
                    <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px;">API URL (valikuline)</label>
                    <input type="text" id="ai-api-url" placeholder="/api/analyze" value="${state.aiApiUrl || ''}"
                        style="width:100%;padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;background:var(--surface);color:var(--text);font-family:inherit;"
                        onchange="state.aiApiUrl=this.value;localStorage.setItem('ai_api_url',this.value);">
                </div>
            </div>
            <textarea class="ai-textarea" id="ai-thesis-input" style="min-height:300px;" placeholder="Kleebi siia oma eksamitöö kogu tekst (min 100 tähemärki)...">${state.lastThesis || ''}</textarea>
            <div class="mt-2" style="display:flex;gap:10px;flex-wrap:wrap;">
                <button class="btn btn-success" onclick="analyzeWithAI()">🧠 Analüüsi AI-ga</button>
                <button class="btn btn-secondary" onclick="loadAIDemo()">Proovi demoga</button>
                <button class="btn btn-secondary" onclick="clearAIAnalysis()">Tühjenda</button>
            </div>
            <div id="ai-loading" style="display:none;margin-top:16px;" class="alert alert-info">
                ⏳ Analüüsin tööd. See võib võtta 10–30 sekundit...
            </div>
        </div>
        <div id="ai-results"></div>
    `;
}

async function analyzeWithAI() {
    const text = document.getElementById('ai-thesis-input').value;
    const provider = document.getElementById('ai-provider').value;
    const apiUrl = document.getElementById('ai-api-url').value.trim();

    if (!text || text.trim().length < 100) {
        alert('Liiga lühike tekst. Eksamitöö peab sisaldama rohkem kui 100 tähemärki.');
        return;
    }

    state.lastThesis = text;
    state.aiProvider = provider;
    state.aiApiUrl = apiUrl;
    localStorage.setItem('ai_provider', provider);
    localStorage.setItem('ai_api_url', apiUrl);
    saveState();

    const loading = document.getElementById('ai-loading');
    const results = document.getElementById('ai-results');
    loading.style.display = 'block';
    results.innerHTML = '';

    try {
        const url = (apiUrl || '/api/analyze') + '?provider=' + provider;
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text.trim(), provider })
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || 'Serveri viga ' + res.status);
        }

        state.aiAnalysisResult = data;
        saveState();
        results.innerHTML = renderAIResults(data);
    } catch (err) {
        console.error('AI analüüsi viga:', err);
        results.innerHTML = `<div class="card"><div class="alert alert-danger">❌ Viga: ${escapeHtml(err.message)}<br><br><strong>Näpunäide:</strong> Kui backend pole saadaval, kliki <em>Proovi demoga</em> nuppu, et testida kasutajaliidest. Kontrolli ka, kas Vercel keskkonnamuutujad (GEMINI_API_KEY või OPENAI_API_KEY) on seatud.</div></div>`;
    } finally {
        loading.style.display = 'none';
    }
}

function clearAIAnalysis() {
    document.getElementById('ai-thesis-input').value = '';
    document.getElementById('ai-results').innerHTML = '';
    state.aiAnalysisResult = null;
    state.lastThesis = '';
    saveState();
}

function renderAIResults(r) {
    if (!r || r.error) {
        return `<div class="card"><div class="alert alert-danger">❌ ${escapeHtml(r?.error || 'Tundmatu viga')}</div></div>`;
    }

    const overall = r.overall || { score: 0, maxScore: 30, percentage: 0, verdict: 'Ei saanud hinnangut', summary: '' };
    const criteria = r.criteria || [];
    const structure = r.structure || [];
    const formatting = r.formatting || [];
    const missing = r.missing || [];
    const suggestions = r.suggestions || [];

    const scoreColor = overall.percentage >= 70 ? 'var(--success)' : overall.percentage >= 50 ? 'var(--warning)' : 'var(--danger)';

    let html = `
        <div class="grid grid-2 mb-2">
            <div class="card">
                <h3>📊 Üldhinnang</h3>
                <div class="stat-value" style="color:${scoreColor};font-size:48px;">${overall.score}/${overall.maxScore}</div>
                <div class="stat-label">${overall.percentage}% – ${escapeHtml(overall.verdict)}</div>
                <p style="margin-top:12px;font-size:14px;color:var(--text-muted);">${escapeHtml(overall.summary)}</p>
            </div>
            <div class="card">
                <h3>📋 Kiirülevaade</h3>
                <div style="display:flex;flex-direction:column;gap:8px;">
                    <div style="display:flex;align-items:center;gap:8px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${criteria.length >= 10 ? 'var(--success)' : 'var(--warning)'}"></div>
                        <span>Kriteeriumid: ${criteria.length}/10</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${structure.length >= 8 ? 'var(--success)' : 'var(--warning)'}"></div>
                        <span>Struktuuriosad: ${structure.length}</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${missing.length === 0 ? 'var(--success)' : 'var(--danger)'}"></div>
                        <span>Puudujääke: ${missing.length}</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${suggestions.length > 0 ? 'var(--success)' : 'var(--warning)'}"></div>
                        <span>Soovitusi: ${suggestions.length}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (criteria.length > 0) {
        html += `
            <div class="card mb-2">
                <h3>✅ Hindamiskriteeriumid</h3>
                <div style="display:flex;flex-direction:column;gap:10px;">
                    ${criteria.map(c => {
                        const pct = (c.score / c.maxScore) * 100;
                        const color = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
                        return `
                            <div style="padding:12px;border:1px solid var(--border);border-radius:8px;">
                                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                                    <span style="font-weight:600;font-size:14px;">${c.id}. ${escapeHtml(c.name)}</span>
                                    <span style="font-weight:700;color:${color};">${c.score}/${c.maxScore}</span>
                                </div>
                                <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden;">
                                    <div style="height:100%;width:${pct}%;background:${color};border-radius:3px;transition:width 0.4s;"></div>
                                </div>
                                <p style="margin-top:6px;font-size:13px;color:var(--text-muted);">${escapeHtml(c.comment || '')}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    if (structure.length > 0) {
        html += `
            <div class="card mb-2">
                <h3>📋 Struktuuri kontroll</h3>
                ${structure.map(s => `
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${s.present ? 'var(--success)' : 'var(--danger)'}"></div>
                        <span style="flex:1;">${escapeHtml(s.name)}</span>
                        <span style="font-weight:700;color:${s.present ? 'var(--success)' : 'var(--danger)'}">${s.present ? 'OK' : 'Puudub'}</span>
                    </div>
                    ${s.comment ? `<p style="margin-left:18px;font-size:12px;color:var(--text-muted);margin-bottom:8px;">${escapeHtml(s.comment)}</p>` : ''}
                `).join('')}
            </div>
        `;
    }

    if (formatting.length > 0) {
        html += `
            <div class="card mb-2">
                <h3>📝 Vormistuse kontroll</h3>
                ${formatting.map(f => `
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:13px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:${f.ok ? 'var(--success)' : f.ok === false ? 'var(--danger)' : 'var(--warning)'}"></div>
                        <span style="flex:1;">${escapeHtml(f.name)}</span>
                        <span style="font-weight:700;color:${f.ok ? 'var(--success)' : f.ok === false ? 'var(--danger)' : 'var(--warning)'}">${f.ok ? 'OK' : f.ok === false ? 'Viga' : '?'}</span>
                    </div>
                    ${f.comment ? `<p style="margin-left:18px;font-size:12px;color:var(--text-muted);margin-bottom:8px;">${escapeHtml(f.comment)}</p>` : ''}
                `).join('')}
            </div>
        `;
    }

    if (missing.length > 0) {
        html += `
            <div class="card mb-2">
                <h3>🔴 Puudujäägid (${missing.length})</h3>
                ${missing.map(m => `<div class="alert alert-danger" style="margin-bottom:8px;padding:10px 14px;">${escapeHtml(m)}</div>`).join('')}
            </div>
        `;
    }

    if (suggestions.length > 0) {
        html += `
            <div class="card mb-2">
                <h3>💡 Soovitused parandamiseks (${suggestions.length})</h3>
                ${suggestions.map(s => `<div class="alert alert-success" style="margin-bottom:8px;padding:10px 14px;">${escapeHtml(s)}</div>`).join('')}
            </div>
        `;
    }

    return html;
}

function loadAIDemo() {
    const demoResult = {
        overall: {
            score: 21,
            maxScore: 30,
            percentage: 70,
            verdict: 'Hea töö, vajab täiendamist',
            summary: 'Töö on hästi struktureeritud ja praktiline lahendus on toimiv. Puudu on mõned vormistusnõuded ja allikate arv võiks olla suurem.'
        },
        criteria: [
            { id: 1, name: 'Vastavus teemale ja erialale', score: 3, maxScore: 3, comment: 'Töö on selgelt seotud arvutisüsteemide haldamisega.' },
            { id: 2, name: 'Praktiline kasutatavus', score: 3, maxScore: 3, comment: 'Konkreetne sihtgrupp ja reaalne vajadus on defineeritud.' },
            { id: 3, name: 'Töö maht, vahendid ja võtted', score: 2, maxScore: 3, comment: 'Maht on piisav, kuid ajakulu dokumenteerimine võiks olla detailsam.' },
            { id: 4, name: 'Teoreetilise osa sisu ja vormistus', score: 2, maxScore: 3, comment: 'Hea struktuur, kuid mõned viited puuduvad.' },
            { id: 5, name: 'Erialane terminoloogia ja keelekasutus', score: 2, maxScore: 3, comment: 'Terminoloogia on enamjaolt korrektne.' },
            { id: 6, name: 'Kasutatud allikate loetelu', score: 1, maxScore: 3, comment: 'Allikaid on ainult 4, nõutud on vähemalt 5.' },
            { id: 7, name: 'Praktilise lahenduse kvaliteet', score: 3, maxScore: 3, comment: 'Lahendus on demonstreeritud ja testitud.' },
            { id: 8, name: 'Jätkusuutlikkus ja edasiarendamine', score: 2, maxScore: 3, comment: 'Edasiarendusvõimalused on kirjeldatud.' },
            { id: 9, name: 'Retsensendi arvamus', score: 2, maxScore: 3, comment: 'Retsensent on eriala spetsialist, kuid vastused võiksid olla pikemad.' },
            { id: 10, name: 'Töö kaitsmine', score: 1, maxScore: 3, comment: 'Kaitsmise ettevalmistus on kirjeldatud napilt.' }
        ],
        structure: [
            { name: 'Tiitelleht', present: true, comment: '' },
            { name: 'Autentsuse kinnitus', present: true, comment: '' },
            { name: 'Sisukord', present: true, comment: '' },
            { name: 'Mõistete loetelu', present: false, comment: 'Soovitatav lühikese loeteluna.' },
            { name: 'Sissejuhatus', present: true, comment: '' },
            { name: 'Teoreetiline osa', present: true, comment: '' },
            { name: 'Praktiline osa', present: true, comment: '' },
            { name: 'Kokkuvõte', present: true, comment: '' },
            { name: 'Allikate loetelu', present: true, comment: '' },
            { name: 'Lisad', present: false, comment: '' },
            { name: 'Summary', present: true, comment: '' }
        ],
        formatting: [
            { name: 'A4, ühepoolselt', ok: true, comment: '' },
            { name: 'Times New Roman 12pt', ok: true, comment: '' },
            { name: 'Reavahe 1,5', ok: false, comment: 'Mõnel lehel on reavahe 1,15.' },
            { name: 'Rööpjoondus', ok: true, comment: '' },
            { name: 'Korrektsed veerised', ok: true, comment: '' },
            { name: 'APA viitamine', ok: false, comment: 'Viitamistüüp on ebatäpne.' }
        ],
        missing: [
            'Allikaid on liiga vähe (4/5).',
            'Mõistete loetelu puudub.',
            'Kaitsmise ettevalmistust on kirjeldatud napilt.'
        ],
        suggestions: [
            'Lisa vähemalt 1 allikas juurde.',
            'Lisa lühike mõistete loetelu.',
            'Kirjelda kaitsmise ettevalmistust detailsemalt.',
            'Kontrolli, et kõikjal oleks reavahe 1,5.',
            'Paranda viitamist APA formaadile vastavaks.'
        ]
    };

    state.aiAnalysisResult = demoResult;
    saveState();
    document.getElementById('ai-results').innerHTML = renderAIResults(demoResult);
}

// ==================== KÄIVITAMINE ====================
document.addEventListener('DOMContentLoaded', init);
