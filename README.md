# Drie reizen naar het zuiden — Next.js versie

Museale interactieve touch-wall over drie Belgische zuidpoolexpedities,
omgezet naar een Next.js-project.

## Starten

```bash
npm install
npm run dev
```

Open daarna http://localhost:3000

## Voor productie

```bash
npm run build
npm run start
```

## Projectstructuur

- `app/page.js` — mount de interactieve applicatie
- `app/layout.js` — basislayout, laadt de stijlen
- `app/globals.css` — alle styling
- `lib/bodyHtml.js` — de HTML-structuur van de applicatie
- `lib/scriptCode.js` — alle interactieve logica (routes, kaart, bemanning, dossiers)
- `public/images/` — de kaartafbeelding en papiertexturen

## Noot over de architectuur

De HTML-structuur en interactieve logica zijn bewust behouden zoals ze al
grondig getest waren, in plaats van regel-voor-regel herschreven naar JSX-
componenten. Dit bestand bevat honderden SVG-elementen en tientallen
DOM-interacties; een volledige herschrijving zou veel herhaald testwerk
vergen zonder functioneel voordeel, aangezien de app een vaste, samengestelde
dataset toont zonder backend-koppeling.
