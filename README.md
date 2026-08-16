# Eksamitöö abirakendus

VIKK-i IT-süsteemide nooremspetsialisti eksamitöö planeerimise, ettevalmistamise ja enesekontrolli veebirakendus.

Rakendus aitab õppijal koondada eksamitööga seotud eesmärgid, ülesanded, ajakava, allikad, töötunnid, kompetentsid ja kaitsmiseks vajalikud märkmed ühte töövahendisse. Lisaks saab rakenduses kontrollida eksamitöö teksti struktuuri ja olulisemaid sisunõudeid.

## Rakenduse põhimõte

Rakendus on staatiline brauserirakendus. Serveripoolset andmebaasi ega pilvepõhist AI-analüüsi ei kasutata.

- kasutaja sisestatud andmed salvestatakse brauseri `localStorage`-isse;
- tekstianalüüs toimub kasutaja brauseris mustripõhise lokaalse analüüsina;
- `.txt`, `.docx` ja `.pdf` faile saab laadida otse brauserisse;
- skannitud PDF-i korral kasutatakse vajadusel brauseris OCR-i;
- andmeid saab varundada ja taastada JSON-failina;
- rakendus ei vaja API-võtit ega serveripoolset AI-konfiguratsiooni.

## Peamised võimalused

### Planeerimine

- eksamitöö teema, eesmärgi, ülesannete ja sihtrühma kirjeldamine;
- teoreetilise ja praktilise osa kavandamine;
- peatükkide ning alapeatükkide nimekirja koostamine;
- ametlik 2027/28 ajakava ja isiklike tähtaegade jälgimine;
- töötundide logiraamat.

### Nõuete ja kvaliteedi kontroll

- eksamitöö kohustuslike osade kontroll;
- sissejuhatuse põhielementide tuvastamine;
- kokkuvõtte ja ingliskeelse summary olemasolu kontroll;
- allikate arvu ja Wikipedia kasutamise märkamise kontroll;
- B.3.1–B.3.12 kompetentside ning B.2 üldoskuste tekstipõhine kontroll;
- testimise, paigalduse, turvalisuse, kliendi ja edasiarenduse käsitlemise kontroll;
- meeldetuletused autentsusdeklaratsiooni, juhendaja arvamuse, retsensiooni ja digiallkirjade kohta.

Tekstianalüüs annab abistava esmase hinnangu. See ei tõesta automaatselt töö praktilist toimivust, autorsust, tegelikku vormingut ega kaitsmisel näidatavaid oskusi. Fondi, veeriste, reavahe ja leheküljenumbrite kontroll tuleb teha eraldi Wordis või PDF-i vormistusvaates.

### Kaitsmiseks valmistumine

- kaitsekõne punktide koostamine;
- võimalike küsimuste ja vastuste talletamine;
- kompetentside enesehindamine;
- tööpäeviku ja isiklike märkmete pidamine.

## Tekstianalüüs ja OCR

Tekstianalüüsi saab kasutada kolmel viisil:

1. kleepida tekst otse tekstiväljale;
2. laadida `.txt`-fail;
3. laadida `.docx`- või `.pdf`-fail.

DOCX-faili lugemiseks laaditakse vajadusel brauserisse Mammothi teek. PDF-faili lugemiseks kasutatakse PDF.js-i. Kui PDF-ist ei leita piisavalt tekstikihti, renderdatakse leheküljed brauseris piltideks ja käivitatakse Tesseract.js-i OCR eesti ning inglise keele mudeliga.

Faili sisu töödeldakse brauseri mälus. Teegid ja OCR-mudel võivad laadituda CDN-ist; rakendus ei saada kasutaja tööteksti enda serverisse.

## Privaatsus ja turve

Rakenduse Vercel-i seadistus sisaldab järgmisi kaitseid:

- Content Security Policy;
- `X-Frame-Options: DENY`;
- `X-Content-Type-Options: nosniff`;
- piiratud `Access-Control-Allow-Origin` ainult production-origini jaoks;
- `Referrer-Policy` väärtusega `strict-origin-when-cross-origin`;
- `Permissions-Policy` kaamera, mikrofoni ja geolokatsiooni keelamiseks;
- Cross-Origin Opener Policy ja Cross-Origin Resource Policy;
- HSTS ning DNS-prefetch’i keelamine.

Rakenduse turvapäised asuvad failis [`vercel-project/vercel.json`](vercel-project/vercel.json). Turvaseadistus ei asenda kasutaja enda seadme, brauseri ega konto turvalisust.

## Projekti struktuur

```text
.
├── README.md
├── Eksamiabi/
│   ├── Eksamitöö juhend 2025_26 IS.pdf
│   ├── VIKK_opilaste kirjalike toode koostamine ja vormistamine_juhend 2025_2.pdf
│   ├── it-susteemide_nooremspetsialist_tase_4.4.pdf
│   └── Hindamisstandard_IT-susteemide_nooremspetsialist-2026.docx
└── vercel-project/
    ├── index.html
    ├── vercel.json
    ├── package.json
    ├── README.md
    ├── 404.html
    ├── robots.txt
    ├── sitemap.xml
    └── favike.jpg
```

`vercel-project/index.html` sisaldab rakenduse kasutajaliidest, stiile ja lokaalse analüüsi loogikat. `Eksamiabi` kaustas olevad dokumendid on rakenduse sisulise kontrolli alusmaterjalid.

## Käivitamine lokaalselt

Eeldusena on vaja Node.js-i ja Vercel CLI-d.

```bash
cd vercel-project
npm install
npm run dev
```

Seejärel ava Vercel CLI näidatud kohalik aadress. Kuna rakendus on staatiline, saab `index.html`-i kasutada ka lihtsa staatilise veebiserveriga, kuid PDF-i, DOCX-i ja OCR-i testimiseks on soovitatav kasutada HTTP-serverit.

## Deploy Vercelisse

```bash
cd vercel-project
vercel --prod
```

GitHubi `main`-harusse push käivitab ühendatud Vercel-i projektis production-deploy automaatselt.

## Andmete varundamine

Kasuta rakenduse ülaservas nuppe **Ekspordi** ja **Impordi**. Ekspordi fail sisaldab rakenduse `localStorage`-is olevaid andmeid JSON-kujul. Hoia varukoopiat turvalises kohas, sest rakenduse andmed võivad brauseri vahemälu või saidiandmete kustutamisel kaduda.

## Alusdokumendid

Rakenduse nõuete kontroll põhineb repo `Eksamiabi` kaustas olevatel juhenditel ja hindamisstandardil. Need dokumendid on abimaterjalid, mitte automaatse hindamise asendus. Enne esitamist tuleb nõuded üle kontrollida kooli ja juhendaja kõige uuema ametliku info järgi.

## Arendus- ja push-põhimõte

Isikliku projekti töövoog kasutab lihtsuse huvides `main`-haru:

```bash
git add .
git commit -m "Kirjelda muudatust lühidalt"
git push origin main
```

Commit-i juurde võib lisada GitHubis üldise kokkuvõtte, milles kirjeldatakse näiteks turbe täielikku uuendust, rakenduse optimeerimist, OCR-i parandusi või kasutajaliidese muudatusi.
