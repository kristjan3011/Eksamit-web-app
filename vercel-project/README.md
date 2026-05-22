# Eksamitöö AI Analüüsi Rakendus

VIKK IT-süsteemide nooremspetsialisti (tase 4) eksamitöö planeerimise ja AI-hindamise veebirakendus.

Toetab kahte AI pakkuja:
- **Google Gemini 1.5 Flash** (soovitatav – tasuta tier Google AI Studio-st)
- **OpenAI GPT-4o Mini** (nõuab OpenAI API võtit)

## Arhitektuur

```
vercel-project/               ← Deploy'itav kaust
├── index.html                ← Frontend (Eksamitöö Abirakendus)
├── api/
│   └── analyze.js            ← Serverless API (Gemini + OpenAI)
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
- **Backend:** Vercel Serverless Function (`/api/analyze`) → Gemini või OpenAI

---

## Eeltingimused

- [Node.js](https://nodejs.org/) 18+ (soovitatavalt LTS)
- [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)
- API võti (vali üks):
  - **Google Gemini** – loo tasuta võti [Google AI Studio](https://aistudio.google.com/app/apikey)
  - **OpenAI** – loo võti [OpenAI Platform](https://platform.openai.com/api-keys) (nõuab laadimist)

---

## 1. API võtme hankimine

### Google Gemini (soovitatav – tasuta)
1. Mine [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Kliki **Create API key**
3. Kopeeri võti (`AIza...`)

### OpenAI GPT-4o Mini
1. Mine [platform.openai.com](https://platform.openai.com/api-keys)
2. Loo uus Secret Key
3. Kopeeri võti (`sk-...`)

> **Tähtis:** API võtit hoia turvaliselt. Ainus õige koht on Verceli keskkonnamuutuja.

---

## 2. Projekti seadistamine

```bash
# Mine projekti kausta
cd vercel-project

# Logi Vercelisse (esmakordsel kasutamisel)
vercel login

# Seosta projekt Vercel-ga
vercel
```

---

## 3. Keskkonnamuutujate seadmine

Lisa **vähemalt üks** järgmistest Verceli keskkonnamuutujatesse:

```bash
cd vercel-project

# Kui kasutad Google Geminit:
vercel env add GEMINI_API_KEY

# KUI kasutad OpenAI-t:
vercel env add OPENAI_API_KEY
```

Või Vercel Dashboard → Project → Settings → Environment Variables.

---

## 4. Deploy

```bash
cd vercel-project
vercel --prod
```

**Rakenduse osad:**
- Frontend: `https://sinu-nimi.vercel.app/`
- API: `https://sinu-nimi.vercel.app/api/analyze`

---

## API sisend / väljund

### Päring
```http
POST /api/analyze
Content-Type: application/json

{
  "text": "Eksamitöö kogu tekst siin...",
  "provider": "gemini",
  "filename": "eksamitoo.docx"
}
```

> `provider` võib olla `"gemini"` või `"openai"`. Kui puudub, kasutatakse Geminit.

### Vastus (200 OK)
```json
{
  "overall": {
    "score": 22,
    "maxScore": 30,
    "percentage": 73,
    "verdict": "Hea töö, vajab täiendamist",
    "summary": "Töö on üldjoontes korras..."
  },
  "criteria": [...],
  "structure": [...],
  "formatting": [...],
  "missing": [...],
  "suggestions": [...]
}
```

---

## Turvalisus

| Oht | Lahendus |
|-----|----------|
| API võti lekib brauserisse | Võti hoitakse **ainult** Verceli serveripoolel |
| CORS rünnakud | API aktsepteerib päringuid kõigilt domeenidelt |
| Liiga pikk tekst | Gemini toetab ~1M tokenit; OpenAI GPT-4o Mini ~128k tokenit |

---

## Kulusid

- **Vercel:** tasuta tier (100 GB-s / kuu)
- **Google Gemini 1.5 Flash:** tasuta tier (15 RPM, 1500 RPD)
- **OpenAI GPT-4o Mini:** odav (~$0.15 / 1M input tokens)

---

## Arendus

```bash
cd vercel-project
vercel dev
```

---

## Autor

Projekt loodud VIKK IT-süsteemide nooremspetsialisti eriala eksamitöö raames.
