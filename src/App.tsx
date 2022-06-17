import {useState} from 'react';
import {
    Lix,
    OrdTelling,
    LongWords,
    LongSentences,
    LongParagraphs,
    DublicateWords,
    GammelnavskCheck,
    Begrepskatalog,
    Nrkordliste,
} from "./components"
import {ContentContainer, Heading, Alert, Grid, Cell, Accordion, Textarea} from "@navikt/ds-react";
import "@navikt/ds-css";
import './App.css'

export default () => {
    const [value, setValue] = useState("")
    return (
        <div>
            <ContentContainer className="my-6">
                <Grid>
                    <Cell xs={12} sm={7} lg={8}>
                        <Textarea id="checkedText"
                                  className="mb-6"
                                  label="Skriv eller lim inn tekst"
                                  value={value}
                                  onChange={(e) => setValue(e.target.value)}
                                  autoFocus
                        />
                    </Cell>
                    <Cell xs={12} sm={5} lg={4}>
                        <Heading spacing level="2" size="large">
                            Resultater
                        </Heading>
                        {value.length == 0 ? (
                                <Alert variant="info">Du må legge til tekst for å få resultatene.</Alert>) :
                            (
                                <>
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
                                </>
                            )}
                    </Cell>
                </Grid>
            </ContentContainer>
        </div>
    )
}