# Eksamitöö abirakendus

VIKK IT-süsteemide nooremspetsialisti eksamitöö planeerimise ja kontrollimise veebirakendus.

Rakendus töötab ilma välise AI-teenuseta. Tekstianalüüs toimub brauseris lokaalselt ning kasutaja andmed salvestatakse `localStorage`-i.

## Põhifunktsioonid

- eksamitöö teema, eesmärgi ja ülesannete planeerimine;
- peatükkide, allikate ja töötundide haldus;
- ametliku struktuuri, vormistuse ja kompetentside kontrollnimekirjad;
- kaitsekõne, küsimuste ja märkmete ettevalmistus;
- kohalik tekstianalüüs `.txt`, `.docx` ja `.pdf` failidele;
- skannitud PDF-ide lokaalne OCR (eesti ja inglise keele mudeliga);
- andmete eksport ja import JSON-failina.

## Käivitamine

Deploy'itav kaust on `vercel-project`.

```bash
cd vercel-project
vercel dev
```

Verceli deploy:

```bash
vercel --prod
```

Rakendus ei vaja API-võtmeid ega serveripoolset AI-konfiguratsiooni.

## Andmed ja privaatsus

Kasutaja tööandmed jäävad kasutaja brauserisse. Failianalüüsi jaoks laaditakse PDF-i, DOCX-i ja vajadusel OCR-i teegid/mudelid CDN-ist, kuid töö tekst ise jääb brauserisse.

## Ametlikud alusdokumendid

Alusmaterjalid asuvad repo kaustas `Eksamiabi`.
