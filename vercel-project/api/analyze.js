/**
 * VIKK Eksamitöö AI Analüüs — Vercel Serverless Function
 * Asukoht: api/analyze.js  ← PEAB olema api/ kaustas, mitte juurkaustas!
 *
 * Keskkonnamuutujad (Vercel Dashboard → Settings → Environment Variables):
 *   GEMINI_API_KEY   – Google AI Studio tasuta võti
 *   OPENAI_API_KEY   – OpenAI võti (valikuline)
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

VORMISTUS (märkida ok=true/false):
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

VASTA AINULT JSON-FORMAADIS, ilma markdown koodiploki märgeteta. Täpselt selline struktuur:
{
  "overall": { "score": 0, "maxScore": 30, "percentage": 0, "verdict": "...", "summary": "..." },
  "criteria": [
    { "id": 1, "name": "Vastavus teemale ja erialale", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 2, "name": "Praktiline kasutatavus", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 3, "name": "Töö maht, vahendid ja võtted", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 4, "name": "Teoreetilise osa sisu ja vormistus", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 5, "name": "Erialane terminoloogia ja keelekasutus", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 6, "name": "Kasutatud allikate loetelu", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 7, "name": "Praktilise lahenduse kvaliteet", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 8, "name": "Jätkusuutlikkus ja edasiarendamine", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 9, "name": "Retsensendi arvamus", "score": 0, "maxScore": 3, "comment": "..." },
    { "id": 10, "name": "Töö kaitsmine", "score": 0, "maxScore": 3, "comment": "..." }
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
  "missing": ["..."],
  "suggestions": ["..."]
}`;

function parseJsonFromText(text) {
  // 1. Proovi otse
  try { return JSON.parse(text); } catch (_) {}

  // 2. Proovi markdown koodiplokist
  const mdMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (mdMatch) {
    try { return JSON.parse(mdMatch[1]); } catch (_) {}
  }

  // 3. Leia esimene { ja viimane }
  const first = text.indexOf('{');
  const last  = text.lastIndexOf('}');
  if (first !== -1 && last > first) {
    try { return JSON.parse(text.slice(first, last + 1)); } catch (_) {}
  }

  throw new Error('Ei suutnud AI vastusest JSON-i parsida. Proovi uuesti.');
}

function normalizeResult(r) {
  if (!r.overall) r.overall = { score: 0, maxScore: 30, percentage: 0, verdict: 'Ei saanud hinnangut', summary: '' };
  if (!Array.isArray(r.criteria))   r.criteria   = [];
  if (!Array.isArray(r.structure))  r.structure  = [];
  if (!Array.isArray(r.formatting)) r.formatting = [];
  if (!Array.isArray(r.missing))    r.missing    = [];
  if (!Array.isArray(r.suggestions)) r.suggestions = [];
  return r;
}

async function callGemini(apiKey, text) {
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: SYSTEM_PROMPT + '\n\n--- EKSAMITÖÖ TEKST ---\n\n' + text }] }],
      generationConfig: { temperature: 0.15, maxOutputTokens: 4096 }
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Gemini API viga (${res.status}): ${data.error?.message || JSON.stringify(data)}`);
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw) throw new Error('Gemini API vastus oli tühi');
  return normalizeResult(parseJsonFromText(raw));
}

async function callOpenAI(apiKey, text) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
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
  if (!res.ok) throw new Error(`OpenAI API viga (${res.status}): ${data.error?.message || JSON.stringify(data)}`);
  const raw = data.choices?.[0]?.message?.content;
  if (!raw) throw new Error('OpenAI API vastus oli tühi');
  return normalizeResult(parseJsonFromText(raw));
}

export default async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Lubatud ainult POST päringud' });
  }

  // ── Body lugemine ──────────────────────────────────────────────────────────
  // Vercel parsib JSON automaatselt kui Content-Type: application/json
  // req.body on seega juba objekt. Kui pole, loeme käsitsi.
  let body = req.body;
  if (!body || typeof body !== 'object') {
    try {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      body = JSON.parse(Buffer.concat(chunks).toString('utf-8'));
    } catch {
      return res.status(400).json({ error: 'Vigane JSON keha' });
    }
  }

  const { text, provider } = body || {};

  if (!text || typeof text !== 'string' || text.trim().length < 100) {
    return res.status(400).json({ error: 'Liiga lühike tekst (min 100 tähemärki).' });
  }

  // ── AI kutsumine ───────────────────────────────────────────────────────────
  try {
    let result;
    if ((provider || 'gemini') === 'openai') {
      const key = (process.env.OPENAI_API_KEY || '').trim();
      if (!key) return res.status(500).json({ error: 'OPENAI_API_KEY puudub. Lisa see Vercel → Settings → Environment Variables.' });
      result = await callOpenAI(key, text.trim());
    } else {
      const key = (process.env.GEMINI_API_KEY || '').trim();
      if (!key) return res.status(500).json({ error: 'GEMINI_API_KEY puudub. Lisa see Vercel → Settings → Environment Variables.' });
      result = await callGemini(key, text.trim());
    }
    return res.status(200).json(result);
  } catch (err) {
    console.error('AI analüüsi viga:', err);
    return res.status(502).json({ error: err.message || 'Serveri sisemine viga' });
  }
}
