# Eksamitöö AI Analüüsi Rakendus

VIKK IT-süsteemide nooremspetsialisti (tase 4) eksamitöö planeerimise ja AI-hindamise veebirakendus.

## Arhitektuur

```
vercel-project/               ← Deploy'itav kaust
├── index.html                ← Frontend (Eksamitöö Abirakendus)
├── api/
│   └── analyze.js            ← Google Gemini serverless API
├── package.json
├── vercel.json               ← CORS + routing
└── README.md

Eksamiabi/                    ← Ametlikud dokumendid (repo juures)
├── Eksamitöö juhend 2025_26 IS.pdf
├── Hindamisstandard_IT-susteemide_nooremspetsialist-2026.docx
├── VIKK_opilaste kirjalike toode koostamine ja vormistamine_juhend 2025_2.pdf
└── it-susteemide_nooremspetsialist_tase_4.4.pdf
```

- **Frontend:** Staatiline HTML/CSS/JS (localStorage, ühelehelised vaated)
- **Backend:** Vercel Serverless Function (`/api/analyze`) → Google Gemini 1.5 Flash

---

## Eeltingimused

- [Node.js](https://nodejs.org/) 18+ (soovitatavalt LTS)
- [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)
- Google Gemini API võti (vt allpool)

---

## 1. Google Gemini API võtme hankimine

1. Mine [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Kliki **Create API key**
3. Kopeeri võti (`AIza...`)

> **Tähtis:** Ära jaga võtit kunagi frontend-koodis ega GitHubis. Seda kasutatakse **ainult** Verceli keskkonnamuutujana.

---

## 2. Projekti seadistamine

```bash
# Mine projekti kausta
cd vercel-project

# Logi Vercelisse (esmakordsel kasutamisel)
vercel login

# Seosta projekt Vercel-ga (loob .vercel kausta)
vercel
```

---

## 3. Keskkonnamuutuja seadmine

Lisa `GEMINI_API_KEY` Verceli keskkonnamuutujatesse:

```bash
cd vercel-project
vercel env add GEMINI_API_KEY
# Vali: Production (ja soovi korral Preview / Development)
# Sisesta oma API võti
```

Või Vercel Dashboard → Project → Settings → Environment Variables.

---

## 4. Deploy

```bash
# Mine deploy'itavasse kausta
cd vercel-project

# Production deploy
vercel --prod
```

Peale deploy'd kuvatakse URL, nt:
```
https://minu-eksamitoo-ai.vercel.app
```

**Rakenduse osad:**
- Frontend avaneb otse: `https://minu-eksamitoo-ai.vercel.app/`
- API endpoint: `https://minu-eksamitoo-ai.vercel.app/api/analyze`

---

## API sisend / väljund

### Päring
```http
POST /api/analyze
Content-Type: application/json

{
  "text": "Eksamitöö kogu tekst siin...",
  "filename": "eksamitoo.docx"
}
```

> `filename` on valikuline – seda kasutatakse vaid AI promptis konteksti andmiseks.

### Vastus (200 OK)
```json
{
  "overall": {
    "score": 22,
    "maxScore": 30,
    "percentage": 73,
    "verdict": "Hea töö, vajab täiendamist",
    "summary": "Töö on üldjoontes korras, kuid puudu on Summary ja allikaid on ainult 3."
  },
  "criteria": [
    { "id": 1, "name": "Vastavus teemale ja erialale", "score": 3, "maxScore": 3, "comment": "..." }
  ],
  "structure": [
    { "name": "Tiitelleht", "present": true, "comment": "" }
  ],
  "formatting": [
    { "name": "Times New Roman 12pt", "ok": true, "comment": "" }
  ],
  "missing": ["Summary puudub", "Allikaid ainult 3"],
  "suggestions": ["Lisa konkreetsem sihtgrupp", "Lisa 2 allikat juurde"]
}
```

### Vead
- `400` – liiga lühike tekst või vigane JSON
- `405` – lubatud on ainult POST
- `500` – `GEMINI_API_KEY` puudub
- `502` – Gemini API tagastas vea

---

## Turvalisus

| Oht | Lahendus |
|-----|----------|
| API võti lekib brauserisse | Võti hoitakse **ainult** Verceli serveripoolel (`process.env`) |
| CORS rünnakud | API aktsepteerib päringuid kõigilt domeenidelt. Tootmises piira `Access-Control-Allow-Origin` oma domeenile kui vaja. |
| Liiga pikk tekst | Gemini 1.5 Flash toetab ~1M tokenit (~700k sõna eesti keeles). Verceli päringu limit on 4.5 MB. |
| Päringute rate limiting | Google Gemini tasuta tier: 15 RPM, 1500 RPD. Kui vaja rohkem, lülitu Google Cloud'ile. |

---

## Kulusid

- **Vercel:** Serverless funktsioonid on tasuta tieris 100 GB-s / kuu (API päringud mahuvad kergesti sisse).
- **Google Gemini 1.5 Flash:** Tasuta tier (ainult API keyga) – 15 päringut/minutis, 1500 päringut/päevas. Piisab klassi suuruseks kasutamiseks.

---

## Arendus

```bash
# Kohalik test (käivitab Verceli dev serveri http://localhost:3000)
cd vercel-project
vercel dev
```

Kohalikus arenduses pead samuti `GEMINI_API_KEY` seadistama:
```bash
cd vercel-project
vercel env pull .env.development.local
```

---

## Autor ja litsents

Projekt loodud VIKK IT-süsteemide nooremspetsialisti eriala eksamitöö raames.
