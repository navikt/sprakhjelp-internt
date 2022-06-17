NAV Språksjekk Internt
================


NAV Språksjekk Internt er en forenklet utgave av [NAV Språksjekk](https://github.com/navikt/spraksjekk). Denne kan legges til i interne løsninger.


---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #researchops.

# Test koden lokalt

1. Last ned koden
2. yarn install
3. yarn dev

# Legg Språksjekken inn i egen løsning

## NPM pakker og CSS
Koden bygger på komponenter fra NAVs Designsystem. For å kjøre dette trenger du:
- @navikt/ds-css
- @navikt/ds-react

Det vil i tillegg være behov for å legge til css koden i App.css.

## Kopier mapper over i ditt prosjekt
NAV Språksjekk er bygget komponentbasert, dette lar deg enkelt plukke og mikse hvilke språksjekk funksjoner som du ønsker.

Kopier over følgende mapper i koden din:
- /components/analysis (inneholder språksjekk komponentene)
- /data (inneholder ordlister i json format)

## Legg til språksjekk i frontend
Språksjekk resultatene vises i <Accordion> elementet. Alt den trenger er {value}, det vil si tekstinnhold som kan analyseres. Du kan f.eks. hente dette fra <teaxtarea> eller <input> element.

```javascript
<Accordion>
    <LongParagraphs content={value}/>
    <LongSentences content={value}/>
    <LongWords content={value}/>
    <DublicateWords content={value}/>
    <GammelnavskCheck content={value}/>
    <Nrkordliste content={value}/>
    <Begrepskatalog content={value}/>
    <Lix content={value}/>
    <OrdTelling content={value}/>
</Accordion>
```


# Språksjekk funksjoner

- Lange ord
- Lange setninger
- Lange paragrafer
- Gjentakelse av like ord etterhverandre (eg. hei hei)
- Ordtelling
- Frekvensordliste
- NRK ordlister (json)
- Gammelnavsk ordsliste (json)
- Begrepskatalogen (http request)
- LIX