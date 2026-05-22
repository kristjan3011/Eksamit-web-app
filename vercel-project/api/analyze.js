/**
 * VIKK Eksamitöö AI Analüüs
 * Toetab Google Gemini ja OpenAI (ChatGPT)
 *
 * Keskkonnamuutujad: GEMINI_API_KEY, OPENAI_API_KEY
 */

const SYSTEM_PROMPT = `Sa oled Viljandi Kutseõppekeskuse (VIKK) IT-süsteemide nooremspetsialisti (tase 4) eksamitöö ekspert-hindaja.
Analüüsi õpilase eksamitööd nelja ametliku dokumendi põhjal:
1. VIKK õpilaste kirjalike tööde koostamise ja vormistamise juhend
2. Hindamisstandard / Eksamitöö hindamiskriteeriumid
3. IS (Infotehnoloogia süsteemide) eksamitöö juhend
4. Kutsekoda IT-süsteemide nooremspetsialisti kompetentsi tabel (kutsestandard, tase 4)

HINDAMISKRITEERIUMID (hinda igaühte skaalal 0-3, kus 0=puudub, 1=osaliselt, 2=miinimum täidetud, 3=üle miinimumi):
1. Vastavus teemale ja erialale – töö seotud arvutisüsteemide ja -taristu haldamisega
2. Praktiline kasutatavus – konkreetne sihtgrupp/klient, reaalne vajadus
3. Töö maht, vahendid ja võtted – min 156 tundi täiskutse puhul, sobivad vahendid
4. Teoreetilise osa sisu ja vormistus – loogiline struktuur, vormistus nõuetele vastav
5. Erialane terminoloogia ja keelekasutus – arusaadav, dokumenteerimine min nõuetele
6. Kasutatud allikate loetelu – min 5 asjakohast allikat (Wikipedia ja AI ei sobi)
7. Praktilise lahenduse kvaliteet – demonstreeritud, testitud, parimad praktikad
8. Jätkusuutlikkus ja edasiarendamine – vastavus kaasaegsetele tehnoloogiatele, arendusvõimalused
9. Retsensendi arvamus – retsensent eriala spetsialist
10. Töö kaitsmine – oskab selgitada lahendust ja vastata küsimustele

STRUKTUURI KONTROLL (märkiga present=true/false):
- Tiitelleht (kool, eriala, autor, pealkiri SUURTÄHTEDEGA, töö liik, juhendaja, koht+aasta)
- Autentsuse kinnitamise leht
- Sisukord (automaatne)
- Mõistete ja lühendite loetelu (vajadusel)
- Sissejuhatus (~1 lk, teema põhjendus, eesmärk, allikad, ülesehitus; EI tooda tulemusi)
- Teoreetiline osa (20-30 lk, max 35 lk + lisad)
- Praktiline osa (testitud, töötav)
- Kokkuvõte (max 1 lk, ei too uut infot)
- Kasutatud allikate loetelu (min 5)
- Lisad (vajadusel, iga lisa uuelt lehelt)
- Summary (ingliskeelne, max 1 lk, ei ole otsetõlge)

VORMISTUS (märkida ok=true/false või unknown):
- A4, ühepoolselt
- Times New Roman 12pt (põhitekst)
- Pealkiri 1: 16pt paks SUURTÄHED
- Pealkiri 2: 14pt paks kaldkiri
- Reavahe 1,5
- Vasak veeris 3cm, parem 1,5cm, üla/all 2,5cm
- Rööpjoondus
- Leheküljenumbrid allserva keskel
- Koodiread: Courier New / Consolas
- APA viitamine tekstis

OSAKUTSETE MIINIMUMMAHUTUSED:
- Kasutajatoe tehnik: 40h
- IT-tehnik: 40h
- IT-haldustehnik: 76h
- Täiskutse: 156h

ANALÜÜSI SAMMUD:
1. Loe töö tekst läbi.
2. Hinda 10 kriteeriumit ja struktuuri/vormistust.
3. Arvuta üldskoor (0-30) ja protsent.
4. Kirjuta 3-5 konkreetset soovitust parandamiseks.
5. Tee nimekiri kõige olulisematest puudujääkidest.

VASTA AINULT JSON-FORMAADIS. Ära lisa markdown ega selgitusi väljaspool JSON-i.
Vastuse struktuur peab olema täpselt selline:

{
  "overall": {
    "score": 0,
    "maxScore": 30,
    "percentage": 0,
    "verdict": "Sõnaline hinnang (nt Hea töö, vajab täiendamist, Nõrk jne)",
    "summary": "Lühikokkuvõte 2-3 lauses"
  },
  "criteria": [
    { "id": 1, "name": "Vastavus teemale ja erialale", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 2, "name": "Praktiline kasutatavus", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 3, "name": "Töö maht, vahendid ja võtted", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 4, "name": "Teoreetilise osa sisu ja vormistus", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 5, "name": "Erialane terminoloogia ja keelekasutus", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 6, "name": "Kasutatud allikate loetelu", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 7, "name": "Praktilise lahenduse kvaliteet", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 8, "name": "Jätkusuutlikkus ja edasiarendamine", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 9, "name": "Retsensendi arvamus", "score": 0, "maxScore": 3, "comment": "Põhjendus" },
    { "id": 10, "name": "Töö kaitsmine", "score": 0, "maxScore": 3, "comment": "Põhjendus" }
  ],
  "structure": [
    { "name": "Tiitelleht", "present": true, "comment": "..." },
    { "name": "Autentsuse kinnitus", "present": true, "comment": "..." },
    { "name": "Sisukord", "present": true, "comment": "..." },
    { "name": "Mõistete loetelu", "present": false, "comment": "..." },
    { "name": "Sissejuhatus", "present": true, "comment": "..." },
    { "name": "Teoreetiline osa", "present": true, "comment": "..." },
    { "name": "Praktiline osa", "present": true, "comment": "..." },
    { "name": "Kokkuvõte", "present": true, "comment": "..." },
    { "name": "Allikate loetelu", "present": true, "comment": "..." },
    { "name": "Lisad", "present": false, "comment": "..." },
    { "name": "Summary", "present": true, "comment": "..." }
  ],
  "formatting": [
    { "name": "A4, ühepoolselt", "ok": true, "comment": "" },
    { "name": "Times New Roman 12pt", "ok": true, "comment": "" },
    { "name": "Reavahe 1,5", "ok": true, "comment": "" },
    { "name": "Rööpjoondus", "ok": true, "comment": "" },
    { "name": "Korrektsed veerised", "ok": false, "comment": "" },
    { "name": "APA viitamine", "ok": true, "comment": "" }
  ],
  "missing": ["Näide: Summary puudub", "Näide: Allikaid ainult 3"],
  "suggestions": ["Näide: Lisa konkreetsem sihtgrupp", "Näide: Testi praktilist lahendust põhjalikumalt"]
}`;

function parseJsonFromText(text) {
  try {
    return JSON.parse(text);
  } catch (_) {}

  const mdMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (mdMatch) {
    try {
      return JSON.parse(mdMatch[1]);
    } catch (_) {}
  }

  const first = text.indexOf('{');
  const last = text.lastIndexOf('}');
  if (first !== -1 && last !== -1 && last > first) {
    try {
      return JSON.parse(text.slice(first, last + 1));
    } catch (_) {}
  }

  throw new Error('Ei suutnud AI vastusest JSON-i parsida');
}

function normalizeResult(result) {
  if (!result.overall) {
    result.overall = { score: 0, maxScore: 30, percentage: 0, verdict: 'Ei saanud hinnangut', summary: '' };
  }
  if (!Array.isArray(result.criteria)) result.criteria = [];
  if (!Array.isArray(result.structure)) result.structure = [];
  if (!Array.isArray(result.formatting)) result.formatting = [];
  if (!Array.isArray(result.missing)) result.missing = [];
  if (!Array.isArray(result.suggestions)) result.suggestions = [];
  return result;
}

async function callGemini(apiKey, text) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: SYSTEM_PROMPT + '\n\n--- EKSAMITÖÖ TEKST ---\n\n' + text }] }],
      generationConfig: { temperature: 0.15, maxOutputTokens: 4096 }
    })
  });

  const data = await res.json();
  if (!res.ok) {
    const msg = data.error?.message || JSON.stringify(data);
    throw new Error(`Gemini API viga (${res.status}): ${msg}`);
  }

  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error('Gemini API vastus oli tühi');
  return normalizeResult(parseJsonFromText(rawText));
}

async function callOpenAI(apiKey, text) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: '--- EKSAMITÖÖ TEKST ---\n\n' + text }
      ],
      temperature: 0.15,
      max_tokens: 4096
    })
  });

  const data = await res.json();
  if (!res.ok) {
    const msg = data.error?.message || data.message || JSON.stringify(data);
    throw new Error(`OpenAI API viga (${res.status}): ${msg}`);
  }

  const rawText = data.choices?.[0]?.message?.content;
  if (!rawText) throw new Error('OpenAI API vastus oli tühi');
  return normalizeResult(parseJsonFromText(rawText));
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Lubatud ainult POST päringud' });
  }

  let body = '';
  try {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    body = JSON.parse(Buffer.concat(chunks).toString('utf-8'));
  } catch {
    return res.status(400).json({ error: 'Vigane JSON keha' });
  }

  const { text, provider } = body || {};

  if (!text || typeof text !== 'string' || text.trim().length < 100) {
    return res.status(400).json({
      error: 'Liiga lühike tekst. Eksamitöö peab sisaldama rohkem kui 100 tähemärki.'
    });
  }

  const selectedProvider = provider || 'gemini';

  try {
    let result;
    if (selectedProvider === 'openai') {
      const apiKey = (process.env.OPENAI_API_KEY || '').trim();
      if (!apiKey) {
        return res.status(500).json({ error: 'OPENAI_API_KEY keskkonnamuutuja on seadmata. Lisa see Vercel dashboardi.' });
      }
      result = await callOpenAI(apiKey, text);
    } else {
      const apiKey = (process.env.GEMINI_API_KEY || '').trim();
      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY keskkonnamuutuja on seadmata. Lisa see Vercel dashboardi.' });
      }
      result = await callGemini(apiKey, text);
    }
    res.status(200).json(result);
  } catch (err) {
    console.error('AI analüüsi viga:', err);
    res.status(502).json({ error: err.message || 'Serveri sisemine viga' });
  }
}
